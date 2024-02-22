export const SUBMIT_FORM = "SUBMIT_FORM";
export const ADD_POST = "ADD_POST";

export const submitForm = (formData) => ({
  type: SUBMIT_FORM,
  payload: formData,
});

export const AddPost = (postdata) => ({
  type: ADD_POST,
  payload: postdata,
});
