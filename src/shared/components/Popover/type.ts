export interface PopoverProps {
    content: React.ReactNode;
    title?: string;
    trigger?: "click" | "hover" | "focus";
    placement?: "top" | "left" | "right" | "bottom" | "topLeft" | "topRight" | "bottomLeft" | "bottomRight" | "leftTop" | "leftBottom" | "rightTop" | "rightBottom";
    children: React.ReactNode;
    open?: boolean;
}
