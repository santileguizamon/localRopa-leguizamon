

const Item = ({id,item,description,price,stock}) => {
  return (
    <div>
        <h2>{item}</h2>
        <p>{description}</p>
        <p>{price}</p>
        <p>{stock}</p>
    </div>
  )
}

export default Item

