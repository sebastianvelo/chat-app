import { useState } from "react";
import StyleSheetBuilder from "stylist/core/builder/StyleSheetBuilder";
import Stylist, { Display, Position, TransitionProperty } from "stylist/Stylist";

const DropdownStyle = Stylist.builder()
    .inMobile({
        position: Position.RELATIVE,
        transition: [TransitionProperty.ALL, 300]
    })
    .build();

const InvisibleStyle = (style?: StyleSheetBuilder) => Stylist.builder().mix(style).inMobile({ display: Display.HIDDEN }).build();

interface DropdownProps {
    trigger: JSX.Element;
    content: JSX.Element | JSX.Element[];
    isVisible?: boolean;
    style?: StyleSheetBuilder;
}

const Dropdown: React.FC<DropdownProps> = (props: DropdownProps) => {
    const [visible, isVisible] = useState(props.isVisible || false);

    const toggleDropdown = () => { isVisible(!visible) };

    return (
        <div className={DropdownStyle}>
            <div onClick={toggleDropdown}>{props.trigger}</div>
            <div className={visible ? '' : InvisibleStyle(props.style)}>{props.content}</div>
        </div>
    );
}

export default Dropdown;