import { RECIPE } from "../utils/reducerTypes";
import { v4 as uuid } from "uuid";

export const recipeReducer = (state, { type, payload }) => {
  switch (type) {
    case RECIPE.ADD:
      return {
        ...state,
        data: [...state.data, { id: uuid(), ...payload }],
      };
    case RECIPE.DELETE:
      return {
        ...state,
        data: state.data.filter(({ id }) => id !== payload),
      };
    case RECIPE.SEARCH:
      console.log(payload);
      return {
        ...state,
        searchText: payload.text,
        searchBy: payload.searchBy,
      };
    default:
      return state;
  }
};
