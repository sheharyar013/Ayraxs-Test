import { combineReducers } from "redux";
import { SUBMIT_FORM, ADD_POST } from "./actions";

const formReducer = (state = { formData: {} }, action) => {
  switch (action.type) {
    case SUBMIT_FORM:
      return { ...state, formData: action.payload };
    case ADD_POST:
      return { ...state, postsData: action.payload };
    default:
      return state;
  }
};

export default combineReducers({
  form: formReducer,
});
