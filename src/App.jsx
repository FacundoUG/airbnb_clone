import React from "react";
import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

export default function App(){

    const cards = data.map(item => {
        return <Card 
            key={item.id}
            item={item}
        />
    })
    
    return(
        <>
            <NavBar/>
            <Hero/>
            <div className="list">
                {cards}
            </div>
        </>
    )
}