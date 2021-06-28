import react, { useContext, useEffect, useState } from "react";
import { Block } from "../../uikit/Block/Block";
import { CheckBox } from "../../uikit/CheckBox/CheckBox";
import { Scrollbar } from "../../uikit/ScrollBar/Scrollbar";
import { Text } from "../../uikit/Text/Text";
import { Arrow } from "../../uikit/uiArrow/Arrow";

import {useGetVisitQuery} from "../../generated/graphql";

import "./style.css";
import { Link, useHistory } from "react-router-dom";
import { ThemeContext } from "../../App";

export const ScreenWithCheckboxes:react.FC = () => {


    const {data, loading} = useGetVisitQuery({variables:{token:localStorage.getItem("token")}});

    const {setSwitcherVisibility} = useContext(ThemeContext);

    const [flag, setFlag] = useState(false);

    const history = useHistory();

    if (!flag) {
        setFlag(true);
        setSwitcherVisibility(true);
    }

    var CheckboxesData = [
        {text: "Загрузите аватарку", enabled:true},
        {text: "Укажите ФИО", enabled:true},
        {text: "Напишите должность", enabled:true},
        {text: "Укажите описание", enabled:true},
        {text: "скажите контакты", enabled:false},
        {text: "Второе описание", enabled:false},
        {text: "Добавьте проекты", enabled:false},
        {text: "Добавьте фотографии", enabled:false},
        {text: "Добавьте геолокацию", enabled: false}
    ]

    if (loading) {
        return <div></div>;
    }
    console.log(data);

    if (data?.getVisitByUser?.photoSet.edges.length == 0) {
        CheckboxesData[7].enabled = false;
    }
    else {
        CheckboxesData[7].enabled = true;
    }

    if (!data?.getVisitByUser?.contacts?.facebookLink &&
        !data?.getVisitByUser?.contacts?.instLink &&
        !data?.getVisitByUser?.contacts?.phone &&
        !data?.getVisitByUser?.contacts?.tgLink &&
        !data?.getVisitByUser?.contacts?.twitterLink &&
        !data?.getVisitByUser?.contacts?.vkLink &&
        !data?.getVisitByUser?.contacts?.website &&
        !data?.getVisitByUser?.contacts?.whatsappLink) {
        CheckboxesData[4].enabled = false;
    }
    else {
        CheckboxesData[4].enabled = true;
    }

    if (data?.getVisitByUser?.secondDescr == null) {
        CheckboxesData[5].enabled = false;
    } else {
        CheckboxesData[5].enabled = true;
    }

    if (data?.getVisitByUser?.projectSet.edges.length == 0) {
        CheckboxesData[6].enabled = false;
    } else {
        CheckboxesData[6].enabled = true;
    }

    if (data?.getVisitByUser?.description == null) {
        CheckboxesData[3].enabled = false;
    } else {
        CheckboxesData[3].enabled = true;
    }


    if(!data?.getVisitByUser?.name?.length &&
        !data?.getVisitByUser?.midname.length &&
        !data?.getVisitByUser?.surname.length) {
            CheckboxesData[1].enabled = false;
        }
    else {
            CheckboxesData[1].enabled = true;
        }


    if (data?.getVisitByUser?.imageUrl?.length == 0){
        CheckboxesData[0].enabled = false;
    }
    else {
        CheckboxesData[0].enabled = true;
    }

    if (data?.getVisitByUser?.positionInCompany == null) {
        CheckboxesData[2].enabled = false
    } else {
        CheckboxesData[2].enabled = true;
    }

    if (data?.getVisitByUser?.geopos?.lattitude == null &&
        data?.getVisitByUser?.geopos?.longitude == null) {
            CheckboxesData[8].enabled = false;
    }
    else {
        CheckboxesData[8].enabled = true;
    }

    var count = 0;
    for (var i = 0; i < CheckboxesData.length; ++i){
        if (CheckboxesData[i].enabled) count++;
    }

    if (localStorage.getItem("token") == null) {
        history.push("/login");
    }


    
    return <div className="centered">
        <div className="screenW__container">
        <Text className="screenW__header">Добро пожаловать в <span className="colorized">EasyCards</span></Text>
        <Block className="chbScreen__container-public">
            <div className="chbScreen__container">
            {
                CheckboxesData.map((e) => <CheckBox text={e.text} enabled={e.enabled}></CheckBox>)
            }
            </div>
            <Scrollbar koef={count/9}></Scrollbar>
            <Link to="/set">
            <div className="goto__container">
                <Text>Начать оформлять</Text>
                <Arrow reversed></Arrow>
            </div>
            </Link>

        </Block>
        <Block className="button-block">
            <Link to={`/${data?.getVisitByUser!.id}`}>
                <Text>Посмотреть визитку</Text>

            </Link>

        </Block>

    </div>
        </div>
}