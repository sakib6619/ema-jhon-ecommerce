import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Header from './Component/Header/Header';
import Shop from './Component/Shop/Shop';
import Review from './Component/Review/Review';

function App() {
  return (
    <div className="">
      <Header></Header>
    <BrowserRouter>
    <Routes>
      <Route path="/shop" element={<Shop></Shop>}></Route>
      <Route path="/review" element={<Review></Review>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
