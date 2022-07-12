import { configureStore } from '@reduxjs/toolkit';
import productSlice from '../website/Admin/Page_Quan_Tri/container/Cac_San_Pham/productSlice';

const store = configureStore({
  reducer: {
    productTable: productSlice.reducer,
  },
});

export default store;

// import { createStore } from "redux";
// import rootReducer from "./reducer";
// import { composeWithDevTools } from 'redux-devtools-extension';

// const composedEnhancers = composeWithDevTools();

// const store = createStore(rootReducer, composedEnhancers);

// export default store;
