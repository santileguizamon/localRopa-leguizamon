

const ItemList = ({ itemList }) => {

    return (
        <>
            {itemList.map((producto) => {
                return 
                    <item
                    key={producto.id} 
                    item={producto.item}
                    description={producto.description}
                    price={producto.price}
                    stock={producto.stock}
                     />;
                
            })}
        </>
    )
}

export default ItemList