import {useState} from 'react';

const itemCount = ({stock,initial,onAdd}) =>{
    const [contador,setContador] = useState (0);
    const suma = () => {
        setContador( contador + 1 <stock)
    };
    return(
        <>
        <div>
            <button onClick={initial}> Agregar al carrito </button>
        </div>
        </>
    );
};

export default itemCount;