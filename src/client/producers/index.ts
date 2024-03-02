import { UIStateBools,UIStateManager } from "./UIStateContainer";
import { InferState, combineProducers } from "@rbxts/reflex";
import { useProducer, useSelector, UseProducerHook, UseSelectorHook } from "@rbxts/react-reflex";

export type RootProducer = typeof producer;
export type RootState = InferState<RootProducer>;
export const useRootProducer: UseProducerHook<RootProducer> = useProducer;
export const useRootSelector: UseSelectorHook<RootProducer> = useSelector;

export const producer = combineProducers({
    UIStateManager : UIStateManager
})