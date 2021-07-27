import OnChange from "app/types/events/OnChange";
import Stylist, { Color, Radius } from "stylist/Stylist";

const InputStyle = Stylist.builder()
    .inMobile({
        bgColor: [Color.GRAY, 50],
        text: { 
            color: [Color.GRAY, 900],
        },
        padding: {
            x: 2,
        },
        border: {
            bottom: 2,
            color: [Color.GRAY, 400],
            radius: Radius.SM
        },
    })
    .focus({
        outline: 'outline-none' //FIX THIS
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