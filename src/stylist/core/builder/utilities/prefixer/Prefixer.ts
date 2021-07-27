import Alignment from "stylist/core/interface/alignment/Alignment";
import Background from "stylist/core/interface/background/Background";
import Border from "stylist/core/interface/border/Border";
import Divide from "stylist/core/interface/border/Divide";
import Ring from "stylist/core/interface/border/Ring";
import Flex from "stylist/core/interface/flex/Flex";
import Grid from "stylist/core/interface/grid/Grid";
import OverflowContainer from "stylist/core/interface/overflow/Overflow";
import Placeholder from "stylist/core/interface/placeholder/Placeholder";
import Sizing from "stylist/core/interface/sizing/Sizing";
import Spacing from "stylist/core/interface/spacing/Spacing";
import StyleSheet from "stylist/core/StyleSheet";
import Typography from "stylist/core/interface/typography/Typography";
import { Axis, BorderSide, BorderWidth, BoxShadow, Cursor, Float, GridControl, HeightValue, Hue, MaxHeightValue, MaxWidthValue, MinHeightValue, MinWidthValue, Opacity, Overflow, Radius, Side, SizeNumber, Transition, WidthValue } from "stylist/Stylist";
import Prefix from "./Prefix";
import SpaceBetween from "stylist/core/interface/spacing/SpaceBetween";

class Prefixer {
    static classes: string[] = [];
    static map = new Map<string, (k: any) => void>();

    static init = () => {
        if(Prefixer.map.size) return;
        console.log(`Prefixer: Initializing`);
        Prefixer.map.set('bg', Prefixer.backgroundPrefixer);
        Prefixer.map.set('bgColor', Prefixer.backgroundColorPrefixer);
        Prefixer.map.set('bgOpacity', Prefixer.backgroundOpacityPrefixer);
        Prefixer.map.set('border', Prefixer.borderPrefixer);
        Prefixer.map.set('borderRadius', Prefixer.borderRadiusPrefixer);
        Prefixer.map.set('divide', Prefixer.dividePrefixer);
        Prefixer.map.set('ring', Prefixer.ringPrefixer);
        Prefixer.map.set('padding', Prefixer.paddingPrefixer);
        Prefixer.map.set('margin', Prefixer.marginPrefixer);
        Prefixer.map.set('spaceBetween', Prefixer.spaceBetweenPrefixer);
        Prefixer.map.set('sizing', Prefixer.sizingPrefixer);
        Prefixer.map.set('height', Prefixer.heightPrefixer);
        Prefixer.map.set('width', Prefixer.widthPrefixer);
        Prefixer.map.set('maxHeight', Prefixer.maxHeightPrefixer);
        Prefixer.map.set('maxWidth', Prefixer.maxWidthPrefixer);
        Prefixer.map.set('minHeight', Prefixer.minHeightPrefixer);
        Prefixer.map.set('minWidth', Prefixer.minWidthPrefixer);
        Prefixer.map.set('crossAxis', Prefixer.crossAxisPrefixer);
        Prefixer.map.set('mainAxis', Prefixer.mainAxisPrefixer);
        Prefixer.map.set('bothAxis', Prefixer.bothAxisPrefixer);
        Prefixer.map.set('flex', Prefixer.flexPrefixer);
        Prefixer.map.set('grid', Prefixer.gridPrefixer);
        Prefixer.map.set('float', Prefixer.floatPrefixer);
        Prefixer.map.set('overflow', Prefixer.overflowPrefixer);
        Prefixer.map.set('text', Prefixer.textPrefixer);
        Prefixer.map.set('placeholder', Prefixer.placeholderPrefixer);
        Prefixer.map.set('cursor', Prefixer.cursorPrefixer);
        Prefixer.map.set('shadow', Prefixer.shadowPrefixer);
        Prefixer.map.set('right', Prefixer.rightPrefixer);
        Prefixer.map.set('left', Prefixer.leftPrefixer);
        Prefixer.map.set('top', Prefixer.topPrefixer);
        Prefixer.map.set('bottom', Prefixer.bottomPrefixer);
        Prefixer.map.set('transition', Prefixer.transitionPrefixer);
    }

