import { Response } from './responseToResponse'

export type post = {
    id: string
    image: string
    title: string
    text: string
    createdAt: Date
    userName: string
    grade: number
    responses: Response[]
    myLike: boolean | null
    responseCount: number
    likeCount: number
    disLikeCount: number
}
