import React from 'react';

function RecipeIngredientEdit({ ingredient, handleIngredientChange }) {
  const handleChange = (changes) => {
    handleIngredientChange(ingredient.id, { ...ingredient, ...changes });
  };

  return (
    <>
      <input
        type="text"
        className="recipe-edit__input"
        onInput={(e) => handleChange({ name: e.target.value })}
        value={ingredient.name}
      />
      <input
        type="text"
        className="recipe-edit__input"
        onInput={(e) => handleChange({ amount: e.target.value })}
        value={ingredient.amount}
      />
      <button className="btn btn--danger">&times;</button>
    </>
  );
}

export default RecipeIngredientEdit;
