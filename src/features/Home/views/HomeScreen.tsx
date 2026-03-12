import { LabeledIcon, TextBox, ThemedText, ThemedView } from "@/src/shared/components";

export default function HomeScreen() {
    return(
        <>
            <ThemedView padV={110} padH={48} gap={72}>
                <ThemedView gap={24} fit>
                    <LabeledIcon icon={"arrow.right"} text="Poomsae" textType="title" />
                    <LabeledIcon icon={"arrow.right"} text="Movimentos" textType="title" />

                    <LabeledIcon icon={"repeat"} text="Sorteio" textType="title" />

                    <ThemedView fit gap={8}>
                        <ThemedView flexRow gap={8} fit padH={40}>
                            <ThemedText>1º</ThemedText>
                            <TextBox text={"Koryeo"} />
                        </ThemedView>
                        <ThemedView flexRow gap={8} fit padH={40}>
                            <ThemedText>2º</ThemedText>
                            <TextBox text={"Pyeongwon"} />
                        </ThemedView>
                    </ThemedView>
                    
                </ThemedView>
                
                <LabeledIcon icon={"arrow.right"} text="Consistência" textType="title" />
            </ThemedView>
        </>
    )
}
