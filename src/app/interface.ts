import { Image as sImage } from "sanity"

export interface Iproducts {
    title: string,
    _id: string,
    price: number,
    description:string,
    image: sImage,
    category: {
        name: string
    }

}