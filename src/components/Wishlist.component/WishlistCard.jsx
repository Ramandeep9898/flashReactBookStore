export const WishlistCard = ({ wishlistCardDetail }) => {
  return (
    <div key={wishlistCardDetail._id} className="card-basic">
      <button
        className="Floating-btn postion"
        // onClick={() => addToWishList(wishlistCardDetail)}
      >
        <i className="far fa-heart fa-lg"></i>
      </button>
      <img
        // src={wishlistCardDetail.img}
        alt=""
        className="avatar sq-avatar card-img"
      />
      <div className="card-typo">
        {/* <Link to={`/productListingPage/${wishlistCardDetail._id}`}> */}
        <div className="card capitalize fW-400 color text-left">
          {wishlistCardDetail.title}
        </div>
        {/* </Link> */}
        <div className="card-subtitle capitalize fW-400 color text-left mgT-4">
          {/* -by {wishlistCardDetail.author} */}
        </div>
        <div className="card capitalize fW-500 color text-left mgT-4">
          <div className="rating-div">
            {/* <span className="rating">{wishlistCardDetail.rating}&#9733;</span>
            <span className="cover">( {wishlistCardDetail.cover} )</span> */}
          </div>

          <div className="mgT-4">
            {/* &#8377;{wishlistCardDetail.discountedPrice} */}
            <span className="original-price">
              {" "}
              {/* &#8377;{wishlistCardDetail.originalPrice} */}
            </span>
            &nbsp;
            <span className="discount">
              {/* {wishlistCardDetail.discount}% */}
            </span>
          </div>
        </div>
        <button
          className="btn solid-pri-btn width100 mg-top8"
          // onClick={() => {
          //   addToCart(wishlistCardDetail);
          // }}
        >
          add to cart
        </button>
      </div>
    </div>
  );
};
