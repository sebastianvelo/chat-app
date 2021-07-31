import StyleSheetBuilder from "./core/builder/StyleSheetBuilder";

class Stylist {
    static builder = () => new StyleSheetBuilder();
}
export default Stylist;

//----------------------------------------------------------------
//Miscelaneus
export type Opacity = 0 | 5 | 10 | 20 | 25 | 30 | 40 | 50 | 60 | 70 | 75 | 80 | 90 | 95 | 100;
export type ZIndexValue = 0 | 10 | 20 | 30 | 40 | 50 | 'auto';
export enum BoxShadow {
    SM = 'sm',
    MD = 'md',
    LG = 'lg',
    XL = 'xl',
    XXL = '2xl',
    NONE = 'none',
    DEFAULT = '',
}
export enum Overflow {
    AUTO = 'auto',
    HIDDEN = 'hidden',
    VISIBLE = 'visible',
    SCROLL = 'scroll',
}
export enum Cursor {
    AUTO = 'auto',
    DEFAULT = 'default',
    POINTER = 'pointer',
    WAIT = 'wait',
    TEXT = 'text',
    MOVE = 'move',
    HELP = 'help',
    NOT_ALLOWED = 'not-allowed'
}
//----------------------------------------------------------------
//Color
export type Shadow =  50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
export type Hue = [Color, Shadow] | SimpleColor;
export enum Color {
    GRAY = 'gray-',
    RED = 'red-',
    YELLOW = 'yellow-',
    GREEN = 'green-',
    BLUE = 'blue-',
    INDIGO = 'indigo-',
    PURPLE = 'purple-',
    PINK = 'pink-',
}
export enum SimpleColor {
    BLACK = 'black',
    WHITE = 'white',
    TRANSPARENT = 'transparent'
}
//----------------------------------------------------------------
//Alignment
export enum Content {
    CENTER = 'center',
    START = 'start',
    END = 'end',
    BETWEEN = 'between',
    AROUND = 'around',
    EVENLY = 'evenly',
}
export enum Items {
    CENTER = 'center',
    START = 'start',
    END = 'end',
    STRETCH = 'stretch',
}
export enum Self {
    CENTER = 'center',
    START = 'start',
    END = 'end',
    STRETCH = 'stretch',
}
//----------------------------------------------------------------
//Side - Axis
export enum Axis {
    X = 'x',
    Y = 'y'
}
export enum Side {
    T = 't',
    L = 'l',
    R = 'r',
    B = 'b',
    RIGHT = 'right',
    LEFT = 'left'
}
//----------------------------------------------------------------
//Sizing
export enum Size {
    XS = 'xs',
    SM = 'sm',
    MD = 'md',
    BASE = 'base',
    LG = 'lg',
    XL = 'xl',
    XXL = '2xl',
    ThXL = '3xl',
    FoXL = '4xl',
    FiXL = '5xl',
    SiXL = '6xl',
    SeXL = '7xl',
    EiXL = '8xl',
    NiXL = '9xl',
    NONE = 'none',
    DEFAULT = '',
    FULL = 'full',
}
export enum Sizing {
    ONE_HALF = '1/2',
    ONE_THIRD = '1/3', TWO_THIRDS = '2/3',
    ONE_QUARTER = '1/4', TWO_QUARTERS = '2/4', THREE_QUARTERS = '3/4',
    ONE_FIFTH = '1/5', TWO_FIFTHS = '2/5', THREE_FIFTHS = '3/5', FOUR_FIFTHS = '4/5',
    ONE_SIXTH = '1/6', TWO_SIXTHS = '2/6', THREE_SIXTHS = '3/6', FOUR_SIXTHS = '4/6', FIVE_SIXTHS = '5/6',
    ONE_EIGHTH = '1/12', TWO_TWELFTH = '2/12', THREE_TWELFTH = '3/12', FOUR_TWELFTH = '4/12', FIVE_TWELFTH = '5/12', SIX_TWELFTH = '6/12',
    SEVEN_TWELFTH = '7/12', EIGHT_TWELFTH = '8/12', NINE_TWELFTH = '9/12', TEN_TWELFTH = '10/12', ELEVEN_TWELFTH = '11/12',
    FULL = 'full', SCREEN = 'screen', MIN = 'min', MAX = 'max',
}
export type SizeNumber = 0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 5 |
6 | 7 | 8 | 9 | 10 | 11 | 12 | 14 | 16 | 20 | 24 |
28 | 32 | 36 | 40 | 44 | 48 | 52 | 56 | 60 | 64 | 72 | 80 | 96 | 'px' | 'auto';
export type WidthValue = SizeNumber | Sizing;
export type MinWidthValue = 0 | Sizing.FULL | Sizing.MIN | Sizing.MAX;
export type MinHeightValue = 0 | Sizing.FULL | Sizing.SCREEN;
export type MaxWidthValue = SizeNumber | Size | Sizing.MIN | Sizing.MAX | 'prose';
export type MaxHeightValue = SizeNumber | Sizing.FULL | Sizing.SCREEN;
export type HeightValue = SizeNumber | Sizing;
//----------------------------------------------------------------
//Border
export type BorderWidth = 0 | 1 | 2 | 4 | 8;
export type BorderSide = BorderWidth | [BorderWidth, Radius];
export enum BorderStyle {
    SOLID = 'solid',
    DASHED = 'dashed',
    DOTTED = 'dotted',
    DOUBLE = 'double',
    NONE = 'none',
}
export enum Radius {
    XS = 'xs',
    SM = 'sm',
    MD = 'md',
    LG = 'lg',
    XL = 'xl',
    XXL = '2xl',
    ThXL = '3xl',
    NONE = 'none',
    FULL = 'full',
    DEFAULT = '',
}
//----------------------------------------------------------------
//Layout
export enum Visibility {
    VISIBLE = 'visibile',
    INVISIBLE = 'invisible'
}
export enum Position {
    STATIC = 'static',
    FIXED = 'fixed',
    ABSOLUTE = 'absolute',
    RELATIVE = 'relative',
    STICKY = 'sticky',
}
export enum Display {
    BLOCK = 'block',
    INLINE_BLOCK = 'inline-block',
    INLINE = 'inline',
    FLEX = 'flex',
    INLINE_FLEX = 'inline-flex',
    TABLE = 'table',
    INLINE_TABLE = 'inline-table',
    TABLE_CAPTION = 'table-caption',
    TABLE_CELL = 'table-cell',
    TABLE_COLUMN = 'table-column',
    TABLE_COLUMN_GROUP = 'table-column-group',
    TABLE_FOOTER_GROUP = 'table-footer-group',
    TABLE_HEADER_GROUP = 'table-header-group',
    TABLE_ROW = 'table-row',
    TABLE_ROW_GROUP = 'table-row-group',
    FLOW_ROOT = 'flow-root',
    GRID = 'grid',
    INLINE_GRID = 'inline-grid',
    CONTENTS = 'contents',
    LIST_ITEM = 'list-item',
    HIDDEN = 'hidden'
}
export enum Float {
    LEFT = 'left',
    RIGHT = 'right',
    NONE = 'none',
}
//----------------------------------------------------------------
//Flex
export enum FlexDirection {
    ROW = 'row',
    ROW_REVERSE = 'row-reverse',
    COL = 'col',
    COL_REVERSE = 'col-reverse'
}
export enum FlexIncrease {
    AUTO = 'auto',
    INITIAL = 'initial',
    NONE = 'none',
    DEFAULT = '1',
    GROW = 'grow',
    DONT_GROW = 'grow-0',
    SHRINK = 'shrink',
    DONT_SHRINK = 'shrink-0'
}
export enum FlexWrap {
    WRAP = 'wrap',
    WRAP_REVERSE = 'wrap-reverse',
    NO_WRAP = 'nowrap'
}
//----------------------------------------------------------------
//Grid
export enum GridControl {
    SPAN = 'span-',
    START = 'start-',
    END = 'end-',
}
//----------------------------------------------------------------
//Typography
export enum FontSize {
    XS = 'xs',
    SM = 'sm',
    BASE = 'base',
    LG = 'lg',
    XL = 'xl',
    XXL = '2xl',
    ThXL = '3xl',
    FoXL = '4xl',
    FiXL = '5xl',
    SiXL = '6xl',
    SeXL = '7xl',
    EiXL = '8xl',
    NiXL = '9xl',
}
export enum FontFamily {
    SANS_SERIF = 'sans',
    SERIF = 'serif',
    MONOSPACE = 'monospace',
}
export enum FontWeight {
    THIN = 'thin',
    EXTRA_LIGHT = 'extralight',
    LIGHT = 'light',
    NORMAL = 'normal',
    MEDIUM = 'medium',
    SEMIBOLD = 'semibold',
    BOLD = 'bold',
    EXTRABOLD = 'extrabold',
    BLACK = 'black',
}
export enum LetterSpacing {
    TIGHTER = 'tighter',
    TIGHT = 'tight',
    NORMAL = 'normal',
    WIDE = 'wide',
    WIDER = 'wider',
    WIDEST = 'widest'
}
export enum LineHeight {
    NONE = 'none',
    TIGHT = 'tight',
    SNUG = 'snug',
    NORMAL = 'normal',
    RELAXED = 'relaxed',
    LOOSE = 'loose',
}
export enum TextDecoration {
    UNDERLINE = 'underline',
    LINE_THROUGH = 'line-through',
    NO_UNDERLINE = 'no-underline'
}
export enum TextOverflow {
    TRUNCATE = 'truncate',
    OVERFLOW_ELLIPSIS = 'overflow-ellipsis',
    OVERFLOW_CLIP = 'overflow-clip',
}
export enum TextTransform {
    UPPERCASE = 'uppercase',
    LOWERCASE = 'lowercase',
    CAPITALIZE = 'capitalize',
    NORMAL_CASE = 'normal-case'
}
export enum TextAlign {
    CENTER = 'center',
    LEFT = 'left',
    RIGHT = 'right',
    JUSTIFY = 'justify'
}
//----------------------------------------------------------------
//Transition
export enum TransitionProperty {
    OPACITY = 'opacity',
    SHADOW = 'shadow',
    TRANSFORM = 'transform',
    COLORS = 'colors',
    NONE = 'none',
    ALL = 'all',
    DEFAULT = ''
}
export enum TransitionTimingFunction {
    EASE_LINEAR = 'ease-linear',
    EASE_IN = 'ease-in',
    EASE_OUT = 'ease-out',
    EASE_IN_OUT = 'ease-in-out',
}
export type TransitionTiming = 75 | 100 | 150 | 200 | 300 | 500 | 700 | 1000;
type Delay = TransitionTiming;
type Duration = TransitionTiming;
export type Transition = [TransitionProperty, Duration] | 
                         [TransitionProperty, Duration, TransitionTimingFunction] | 
                         [TransitionProperty, Duration, TransitionTimingFunction, Delay];