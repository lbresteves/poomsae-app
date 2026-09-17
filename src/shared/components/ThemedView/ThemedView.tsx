import { StyleProp, View, ViewStyle, type ViewProps } from "react-native";

import { useThemeColor } from "@shared/hooks/useThemeColor";
import { buildStyledProps, ICommonStyledProps } from "../../styles/common";
import { theme } from "../../theme/theme";

export type ThemedViewProps = ViewProps & ICommonStyledProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({
  lightColor,
  darkColor,
  style,
  ...otherProps
}: ThemedViewProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background",
  );

  const commonStyles = buildStyledProps({ ...otherProps, theme }) as any;

  return <View style={[{ backgroundColor }, commonStyles, style] as StyleProp<ViewStyle>} {...otherProps} />;
}
