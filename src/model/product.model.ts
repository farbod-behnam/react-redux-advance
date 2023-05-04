export class Product {
    id: number;
    title: string;
    price: number;
    description: string;

    constructor(id: number, title: string, price: number, description: string) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.description = description;
    }
}