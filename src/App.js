import Recipe from './Recipe';
import React,{useEffect, useState} from "react";
import './App.css';

const App = () => {
  const APP_ID = "714c35cb";
  const APP_KEY = "05ee0215ff686330395d2434eeafa8f9	";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('paneer');

  useEffect(() => {
    getRecipes();
  }, [query]);
  

 const getRecipes = async () => {
  var url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  console.log(url);
   const response = await fetch(url);
   const data = await response.json();
   setRecipes(data.hits);
   console.log(data.hits);
 };

 const updateSearch = e => {
  setSearch(e.target.value);
  console.log(search);
 };

 const getSearch = e => {
   e.preventDefault();
  setQuery(search);
  setSearch('');
 };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}  placeholder="Search for Your Favorite Food"/>
        <button  className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes">
      {recipes.map(recipe => (
        <Recipe 
        key={recipe.recipe.label}
        title ={recipe.recipe.label} 
        image={recipe.recipe.image}
        cuisineType= {recipe.recipe.cuisineType}
        mealType={recipe.recipe.mealType} 
        source= {recipe.recipe.dishType}
        ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  );
};
export default App;
