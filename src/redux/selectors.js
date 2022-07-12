import { createSelector } from '@reduxjs/toolkit';

export const productTableSelector = (state) => state.productTable.productes;

export const todosRemainingSelecter = createSelector(productTableSelector, (productTable) => {
  return productTable;
});

// export const todosRemainingSelecter = createSelector(
//   todoListSelector,
//   (todoList, status, searchText, priorities) => {
//     return todoList.filter((todo) => {
//       if (status === 'All') {
//         return priorities.length
//           ? todo.name.includes(searchText) && priorities.includes(todo.priority)
//           : todo.name.includes(searchText);
//       }
//       return (
//         todo.name.includes(searchText) &&
//         (status === 'Completed' ? todo.completed : !todo.completed) &&
//         (priorities.length ? priorities.includes(todo.priority) : true)
//       );
//     });
//   }
// );
