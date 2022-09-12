import {Link} from 'react-router-dom'

const Item = ({id,item,description,price,stock}) => {
  return (
    <div>
        <h2>{item}</h2>
        <p>{price}</p>
        <Link to={`/Detail/${item.id}`}>
           <button>Ver mas</button>
        </Link>
    </div>
  )
}

export default Item

