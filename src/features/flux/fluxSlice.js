import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {id:1, date:"01/01/2022", type:"in", amount:1000}
]

export const fluxSlice = createSlice({
    name: 'flux',
    initialState,
    reducers: {
        addFlux: (state, {payload}) => {
            state.push(payload)
        }
    }
})

export const { addFlux } = fluxSlice.actions

export default fluxSlice.reducer