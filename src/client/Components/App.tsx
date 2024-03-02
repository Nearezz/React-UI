import React from "@rbxts/react";
import {ImageLabelFunction} from "./ImageLabel"
import { ImageButtonFunction } from "./ImageButton";

 {/* <ImageButtonFunction
                     key="CloseInventoryButton"
                    Visible={InventoryBool}
                    AnchorPoint={new Vector2(0.5, 0.5)}
                     BackgroundTransparency={1}
                     Image="rbxassetid://13035743023"
                     Position={UDim2.fromScale(0.950,-0.07)}
                    Size={new UDim2(0.101, 0, 0.181, 0)}
                     MouseClick1Down={() => producer.OpenInventory(false)}
                ></ImageButtonFunction> */}

import { useProducer } from "@rbxts/react-reflex";
import { useRootSelector } from "client/producers";
import { RootProducer, producer } from "client/producers";

export function App() {
    const InventoryBool = useRootSelector((state) => state.UIStateManager.Inventory)
    const producer = useProducer<RootProducer>()


    return (
        <screengui key="Interface" IgnoreGuiInset={true} ScreenInsets={Enum.ScreenInsets.DeviceSafeInsets}>
            <ImageLabelFunction
                key="Inventory"
                Active={true}
                Visible={InventoryBool}
                AnchorPoint={new Vector2(0.5, 0.5)}
                BackgroundTransparency={1}
                Image="rbxassetid://13035987570"
                Position={new UDim2(0, 246.337, 0, 142.235)}
	            Size={new UDim2(0, 798, 0, 401)}
            ></ImageLabelFunction>

            <ImageButtonFunction
                key="CloseInventoryButton"
                Visible={InventoryBool}
                 AnchorPoint={new Vector2(0.5, 0.5)}
                 BackgroundTransparency={1}
                Image="rbxassetid://13035743023"
                 Position={UDim2.fromOffset(780,112)}
                Size={new UDim2(0.101, 0, 0.181, 0)}
                MouseClick1Down={() => producer.OpenInventory(false)}
            ></ImageButtonFunction>

            <ImageButtonFunction
                key="OpenInventoryButton"
                AnchorPoint={new Vector2(0.5, 0.5)}
                BackgroundTransparency={1}
                Image="rbxassetid://13036289504"
                ImageColor3={Color3.fromRGB(255, 147, 253)}
                Position={new UDim2(0.062, 0, 0.42, 0)}
                Size={new UDim2(0.107, 0, 0.069, 0)}
                Visible={true}
                MouseClick1Down={() => producer.OpenInventory(true)}
            ></ImageButtonFunction> 
        </screengui>
    )
}