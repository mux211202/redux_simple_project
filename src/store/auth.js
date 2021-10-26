import { createSlice, configureStore } from '@reduxjs/toolkit';
import { authActions } from '.';

const initialAuthState = {
    isLogged: false
}

const authSlice = createSlice({
    name: 'logIn',
    initialState:initialAuthState,
    reducers:{
        login(state){
            state.isLogged = true
        },
        logout(state){
            state.isLogged = false
        }
    }
});

export default authSlice;