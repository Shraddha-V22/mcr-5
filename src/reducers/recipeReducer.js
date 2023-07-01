import { RECIPE } from "../utils/reducerTypes";
import { v4 as uuid } from "uuid";

export const recipeReducer = (state, { type, payload }) => {
  switch (type) {
    case RECIPE.ADD:
      localStorage.setItem(
        "recipes",
        JSON.stringify([...state.data, { id: uuid(), ...payload }])
      );
      return {
        ...state,
        data: [...state.data, { id: uuid(), ...payload }],
      };
    case RECIPE.DELETE:
      // JSON.parse(localStorage.getItem("recipes")).filter(
      //   ({ id }) => id !== payload
      // );
      return {
        ...state,
        data: state.data.filter(({ id }) => id !== payload),
      };
    case RECIPE.SEARCH:
      console.log({ payload, state });
      return {
        ...state,
        searchText: payload.text,
        searchBy: payload.searchBy,
      };
    default:
      return state;
  }
};
