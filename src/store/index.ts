import createSagaMiddleware from "@redux-saga/core"
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from "redux-devtools-extension"
import { rootReducer } from './reducer'
import { rootSaga } from "./saga"

export const configureStore = (preloadedState = {}) => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

  let sagaTask = sagaMiddleware.run(rootSaga);

  if (module.hot) {
    module.hot.accept("./reducer", () => {
      store.replaceReducer(require("./reducer").rootReducer);
    });

    module.hot.accept("./saga", () => {
      sagaTask.cancel();
      sagaTask.toPromise().then(() => {
        sagaTask = sagaMiddleware.run(require("./saga").rootSaga);
      });
    });
  }

  return store;
}
