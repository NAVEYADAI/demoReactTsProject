import { post } from '../../types/post'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Response } from '../../types/responseToResponse'

const initialState: post[] = []

export const PostSplice = createSlice({
    name: 'postSplice',
    initialState,
    reducers: {
        addPost: (state, action: PayloadAction<post>) => {
            state.push(action.payload)
        },

        deletePost: (state, action: PayloadAction<string>) => {
            return state.filter((post) => post.id !== action.payload)
        },

        getPost: (state, action: PayloadAction<post[]>) => {
            return action.payload
        },

        setNumOfLikeOnLikeInPost(
            state,
            action: PayloadAction<{
                numOfLike: number
                numOfDisLike: number
                postId: string
                isLike: boolean | null
            }>
        ) {
            return state.map((post) => {
                if (post.id === action.payload.postId) {
                    return {
                        ...post,
                        likeCount: action.payload.numOfLike,
                        disLikeCount: action.payload.numOfDisLike,
                        isLike: action.payload.isLike,
                    }
                }
                return post
            })
        },

        setNumOfLikeOnLikeInResponse(
            state,
            action: PayloadAction<{
                numOfLike: number
                numOfDisLike: number
                postId: string
                responseId: string
                isLike: boolean | null
            }>
        ) {
            const updateNumOfLikeInResponse = (
                responseList: Response[]
            ): Response[] => {
                return responseList.map((tmpResponse) => {
                    if (tmpResponse.id === action.payload.responseId) {
                        return {
                            ...tmpResponse,
                            likeCount: action.payload.numOfLike,
                            disLikeCount: action.payload.numOfDisLike,
                            isLike: action.payload.isLike,
                        }
                    }
                    if (tmpResponse.responseTo) {
                        return {
                            ...tmpResponse,
                            responseTo: updateNumOfLikeInResponse(
                                tmpResponse.responseTo
                            ),
                        }
                    }
                    return tmpResponse
                })
            }
            return state.map((post) => {
                if (post.id === action.payload.postId) {
                    return {
                        ...post,
                        responses: updateNumOfLikeInResponse(post.responses),
                    }
                }
                return post
            })
        },

        addResponseToPost: (
            state,
            action: PayloadAction<{ postId: string; newResponse: Response }>
        ) => {
            return state.map((post) => {
                if (post.id === action.payload.postId) {
                    return {
                        ...post,
                        responses: [
                            action.payload.newResponse,
                            ...post.responses,
                        ], // הוספת תגובה חדשה לתחילת הרשימה
                        responseCount: post.responseCount + 1, // עדכון מספר התגובות
                    }
                }
                return post
            })
        },

        clickOpenResponseToPost: (
            state,
            action: PayloadAction<{ postId: string; listResponse: Response[] }>
        ) => {
            return state.map((post) => {
                if (post.id === action.payload.postId) {
                    return {
                        ...post,
                        responses: action.payload.listResponse,
                    }
                }
                return post
            })
        },

        clickOpenResponseToResponse: (
            state,
            action: PayloadAction<{
                postId: string
                dadResponseId: string
                chileResponses: Response[]
            }>
        ) => {
            const { postId, dadResponseId, chileResponses } = action.payload

            const findAndUpdateResponse = (
                responseList: Response[]
            ): Response[] => {
                return responseList.map((tmpResponse) => {
                    if (tmpResponse.id === dadResponseId) {
                        return {
                            ...tmpResponse,
                            responseTo: [...chileResponses],
                        }
                    }
                    if (tmpResponse.responseTo) {
                        return {
                            ...tmpResponse,
                            responseTo: findAndUpdateResponse(
                                tmpResponse.responseTo
                            ),
                        }
                    }
                    return tmpResponse
                })
            }

            return state.map((post) => {
                if (post.id === postId) {
                    return {
                        ...post,
                        responses: findAndUpdateResponse(post.responses),
                    }
                }
                return post
            })
        },

        addResponseToResponse: (
            state,
            action: PayloadAction<{
                postId: string
                responseId: string
                newResponse: Response
            }>
        ) => {
            return state.map((post) => {
                if (post.id === action.payload.postId) {
                    return {
                        ...post,
                        responses: post.responses.map((tmpResponse) => {
                            if (tmpResponse.id === action.payload.responseId) {
                                return {
                                    ...tmpResponse,
                                    responseTo: [
                                        action.payload.newResponse,
                                        ...tmpResponse.responseTo,
                                    ],
                                    responseCount:
                                        tmpResponse.responseCount + 1,
                                }
                            }
                            return tmpResponse
                        }),
                    }
                }
                return post
            })
        },

        updateResponse: (
            state,
            action: PayloadAction<{ postId: string; response: Response }>
        ) => {
            return state.map((post) => {
                if (post.id === action.payload.postId) {
                    return {
                        ...post,
                        responses: post.responses.map((tmpResponse) => {
                            if (tmpResponse.id === action.payload.response.id) {
                                return action.payload.response
                            }
                            return tmpResponse
                        }),
                    }
                }
                return post
            })
        },
    },
})

export default PostSplice.reducer
export const {
    addPost,
    deletePost,
    addResponseToPost,
    clickOpenResponseToResponse,
    getPost,
    clickOpenResponseToPost,
    updateResponse,
    setNumOfLikeOnLikeInPost,
    setNumOfLikeOnLikeInResponse,
    addResponseToResponse,
} = PostSplice.actions
