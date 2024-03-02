export interface Properties {
    BackgroundTransparency?: number;
    Font?: Enum.Font;
    FontFace?: {
        Family?: string;
        Weight?: string;
        Style?: string;
    };
    Position?: UDim2;
    Size?: UDim2;
    Text?: string;
    TextColor3?: Color3;
    TextScaled?: boolean;
    TextSize?: number;
    TextStrokeTransparency?: number;
    TextWrapped?: boolean;
    Active?: boolean
    key?: string
    AnchorPoint? : Vector2
    Image? : string
    ImageColor3? : Color3
    Visible? : boolean
    onClick? : () => void
    MouseClick1Down?: () => void
    MouseClick1Up?: () => void
}