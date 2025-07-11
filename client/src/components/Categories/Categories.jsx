import React from "react";
import "./categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://res.cloudinary.com/dlmgs0z2s/image/upload/v1723785641/category-sale_suljcy_wyaw86.jpg"
            alt="Sale"
            loading="lazy"
          />
          <Link className="link-2" to="/underconstruction">
            <button className="categories-btn">Sale</button>
          </Link>
        </div>
        <div className="row">
          <img
            src="https://res.cloudinary.com/dlmgs0z2s/image/upload/v1723785765/category-skincare_jvlwi5_awv48h.jpg"
            alt="Beauty"
            loading="lazy"
          />

          <Link className="link-2" to="/products/1">
            <button className="categories-btn">Beauty</button>
          </Link>
        </div>
      </div>
      {/* </div> */}
      <div className="col">
        <div className="row" id="fashion">
          <img
            src="https://res.cloudinary.com/dlmgs0z2s/image/upload/v1685310272/Category_Fashion_nsbxvw.jpg"
            alt="Fashion"
            loading="lazy"
          />{" "}
          <Link className="link-2" to="/products/2">
            <button className="categories-btn">Fashion</button>
          </Link>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://res.cloudinary.com/dlmgs0z2s/image/upload/v1723786003/Category_Supplements_a74rjd_xvdsy8.jpg"
                alt=""
                loading="lazy"
              />
              <Link className="link-2" to="/underconstruction">
                <button className="categories-btn">Supplements</button>
              </Link>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img
                src="https://res.cloudinary.com/dlmgs0z2s/image/upload/v1723786300/category-aromatherapy_i5ylrx_v74azt.png"
                alt=""
                loading="lazy"
              />
              <Link className="link-2" to="/underconstruction">
                <button className="categories-btn">Aromatherapy</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="row" id="yoga">
          <img
            src="https://res.cloudinary.com/dlmgs0z2s/image/upload/v1723786250/category-yoga-accessories_imimxf_aulrux.jpg"
            alt=""
            loading="lazy"
          />

          <Link className="link-2" to="/underconstruction">
            <button className="categories-btn">Yoga Accessories</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
