import Device from "stylist/core/builder/variants/Device";
import State from "stylist/core/builder/variants/State";
import Theme from "stylist/core/builder/variants/Theme";
import StyleSheet from "../../StyleSheet";
import Prefixer from "./prefixer/Prefixer";

class Utilities {
    private utilities: string[] = [];

    private addVariantPrefixes = (utility: string, device: Device, theme: Theme, state: State) => {
        this.utilities.push(`${device + theme + state}${utility}`);
    }

    put = (utility: string) => { 
        if(!this.utilities.includes(utility))
            this.utilities.push(utility)
    };
    
    getAll = () => this.utilities.join(' ');

    addUtilitiesFromStyleSheet = (style: StyleSheet, device: Device, theme: Theme, state: State = State.NOTHING) => {
        const utilities = Prefixer.addUtilitiesPrefixes(style);
        utilities.forEach(utility => this.addVariantPrefixes(utility, device, theme, state));
    }
}
export default Utilities;