import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';


export const loadCountersAsync  = createAsyncThunk('counters/loadCountersAsync', async (hasForce, {dispatch}) =>{
    try{
        const fetchAsync =  new Promise((resolve, reject) =>{
            setTimeout(() => {
                console.log("Before Count")
                dispatch(addCounters(2))
                resolve()
            }, 5000);
           })
        
           await fetchAsync();
    }

    catch(err) {
        return Promise.reject(err)
    }


})
const counterSlice = createSlice({
    name: 'counters',
    initialState : {
        count : 0,
        status : ''
    },
    reducers: {
        fetchCounters: (state, action) =>{

        },

        addCounters: (state, action) =>{
            state.count = state.count + action.payload
        }
    },
    extraReducers(builder){
        builder.addCase(loadCountersAsync.pending, (state,action) =>{
            state.status = 'loading'
        });
        builder.addCase(loadCountersAsync.fulfilled, (state,action) =>{
            state.status = 'success'
            state.count += 1
        });
        builder.addCase(loadCountersAsync.rejected, (state, action) =>{
            state.status = 'error'
            state.count = 0
        })

    }
})

export default counterSlice.reducer
export const {fetchCounters, addCounters} = counterSlice.actions

export const fetchFilteredCounter = (state, filteredVal) =>{
    return state.counters.count >filteredVal
}