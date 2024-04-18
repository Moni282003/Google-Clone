import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SearchResult from "./components/SearchResult";
import { AppContext } from "./utils/ContextApi";

function App() {
    return (
        <AppContext>        
            <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home/>}></Route>
                <Route path="/:query/:startIndex" exact element={<SearchResult/>}></Route>
                </Routes>
        </BrowserRouter></AppContext>

    );
}

export default App;
