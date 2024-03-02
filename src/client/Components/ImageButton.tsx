import { useProducer } from "@rbxts/react-reflex";
import { useRootSelector } from "client/producers";
import { RootProducer, producer } from "client/producers";
import { Properties } from "./Properties"
import React from "@rbxts/react";


export function ImageButtonFunction({key,Active,AnchorPoint,BackgroundTransparency,Image,Position,Size,ImageColor3,Visible,onClick,MouseClick1Down,MouseClick1Up}:Properties) {
    return (
        <imagebutton
            key={key}
            Active={Active}
            BackgroundTransparency={BackgroundTransparency}
            Image={Image}
            Position={Position}
            Size={Size}
            Visible={Visible}
            ImageColor3={ImageColor3}
            Event={{
                Activated: onClick,
                MouseButton1Down: MouseClick1Down,
                MouseButton1Up: MouseClick1Up
            }}
        >
        </imagebutton>
    )
}