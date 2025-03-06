import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import axiosInstance from '../api/axios';

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axiosInstance.get('/recipes');
        setRecipes(response.data);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, []);

  const handleAddRecipe = async (e) => {
    e.preventDefault();

    const newRecipe = { title, ingredients, steps };

    try {
      const response = await axiosInstance.post('/addRecipe', newRecipe);
      setRecipes([...recipes, response.data.recipe]);
      setTitle('');
      setIngredients('');
      setSteps('');
      alert('Recipe added successfully!');
    } catch (error) {
      console.error('Error adding recipe:', error);
      alert('Failed to add recipe');
    }
  };

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Header />
      <div className="max-w-3xl mx-auto p-6 font-sans">
        <header className="text-center mb-10">
          <h1 className="text-4xl text-gray-800">Recipe Management Website</h1>
        </header>
        <input
          type="text"
          placeholder="Search recipes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 mb-6 rounded-lg border border-gray-300"
        />
        <form onSubmit={handleAddRecipe} className="mb-8 space-y-4">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full p-3 rounded-lg border border-gray-300"
          />
          <textarea
            placeholder="Ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            required
            className="w-full p-3 rounded-lg border border-gray-300"
          />
          <textarea
            placeholder="Steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            required
            className="w-full p-3 rounded-lg border border-gray-300"
          />
          <button
            type="submit"
            className="w-full p-3 rounded-lg bg-gray-800 text-white hover:bg-gray-700"
          >
            Add Recipe
          </button>
        </form>
        <ul>
          {filteredRecipes.map((recipe) => (
            <li
              key={recipe._id}
              className="bg-gray-100 mb-4 p-4 rounded-lg shadow-md"
            >
              <h2 className="text-2xl text-gray-700">{recipe.title}</h2>
              <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
              <p><strong>Steps:</strong> {recipe.steps}</p>
            </li>
          ))} 
        </ul>
      </div>
    </>
  );
};

export default Home;
