export class SubCategory  {
    private category: string;
    private name:string;
    private selected: boolean;

    constructor(category: string, name: string) {
        this.category = category;
        this.name = name;
        this.selected = false;
    }
    selectCategory(){
        this.selected = !this.selected;
    }
    getCategoryName(){
        return this.category;
    }

}
export class AllCategory  {
    private selected: number;
    private listOfCategories: SubCategory[];


    constructor() {
        this.selected = 0;
        this.listOfCategories = [];
    }
    addCategory(category: SubCategory){
        this.listOfCategories.push(category);
        this.selected += 1;
    }
    removeCategory(category: SubCategory){

    }

}
