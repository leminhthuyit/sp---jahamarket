import { configureStore } from '@reduxjs/toolkit';
import productTableSlice from '../Admin Page/Trang_Quan_Tri/Content/Cac_San_Pham/productSlice';

const store = configureStore({
  reducer: {
    productTable: productTableSlice.reducer,
  },
});

export default store;

// import { createStore } from "redux";
// import rootReducer from "./reducer";
// import { composeWithDevTools } from 'redux-devtools-extension';

// const composedEnhancers = composeWithDevTools();

// const store = createStore(rootReducer, composedEnhancers);

// export default store;
