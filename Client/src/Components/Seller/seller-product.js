import'./Styles/becomeseller.css';
import './Styles/dashboardseller.css';
import './Styles/product-seller.css';
import product from './Styles/product.jpg';
// import { Button } from 'react-bootstrap';
// import React, { useState } from 'react';
function SellerProduct() {




    return(
        
<body>
    <div className="grid">      
    <aside className="sidenav sellernav">
          <div className="sidenav__brand">
            <i className="fa fa-car sidenav__brand-icon"></i>
            <a className="sidenav__brand-link" href="/">Pharma<span className="text-light">Place</span></a>
            <i className="fas fa-times sidenav__brand-close"></i>
          </div>
          <div className="sidenav__profile">
            <div className="sidenav__profile-avatar"></div>
            <div className="sidenav__profile-title text-light">Yassine ch</div>
          </div>
          <div className="row row--align-v-center row--align-h-center">
            <ul className="navList navlistseller">
              <li className="navList__heading">Seller<i className="far fa-file-alt"></i></li>
                <li>
                <a href="/SellerProduct"><li className="subList__item">Product</li></a>
                <a href="/Packs"><li className="subList__item">Buy Packs</li></a>
                <a href="/Statistics"><li className="subList__item">Statistics</li></a>
              </li>
            </ul>
          </div>
        </aside>
      
        <main className="main">
          <div className="main-header">
            <div className="main-header__intro-wrapper">
              <div className="main-header__welcome">
                <div className="main-header__welcome-title text-light">Welcome, Yassine</div>
                <div className="main-header__welcome-subtitle text-light">How are you today?</div>
              </div>
              <div className="quickview">
                <div className="quickview__item">
                  <div className="quickview__item-description">
                  </div>
                </div>
                <div className="quickview__item">
                  <div className="quickview__item-description">
                  </div>
                </div>
                <div className="quickview__item">
                  <div className="quickview__item-description">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main-overview">
            <div className="overviewCard">
              <div className="overviewCard-icon overviewCard-icon--document">
                <i className="fa fa-user"></i>
              </div>
              <div className="overviewCard-description">
                <h3 className="overviewCard-title text-light"> Managment <strong>Seller</strong></h3>
                <p className="overviewCard-subtitle">19</p>
              </div>
            </div>
            <div className="overviewCard">
              <div className="overviewCard-icon overviewCard-icon--calendar">
                <i className="fa fa-user"></i>
              </div>
              <div className="overviewCard-description">
                <h3 className="overviewCard-title text-light">Managment <strong>Admin</strong></h3>
                <p className="overviewCard-subtitle">15</p>
              </div>
            </div>
            
            <div className="overviewCard">
              <div className="overviewCard-icon overviewCard-icon--mail">
                <i className="fa fa-user"></i>
              </div>
              <div className="overviewCard-description">
                <h3 className="overviewCard-title text-light">Managment <strong>Super Admin</strong></h3>
                <p className="overviewCard-subtitle">50</p>
              </div>
            </div>
            <div className="overviewCard">
              <div className="overviewCard-icon overviewCard-icon--photo">
                <i className="fa fa-user"></i>
              </div>
              <div className="overviewCard-description">
                <h3 className="overviewCard-title text-light">Managment <strong>Seller</strong></h3>
                <p className="overviewCard-subtitle">17</p>
              </div>
            </div>
          </div>
         



          <table class="product-table">
  <thead>
  <tr>
    <th scope="col">Product</th>
    <th scope="col">Product Name</th>
    <th scope="col">Stock</th>
    <th scope="col">Price</th>
    <th scope="col">Action</th>
  </tr>
</thead>
    <tbody>
        <tr>
            <td><img class="lazyload" alt="product" src={product}/></td>
            <td><strong>Dolibran</strong></td>
            <td><strong>9 in stock</strong></td>
            <td><strong>150MAD</strong></td>
            <td data-align="center"><strong><a class="table-button" href="/">Edite</a>{' '}
            <a class="table-button" href="/">Delete</a>
            </strong>
            </td>
        </tr>

  </tbody></table>
  <a class="add-prod" href="/AddSellerProduct">Delete</a>
  
  






















        </main>
      
      </div>

</body>
          )
        }
        export default SellerProduct;