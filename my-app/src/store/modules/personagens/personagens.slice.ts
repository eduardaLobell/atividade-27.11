import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { listarPersonagens } from "./actions";

export interface Personagem {
    id: string,
    image: string,
    name: string,
    specie: string,
    gender: string,
    house: string
}


const initialState: Personagem[] = [];


const personagensSlice = createSlice({
    name: 'personagens',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(listarPersonagens.fulfilled, (state, action: PayloadAction<Personagem[]>) => {
            if (!action.payload) {
                return;
            }
            state = action.payload;
            return state
        })
    }   
})

export default personagensSlice.reducer