import { Ingredient } from "../shared/ingredient.model";

export class Recipe{
    public id : number;
    public name : string;
    public desc : string;
    public imgPath : string;
    public ingredients : Ingredient[];

    constructor(id: number,name : string, desc : string, imgPath, ingredients : Ingredient[]){
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.imgPath = imgPath;
        this.ingredients = ingredients
    }
}