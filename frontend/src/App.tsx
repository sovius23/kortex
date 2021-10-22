import react, { useState } from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { LoginScreen } from "./screens/LoginScreen/LoginScreen";
import { ScreenWithMap } from "./screens/ScreenWithMap/ScreenWithMap";

export const App:react.FC = () => {

    return <Router>
        <Switch>
            <Route path="/login">
                <LoginScreen></LoginScreen>
            </Route>
            <Route path="/index">
                <ScreenWithMap></ScreenWithMap>
            </Route>
        </Switch>
    </Router>
}

