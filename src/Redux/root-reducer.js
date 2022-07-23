import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import productsReducer from "./products/products-reducer";
import recommendedReducer from "./recommended/recommended-reducer";
import categoriesReducer from "./categories/categories-reducer";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: [],
};

const rootReducer = combineReducers({
  recommended: recommendedReducer,
  products: productsReducer,
  categories: categoriesReducer
});

export default persistReducer(persistConfig, rootReducer);
