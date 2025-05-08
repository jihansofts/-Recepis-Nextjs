import Footer from "@/common/Footer";
import RecipeDetails from "@/common/RecipeDetails";

export default function Page() {
  return (
    <main>
      <RecipeDetails
        title="Chicken breast   "
        imageSrc="/images/imagepages7.png"
        ingredients={[
          "- 1 teaspoon paprika  ",
          "- 1 teaspoon of garlic and onion powder ",
          "- 1 tablespoon of lemon juice ",
          "- 1 teaspoon of chopped dill ",
        ]}
        instructions={[
          "Cook with olive oil on medium heat until tender and golden. Chop up chicken breasts along with iceberg lettuce. Set aside.  ",
        ]}
      />
      <Footer />
    </main>
  );
}
