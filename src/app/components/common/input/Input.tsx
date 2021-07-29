import OnChange from "app/types/events/OnChange";
import Stylist, { Color, Radius, Sizing } from "stylist/Stylist";

const InputStyle = Stylist.builder()
    .inMobile({
        bgColor: [Color.BLUE, 50],
        text: { 
            color: [Color.GRAY, 900],
        },
        padding: { 
            y: 1,
            x: 2
        },
        width: Sizing.FULL,
        border: {
            all: 2,
            color: [Color.GRAY, 300],
            radius: Radius.MD
        },
    })
    .focus({
        outline: 'outline-none' //TODO FIX THIS
    })
    .dark({
        borderColor: [Color.INDIGO, 200],
    })
    .build();

export interface InputProps {
    value?: string;
    type: string;
    name: string;
    placeholder?: string;
    required?: boolean;
    onChange: OnChange;
}

const Input: React.FC<InputProps> = (props: InputProps) => {
    return (<input className={InputStyle} {...props} onChange={(e: any) => props.onChange(e.target.value, props.name)} />);
}

export default Input;