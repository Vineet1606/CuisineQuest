import React from "react";
import style from './recipe.module.css';


const Recipe = ({ title, cuisineType,mealType, image, ingredients, source }) => {
    return (
        <div className={style.recipe}>
  
            <h1>{title}</h1>
            <img src={image} alt="" />
            <h2 className="cuisine-type">{cuisineType}</h2>
            <h2 className="meal-Type">{mealType}</h2>
            <h2 className="source">{source}</h2>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            
        </div>
    );
};

export default Recipe;