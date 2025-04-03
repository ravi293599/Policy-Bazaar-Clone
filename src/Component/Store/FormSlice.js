import { createSlice } from "@reduxjs/toolkit";

const FormSlice = createSlice({
    name: "FormSlice",
    initialState: {
        UserData: null
    },
    reducers: {
        addData: (state,action) =>{
            state.UserData = action.payload;
        }
    }
})
export const {addData} = FormSlice.actions
export default FormSlice.reducer