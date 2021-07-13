import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
    name: "isLoading",
    initialState: true,
    reducers: {
        setLoadingTrue: (state) => {
            state = true
        },
        setLoadingFalse: (state) => {
            state = false
        }
    }
})

export const {setLoadingTrue, setLoadingFalse} = slice.actions
export default slice.reducer