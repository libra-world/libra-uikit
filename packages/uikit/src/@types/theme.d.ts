import {ResponsiveValue, TLengthStyledSystem} from 'styled-system'
import {
  FontFamilyProperty,
  FontSizeProperty,
  ColorProperty,
  MarginProperty,
  FontWeightProperty,
  PaddingProperty,
  // LineHeightProperty,
  HeightProperty,
  WidthProperty,
  BackgroundProperty,
  BorderProperty,
  MinHeightProperty,
  PositionProperty,
  TopProperty,
  LeftProperty,
  DisplayProperty,
  BorderRadiusProperty,
  RightProperty,
  // ZIndexProperty,
  // BottomProperty,
  // GridTemplateColumnsProperty,
  // GridGapProperty,
  BoxShadowProperty,
  // GlobalsNumber,
  // JustifyContentProperty,
  // OverflowProperty,
} from 'csstype'

interface CommonTheme {
  fontFamily?: ResponsiveValue<FontFamilyProperty>
  daySize?: number | (number | null)[] | undefined
}

export interface NavButtonTheme {
  navButtonHeight?: ResponsiveValue<HeightProperty<TLengthStyledSystem>>
  navButtonWidth?: ResponsiveValue<WidthProperty<TLengthStyledSystem>>
  navButtonBackground?: ResponsiveValue<BackgroundProperty<TLengthStyledSystem>>
  navButtonBorder?: ResponsiveValue<BorderProperty<TLengthStyledSystem>>
  navButtonPadding?: ResponsiveValue<PaddingProperty<TLengthStyledSystem>>
  navButtonIconHeight?: string
  navButtonIconWidth?: string
  navButtonIconColor?: string
}

export interface LabelTheme extends CommonTheme {
  dayLabelFontWeight?: ResponsiveValue<FontWeightProperty>
  dayLabelFontSize?: ResponsiveValue<FontSizeProperty<TLengthStyledSystem>>
  dayLabelColor?: ResponsiveValue<ColorProperty>
}

export interface InputTheme extends CommonTheme {
  inputLabelDisplay?: ResponsiveValue<DisplayProperty>
  inputLabelPosition?: ResponsiveValue<PositionProperty>
  inputLabelBorder?: ResponsiveValue<BorderProperty<TLengthStyledSystem>>
  inputLabelBorderRadius?: ResponsiveValue<BorderRadiusProperty<TLengthStyledSystem>>
  inputLabelBackground?: ResponsiveValue<BackgroundProperty<TLengthStyledSystem>>
  inputLabelMargin?: ResponsiveValue<MarginProperty<TLengthStyledSystem>>
  inputFontWeight?: ResponsiveValue<FontWeightProperty>
  inputPlaceholderFontWeight?: ResponsiveValue<FontWeightProperty>
  inputFontSize?: ResponsiveValue<FontSizeProperty<TLengthStyledSystem>>
  inputColor?: ResponsiveValue<ColorProperty>
  inputFlex?: string
  inputPlaceholderColor?: ResponsiveValue<ColorProperty>
  inputBackground?: ResponsiveValue<BackgroundProperty<TLengthStyledSystem>>
  inputMinHeight?: ResponsiveValue<MinHeightProperty<TLengthStyledSystem>>
  inputWidth?: ResponsiveValue<WidthProperty<TLengthStyledSystem>>
  inputPadding?: ResponsiveValue<PaddingProperty<TLengthStyledSystem>>
  inputBorder?: ResponsiveValue<BorderProperty<TLengthStyledSystem>>
  inputLabelActiveBoxShadow?: ResponsiveValue<BoxShadowProperty>
  inputIconIconWidth?: string
  inputIconIconHeight?: string
  inputIconIconColor?: string
  inputLabelTheme?: object
  inputTheme?: object
}
