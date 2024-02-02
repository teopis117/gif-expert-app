import React, { useState } from 'react'
import {AddCategory,GifGrid} from './components/index'
function GifExerpertApp() {

    const [categorias,SetCategorias]=useState([]);


    const onAddCategoria =(newCategory)=>
    {

    if(categorias.includes(newCategory)) return;
    
    //valorant
    SetCategorias([newCategory,...categorias]);   
    }
  return (
    <>
    <h1>GifExpertApp</h1>

    <AddCategory
    onNewCategory={value=>onAddCategoria(value)}
    />

    
        {categorias.map((categoria) => 
            
               (
                   <GifGrid 
                   key={categoria}
                   categoria={categoria}
                   />
                )
            )}
   

    </>
  )
}

export default GifExerpertApp
