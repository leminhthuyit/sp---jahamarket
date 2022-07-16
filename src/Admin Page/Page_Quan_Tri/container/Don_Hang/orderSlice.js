// const initState = {
//     search: '',
//     status: 'All',
//     priority: []
// }
// const filterReducer = (state = initState, action) => {
//     switch (action.type) {
//         case 'filter/searchFilterChange':
//             return {
//                 ...state,
//                 search: action.payload
//             };
//         case 'filter/statusFiterChange':
//             return {
//                 ...state,
//                 status: action.payload
//             };
//         case 'filter/prioriryFilterChange':
//             return {
//                 ...state,
//                 priority: action.payload
//             };
//         default:
//             return state;
//     }
// }

// export default filterReducer;

import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "filters",
  initialState: {
    search: "",
    status: "All",
    priority: [],
  },
  reducers: {
    searchFilterChange: (state, action) => {
      //mutation || IMMER
      state.search = action.payload;
    }, // => type: 'filter/searchFilterChange'
    statusFiterChange: (state, action) => {
      state.status = action.payload;
    },
    prioriryFilterChange: (state, action) => {
      state.priority = action.payload;
    },
  },
});
