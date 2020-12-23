// import React, { Component } from 'react';

import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './components/Searchbar';
import ImagesInfo from './components/ImagesInfo';

function App() {
  const [imageName, setImageName] = useState('');

  const handleFormSubmit = name => {
    setImageName(name);
  };

  return (
    <>
      <Searchbar onSubmit={handleFormSubmit} />
      <ImagesInfo imageName={imageName} />
      <ToastContainer autoClose={3000} />
    </>
  );
}

export default App;
