import {configureStore} from '@reduxjs/toolkit';
import imagesReducer from '../features/Images/imagesSlice'

export default configureStore({
    reducer:{
        images:imagesReducer
    }
})