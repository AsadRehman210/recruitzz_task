import {
    ADD_TREATMENT,
    REMOVE_TREATMENT,
    LOAD_TREATMENTS,
    SAVE_TREATMENTS,
  } from "../actions/treatmentActions";
  
  const initialState = {
    treatments: [],
  };
  
  export const treatmentReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOAD_TREATMENTS:
        return {
          ...state,
          treatments: action.payload,
        };
  
      case ADD_TREATMENT:
        if (state.treatments.includes(action.payload)) {
          return state;
        }
        return {
          ...state,
          treatments: [...state.treatments, action.payload],
        };
  
      case REMOVE_TREATMENT:
        return {
          ...state,
          treatments: state.treatments.filter(
            (treatment) => treatment !== action.payload
          ),
        };
  
      case SAVE_TREATMENTS:
        localStorage.setItem("treatments", JSON.stringify(state.treatments));
        return state;
  
      default:
        return state;
    }
  };
  