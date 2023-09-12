import PropsTypes from 'prop-types';
const Bottle = ({ bottle, handleAddToCart }) => {
  const { name, price, stock, ratings, ratingsCount, img } = bottle;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={img}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center text-2xl space-y-2">
          <h2 className="card-title">{name}</h2>
          <p>Price: {price}$</p>
          <p>Stock: {stock}</p>
          <p>Rating: {ratings} <span className="text-white">&#9733;</span></p>
          <p>Reviews: {ratingsCount}</p>
          <div className="card-actions">
            <button onClick={()=>handleAddToCart(bottle)} className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};
Bottle.propTypes = {
  bottle: PropsTypes.object.isRequired,
  handleAddToCart: PropsTypes.func.isRequired
}

export default Bottle;
