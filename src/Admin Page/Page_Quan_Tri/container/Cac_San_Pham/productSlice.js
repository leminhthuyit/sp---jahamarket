import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as productesService from '../../../../../api/productesApi';

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
      });
  },
});

export default productTableSlice;

export const fetchApiTable = createAsyncThunk('productes/fetchApiTable', async () => {
  const res = await productesService.productesApi();
  return res;
});

export const addTableApi = createAsyncThunk('productes/addTableApi', async (newTodo) => {
  const res = await productesService.addProductesApi(newTodo);
  console.log('newTodo: ', newTodo);
  console.log('addProduct: ', res);
  return res;
});

export const updateTableApi = createAsyncThunk(
  'productes/addTableApi',
  async (idTable, newTodo) => {
    const res = await productesService.updateProductesApi(idTable, newTodo);
    console.log('newTodo: ', newTodo);
    console.log('addProduct: ', res);
    return res;
  }
);

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
