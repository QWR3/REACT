import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
    name: "page",
    initialState: {
        value:1
    },
    reducers: {
        nextPage: (state) => {
            state.value += 1
        }
        ,
        previewPage: (state) => {
            state.value -= 1
        }

    }
})

export const {nextPage, previewPage} = slice.actions
export default slice.reducer