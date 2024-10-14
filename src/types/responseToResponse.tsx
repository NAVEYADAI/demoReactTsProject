import { user } from './user'

export type Response = {
    id: string
    createdAt: Date
    user?: user
    userName: string
    description: string
    // postId:string;
    responseTo: Response[]
    responseCount: number
    grade: number
    myLike: boolean | null
    likeCount: number
    disLikeCount: number
}
export type Responses = Response & {
    responses: Response
}
