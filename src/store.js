import { createStore } from "redux";

import reducer from "./reducers/personsReducer";

export default createStore(reducer);