    static addUtilitiesPrefixes = (style: StyleSheet) => {
        Prefixer.init();
        Object.keys(style).forEach((u: string) => {
            const value = style[u];
            const prefixer = Prefixer.map.get(u);
            prefixer ? prefixer(value) : Prefixer.classes.push(value);
        });
        const classes = Prefixer.classes;
        Prefixer.classes = [];
        return classes;
    }
    /****************************** ******************************/
    private static multiplePrefix = (prefixes: string[], value: any) => {
        if (value === undefined) return;
        Prefixer.classes.push(`${prefixes.join('')}${value}`);
    }

    private static singlePrefix = (prefix: string, value?: any) => {
        Prefixer.multiplePrefix([prefix], value);
    }

    private static unprefixed = (value?: string) => {
        Prefixer.multiplePrefix([], value);
    }
    /****************************** ******************************/
    //Common
    private static colorPrefix = (prefix: Prefix, hue?: Hue) => {
        if (!hue) return;
        Prefixer.singlePrefix(prefix, `${hue[0]}${hue[1]}`);
    }

    private static opacityPrefix = (prefix: Prefix, opacity?: Opacity) => {
        Prefixer.multiplePrefix([prefix, Prefix.OPACITY], opacity);
    }
    /****************************** ******************************/
    //Alignment
    private static bothAxisPrefixer = (alignment: Alignment) => {
        Prefixer.singlePrefix(Prefix.PLACE_CONTENT, alignment.content);
        Prefixer.singlePrefix(Prefix.PLACE_ITEMS, alignment.items);
        Prefixer.singlePrefix(Prefix.PLACE_SELF, alignment.self);
    }

    private static crossAxisPrefixer = (alignment: Alignment) => {
        Prefixer.singlePrefix(Prefix.ALIGN_CONTENT, alignment.content);
        Prefixer.singlePrefix(Prefix.ALIGN_ITEMS, alignment.items);
        Prefixer.singlePrefix(Prefix.ALIGN_SELF, alignment.self);
    }

