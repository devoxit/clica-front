
import Link from "next/link";





const CardItem = ({imageUrl,linkUrl}) => {
  return (
    
         <div className="col-12 col-sm-6 col-md-4 col-xxl-2">
                      <div className="product-card-container h-100">
                        <div className="position-relative text-decoration-none product-card h-100">
                          <div className="d-flex flex-column justify-content-between h-100">
                            <div>
                              <div className="border border-1 rounded-3 position-relative mb-3">
                                <button
                                  className="btn rounded-circle p-0 d-flex flex-center btn-wish z-index-2 d-toggle-container btn-outline-primary"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Add to wishlist"
                                >
                                  <span className="fas fa-heart d-block-hover"></span>
                                  <span className="far fa-heart d-none-hover"></span>
                                </button>
                                <img
                                  className="img-fluid"
                                  src={imageUrl}
                                  alt=""
                                />
                              </div>
                              <Link
                                className="stretched-link text-decoration-none"
                                href={linkUrl}
                              >
                                <h6 className="mb-2 lh-sm line-clamp-3">
                                京都で創業1020年の餅屋。
                                </h6>
                              </Link>
                              <p className="fs--1">
                                <span className="fa fa-star text-warning"></span>
                                <span className="fa fa-star text-warning"></span>
                                <span className="fa fa-star text-warning"></span>
                                <span className="fa fa-star text-warning"></span>
                                <span className="fa fa-star text-warning"></span>
                                <span className="text-500 fw-semi-bold ms-1">
                                  (67 people rated)
                                </span>
                              </p>
                            </div>
                            <div>
                              <p className="fs--1 text-700 mb-2">
                              Ichiwa, a family business, sells mochi (a Japanese rice cake) next to an old shrine in Kyoto.
                              </p>
                              {/* <div className="d-flex align-items-center mb-1">
                                <p className="me-2 text-900 text-decoration-line-through mb-0">
                                  $125.00
                                </p>
                                <h3 className="text-1100 mb-0">$89.00</h3>
                              </div> */}
                              
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>        
   
  );
};

export default CardItem;
