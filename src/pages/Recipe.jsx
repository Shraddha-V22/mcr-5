import { useParams } from "react-router-dom";
import { useRecipes } from "../contexts/RecipeDataProvider";
import { useMemo } from "react";

export default function Recipe() {
  const { recipeId } = useParams();
  const {
    recipesData: { data },
  } = useRecipes();

  const recipe = useMemo(() => {
    return data?.find(({ id }) => id === Number(recipeId));
  }, [recipeId]);

  const { id, recipe_name, imageUrl, ingredients, instructions, cuisine } =
    recipe;

  return (
    <section>
      <h1>{recipe_name}</h1>
      <section className="grid w-full grid-cols-2 gap-2">
        <img src={imageUrl} alt="" className="w-full" />
        <div className="flex flex-col justify-between">
          <h2 className="text-2xl font-semibold capitalize">
            cuisine: {cuisine}
          </h2>

          <p>
            <strong>ingredients:</strong> {ingredients.join(",")}
          </p>
          <p>
            <strong>instructions:</strong> {instructions}
          </p>
        </div>
      </section>
    </section>
  );
}
