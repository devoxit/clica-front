import Head from "next/head";
import Link from "next/link";


const Sidebar = () => {




  return (
    <>
      <nav className="navbar navbar-vertical navbar-expand-lg">
        <div className="collapse navbar-collapse" id="navbarVerticalCollapse">
          <div className="navbar-vertical-content">
            <ul className="navbar-nav flex-column" id="navbarVerticalNav">
              <li className="nav-item">
                <div className="nav-item-wrapper">
                  <a
                    className="nav-link dropdown-indicator label-1"
                    href="#home"
                    role="button"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="home"
                  >
                    <div className="d-flex align-items-center">
                      <div className="dropdown-indicator-icon">
                        <span className="fas fa-caret-right"></span>
                      </div>
                      <span className="nav-link-icon">
                        <span data-feather="pie-chart"></span>
                      </span>
                      <span className="nav-link-text">Home</span>
                    </div>
                  </a>
                  <div className="parent-wrapper label-1">
                    <ul
                      className="nav collapse parent"
                      data-bs-parent="#navbarVerticalCollapse"
                      id="home"
                    >
                      <li className="collapsed-nav-item-title d-none">Home</li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          href="/merchants"
                          data-bs-toggle=""
                          aria-expanded="false"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">Merchants</span>
                          </div>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          href="/"
                          data-bs-toggle=""
                          aria-expanded="false"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Posts
                            </span>
                          </div>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          href="/events"
                          data-bs-toggle=""
                          aria-expanded="false"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">Events</span>
                          </div>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="../../apps/social/feed.html"
                          data-bs-toggle=""
                          aria-expanded="false"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">Social feed</span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <hr className="navbar-vertical-line" />

                <div className="nav-item-wrapper">
                  <a
                    className="nav-link dropdown-indicator label-1"
                    href="#e-commerce"
                    role="button"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="e-commerce"
                  >
                    <div className="d-flex align-items-center">
                      <div className="dropdown-indicator-icon">
                        <span className="fas fa-caret-right"></span>
                      </div>
                      <span className="nav-link-icon">
                        <span data-feather="shopping-cart"></span>
                      </span>
                      <span className="nav-link-text">Ecommerce</span>
                    </div>
                  </a>
                  <div className="parent-wrapper label-1">
                    <ul
                      className="nav collapse parent"
                      data-bs-parent="#navbarVerticalCollapse"
                      id="e-commerce"
                    >
                      <li className="collapsed-nav-item-title d-none">
                        e-commerce
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link dropdown-indicator"
                          href="#admin"
                          data-bs-toggle="collapse"
                          aria-expanded="true"
                          aria-controls="e-commerce"
                        >
                          <div className="d-flex align-items-center">
                            <div className="dropdown-indicator-icon">
                              <span className="fas fa-caret-right"></span>
                            </div>
                            <div className="nav-link-text">Admin</div>
                          </div>
                        </a>

                        <div className="parent-wrapper">
                          <ul
                            className="nav collapse parent show"
                            data-bs-parent="#e-commerce"
                            id="admin"
                          >
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                href="../../apps/e-commerce/admin/add-product.html"
                                data-bs-toggle=""
                                aria-expanded="false"
                              >
                                <div className="d-flex align-items-center">
                                  <div className="nav-link-text">
                                    Add product
                                  </div>
                                </div>
                              </a>
                            </li>

                            <li className="nav-item">
                              <a
                                className="nav-link"
                                href="../../apps/e-commerce/admin/products.html"
                                data-bs-toggle=""
                                aria-expanded="false"
                              >
                                <div className="d-flex align-items-center">
                                  <div className="nav-link-text">Products</div>
                                </div>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                href="../../apps/e-commerce/admin/customers.html"
                                data-bs-toggle=""
                                aria-expanded="false"
                              >
                                <div className="d-flex align-items-center">
                                  <div className="nav-link-text">Customers</div>
                                </div>
                              </a>
                            </li>

                            <li className="nav-item">
                              <a
                                className="nav-link"
                                href="../../apps/e-commerce/admin/customer-details.html"
                                data-bs-toggle=""
                                aria-expanded="false"
                              >
                                <div className="d-flex align-items-center">
                                  <div className="nav-link-text">
                                    Customer details
                                  </div>
                                </div>
                              </a>
                            </li>

                            <li className="nav-item">
                              <a
                                className="nav-link"
                                href="../../apps/e-commerce/admin/orders.html"
                                data-bs-toggle=""
                                aria-expanded="false"
                              >
                                <div className="d-flex align-items-center">
                                  <div className="nav-link-text">Orders</div>
                                </div>
                              </a>
                            </li>

                            <li className="nav-item">
                              <a
                                className="nav-link"
                                href="../../apps/e-commerce/admin/order-details.html"
                                data-bs-toggle=""
                                aria-expanded="false"
                              >
                                <div className="d-flex align-items-center">
                                  <div className="nav-link-text">
                                    Order details
                                  </div>
                                </div>
                              </a>
                            </li>

                            <li className="nav-item">
                              <a
                                class="nav-link"
                                href="../../apps/e-commerce/admin/refund.html"
                                data-bs-toggle=""
                                aria-expanded="false"
                              >
                                <div class="d-flex align-items-center">
                                  <div class="nav-link-text">Refund</div>
                                </div>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>

                      <li class="nav-item">
                        <a
                          class="nav-link dropdown-indicator"
                          href="#landing"
                          data-bs-toggle="collapse"
                          aria-expanded="true"
                          aria-controls="e-commerce"
                        >
                          <div class="d-flex align-items-center">
                            <div class="dropdown-indicator-icon">
                              <span class="fas fa-caret-right"></span>
                            </div>
                            <span class="nav-link-text">Landing</span>
                          </div>
                        </a>
                        <div class="parent-wrapper">
                          <ul
                            class="nav collapse parent show"
                            data-bs-parent="#e-commerce"
                            id="landing"
                          >
                            <li class="nav-item">
                              <a
                                class="nav-link"
                                href="../../apps/e-commerce/landing/homepage.html"
                                data-bs-toggle=""
                                aria-expanded="false"
                              >
                                <div class="d-flex align-items-center">
                                  <span>Homepage</span>
                                </div>
                              </a>
                            </li>
                            <li class="nav-item">
                              <a
                                class="nav-link"
                                href="../../apps/e-commerce/landing/product-details.html"
                                data-bs-toggle=""
                                aria-expanded="false"
                              >
                                <div class="d-flex align-items-center">
                                  <span>Product details</span>
                                </div>
                              </a>
                            </li>
                            <li class="nav-item">
                              <a
                                class="nav-link"
                                href="../../apps/e-commerce/landing/products-filter.html"
                                data-bs-toggle=""
                                aria-expanded="false"
                              >
                                <div class="d-flex align-items-center">
                                  <span>Products filter</span>
                                </div>
                              </a>
                            </li>
                            <li class="nav-item">
                              <a
                                class="nav-link"
                                href="../../apps/e-commerce/landing/cart.html"
                                data-bs-toggle=""
                                aria-expanded="false"
                              >
                                <div class="d-flex align-items-center">
                                  <span>Cart</span>
                                </div>
                              </a>
                            </li>
                            <li class="nav-item">
                              <a
                                class="nav-link"
                                href="../../apps/e-commerce/landing/checkout.html"
                                data-bs-toggle=""
                                aria-expanded="false"
                              >
                                <div class="d-flex align-items-center">
                                  <span>Checkout</span>
                                </div>
                              </a>
                            </li>
                            <li class="nav-item">
                              <a
                                class="nav-link"
                                href="../../apps/e-commerce/landing/shipping-info.html"
                                data-bs-toggle=""
                                aria-expanded="false"
                              >
                                <div class="d-flex align-items-center">
                                  <span>Shipping info</span>
                                </div>
                              </a>
                            </li>
                            <li class="nav-item">
                              <a
                                class="nav-link"
                                href="../../apps/e-commerce/landing/profile.html"
                                data-bs-toggle=""
                                aria-expanded="false"
                              >
                                <div class="d-flex align-items-center">
                                  <span>Profile</span>
                                </div>
                              </a>
                            </li>
                            <li class="nav-item">
                              <a
                                class="nav-link"
                                href="../../apps/e-commerce/landing/favourite-stores.html"
                                data-bs-toggle=""
                                aria-expanded="false"
                              >
                                <div class="d-flex align-items-center">
                                  <span>Favourite stores</span>
                                </div>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="nav-item-wrapper">
                  <a
                    class="nav-link dropdown-indicator label-1"
                    href="#project-management"
                    role="button"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="project-management"
                  >
                    <div class="d-flex align-items-center">
                      <div class="dropdown-indicator-icon">
                        <span class="fas fa-caret-right"></span>
                      </div>
                      <span class="nav-link-icon">
                        <span data-feather="clipboard"></span>
                      </span>
                      <span class="nav-link-text">Project management</span>
                    </div>
                  </a>
                  <div class="parent-wrapper label-1">
                    <ul
                      class="nav collapse parent"
                      data-bs-parent="#navbarVerticalCollapse"
                      id="project-management"
                    >
                      <li class="collapsed-nav-item-title d-none">
                        Project management
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          href="../../apps/project-management/create-new.html"
                          data-bs-toggle=""
                          aria-expanded="false"
                        >
                          <div class="d-flex align-items-center">
                            <span class="nav-link-text">Create new</span>
                          </div>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          href="../../apps/project-management/project-list-view.html"
                          data-bs-toggle=""
                          aria-expanded="false"
                        >
                          <div class="d-flex align-items-center">
                            <span class="nav-link-text">Project list view</span>
                          </div>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          href="../../apps/project-management/project-card-view.html"
                          data-bs-toggle=""
                          aria-expanded="false"
                        >
                          <div class="d-flex align-items-center">
                            <span class="nav-link-text">Project card view</span>
                          </div>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          href="../../apps/project-management/project-board-view.html"
                          data-bs-toggle=""
                          aria-expanded="false"
                        >
                          <div class="d-flex align-items-center">
                            <span class="nav-link-text">
                              Project board view
                            </span>
                          </div>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          href="../../apps/project-management/todo-list.html"
                          data-bs-toggle=""
                          aria-expanded="false"
                        >
                          <div class="d-flex align-items-center">
                            <span class="nav-link-text">Todo list</span>
                          </div>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          href="../../apps/project-management/project-details.html"
                          data-bs-toggle=""
                          aria-expanded="false"
                        >
                          <div class="d-flex align-items-center">
                            <span class="nav-link-text">Project details</span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="nav-item-wrapper">
                  <a
                    class="nav-link label-1"
                    href="../../apps/chat.html"
                    role="button"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <div class="d-flex align-items-center">
                      <span class="nav-link-icon">
                        <span data-feather="message-square"></span>
                      </span>
                      <span class="nav-link-text-wrapper">
                        <span class="nav-link-text">Chat</span>
                      </span>
                    </div>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="navbar-vertical-footer">
          <button class="btn navbar-vertical-toggle border-0 fw-semi-bold w-100 white-space-nowrap d-flex align-items-center"><span class="uil uil-left-arrow-to-left fs-0"></span><span class="uil uil-arrow-from-right fs-0"></span><span class="navbar-vertical-footer-text ms-2">Collapsed View</span></button>
        </div>

      </nav>
    </>
  );
};

export default Sidebar;
