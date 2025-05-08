import Footer from "@/common/Footer";
import RecipeDetails from "@/common/RecipeDetails";

export default function Page() {
  return (
    <main>
      <RecipeDetails
        title="Mediterranean wraps   "
        imageSrc="/images/imagepages6.png"
        ingredients={[
          "- chop up 1 large cucumber into small cubes  ",
          "- chop up 1 large tomato ",
          "- chop up 1/3 cup of Kalamata olives  ",
          "- salt and pepper  ",
          "- 1 tablespoon of olive oil",
        ]}
        instructions={[
          "Combine into a small bowl and place in the fridge to chill. ",
        ]}
      />
      <Footer />
    </main>
  );
}
