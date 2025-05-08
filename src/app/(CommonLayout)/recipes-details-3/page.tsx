import Footer from "@/common/Footer";
import RecipeDetails from "@/common/RecipeDetails";

export default function Page() {
  return (
    <main>
      <RecipeDetails
        title="Oatmeal snacks "
        imageSrc="/images/imagepages3.png"
        ingredients={[
          "- mash one ripe banana ",
          "- 3 tablespoons of peanut butter  ",
          "- 1 tablespoon of milk (any milk works)  ",
          "- 1 teaspoon of baking powder  ",
          "- pinch of salt  ",
          "- 1 tablespoon of honey (or any sweetener of your choice)  ",
          "- 1 cup of Bob’ Red Mill Quick Cooking Rolled Oats. ",
          "- add 1/2 cup of dried cranberries (or any dried fruit of your choice)  ",
        ]}
        instructions={[
          "• Combine all ingredients in a medium bowl until smooth. Bake at 450° for 20 minutes. Allow to cool and Enjoy!  ",
        ]}
      />
      <Footer />
    </main>
  );
}
