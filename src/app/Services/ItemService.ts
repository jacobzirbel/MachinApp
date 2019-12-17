export interface Item {
    id: string;
    name: string;
    addedBy: string;
    dateAdded: string;
    price: number;
    description: string;
}

export class ItemService {

    private items: Item[] = [
        {
            id: '001',
            name: 'First',
            addedBy: 'Only User',
            dateAdded: '10/15/2019',
            price: 1,
            description: "first item, added october, one dollar"
        },
        {
            id: '002',
            name: 'Second',
            addedBy: 'Only User',
            dateAdded: '11/15/2019',
            price: 2,
            description: "second item, added november, two dollars"
        },
        {
            id: '003',
            name: 'Third',
            addedBy: 'Only User',
            dateAdded: '12/15/2019',
            price: 3,
            description: "third item, added december, three dollars"
        },
    ]

    constructor(){ }

    getItem(id: string): Item {
        return {
            ...this.items.find(item => {
                return item.id === id;
            })
        };
    }

    getAllItems() : Item[]{
        return [...this.items];
    }

    addItem(item: Item){
        this.items.push(item);
        console.log(this.items);
    }

}