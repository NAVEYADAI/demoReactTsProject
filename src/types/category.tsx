export type SubCategoryType = {
    id: number
    name: string
}

export type Category = {
    id: number
    name: string
    iconName: string
    subCategories: SubCategoryType[]
}
