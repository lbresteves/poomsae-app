import { LabeledIcon, SelectorDropdown, TextBox, ThemedText, ThemedView } from "@/src/shared/components";
import { usePoomsaeDraw } from "../hooks/usePoomsaeDraw";

export default function HomeScreen() {
    const { drawnPoomsaes, handleDraw } = usePoomsaeDraw("Cadet"); // TODO: Add a category chooser feature

    return(
        <>
            <ThemedView padV={110} padH={48} gap={72}>
                <ThemedView gap={24} fit>
                    <LabeledIcon icon={"arrow.right"} text="Poomsae" textType="title" />
                    <LabeledIcon icon={"arrow.right"} text="Movimentos" textType="title" />

                    <LabeledIcon icon={"repeat"} text="Sorteio" textType="title" onPress={handleDraw}/>

                    <ThemedView padH={20} gap={20} fit>
                        <ThemedView gap={8} fit>
                            <ThemedView flexRow gap={8} fit>
                                <ThemedText>1º</ThemedText>
                                <TextBox text={drawnPoomsaes[0] || ""} />
                            </ThemedView>
                            <ThemedView flexRow gap={8} fit>
                                <ThemedText>2º</ThemedText>
                                <TextBox text={drawnPoomsaes[1] || ""} />
                            </ThemedView>
                        </ThemedView>
                        <ThemedView gap={8} flexRow fit>
                            <ThemedText>Categoria: </ThemedText>
                            <SelectorDropdown />
                        </ThemedView>
                    </ThemedView>
                </ThemedView>             
                <LabeledIcon icon={"arrow.right"} text="Consistência" textType="title" />
            </ThemedView>
        </>
    )
}
