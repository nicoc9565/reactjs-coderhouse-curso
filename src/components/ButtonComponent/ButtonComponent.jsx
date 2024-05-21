//props: son propiedades que el componente hereda de su padre
// para recibir la propiedad, podemos hacerlo de dos forma:
//1. colocando el argumento props en la funcion del componente
// function myFuncion(num, numTwo) {}
//2. desestructurando el argumento props en el componente

const ButtonComponent = ({
  label = "Nombre por defecto",
  description,
  myFunction,
}) => {
  return (
    <button onClick={myFunction} title={description}>
      {label}
    </button>
  );
};

export default ButtonComponent;
