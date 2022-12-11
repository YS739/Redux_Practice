// 1. 리듀서를 만든다.
const rootReducer = combineReducers({
  // 만든 리듀서들(modules에서 가져온다)
  account,
});

// 2. 만든 리듀서를 통해 store를 생성한다.
const store = createStore(rootReducer);

// 3. 생성한 store를 export
export default store;
