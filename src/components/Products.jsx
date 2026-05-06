const Products = ({products}) => {
    return(
        <>
            {products.map((eachproduct, i) => {
        return(
        

          <div className="card" key={i}>
            <div className="img">
              <img src={eachproduct.image} alt="" />
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