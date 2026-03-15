import { POOMSAE_CATEGORY_LIST } from "../data/PoomsaeCategoryList";
import { IPoomsaeCategoryDTO, PoomsaeName } from "../types/IPoomsaeCategoryDTO";

export type categoryType = typeof POOMSAE_CATEGORY_LIST[number]["category"]

export function PoomsaeDrawer(category: categoryType){
    
    const selectedCategory = POOMSAE_CATEGORY_LIST.find(cat => cat.category === category);
    
    if(!selectedCategory) return [];

    return DrawTwoDifferentPoomsaes(selectedCategory);
}

export function DrawTwoDifferentPoomsaes(selectedCategory: IPoomsaeCategoryDTO) {
    const drawnPoomsaes: PoomsaeName[] = []
    const poomsaeList = selectedCategory.poomsaeList;

    while(drawnPoomsaes.length < 2){
        const randomIndex = Math.floor(Math.random() * poomsaeList.length);
        const drawnPoomsae = poomsaeList[randomIndex];

        const isPoomsaeAlreadyDrawed = drawnPoomsaes.includes(drawnPoomsae);

        if(!isPoomsaeAlreadyDrawed){
            drawnPoomsaes.push(drawnPoomsae)
        }
    }

    return drawnPoomsaes;
}
