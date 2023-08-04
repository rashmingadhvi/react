import { Observable } from "@reduxjs/toolkit";


export interface ICartoon  {
    title: string,
    year: number,
    creator: string[],
    rating: string,
    genre :string[],
    runtime_in_minutes: number,
    episodes: number,
    image: string,
    id: number
}


export default function CartoonSvc():Promise<ICartoon[]>{

    const url ="https://api.sampleapis.com/cartoons/cartoons2D";
    

        return fetch(url)
        .then(res=>res.json())
        .catch(err=>console.error(err));

    

}