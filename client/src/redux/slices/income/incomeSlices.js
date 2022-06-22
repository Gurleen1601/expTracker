//AUTHENTICATED ENPOINT
import {createAsyncThunk, createSlice,createAction} from '@reduxjs/toolkit'
import axios from 'axios';
import baseURL from '../../../utils/baseURL';

//Actions for redirect
export const resetIncCreated = createAction('income/created/reset');
export const resetIncUpdate = createAction('income/update/reset');

//create income action
export const createIncomeAction=createAsyncThunk(
    'income/create',
async (payload,{rejectWithValue,getState,dispatch}) => {
   //get user token from store
   const userToken = getState()?.users?.userAuth?.token;
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userToken}`
         },
    };
    try {
        //make http call here
        const {data}=await axios.post(
            `${baseURL}/income`,
        payload,config);
        dispatch(resetIncCreated());
        return data;
    } catch (error) {
        if(!error?.response){
            throw error;
        }
        return rejectWithValue(error?.response?.data);
    }
});

//fetch all income action
export const fetchAllIncomeAction=createAsyncThunk(
    'income/fetch',
async (payload,{rejectWithValue,getState,dispatch}) => {
   //get user token from store
   const userToken = getState()?.users?.userAuth?.token;
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userToken}`
         },
    };
    try {
        //make http call here
        const {data}=await axios.get(
            `${baseURL}/income?page=${payload}`,
            config);
        return data;
    } catch (error) {
        if(!error?.response){
            throw error;
        }
        return rejectWithValue(error?.response?.data);
    }
});

//update income action
export const updateIncomeAction=createAsyncThunk(
    'income/update',
async (payload,{rejectWithValue,getState,dispatch}) => {
   //get user token from store
   const userToken = getState()?.users?.userAuth?.token;
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userToken}`
         },
    };
    try {
        //make http call here
        const {data}=await axios.put(
            `${baseURL}/income/${payload?.id}`,
        payload,config);
        dispatch(resetIncUpdate());
        return data;
    } catch (error) {
        if(!error?.response){
            throw error;
        }
        return rejectWithValue(error?.response?.data);
    }
});

//slices
const incomeSlices = createSlice({
    name:'income',
    initialState:{},
    extraReducers: (builder) =>{
        //create income
        builder.addCase(createIncomeAction.pending,(state,action)=>{
            state.loading=true;
        });
         //reset action
         builder.addCase(resetIncCreated, (state,action)=>{
            state.isIncCreated=true;
        });
        builder.addCase(createIncomeAction.fulfilled,(state,action)=>{
            state.loading=false;
            state.incomeCreated=action?.payload;
            state.AppErr=undefined;
            state.ServerErr=undefined;
            state.isIncCreated=false;
        });
        builder.addCase(createIncomeAction.rejected,(state,action)=>{
            state.loading=false;
            state.AppErr=action?.payload?.msg;
            state.ServerErr=action?.payload?.msg;
        });
   
    //fetch all income
    builder.addCase(fetchAllIncomeAction.pending,(state,action)=>{
        state.loading=true;
    });
    builder.addCase(fetchAllIncomeAction.fulfilled,(state,action)=>{
        state.loading=false;
        state.incomeList=action?.payload;
        state.AppErr=undefined;
        state.ServerErr=undefined;
    });
    builder.addCase(fetchAllIncomeAction.rejected,(state,action)=>{
        state.loading=false;
        state.AppErr=action?.payload?.msg;
        state.ServerErr=action?.payload?.msg;
    });
     //update income
     builder.addCase(updateIncomeAction.pending,(state,action)=>{
        state.loading=true;
    });
     //reset action
     builder.addCase(resetIncUpdate, (state,action)=>{
        state.isIncUpdated=true;
    });
    builder.addCase(updateIncomeAction.fulfilled,(state,action)=>{
        state.loading=false;
        state.incomeUpdated=action?.payload;
        state.AppErr=undefined;
        state.ServerErr=undefined;
        state.isIncUpdated=false;
    });
    builder.addCase(updateIncomeAction.rejected,(state,action)=>{
        state.loading=false;
        state.AppErr=action?.payload?.msg;
        state.ServerErr=action?.payload?.msg;
    });
 },
});

export default incomeSlices.reducer;