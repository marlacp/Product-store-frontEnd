
import React from 'react';
import '../../assets/styles/Footer.css';
import '../../assets/styles/FooterMedia.css';

export const Footer = () => (
  <React.Fragment>
    <footer className='footer'>
      <div className='containerFooter'>
        <div className="principal">
            <div className="descriptionFooter">
                <div className="desc1">
                    <p className="titleFooter">Free Shipping</p>
                    <p className="descripFooter">Get 2-day free shipping anywhere in North 
                    <br/>
                    America.</p>
                </div>
                
                <div className="desc2">
                    <p className="titleFooter">2 years warranty</p>
                    <p className="descripFooter">If anything goes wrong in the first two <br/>years, 
                    we'll replace it for free.</p>
                </div>
                
            </div>

            <div className="pagoFooter">
                <div className="pagoDesc">
                    <p className="priceFooter">$295.95</p>
                    <p className="descripFooter2">Need financing? Learn more </p>
                </div>

                <div className="ButtonPago">
                    <button className="ButtonBuyNow"> <p className="BuyNow">Buy now</p> </button>
                </div>
            </div>

        </div>
      </div>
    </footer>
  </React.Fragment>

);
