const formatValue = (type: string | number | boolean): string | number | boolean =>{
    if(typeof type === "string"){
        return type.toUpperCase();
    }else if(typeof type === "number"){
        return type * 10 ;
    }else{
        return !type;
    }
}


const getLength = (value: string | any[]):number =>{
    if(Array.isArray(value)){
        return value.length;
    }else{
        return value.length;
    }
}


class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getDetails(){
        return `'Name: ${this.name}, Age: ${this.age}'`
    }
}


type Tvalue = {
    title: string;
    rating: number;
}
const filterByRating = (value:Tvalue[]):Tvalue[]=>{
    let result = value.filter((item:Tvalue):boolean=> item.rating >= 4)
    return result;
}



type Tuser = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}
const filterActiveUsers = (users:Tuser[]):Tuser[]=>{
    return users.filter((user:Tuser):boolean=>user.isActive === true)
}



interface Book {
    title:string;
    author:string;
    publishedYear:number;
    isAvailable:boolean;
}
const printBookDetails = (book:Book):void=>{
    console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable ? "Yes": "No"}`);
}



const getUniqueValues = <T extends string | number>(array1: T[], array2: T[]): T[] => {
    let unique: T[] = [];
    let uniqueIndex = 0;

   
    for (let i = 0; i < array1.length; i++) {
        let exists = false;

        for (let j = 0; j < uniqueIndex; j++) {
            if (unique[j] === array1[i]) {
                exists = true;
                break;
            }
        }

        if (!exists) {
            unique[uniqueIndex] = array1[i];
            uniqueIndex++;
        }
    }
    for (let i = 0; i < array2.length; i++) {
        let exists = false;

        for (let j = 0; j < uniqueIndex; j++) {
            if (unique[j] === array2[i]) {
                exists = true;
                break;
            }
        }

        if (!exists) {
            unique[uniqueIndex] = array2[i];
            uniqueIndex++;
        }
    }

    return unique;
};



type Product = {
    name:string;
    price:number
    quantity:number;
    discount?: number
}
function calculateTotalPrice(products: Product[]): number {
    return products.reduce((total: number, product: Product): number => {
        const discountRate = product.discount ? (1 - product.discount / 100) : 1;
        const itemTotal = product.price * product.quantity * discountRate;
        return total + itemTotal;
    }, 0);
}




