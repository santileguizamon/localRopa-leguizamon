import cartWidgets from "../CartWidgets/CartWidgets"
import style from "../NavBar/style.css"
import itemCount from "../Items/ItemCount";

const ItemListContainer = ({greeting}) => (
    <><h1>{greeting}</h1>
    <itemCount stock={10} initial={1} onAdd={onAdd} /></>
);

export default ItemListContainer;