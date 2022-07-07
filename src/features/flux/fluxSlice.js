import { createSlice } from '@reduxjs/toolkit'

const initialState = []

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