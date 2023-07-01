import React from "react";
import { useState } from "react";
import { useRecipes } from "../contexts/RecipeDataProvider";
import { RECIPE } from "../utils/reducerTypes";

export default function SearchFilter() {
  const { dispatch } = useRecipes();
  const [searchType, setSearchType] = useState("");

  const selectSearchType = (e) => {
    const { value } = e.target;
    setSearchType(value);
  };

  return (
    <section className="flex flex-wrap items-center gap-2">
      <input
        type="text"
        placeholder="Search recipe"
        className="rounded-md border border-black p-1 indent-2 outline-none"
        onChange={(e) =>
          dispatch({
            type: RECIPE.SEARCH,
            payload: { text: e.target.value, searchBy: searchType },
          })
        }
      />
      <p>based on</p>
      <div className="flex items-center gap-2">
        <SearchBasedOn
          onChange={selectSearchType}
          id="recipe_name"
          name="searchType"
          label="Recipe Name"
          value="recipe_name"
        />
        <SearchBasedOn
          onChange={selectSearchType}
          id="ingredients"
          name="searchType"
          label="Ingredients"
          value="ingredients"
        />
        <SearchBasedOn
          onChange={selectSearchType}
          id="cuisine"
          name="searchType"
          label="Cuisine"
          value="cuisine"
        />
      </div>
    </section>
  );
}

function SearchBasedOn({ value, id, name, label, onChange }) {
  return (
    <div className="flex items-center gap-1 rounded-md border border-black px-2">
      <input
        value={value}
        type="radio"
        onChange={onChange}
        id={id}
        name={name}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
