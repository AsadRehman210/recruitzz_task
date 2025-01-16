export const ADD_TREATMENT = "ADD_TREATMENT";
export const REMOVE_TREATMENT = "REMOVE_TREATMENT";
export const LOAD_TREATMENTS = "LOAD_TREATMENTS";
export const SAVE_TREATMENTS = "SAVE_TREATMENTS";

export const addTreatment = (treatment) => ({
  type: ADD_TREATMENT,
  payload: treatment,
});

export const removeTreatment = (treatment) => ({
  type: REMOVE_TREATMENT,
  payload: treatment,
});

export const loadTreatments = (treatments) => ({
  type: LOAD_TREATMENTS,
  payload: treatments,
});

export const saveTreatments = () => ({
  type: SAVE_TREATMENTS,
});
