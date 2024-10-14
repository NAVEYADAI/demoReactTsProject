import { configureStore } from '@reduxjs/toolkit'
import { PostSplice } from './features/postSplice' // עדכן את הנתיב כנדרש
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux'

export const store = configureStore({
    reducer: {
        post: PostSplice.reducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch: () => typeof store.dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
