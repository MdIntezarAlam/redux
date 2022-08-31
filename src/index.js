import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store/configureStores";
import { taskAdded } from "./store/task_1";
const root = ReactDOM.createRoot(document.getElementById("root"));

console.log("store", store);

store.dispatch(
  taskAdded({
    id: 1,
    description: "sleeping",
    status: "active",
  })
);

store.dispatch(
  taskAdded({
    id: 2,
    description: "sleeping",
    status: "active",
  })
);
store.dispatch(
  taskAdded({
    id: 3,
    description: "sleeping",
    status: "active",
  })
);
console.log(store.getState());

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