    private static mainAxisPrefixer = (alignment: Alignment) => {
        Prefixer.singlePrefix(Prefix.JUSTIFY_CONTENT, alignment.content);
        Prefixer.singlePrefix(Prefix.JUSTIFY_ITEMS, alignment.items);
        Prefixer.singlePrefix(Prefix.JUSTIFY_SELF, alignment.self);
    }
    /****************************** ******************************/
    //Background
    private static backgroundColorPrefixer = (color?: Hue) => {
        Prefixer.colorPrefix(Prefix.BACKGROUND, color);
    }
    private static backgroundOpacityPrefixer = (opacity?: Opacity) => {
        Prefixer.opacityPrefix(Prefix.BACKGROUND, opacity);
    }
    private static backgroundPrefixer = (background: Background) => {
        Prefixer.backgroundColorPrefixer(background.color);
        Prefixer.backgroundOpacityPrefixer(background.opacity);
    }
    /****************************** ******************************/
    //Border
    private static borderWidthSidePrefixer = (width: BorderWidth, side?: Side) => {
        const interfix = side ? `${side}-` : '';
        Prefixer.multiplePrefix([Prefix.BORDER, interfix], width);
    }
    private static borderRadiusSidePrefixer = (radius: Radius, side?: Side) => {
        const interfix = side ? `${side}-` : '';
        Prefixer.multiplePrefix([Prefix.ROUNDED, interfix], radius);
    }
    private static borderSidePrefixer = (value?: BorderSide, side?: Side) => {
        if (!value) return;
        if (typeof value === 'number') {
            Prefixer.borderWidthSidePrefixer(value, side);
            return;
        }
        Prefixer.borderWidthSidePrefixer(value[0], side);
        Prefixer.borderRadiusSidePrefixer(value[1], side);
    }
    private static borderRadiusPrefixer = (radius: Radius) => {
        Prefixer.singlePrefix(Prefix.ROUNDED, radius);
    }
    private static borderPrefixer = (border: Border) => {
        Prefixer.colorPrefix(Prefix.BORDER, border.color);
        Prefixer.opacityPrefix(Prefix.BORDER, border.opacity);
        Prefixer.borderSidePrefixer(border.top, Side.T);
        Prefixer.borderSidePrefixer(border.right, Side.R);
        Prefixer.borderSidePrefixer(border.bottom, Side.B);
        Prefixer.borderSidePrefixer(border.left, Side.L);
        Prefixer.borderSidePrefixer(border.all);
    }
    /****************************** ******************************/
    //Divide 
    private static dividePrefixer = (divide: Divide) => {
        Prefixer.multiplePrefix([Prefix.DIVIDE, Axis.X, '-'], divide.width?.x);
        Prefixer.multiplePrefix([Prefix.DIVIDE, Axis.Y, '-'], divide.width?.y);
        Prefixer.singlePrefix(Prefix.DIVIDE, divide.style);
        Prefixer.colorPrefix(Prefix.DIVIDE, divide.color);
        Prefixer.opacityPrefix(Prefix.DIVIDE, divide.opacity);
    }
    /****************************** ******************************/
    //Ring
    private static ringPrefixer = (ring: Ring) => {
        Prefixer.colorPrefix(Prefix.RING, ring.color);
        Prefixer.opacityPrefix(Prefix.RING, ring.opacity);
        Prefixer.singlePrefix(Prefix.RING, ring.width);
    }
    /****************************** ******************************/
    //BoxShadow
    private static shadowPrefixer = (boxShadow: BoxShadow) => {
        Prefixer.singlePrefix(Prefix.SHADOW, boxShadow);
    }
    /****************************** ******************************/
    //Flex
    private static flexPrefixer = (flex: Flex) => {
        Prefixer.singlePrefix(Prefix.FLEX, flex.direction);
        Prefixer.singlePrefix(Prefix.FLEX, flex.wrap);
        Prefixer.singlePrefix(Prefix.FLEX, flex.increase);
    }
    /****************************** ******************************/
    //Float
    private static floatPrefixer = (float: Float) => {
        Prefixer.singlePrefix(Prefix.FLOAT, float);
    }
    /****************************** ******************************/
    //Overflow
    private static overflowPrefixer = (overflow: OverflowContainer | Overflow) => {
        if (typeof overflow !== 'string') {
            Prefixer.multiplePrefix([Prefix.OVERFLOW, Axis.X, '-'], overflow.x);
            Prefixer.multiplePrefix([Prefix.OVERFLOW, Axis.Y, '-'], overflow.y);
            return;
        }
        Prefixer.singlePrefix(Prefix.OVERFLOW, overflow);
    }
    /****************************** ******************************/
    //Texts
    private static textPrefixer = (typography: Typography) => {
        Prefixer.singlePrefix(Prefix.FONT, typography.family);
        Prefixer.singlePrefix(Prefix.FONT, typography.weight);
        Prefixer.singlePrefix(Prefix.TEXT, typography.size);
        Prefixer.singlePrefix(Prefix.TEXT, typography.align);
        Prefixer.colorPrefix(Prefix.TEXT, typography.color);
        Prefixer.opacityPrefix(Prefix.TEXT, typography.opacity);
        Prefixer.singlePrefix(Prefix.LETTER_SPACING, typography.letterSpacing);
        Prefixer.singlePrefix(Prefix.LINE_HEIGHT, typography.lineHeight);
        Prefixer.unprefixed(typography.transform);
        Prefixer.unprefixed(typography.decoration);
        Prefixer.unprefixed(typography.overflow);
    }
    private static placeholderPrefixer = (placeholder: Placeholder) => {
        Prefixer.colorPrefix(Prefix.PLACEHOLDER, placeholder.color);
        Prefixer.opacityPrefix(Prefix.PLACEHOLDER, placeholder.opacity);
    }
    /****************************** ******************************/
    private static rightPrefixer = (value: SizeNumber) => {
        Prefixer.singlePrefix(Prefix.RIGHT, value);
    }
    private static leftPrefixer = (value: SizeNumber) => {
        Prefixer.singlePrefix(Prefix.LEFT, value);
    }
    private static topPrefixer = (value: SizeNumber) => {
        Prefixer.singlePrefix(Prefix.TOP, value);
    }
    private static bottomPrefixer = (value: SizeNumber) => {
        Prefixer.singlePrefix(Prefix.BOTTOM, value);
    }
    /****************************** ******************************/
    //Size
    private static heightPrefixer = (value?: HeightValue) => {
        Prefixer.singlePrefix(Prefix.HEIGHT, value);
    }
    private static widthPrefixer = (value?: WidthValue) => {
        Prefixer.singlePrefix(Prefix.WIDTH, value);
    }
    private static maxWidthPrefixer = (value?: MaxWidthValue) => {
        Prefixer.singlePrefix(Prefix.MAX_WIDTH, value);
    }
    private static maxHeightPrefixer = (value?: MaxHeightValue) => {
        Prefixer.singlePrefix(Prefix.MAX_HEIGHT, value);
    }
    private static minWidthPrefixer = (value?: MinWidthValue) => {
        Prefixer.singlePrefix(Prefix.MIN_WIDTH, value);
    }
    private static minHeightPrefixer = (value?: MinHeightValue) => {
        Prefixer.singlePrefix(Prefix.MIN_HEIGHT, value);
    }
    private static sizingPrefixer = (sizing: Sizing) => {
        Prefixer.heightPrefixer(sizing.height);
        Prefixer.widthPrefixer(sizing.width);
        Prefixer.maxWidthPrefixer(sizing.maxWidth);
        Prefixer.maxHeightPrefixer(sizing.maxHeight);
        Prefixer.minWidthPrefixer(sizing.minWidth);
        Prefixer.minHeightPrefixer(sizing.minHeight);
    }
    /****************************** ******************************/
    //Spacing
    private static spacingPrefixer = (prefix: Prefix, spacing: Spacing | number | string) => {
        if (typeof spacing === 'number' || typeof spacing === 'string') {
            Prefixer.multiplePrefix([prefix, '-'], spacing);
            return;
        }
        Prefixer.multiplePrefix([prefix, Axis.X, '-'], spacing.x);
        Prefixer.multiplePrefix([prefix, Axis.Y, '-'], spacing.y);
        Prefixer.multiplePrefix([prefix, Side.T, '-'], spacing.top);
        Prefixer.multiplePrefix([prefix, Side.R, '-'], spacing.right);
        Prefixer.multiplePrefix([prefix, Side.B, '-'], spacing.bottom);
        Prefixer.multiplePrefix([prefix, Side.L, '-'], spacing.left);
    }
    private static marginPrefixer = (spacing: Spacing | number | string) => {
        Prefixer.spacingPrefixer(Prefix.MARGIN, spacing);
    }
    private static paddingPrefixer = (spacing: Spacing | number | string) => {
        Prefixer.spacingPrefixer(Prefix.PADDING, spacing);
    }
    private static spaceBetweenPrefixer = (spaceBetween: SpaceBetween) => {
        Prefixer.multiplePrefix([Prefix.SPACE_BETWEEN, Axis.X, '-'], spaceBetween.x);
        Prefixer.multiplePrefix([Prefix.SPACE_BETWEEN, Axis.Y, '-'], spaceBetween.y);
    }
    /****************************** ******************************/
    //Miscelaneus
    private static cursorPrefixer = (cursor: Cursor) => {
        Prefixer.singlePrefix(Prefix.CURSOR, cursor);
    }
    /****************************** ******************************/
    //Grid 
    private static gridLayoutPrefix = (prefix: Prefix, layout: any) => {
        Prefixer.multiplePrefix([prefix, GridControl.START], layout?.start);
        Prefixer.multiplePrefix([prefix, GridControl.END], layout?.end);
        Prefixer.multiplePrefix([prefix, GridControl.SPAN], layout?.span);
    }
    private static gridPrefixer = (grid: Grid) => {
        Prefixer.gridLayoutPrefix(Prefix.COLUMN, grid.column);
        Prefixer.singlePrefix(Prefix.GRID_TEMP_COLS, grid.column?.template);
        Prefixer.gridLayoutPrefix(Prefix.ROW, grid.row);
        Prefixer.singlePrefix(Prefix.GRID_TEMP_ROWS, grid.row?.template);
        Prefixer.singlePrefix(Prefix.ORDER, grid.order);
        Prefixer.singlePrefix(Prefix.GAP, grid.gap);
    }
    /****************************** ******************************/
    //Transition
    private static transitionPrefixer = (transition: Transition) => {
        Prefixer.singlePrefix(Prefix.TRANSITION, transition[0]);
        Prefixer.singlePrefix(Prefix.TRANSITION_DURATION, transition[1]);
        Prefixer.unprefixed(transition[2]);
        Prefixer.singlePrefix(Prefix.TRANSITION_DELAY, transition[2]);
    } 
}
export default Prefixer;