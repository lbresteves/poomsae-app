import { LabeledIcon, TextBox, ThemedText, ThemedView } from "@/src/shared/components";
import { useEffect, useState } from "react";
import { PoomsaeName } from "../types/IPoomsaeCategory";
import { PoomsaeDrawer } from "../utils/PoomsaeDrawer";

export default function HomeScreen() {
        const [drawnPoomsaes, setDrawnPoomsaes] = useState<PoomsaeName[]>([])

        const handleDraw = ()=>{
            const drawn = PoomsaeDrawer("Cadet"); // TODO: Add a category chooser feature
            setDrawnPoomsaes(drawn);
        }
        useEffect(()=>{
            handleDraw();
        }, [])

    return(
        <>
            <ThemedView padV={110} padH={48} gap={72}>
                <ThemedView gap={24} fit>
                    <LabeledIcon icon={"arrow.right"} text="Poomsae" textType="title" />
                    <LabeledIcon icon={"arrow.right"} text="Movimentos" textType="title" />

                    <LabeledIcon icon={"repeat"} text="Sorteio" textType="title" onPress={handleDraw}/>

                    <ThemedView fit gap={8}>
                        <ThemedView flexRow gap={8} fit padH={40}>
                            <ThemedText>1º</ThemedText>
                            <TextBox text={drawnPoomsaes[0] || ""} />
                        </ThemedView>
                        <ThemedView flexRow gap={8} fit padH={40}>
                            <ThemedText>2º</ThemedText>
                            <TextBox text={drawnPoomsaes[1] || ""} />
                        </ThemedView>
                    </ThemedView>
                    
                </ThemedView>
                
                <LabeledIcon icon={"arrow.right"} text="Consistência" textType="title" />
            </ThemedView>
        </>
    )
}
