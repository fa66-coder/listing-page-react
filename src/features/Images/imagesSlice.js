import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { client } from '../../api/client'

const initialState = {
    images: [],
    status: 'idle',
    error: null
}
export const loadImages = createAsyncThunk('images/loadImages', async (pageNumber) => {
    console.log("enterer here ")
    try {
        const response = await client.get(`./src/api/listing-page${pageNumber}.json`)
        return response.data
    }
    catch (err) {
        return Promise.reject(err.message ? err.message : data)
    }
})

const imagesSlice = createSlice({
    name: 'images',
    initialState: initialState,
    reducers: {
        addImages: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(name, posterImage) {
                return {
                    payload: {
                        id: nanoid(),
                        name,
                        posterImage
                    }

                }
            }
        },
    },
    extraReducers(builder) {
        builder.addCase(loadImages.pending,(state,action) =>{
            state.status = 'loading'
        });
        builder.addCase(loadImages.fulfilled,(state, action) =>{
            state.status = 'succeeded'
            const result = action.payload.page['content-items'].content
            state.images.push(...result)
        })
        builder.addCase(loadImages.rejected,(state, action) =>{
            state.status = 'failed';
            state.error = action.error.message
        })
    }
})

export const { addImages } = imagesSlice.actions
export default imagesSlice.reducer

export const filteredImages = (state,filteredText) => {
    if(filteredText) {
        return state.images.images.filter(image=>image.name.toLowerCase().includes(filteredText.toLowerCase()))
    } 
    return state.images.images
}