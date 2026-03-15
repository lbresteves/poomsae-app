import { POOMSAE_LIST } from "../data/PoomsaeList";
import { IPoomsae } from "../types/IPoomsae";
import { IPoomsaeCategory, PoomsaeName } from "../types/IPoomsaeCategory";
import { POOMSAE_CATEGORY_LIST } from "./constants";

export type categoryType = typeof POOMSAE_CATEGORY_LIST[number]["category"]

export function PoomsaeDrawer(category: categoryType){
    
    const selectedCategory = POOMSAE_CATEGORY_LIST.find(cat => cat.category === category);
    
    if(!selectedCategory) return [];

    return DrawTwoDifferentPoomsaes(selectedCategory);
}

export function DrawTwoDifferentPoomsaes(selectedCategory: IPoomsaeCategory) {
    const drawnPoomsaes: PoomsaeName[] = []
    const poomsaeList = addWeightToPoomsaeList(selectedCategory.poomsaeList);

    while(drawnPoomsaes.length < 2){
        const randomIndex = Math.floor(Math.random() * poomsaeList.length);
        const drawnPoomsae = poomsaeList[randomIndex].name;

        const isPoomsaeAlreadyDrawed = drawnPoomsaes.includes(drawnPoomsae);

        if(!isPoomsaeAlreadyDrawed){
            drawnPoomsaes.push(drawnPoomsae)
        }
    }

    return drawnPoomsaes;
}

export function addWeightToPoomsaeList(poomsaeList: string[]): IPoomsae[]{
    const weightedPool: IPoomsae[] = [];
    
    poomsaeList.forEach(poomsaeName => {
        const poomsae = POOMSAE_LIST.find(p=>p.name===poomsaeName);

        if(poomsae) {
            for(let i = 0; i < poomsae.weight; i++){
                weightedPool.push(poomsae);
            }
        }
    })
    return weightedPool;
}