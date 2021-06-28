import react, { useState } from "react";

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";
import { Block } from "./uikit/Block/Block";
import { Textarea } from "./uikit/Textarea/Textarea";
import { CheckBox } from "./uikit/CheckBox/CheckBox";
import { Icon, IconType } from "./uikit/Icon/Icon";
import { Scrollbar } from "./uikit/ScrollBar/Scrollbar";
import { Arrow } from "./uikit/uiArrow/Arrow";
import { ScreenWithCheckboxes } from "./screens/ScreenWithCheckboxes/ScreenWidthCheckboxes";
import { SetScreenSelection } from "./screens/SetScreenSelection/SetScreenSelection";
import { ViewCard } from "./screens/ViewCard/ViewCard";
import { Switcher } from "./uikit/Switcher/Switcher";

import {useGetStateQuery} from "./generated/graphql";
import { Registration } from "./screens/Registration/Registration";
import { Login } from "./screens/Login/Login";

export enum Theme{
    Light,
    Dark
}

export const ThemeContext = react.createContext({
    theme: Theme.Dark,
    setTheme: (a:any) => {},
    setSwitcherVisibility: (visible:boolean) => {}
})

export const App:react.FC = () => {

    const {data, loading} = useGetStateQuery({
        variables:{token:localStorage.getItem("token")},
        onCompleted:(e) => {
            setTheme(
                e.getVisitByUser?.theme == "Light" ? Theme.Light : Theme.Dark
            )
        }
    })

    const [theme, setTheme] = react.useState(Theme.Dark);

    const [visibility, setVisibility] = useState(true);

    if (theme == Theme.Dark) {
        let root = document.body;
        root.style.setProperty("--back-color", "linear-gradient(174.96deg, #252A2E 0%, #15191D 95.95%)");
    }
    else{
        let root = document.body;
        root.style.setProperty("--back-color", "#F0F0F3");
    }

    if (loading) {
        return <div></div>
    }


    return <ThemeContext.Provider value={{
        theme:theme, setTheme:setTheme,
        setSwitcherVisibility: setVisibility
        }}>
            {
                visibility ?
                <div>
                <Switcher></Switcher>

                <div style={{marginBottom: "50px", opacity: "0"}}>
                    \   
                </div>
            </div> : ""
            }
            
        
        <Router>
            <Switch>
                <Route path={"/registration"}>
                    <Registration></Registration>
                </Route>
                <Route path="/login">
                    <Login></Login>
                </Route>
                <Route path="/index">
                    <ScreenWithCheckboxes></ScreenWithCheckboxes>
                </Route>
                <Route path="/set">
                    <SetScreenSelection></SetScreenSelection>
                </Route>
                <Route path="/:id">
                    <ViewCard></ViewCard>
                </Route>
                <Route path="">
                    <Redirect to={"index"}></Redirect>
                </Route>
            </Switch>
        </Router>
    </ThemeContext.Provider>

}

