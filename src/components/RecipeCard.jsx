import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecipes } from "../contexts/RecipeDataProvider";
import { RECIPE } from "../utils/reducerTypes";

export default function RecipeCard({ recipe }) {
  const { dispatch } = useRecipes();
  const navigate = useNavigate();
  const { id, recipe_name, imageUrl, ingredients, instructions, cuisine } =
    recipe;
  // const [open, setOpen] = useState(false);

  return (
    <section
      onClick={() => navigate(`/recipe/${id}`)}
      className="w-[200px] cursor-pointer rounded-md border border-black p-2 text-sm"
    >
      <img
        src={imageUrl}
        alt=""
        className="h-[150px] w-full rounded-md object-cover"
      />
      <div className="flex flex-col gap-2">
        <h1 className="line-clamp-1 text-xl font-semibold capitalize">
          {recipe_name}
        </h1>
        <div>
          <div className="flex items-center justify-between">
            <strong>Cuisine Type:</strong>
            <p>{cuisine}</p>
          </div>
          <div className="flex items-center justify-between">
            <strong>Ingredients:</strong>
            <Link>See Recipe →</Link>
          </div>
          <div className="flex items-center justify-between">
            <strong>Instructions:</strong>
            <Link>See Recipe →</Link>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="w-full rounded-md border border-black py-1">
            edit
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              dispatch({ type: RECIPE.DELETE, payload: id });
            }}
            className="w-full rounded-md border border-black py-1"
          >
            delete
          </button>
        </div>
      </div>
      {/* <Modal open={open} setOpen={setOpen}>
        <AddRecipe setOpen={setOpen} />
      </Modal> */}
    </section>
  );
}

// {
//   id: 1,
//   recipe_name: "tincidunt lacus at",
//   imageUrl:
//     "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1153&q=80",
//   ingredients: [
//     "baking powder",
//     "eggs",
//     "all-purpose flour",
//     "raisins",
//     "milk",
//     "white sugar",
//   ],
//   instructions:
//     "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
//   cuisine: "American",
// },
