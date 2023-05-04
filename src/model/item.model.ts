export class Item {
    // title: 'Test Item', quantity: 3, total: 18, price: 6
    id: number;
    title: string;
    quantity: number;
    totalPrice: number;
    price: number;

    constructor(id: number, title: string, quantity: number, total: number, price: number) {
        this.id = id;
        this.title = title;
        this.quantity = quantity;
        this.totalPrice = total;
        this.price = price;
    }
}