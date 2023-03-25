import React from 'react'
import { useState } from 'react';


const Content = () => {
    const handleNameChange = () => {
        const names = ["Bob", "Kevin", "Dave"];
        const int = Math.floor(Math.random() * 3);
        return names[int];
    };

    const handleClick = () => {
      console.log("You Clicked it.");
    };

  return (
    <main>
        <p onDoubleClick={handleClick}>
            Hello {handleNameChange()}!
        </p>
        
    </main>
  )
}

export default Content