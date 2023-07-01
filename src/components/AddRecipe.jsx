import React from "react";
import { useState } from "react";
import { useRecipes } from "../contexts/RecipeDataProvider";
import { RECIPE } from "../utils/reducerTypes";

export default function AddRecipe({ setOpen }) {
  const { dispatch } = useRecipes();
  const [recipeInput, setRecipeInput] = useState({
    recipe_name: "",
    cuisine: "",
    imageUrl: "",
    ingredients: "",
    instructions: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setRecipeInput((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="rounded-md border border-black p-4">
      <h4>Add Recipe</h4>
      <div className="flex flex-col gap-1">
        <InputForm
          onChange={changeHandler}
          placeholder="Recipe name"
          name="recipe_name"
        />
        <InputForm
          onChange={changeHandler}
          placeholder="Cuisine Type"
          name="cuisine"
        />
        <InputForm
          onChange={changeHandler}
          placeholder="image url"
          name="imageUrl"
        />
        <InputForm
          onChange={changeHandler}
          placeholder="ingredients"
          name="ingredients"
        />
        <textarea
          onChange={changeHandler}
          className="resize-none rounded-md border border-black p-1 indent-2 outline-none placeholder:capitalize"
          cols="30"
          rows="5"
          name="instructions"
          placeholder="instructions"
        />
      </div>
      <div className="mt-2 flex gap-2">
        <button
          onClick={() => {
            dispatch({ type: RECIPE.ADD, payload: recipeInput });
            setOpen(false);
          }}
          className="w-full rounded-md border border-black py-1 text-sm uppercase"
        >
          save
        </button>
        <button
          onClick={() => setOpen(false)}
          className="w-full rounded-md border border-black py-1 text-sm uppercase"
        >
          cancel
        </button>
      </div>
    </section>
  );
}

function InputForm({ placeholder, name, onChange }) {
  return (
    <input
      onChange={onChange}
      className="rounded-md border border-black p-1 indent-2 outline-none placeholder:capitalize"
      type="text"
      name={name}
      placeholder={placeholder}
    />
  );
}
