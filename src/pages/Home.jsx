import { useState } from "react";
import SearchFilter from "../components/SearchFilter";
import { useRecipes } from "../contexts/RecipeDataProvider";
import RecipeCard from "../components/RecipeCard";
import Modal from "../components/Modal";
import AddRecipe from "../components/AddRecipe";

export default function Home() {
  const {
    recipesData: { data },
    filteredData,
  } = useRecipes();
  const [open, setOpen] = useState(false);

  return (
    <section className="flex flex-col items-center gap-2">
      <SearchFilter />
      <section className="flex w-full flex-wrap gap-4">
        {filteredData?.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
        <div className="grid w-[200px] place-items-center rounded-md border border-black p-4">
          <button
            onClick={() => setOpen(true)}
            className="rounded-md border border-black px-2 py-1 uppercase"
          >
            add
          </button>
        </div>
      </section>
      <Modal open={open} setOpen={setOpen}>
        <AddRecipe setOpen={setOpen} />
      </Modal>
    </section>
  );
}
