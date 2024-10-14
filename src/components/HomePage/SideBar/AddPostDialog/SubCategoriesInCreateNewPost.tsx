import SubCategoryInCreateNewPost from './SubCategoryInCreateNewPost'
import { Category } from '../../../../types/category'
interface SubCategoriesInCreateNewPostProps {
    subCategoryId: number | null
    categorySelection: (id: number) => void
    categories: Category
}

const SubCategoriesInCreateNewPost = (
    props: SubCategoriesInCreateNewPostProps
) => {
    const { subCategoryId, categories, categorySelection } = props

    return (
        <div>
            {categories &&
                categories.subCategories.map((subCategory) => (
                    <SubCategoryInCreateNewPost
                        subCategory={subCategory}
                        subCategoryId={subCategoryId}
                        categorySelection={categorySelection}
                    />
                ))}
        </div>
    )
}
export default SubCategoriesInCreateNewPost
