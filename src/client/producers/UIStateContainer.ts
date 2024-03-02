import { bool } from "@rbxts/react/src/prop-types";
import { createProducer } from "@rbxts/reflex";


export interface UIStateBools {
    Inventory : boolean
    Store : boolean
}

const initState:UIStateBools = {
    Inventory : false,
    Store : false
}

export const UIStateManager = createProducer(initState,{
    OpenInventory: (state,isOpen) => ({
        ...state,
        Inventory : isOpen,
    }),

    OpenStore: (state,isOpen) => ({
        ...state,
        Store : isOpen,
    }),
})