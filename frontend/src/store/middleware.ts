import { Middleware } from "redux"
import { StoreType } from "./store"

import axios from "axios";
import { changePoint, Point } from "./geoSlice";


export const asyncFunctionMiddleware: Middleware<{}, any> = (storeAPI) => (next) => (action) => {
    switch (action.type) {
        case "geoReducer/setPoints":
            (action.payload as Point[]).map((e) => {
                axios.post("https://apikorteh.ru/", {
                    "method": "process",
                    "params": [e.image.split("?")[0]],
                    "jsonrpc": "2.0",
                    "id": 0,
                },
                
                ).then((res:any) => {
                    let interval = setTimeout(() => {
                        axios.post("https://apikorteh.ru/", {
                            "method": "results",
                            "params": [res.data.result],
                            "jsonrpc": "2.0",
                            "id": 0,
                        }).then((bboxData) => {
                            storeAPI.dispatch(changePoint({
                                point_id: e.id,
                                newFields: {
                                    ...e,
                                    bboxes: bboxData.data.result[0].potholes[0].bboxes
                                }
                            }))
                        })
                    }, 10000)
                })
            })
    }
    next(action)
}