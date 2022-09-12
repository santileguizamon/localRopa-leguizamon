import Item from "../Item/Item";

const ItemList = ({ items }) => {

    return (
        <>
            {items.map((productos) => (
                
                    <Item
                    key={productos.id} 
                    {...productos}
                     />
                
            ))}
        </>
    )
}

export default ItemList