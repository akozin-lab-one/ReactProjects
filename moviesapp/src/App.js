import React from 'react';
import Header from './components/Header';
import './App.css'
import Main from './components/Main';
import { Route, Routes } from 'react-router';
import Detail from './components/Detail';

const App = () => {
    return ( <
        div >
        <
        Header / >
        <
        Routes >
        <
        Route path = "/"
        element = { < Main / > }
        / >        <
        Route path = "/home"
        element = { < Main / > }
        / ><
        Route path = "/movies/detail/:movieid"
        element = { < Detail / > }
        / > < /
        Routes > < /
        div >
    )
}

export default App