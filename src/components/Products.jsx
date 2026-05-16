const Products = ({products}) => {
    return(
        <>
            {products.map((eachproduct) => {
        return(
          <div className="card" key={eachproduct.id}>
            <div className="img">
              <img src={eachproduct.images[0]} alt={eachproduct.title} />
            </div>
            <div className="detail">
            <p>{eachproduct.title}</p>
            <h4>${eachproduct.price}</h4>
            </div>
            <button className='cart' onClick={() => {alert("Add to Cart SuccessFully")}}>Add to Cart</button>
          </div>


        )
      })}
        </>
    )
}

export default Products;