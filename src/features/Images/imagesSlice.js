import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit'
import { client } from '../../api/client'

const initialState = {
    images: [],
    status: 'idle',
    error: null
}
export const loadImages = createAsyncThunk('images/loadImages', async (pageNumber) => {
    console.log("enterer here ")
    try {
        const response = await client.get(`./api/listing-page${pageNumber}.json`)
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
        setImageLoadStatus: (state, action) => {
            state.status = action.payload
        }
    },
    extraReducers(builder) {
        builder.addCase(loadImages.pending, (state, action) => {
            state.status = 'loading'
        });
        builder.addCase(loadImages.fulfilled, (state, action) => {
            state.status = 'succeeded'
            const result = action.payload.page['content-items'].content
            let formattedResult = result.map((item) => { return { ...item, id: nanoid() } })
            state.images.push(...formattedResult)
        })
        builder.addCase(loadImages.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message
        })
    }
})

export const { setImageLoadStatus } = imagesSlice.actions
export default imagesSlice.reducer

export const filteredImages = (state, filteredText) => {
    if (filteredText) {
        return state.images.images.filter(image => image.name.toLowerCase().includes(filteredText.toLowerCase()))
    }
    return state.images.images
}