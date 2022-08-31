import cartWidgets from "../NavBar/cartWidgets"
import style from "../NavBar/style.css"
import itemCount from "../Items/itemCount";

const titulo = ({BullMarket}) => (
    <><h1>{props.BullMarket}</h1>
    <itemCount stock="10" initial="1" /></>
);

export default titulo;