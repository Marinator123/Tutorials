export enum Taste {
    Good,
    Middle,
    Bad
}

export default class Menu {
    private items: Array<string|undefined>;
    private pages: number;
    private taste: Taste;
    constructor(itemList: Array<string|undefined>, totalPages: number, taste : Taste) {
        this.items = itemList;
        this.pages = totalPages;
        this.taste = taste;
    }
    
    list(): void {
        this.items.forEach((entr : string) => {
            console.log(entr);
        });
        
        console.log(this.taste);
    }
}