export type Product = {
    id: number
    title: string
    category: string
    image: string
    rating: number
    statusText: string
    price: number
    oldPrice?: number
    badge: string
    badgeStyle: 'discount' | 'limited' | 'soldout' | 'popular' | 'hotdeal' | 'new'
    inStock: boolean
    buttonText: string
}