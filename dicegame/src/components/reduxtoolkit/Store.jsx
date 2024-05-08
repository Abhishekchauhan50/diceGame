
import {configureStore} from '@reduxjs/toolkit'
import RollSlice from './RollSlice';

const Store = configureStore({
    reducer: RollSlice
})

export default Store;