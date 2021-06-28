import react from "react";
import { Block } from "../Block/Block";
import { Text } from "../Text/Text";

import "./style.css";

export const ImageUpload:react.FC<{onChange:Function; className:string}> = (props) => {
    return <Block className={props.className}>
        <Text>
        <label htmlFor="file">{props.children}</label>
        </Text>
        <input type="file" id="file" accept="image/*" onChange={(e) => {
            props.onChange((document.getElementById("file")! as any).files[0])
        }} />
    </Block>
}