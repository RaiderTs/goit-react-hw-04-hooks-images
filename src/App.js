// import React, { Component } from 'react';

import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './components/Searchbar';
import ImagesInfo from './components/ImagesInfo';

function App() {
  const [imageName, setImageName] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);

  const handleFormSubmit = name => {
    setImageName(name);
    setImages([]);
    setPage(1);
  };

  return (
    <>
      <Searchbar onSubmit={handleFormSubmit} />
      <ImagesInfo
        imageName={imageName}
        images={images}
        page={page}
        setImages={setImages}
        setPage={setPage}
      />
      <ToastContainer autoClose={3000} />
    </>
  );
}

export default App;
