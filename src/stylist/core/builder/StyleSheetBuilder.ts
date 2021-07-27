import Utilities from "./utilities/Utilities";
import Device from "./variants/Device";
import State from "./variants/State";
import Theme from "./variants/Theme";
import StyleSheet from "../StyleSheet";

class StyleSheetBuilder {
    private utilities: Utilities = new Utilities();
    private device: Device = Device.ALL;
    private theme: Theme = Theme.LIGHT;

    private in = (device: Device, style: StyleSheet, theme: Theme, state?: State) => {
        this.device = device;
        this.theme = theme;
        this.utilities.addUtilitiesFromStyleSheet(style, device, theme, state);
        return this;
    }

    private inState = (style: StyleSheet, state: State) => this.in(this.device, style, this.theme, state);

    mix = (styleSheet?: StyleSheetBuilder) => {
        if (styleSheet)
            styleSheet.build().split('  ').forEach(utility => this.utilities.put(utility))
        return this;
    }

    inMobile = (style: StyleSheet) => this.in(Device.ALL, style, Theme.LIGHT);
    inTablet = (style: StyleSheet) => this.in(Device.SMALL, style, Theme.LIGHT);
    inLaptop = (style: StyleSheet) => this.in(Device.MEDIUM, style, Theme.LIGHT);
    inDesktop = (style: StyleSheet) => this.in(Device.LARGE, style, Theme.LIGHT);

    dark = (style: StyleSheet) => this.in(this.device, style, Theme.DARK);

    odd = (style: StyleSheet) => this.inState(style, State.ODD);
    last = (style: StyleSheet) => this.inState(style, State.LAST);
    even = (style: StyleSheet) => this.inState(style, State.EVEN);
    hover = (style: StyleSheet) => this.inState(style, State.HOVER);
    focus = (style: StyleSheet) => this.inState(style, State.FOCUS);
    first = (style: StyleSheet) => this.inState(style, State.FIRST);
    active = (style: StyleSheet) => this.inState(style, State.ACTIVE);
    visited = (style: StyleSheet) => this.inState(style, State.VISITED);
    checked = (style: StyleSheet) => this.inState(style, State.CHECKED);
    disabled = (style: StyleSheet) => this.inState(style, State.DISABLED);
    groupFocus = (style: StyleSheet) => this.inState(style, State.GROUP_FOCUS);
    groupHover = (style: StyleSheet) => this.inState(style, State.GROUP_HOVER);
    focusWithin = (style: StyleSheet) => this.inState(style, State.FOCUS_WITHIN);

    build = () => this.utilities.getAll();
}
export default StyleSheetBuilder;