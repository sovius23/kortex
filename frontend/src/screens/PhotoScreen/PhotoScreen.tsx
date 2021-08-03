import react, { useState } from "react";
import { Block } from "../../uikit/Block/Block";
import { Footer } from "../../uikit/Footer/Footer";
import { Header } from "../../uikit/Header/Header";
import { Text } from "../../uikit/Text/Text";

import ReactDom from "react-dom";

import "./style.css";
import { ChangeImgPopUp } from "../../uikit/PopUps/ChangeImgPopUp/ChangeImgPopUp";
import { Image } from "../../uikit/Image/Image";

import {
    useGetImageQuery, 
    useAddImgMutation, 
    useDeleteImgMutation, 
    useChangeImgMutation,
    useChangeImageDescrMutation
} from "../../generated/graphql";
import { Input } from "../../uikit/Input/Input";
import { Navigation } from "../../uikit/Navigation/Navigation";
import { ShowCardButton } from "../../uikit/ShowCardButton/ShowCardButton";

import {useDispatch, useStore} from "react-redux";
import {setImgHead} from "../../store/profileReducer"

import {editImg, addImg, removeImg, setImages} from "../../store/PhotoReducer";
import { RootType } from "../../store/store";


export const InstScreen:react.FC = () => {
    const dispatch = useDispatch();
    const store = useStore();

    return <div>asdfasdf</div>
}