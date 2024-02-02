import React, { useState } from "react";

function AddCategory({onNewCategory}) {
  const [inputValue, setInputValue] = useState("one punch");
  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmit=(evento)=>
  {
    evento.preventDefault();
    if(inputValue.trim().length<=1) return;
    
    //SetCategorias(categorias=>[inputValue,...categorias])
    onNewCategory(inputValue.trim());
    setInputValue('');
  }

  return (
    <form action="" onSubmit={(evento)=>onSubmit(evento)}>
      <input
        type="text"
        placeholder="Buscar Gif"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
}

export default AddCategory;
