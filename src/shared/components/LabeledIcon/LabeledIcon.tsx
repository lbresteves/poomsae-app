import { TouchableOpacity } from "react-native";
import { theme } from "../../theme";
import { IconSymbol, type IconSymbolName } from "../IconSymbol/IconSymbol";
import { ThemedText } from "../ThemedText/ThemedText";
import { ThemedView } from "../ThemedView/ThemedView";

export interface ILabeledIcon {
    icon: IconSymbolName;
    text: string;
    iconSize?: number;
    textType?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
    onPress?: ()=>void;
}

export const LabeledIcon = ({icon, text, iconSize, textType, onPress}: ILabeledIcon) => {
    return (
        <ThemedView flexRow justify="space-between"fit>
            <ThemedView fit centerX>
                <ThemedText type={textType ?? "default"}>
                    {text}
                </ThemedText>
            </ThemedView>
            <TouchableOpacity onPress={onPress}>
                <IconSymbol name={icon} size={iconSize ?? 48} color={theme.colors.primary} />
            </TouchableOpacity>
        </ThemedView>
    );
};