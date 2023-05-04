import { Item } from "../../model/item.model";

export class CartState {
    items: Item[];
    totalQuantity: number;

    constructor(items: Item[], totalQuantity: number) {
        this.items = items;
        this.totalQuantity = totalQuantity;
    }
}