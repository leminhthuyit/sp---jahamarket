import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as productesService from '../../../../Api/productesApi';

const productTableSlice = createSlice({
  name: 'todoTable',
  initialState: { status: 'idle', productes: [] },
  reducers: {
    addProduct: (state, action) => {
      //mutation || IMMER
      state.push(action.payload);
    }, // => type: 'filter/searchFilterChange'
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchApiTable.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchApiTable.fulfilled, (state, action) => {
        state.productes = action.payload;
        state.status = 'idle';
      })
      .addCase(addTableApi.fulfilled, (state, action) => {
        state.productes.push(action.payload);
      })
      .addCase(updateTableApi.fulfilled, (state, action) => {
        // console.log('state slice:', state.productes);
        // console.log('action slice:', action.payload);
        // const currentProduct = state.productes.filter((p) => p.id === action.payload.id);
        // action.payload = currentProduct;

        state.productes = action.payload;
      })
  },
});

export default productTableSlice;

export const fetchApiTable = createAsyncThunk('product/fetchApiTable', async () => {
  const res = await productesService.productesApi();
  return res;
});

export const addTableApi = createAsyncThunk('product/addTableApi', async (newTodo) => {
  // console.log('newTodo slice:', newTodo);
  const res = await productesService.addProductesApi(newTodo);
  return res;
});

export const updateTableApi = createAsyncThunk('product/updateTableApi', async (newTodo) => {
  // console.log('id slice:', id);
  // console.log('newTodo slice:', newTodo);
  const id = newTodo.id;
  const res = await productesService.updateProductesApi(id, newTodo);
  console.log('res:', res);
  return res;
});

export const deleteTableApi = createAsyncThunk('product/deleteTableApi', async (id) => {
  console.log(id)
  const res = await productesService.deteleProductesApi(id);
  return res;
});

/*
 => todos/fetchApiTable/pending
 => todos/fetchApiTable/fullfilled
 => todos/fetchApiTable/rejected
*/

// ví dụ redux thunk
// export function addProducts(todo) {
//   // thunk function - thunk action
//   return function addProductsThunk(dispatch, getState) {
//     console.log('addProductsThunk: ', getState());
//     console.log(todo);
//     // custom
//     todo.product = 'samsung note 5';
//     dispatch(todoTableSlice.actions.addProduct(todo));
//     console.log('addProductsThunk after: ', getState());
//   };
// }
