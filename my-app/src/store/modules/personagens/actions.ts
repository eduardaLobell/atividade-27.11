import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://hp-api.onrender.com/api'; 
const api = axios.create({
	baseURL: URL,
});

export const listarPersonagens = createAsyncThunk('listar', async () => {
    try {
        const response = await api.get('/characters');
		return response.data; // retornando o .data de dentro do body
    } catch {
        return null;
    }
})