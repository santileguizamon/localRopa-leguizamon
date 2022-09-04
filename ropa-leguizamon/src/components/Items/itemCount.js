import {useState} from 'react';

const ItemCount = ({stock,initial,onAdd}) =>{
    const [contador,setContador] = useState (0);
    const suma = () => {
        setContador( stock < contador + 1 )
    };
    const resta = () => {
        setContador( stock > contador - 1 )
    };
    return(
        <>
        <div>
            <button onClick={initial}> Agregar al carrito </button>
        </div>
        </>
    );
};

export default ItemCount;