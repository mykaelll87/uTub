import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./reducers";
import { RootSaga } from "./sagas";

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();
export default createStore(rootReducer, composeEnhancers(
  applyMiddleware(sagaMiddleware),
));
sagaMiddleware.run(RootSaga);