import { useProducer } from "@rbxts/react-reflex";
import { useRootSelector } from "client/producers";
import { RootProducer, producer } from "client/producers";
import { Properties } from "./Properties"
import { ImageButtonFunction } from "./ImageButton";
import React from "@rbxts/react";


export function ImageLabelFunction({key,Active,AnchorPoint,BackgroundTransparency,Image,Position,Size,Visible}:Properties) {
    return (
        <imagelabel
            key={key}
            Active={Active}
            BackgroundTransparency={BackgroundTransparency}
            Image={Image}
            Position={Position}
            Size={Size}
            Visible={Visible}
        ></imagelabel>
    )
}