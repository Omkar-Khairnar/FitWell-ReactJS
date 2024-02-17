import {createSlice} from "@reduxjs/toolkit";

const homeWorkout=[];
const challenges=[];

const workoutReducer = createSlice({
    name:'workoutReducer',
    initialState:{
        homeWorkout,
        challenges
    },
    reducers:{
        setWorkout:(state, action)=>{
            const data=action.payload;
            state.homeWorkout=data
        },
        setChallenges:(state, action)=>{
            const data = action.payload;
            state.challenges=data
        }
    }
})

export const {setWorkout, setChallenges} = workoutReducer.actions;
export default workoutReducer.reducer;