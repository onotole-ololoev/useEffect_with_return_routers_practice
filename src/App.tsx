import React from 'react';
import './App.css';
import Header from "./components/Header";
import Counter from "./components/Counter";
import Time from "./components/Time";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
            <Route path={'/counter'} element={<Counter/>}/>
            <Route path={'/time'} element={<Time/>}/>
            <Route path={'/'} element={<Home />}/>
        </Routes>
    </div>
  );
}

export default App;
