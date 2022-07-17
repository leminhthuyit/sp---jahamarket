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
        console.log('add state slice:', state);
        console.log('add action slice:', action);
        state.productes.push(action.payload);
      })
      .addCase(updateTableApi.fulfilled, (state, action) => {
        console.log('state slice:', state);
        console.log('action slice:', action);
        // let currentTodo = state.productes.find((p) => p.id === action.payload);
        // console.log(currentTodo);
        state.productes = action.payload;
      });
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
