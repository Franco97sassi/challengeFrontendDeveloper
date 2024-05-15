import React, { useState } from 'react';

function Buscar({ personajes, setFiltrados }) {
  const [filtroNombre, setFiltroNombre] = useState('');

  const handleFiltroNombreChange = (event) => {
    setFiltroNombre(event.target.value);
    const filtrados = personajes.filter(personaje =>
      personaje.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFiltrados(filtrados);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar por nombre"
        value={filtroNombre}
        onChange={handleFiltroNombreChange}
      />
    </div>
  );
}

export default Buscar;
