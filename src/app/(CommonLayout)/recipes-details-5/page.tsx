import Footer from "@/common/Footer";
import RecipeDetails from "@/common/RecipeDetails";

export default function Page() {
  return (
    <main>
      <RecipeDetails
        title="Spam Musubi"
        imageSrc="/images/imagepages5.png"
        ingredients={[
          "Masubi Sauce:",
          "- 1/3 cup of soy sauce",
          "- 2 tablespoons of brown sugar",
          "- 1 teaspoon of rice vinegar",
          " In a saucepan combine all ingredients and reduce over medium heat until caramelized.",
          "",
          "Spam:",
          " Cut up spam into horizontal pieces about 1/2 an inch thick.",
          "- Cook on medium heat until golden and crispy.",
          "- Brush on Masubi sauce.",
        ]}
        instructions={[
          " Cut and prepare nori sheets into strips.",
          " Place a generous amount of rice onto a piece of plastic wrap into a Masubi shape.",
          " Brush with the Masubi sauce and place the spam on top.",
          " Add another layer of rice and shape.",
          " Wrap the nori piece around the middle of the spam Masubi and seal shut with water.",
          " Repeat with the rest of the spam pieces.",
          " Plate and Enjoy!",
        ]}
      />
      <Footer />
    </main>
  );
}
