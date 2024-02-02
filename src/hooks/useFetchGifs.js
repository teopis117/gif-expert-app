import React, { useState,useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';

const useFetchGifs = (categoria) => {

    const [imagenes,setImagenes]=useState([]);
    const [isLoading,setIsLoading]=useState(true);
    


    const getImages= async() =>
    {
        const newImages= await getGifs(categoria);
        setImagenes(newImages);
        setIsLoading(false);
    }

    useEffect(()=>
    {
getImages();
    },[])

  return (
    {
        imagenes,
        isLoading,
    }
  )
}

export default useFetchGifs
