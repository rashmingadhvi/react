const shoppingItems = [
    {
        _id:1,
        name:"Tomato",
        desc:"Its fruit",
        price:12.45,
        liked: true
    },
    {
        _id:2,
        name:"Potato",
        desc:"Its veggie",
        price:1.89,
        liked: true
    },
    {
        _id:3,
        name:"Basil",
        desc:"Its plan",
        price:5.22,
        liked: true
    },
    {
        _id:4,
        name:"Turmeric",
        desc:"Its magic veggie",
        price:10.45,
        liked: true
    },
    {
        _id:5,
        name:"beans",
        desc:"Its veggie with protein",
        price:8.34,
        liked: false
    }

];

export function getShoppingItems(){
    return shoppingItems;
}