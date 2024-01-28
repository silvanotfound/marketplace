import { ItemRepository } from "../../domain/repository/itemRepository";

export class ItemRepositoryMemory implements ItemRepository{
    
    items = [
        {
            id: 1,
            name: "Lanterna de sobrevivencia",
            price: 50
        },
        {
            id: 2,
            name: "Mine placa solar",
            price: 50
        },
        {
            id: 3,
            name: "Mochila impermeavel",
            price: 50
        }
    ]

    constructor() {

    }

    findItemById(id: number): any {
        return this.items.find((item) => item.id == id)
    }
}