import react, { useState } from "react";
import { Provider } from "react-redux";

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { DetailsScreen } from "./screens/DetailScreen/DetailScreen";
import { LoginScreen } from "./screens/LoginScreen/LoginScreen";
import { ScreenWithMap } from "./screens/ScreenWithMap/ScreenWithMap";
import {store} from "./store/store";

export const App:react.FC = () => {

    return <Provider store={store}>
        <Router>
            <Switch>
                <Route path="/login">
                    <LoginScreen></LoginScreen>
                </Route>
                
                <Route path="/index">
                    <ScreenWithMap></ScreenWithMap>
                </Route>

            </Switch>
        </Router>
    </Provider> 
    
    
}

