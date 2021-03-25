import React from 'react';
import Header from '../components/jumbotron';
import About from '../components/about';

function Home() {

    return (

        <div className="container">
            <Header text="Welcome to my portfolio page."/>
            <About />
        </div>

    )

}

export default Home;