import { createContext } from "react";
import { recipes } from "../data/recipes";
import { recipeReducer } from "../reducers/recipeReducer";
import { useContext } from "react";
import { useReducer } from "react";
import { useEffect } from "react";
import { useMemo } from "react";

const RecipeDataContext = createContext();

const initialRecipes = {
  data: [...recipes],
  searchText: "",
  searchBy: "",
};

export default function RecipeDataProvider({ children }) {
  const [recipesData, dispatch] = useReducer(recipeReducer, initialRecipes);
  const { data, searchText } = recipesData;

  const filteredData = useMemo(() => {
    // const dataFromLS = JSON.parse(localStorage.getItem("recipes"));
    if (recipesData.searchText) {
      if (recipesData.searchBy === "ingredients") {
        return recipesData.data.filter(({ ingredients }) =>
          ingredients
            .join(",")
            .toLowerCase()
            .includes(recipesData.searchText.toLowerCase())
        );
      } else if (
        recipesData.searchBy === "recipe_name" ||
        recipesData.searchBy === "cuisine"
      ) {
        return recipesData.data.filter((recipe) =>
          recipe[recipesData.searchBy]
            .toLowerCase()
            .includes(recipesData.searchText.toLowerCase())
        );
      } else {
        recipesData.data.filter((recipe) =>
          recipe["recipe_name"]
            .toLowerCase()
            .includes(recipesData.searchText.toLowerCase())
        );
      }
    } else {
      return recipesData.data;
    }
  }, [data, searchText]);

  // useEffect(() => {
  //   localStorage.setItem("recipes", JSON.stringify(recipesData.data));
  // }, []);

  return (
    <RecipeDataContext.Provider value={{ recipesData, filteredData, dispatch }}>
      {children}
    </RecipeDataContext.Provider>
  );
}

export const useRecipes = () => useContext(RecipeDataContext);
