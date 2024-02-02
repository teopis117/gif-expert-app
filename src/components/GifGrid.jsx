
import useFetchGifs from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';


function GifGrid({categoria}) {

  const {imagenes,isLoading}= useFetchGifs(categoria);
  
  return (
   <>
   <h3>{categoria}</h3>
   {
    isLoading &&(<h2>cargando....</h2>)
   }
   
    <div className='card-grid'>
        {imagenes.map((imagen)=>
<GifGridItem 
key={imagen.key}
{...imagen}
/>        
            
        )}
    </div>
    
    </>
  )
}

export default GifGrid
