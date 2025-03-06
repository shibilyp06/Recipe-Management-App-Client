import React, { useState } from 'react';
import Header from '../components/Header';
import axiosInstance from "../api/axios"

const AddRecipe = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newRecipe = { title, ingredients, steps };

    const response = await axiosInstance.post('/addRecipe',newRecipe);

    if (response.ok) {
      alert('Recipe added successfully!');
      setTitle('');
      setIngredients('');
      setSteps('');
    } else {
      alert('Failed to add recipe');
    }
  };

  return (
   <>
   <Header/>
    <div className='' style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Add New Recipe</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{ padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
        />
        <textarea
          placeholder="Ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          required
          style={{ padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
        />
        <textarea
          placeholder="Steps"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          required
          style={{ padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
        />
        <button type="submit" style={{ padding: '10px', borderRadius: '8px', background: '#333', color: '#fff', cursor: 'pointer' }}>
          Add Recipe
        </button>
      </form>
    </div>
   </>
  );
};

export default AddRecipe;
