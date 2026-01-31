import type { PopoverProps } from './type';
import { Popover } from 'antd';

const CustomPopover = ({
    content,
    title = "",
    trigger = "click",
    placement = "bottomRight",
    open = false,
    children
}: PopoverProps) => {
    return (
        <Popover
            content={content}
            title={title}
            trigger={trigger}
            placement={placement}
            getPopupContainer={(triggerNode) => triggerNode.parentElement || document.body}
            open={open}
        >
            {children}
        </Popover>
    );
};

export default CustomPopover;
