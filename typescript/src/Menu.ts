export default class Menu {
    private items: Array<string|undefined>;
    private pages: number;

    constructor(itemList: Array<string|undefined>, totalPages: number) {
        this.items = itemList;
        this.pages = totalPages;
    }

    list(): void {
        this.items.forEach((entr : string) => {
            console.log(entr);
        });
    }
}