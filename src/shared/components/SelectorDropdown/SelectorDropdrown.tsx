import { useState } from "react"
import { Modal, Pressable, TouchableOpacity } from "react-native"
import { theme } from "../../theme"
import { IconSymbol } from "../IconSymbol/IconSymbol"
import { ThemedText } from "../ThemedText/ThemedText"
import { ThemedView } from "../ThemedView/ThemedView"

export interface ISelectorDropdown {


}

export const SelectorDropdown = ({} : ISelectorDropdown) =>{
    const [modalVisible, setModalVisible] = useState(false)

    return (
        <>
        <Modal visible={modalVisible} transparent animationType="slide">
            <ThemedView  bg={"transparent"} pad={40}>
                <ThemedView pad={20}radius={16} bg="lightGray" flexRow justify="space-between">
                    <ThemedText>Teste</ThemedText>
                    <Pressable onPress={()=>setModalVisible(false)}>
                        <IconSymbol name={"xmark"} size={20} color={theme.colors.text} />
                    </Pressable>
                </ThemedView>
            </ThemedView>
        </Modal>
        <TouchableOpacity style={{flex: 1}} onPress={()=>setModalVisible(true)}>
            <ThemedView bg={"lightGray"} radius={12} flexRow justify="space-between" padH={10} center>
                <ThemedText>Teste</ThemedText>
                <IconSymbol name={"arrow.down"} size={12} color={theme.colors.text} />
            </ThemedView>
        </TouchableOpacity>
        </>
    )
}