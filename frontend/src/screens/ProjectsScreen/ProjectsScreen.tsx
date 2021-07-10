import react, { useState } from "react";
import { Block } from "../../uikit/Block/Block";
import { Text } from "../../uikit/Text/Text";

import ReactDom from "react-dom";
 
import "./style.css";
import { CreateProjectPopUp } from "../../uikit/PopUps/CreateProjectPopUp/CreateProjectPopUp";

import { 
    useGetProjectsQuery, 
    useAddProjectMutation, 
    useRemoveProjectMutation, 
    useEditProjMutation,
    useChangeProjectDescrMutation
} from "../../generated/graphql";
import { DeleteProjectPopUp } from "../../uikit/PopUps/DeleteProjectPopUp/DeleteProjectPopUp";
import { Header } from "../../uikit/Header/Header";
import { Footer } from "../../uikit/Footer/Footer";
import { Input } from "../../uikit/Input/Input";
import { ShowCardButton } from "../../uikit/ShowCardButton/ShowCardButton";
import { Navigation } from "../../uikit/Navigation/Navigation";

import {useDispatch, useStore} from "react-redux";

import {setProjectHead} from "../../store/profileReducer";

import {removeProject, addProject, changeProject} from "../../store/ProjectsReducer";

export const ProjectScreen:react.FC = () => {

    const [isCreation, setIsCreation] = useState(false);
    const store = useStore();
    const [isEdition, setIsEdition] = useState("");

    const dispatch = useDispatch();

    const [projectData, setProjectData] = useState<{name:string, link:string, id:string}[]>();

    const [addProjectM] = useAddProjectMutation();
    const [removeProjectM] = useRemoveProjectMutation();
    const [editProject] = useEditProjMutation();
    const [changeProjectDesr] = useChangeProjectDescrMutation();


    var EditObj = {name: "", link: ""};

    const {loading, data} = useGetProjectsQuery({
        variables:{token:localStorage.getItem("token")},
        onCompleted:(e) => {
            var projList = [];
            for (var i of e.getVisitByUser?.projectSet.edges!) {
                projList.push({name:i?.node?.name!, link:i?.node?.link!, id:i?.node?.id!});
                dispatch(addProject({name:i?.node?.name!, link:i?.node?.link!, id:i?.node?.id!}))
            }
            setProjectData(projList!);
        }
    });

    if (loading) {
        return <div></div>
    }

    console.log(data);
    var object = {name: "", url: ""};

    return <div className="project__projects">
            <Navigation nextName="Картинки" currentName="Проекты" nextLink="/set/photos"></Navigation>

            <Input className="inpt" placeholder={"Описание в визитке"} value={
                data?.getVisitByUser?.projectDescr 
            } onChange={(e:string) => {
                changeProjectDesr({variables:{
                    card_id: data?.getVisitByUser?.id!,
                    proj_descr: e
                }});
                dispatch(setProjectHead(e))
            }}></Input>

            <div className="project__container-edit">
                {
                    projectData?.map((e) => 
                    <div onClick ={() => {
                        setIsEdition(e.id);
                    }}>
                        <Block className="project__local-container">
                            <div>{e.name}</div>
                        </Block>
                    </div>
                        )
                }
                <div onClick={() => {
                setIsCreation(true);
            }}>
                <Block className="project__local-container">
                    <div>Добавить +</div>
                </Block>
            </div>
            <ShowCardButton></ShowCardButton>

            </div>


            
            {
                isCreation ?
                ReactDom.createPortal(
                    <CreateProjectPopUp deleteFunc={() => {
                        setIsCreation(false);
                        object = {name:"", url: ""};
                    }}
                    onChange={(e:{name:string, url:string}) => {
                        object = e;
                    }}
                    onComplete={() => {
                        addProjectM({variables:{
                            projectName: object.name,
                            link: object.url,
                            id: data?.getVisitByUser?.id!
                        }}).then((e) => {
                            dispatch(addProject({name:object.name, link:object.url, id:e.data?.addProject?.project?.id!}))
                            console.log(store.getState());
                            setProjectData(projectData?.concat([
                                {name:object.name, link:object.url, id:e.data?.addProject?.project?.id!}
                            ]))
                            setIsCreation(false);
                            object = {name:"", url: ""};
                        })
                    }}
                    ></CreateProjectPopUp>,
                    document.getElementById("message")!
                ) : ""
            }

            {
                isEdition.length ? 
                ReactDom.createPortal(
                    <DeleteProjectPopUp
                    onDeleteCross={() => {
                        setIsEdition("")
                    }}
                    onDeleteButton={() => {
                        removeProjectM({variables:{
                            projectId:isEdition
                        }})
                        dispatch(removeProject(isEdition))
                        console.log(store.getState())
                        setProjectData(projectData?.filter(e => e.id != isEdition));
                        setIsEdition("");
                    }}
                    onChange={(e:{name:string, link:string}) => {
                        EditObj = e;
                    }}
                    onEdit={() => {
                        console.log(EditObj);
                        dispatch(changeProject({id:isEdition, project:
                            {id:isEdition, ...EditObj}
                        }))
                        console.log(store.getState())
                        editProject({variables:{
                            link:EditObj.link,
                            projectName:EditObj.name,
                            id: isEdition
                        }});
                        setProjectData(projectData?.map((e) => {
                            return e.id == isEdition ? {
                                id: e.id,
                                link: EditObj.link,
                                name : EditObj.name
                            } : e
                        }))
                        EditObj = {link: "", name: ""}
                        setIsEdition("");
                    }}
                    url={
                        projectData?.filter(e => e.id == isEdition)[0].link
                    }
                    name={
                        projectData?.filter(e => e.id == isEdition)[0].name
                    }
                    ></DeleteProjectPopUp>,
                    document.getElementById("message")!
                ) : ""
            }
        </div>

}