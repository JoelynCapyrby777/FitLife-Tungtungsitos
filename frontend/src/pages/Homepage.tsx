import { type SetStateAction, useState } from 'react'; // 👈 Importa useState
import Input from "../components/ui/Input/Input"; // 👈 Importa tu componente Input

function HomePage() {
  // Define un estado para manejar el valor del input
  const [nombre, setNombre] = useState('');

  // Define una función que se ejecutará cada vez que el valor del input cambie
  const handleNombreChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setNombre(event.target.value);
  };

  return (
    <div>
      <h1>¡Bienvenido a tu proyecto de React!</h1>
      <p>Esta es tu primera página. ¡A romperla!</p>
      
      {/* Usa el componente Input */}
        <Input 
        label="Ingresa tu nombre"
        type="text"
        name="nombre"
        value={nombre} // Pasa el valor del estado como prop
        onChange={handleNombreChange} // Pasa la función para actualizar el estado
      />
      
      {/* Opcional: muestra el valor del estado para verificar que funciona */}
      <p>El valor actual del input es: {nombre}</p>
    </div>
  );
}

export default HomePage;