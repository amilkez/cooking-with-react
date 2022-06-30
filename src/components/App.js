import React, { useState } from 'react';
import RecipeList from './RecipeList';
import '../styles/app.css';
import { v4 as uuid } from 'uuid';

function App() {
  const [recipes, setRecipes] = useState(sampleRecipes);

  const handleRecipeAdd = () => {
    const newRecipe = {
      id: uuid(),
      name: 'name',
      servings: 1,
      cookTime: '1:00',
      instructions: 'Instr.',
      ingredients: [
        {
          id: uuid(),
          name: 'name',
          amount: '1 tbsp',
        },
      ],
    };
    setRecipes([...recipes, newRecipe]);
  };

  const handleRecipeDelete = (id) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  };

  return (
    <RecipeList
      recipes={recipes}
      handleRecipeAdd={handleRecipeAdd}
      handleRecipeDelete={handleRecipeDelete}
    />
  );
}

const sampleRecipes = [
  {
    id: 1,
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instructions:
      '1.1 Put salt on Chicken\n2. Put pork on oven\n3. Eat chicken',
    ingredients: [
      {
        id: 1,
        name: 'Chicken',
        amount: '2 pounds',
      },
      {
        id: 2,
        name: 'Salt',
        amount: '1 tbsp',
      },
    ],
  },
  {
    id: 2,
    name: 'Plain Pork',
    servings: 5,
    cookTime: '0:45',
    instructions: '1.1 Put paprika on Pork\n2. Put pork on oven\n3. Eat pork',
    ingredients: [
      {
        id: 1,
        name: 'Pork',
        amount: '3 pounds',
      },
      {
        id: 2,
        name: 'Paprika',
        amount: '2tbsp',
      },
    ],
  },
];

export default App;
