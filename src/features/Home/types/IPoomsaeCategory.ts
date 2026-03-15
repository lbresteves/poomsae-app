import { POOMSAE_LIST } from "../data/PoomsaeList";

export type PoomsaeName = typeof POOMSAE_LIST[number]["name"]

export interface IPoomsaeCategory {
    category: string,
    poomsaeList: PoomsaeName[]
}