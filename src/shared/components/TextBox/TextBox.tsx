import { ColorsType } from "../../theme/ThemeType";
import { ThemedText } from "../ThemedText/ThemedText";
import { ThemedView } from "../ThemedView/ThemedView";

export interface ITextBox {
    text: string;
    background?: keyof ColorsType;
    radius?: number;
}

export const TextBox = ({text, background, radius}: ITextBox)=>{
    return(
        <ThemedView bg={background ?? "lightGray"} radius={radius ?? 12} padH={12}>
            <ThemedText>{text}</ThemedText>
        </ThemedView>
    )
} 