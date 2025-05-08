import Footer from "@/common/Footer";
import RecipeDetails from "@/common/RecipeDetails";

export default function Page() {
  return (
    <main>
      <RecipeDetails
        title="Tortilla  "
        imageSrc="/images/imagepages8.png"
        ingredients={[
          " • Place 1 Mission Gluten Free Original Tortilla onto a medium pan until warmed and toasted. ",
        ]}
        instructions={[
          "• Place 1/3 of the seasoned cucumber and tomato mixture onto the tortilla, place chicken breasts and lettuce and top with Athenos Greek Feta Crumbled Cheese. Wrap tight and Enjoy! ",
        ]}
      />
      <Footer />
    </main>
  );
}
