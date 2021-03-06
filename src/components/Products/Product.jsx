/* eslint-disable jsx-a11y/alt-text */
import React, {useState, useEffect} from 'react';
import Logo from '../../assets/static/Logo.PNG';
import bigImage2 from '../../assets/static/wireless1.jpg';
import bigImage3 from '../../assets/static/wireless2.jpg';
import bigImage4 from '../../assets/static/wireless3.jpg';
import smallImage2 from '../../assets/static/wireless1-1.jpg';
import smallImage3 from '../../assets/static/wireless2-2.jpg';
import smallImage4 from '../../assets/static/wireless3-3.jpg';
import smallImage5 from '../../assets/static/touchLogo.jpg';
import smallImage6 from '../../assets/static/equilizerlogo.jpg';
import smallImage7 from '../../assets/static/noiseCancelation.jpg';
import '../../assets/styles/Product.css';
import '../../assets/styles/ProductMedia.css';
import {Footer} from '../Footer/Footer';
import { Helmet } from "react-helmet";
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import {db} from '../../firebase';
import { makeStyles } from '@material-ui/core/styles';
// eslint-disable-next-line jsx-a11y/alt-text

const useStyles = makeStyles((theme) => ({
	backdrop: {
		zIndex: theme.zIndex.drawer + 1,
		color: '#fff',
	},
}));
export const Product = () => {

    const images = {
        2:{
            bigImage: bigImage2,
            smallImage: smallImage2
        },
        3:{
            bigImage: bigImage3,
            smallImage: smallImage3
        },
        4:{
            bigImage: bigImage4,
            smallImage: smallImage4
        }
    };
    
    const [img, setImg] = useState(2);

    const [finish, setFinish] = useState(null);

    const [warranty, setWarranty] = useState('2years');

    const [feature, setFeature] = useState('voiceA');

    const [products, setProducts] = useState({
        description: '',
        price: '',
        subTitle: '',
        title: ''
    });
    const classes = useStyles();
    const [loading, setLoaging] = useState(true);
    
    function getProducts() {
        //Aqu?? se visualiza el loading
        setLoaging(true);
        //se llama los datos actualizados, y  se combinan en un arreglo, los datos con su id
        db.collection("products").onSnapshot((querySnapshot) => {
            const docs = [];
              querySnapshot.forEach((doc) => {
                  docs.push({ ...doc.data(), id: doc.id });
              });
              setProducts(docs[0]);
              //Aqui se quita el loading
              setLoaging(false);
          });
      }
  
      useEffect(() => {
          getProducts();
        },[]);

  return (
    <div>
    <Helmet>
        <title>Wireless</title>
        <meta name="description" content="For the past 75 years, Sennheiser has put sound first. The new Wireless is no different. Thanks to leading audio technology and innovation, these new earbuds deliver the best listening experience anytime, anywhere. With improved ergonomics designed for full day wearing and refined touch controls for a more personalised experience, they have been finely crafted for the most discerning listener and aim to simplify your life by enhancing your everyday."/>
        <meta name="title" content="Wireless"/>
    </Helmet>
        <div className="Hero">
            <img
                className="LogoS"
                src={Logo}
                alt="Serempre"
             />
        </div>
    <div className="container">


        <div className="product_container">

            <div className="containerImages">
                <div className="Image1">
                    <img className="Img1" src={images[img].bigImage} alt="Image1" align="middle" />
                </div>


                <div className="Image2">

                    <button className={`buttonImage2 ${img === 2 ?  "selected" : ""} ${img === 3 || img === 4 ? "notSelected":""}`} onClick={() => {setImg(2);}} value='Image2'>
                          <img className="ImgSmall Img2R" src={images[2].smallImage} alt="Image2"/>
                    </button>
                </div>

                <div className="Image3">
                    <button className={`buttonImage3 ${img === 3 ?  "selected" : ""} ${img === 2 || img === 4 ? "notSelected":""}`} onClick={() => {setImg(3);}} value='Image3'>
                        <img className="ImgSmall" src={images[3].smallImage} alt="Image3"/>
                    </button>
                </div>

                <div className="Image4">
                    <button className={`buttonImage4 ${img === 4 ?  "selected" : ""} ${img === 2 || img === 3 ? "notSelected":""}`} onClick={() => {setImg(4);}} value='Image4'>
                        <img className="ImgSmall Img4R" src={images[4].smallImage} alt="Image4"/>
                    </button>
                </div>

                <div className="Image5">
                   <img className="Img5" src={smallImage5} alt="Image5"/>
                </div>
                
                <div className="LabelImg5"><p className="Label">Customizable Touch Controls</p></div>

                <div className="Image6">
                   <img className="Img6" src={smallImage6} alt="Image6"/>
                </div>

                <div className="LabelImg6"> <p className="Label">Built-in Equalizer</p></div>

                <div className="Image7">
                   <img className="Img7" src={smallImage7} alt="Image7"/>
                </div>

                <div className="LabelImg7"><p className="Label">Active Noise Cancellation</p></div>

            </div>

            
            <div className="product_description">
                       
                <div className="title-a1">
                    <p className="title1">NEW RELEASE</p>
                </div>

                <div className="title-a2">
                    <p className="title2">{products.title}</p>
                </div>
                
                <div className="title-a3">
                    <p className="title3">{products.subTitle}</p>
                </div>
                
                <div className="title-a4">
                    <p className="title4">STARTING AT</p>
                </div>

                <div className="Price-a1">
                    <p className="price1">${products.price}</p>
                </div>

                <div className="title-a5">
                    <ol>
                    <li>
                    <a className="link1" href="#overview">Overview</a>
                    </li>
                    <li>
                    <a className="link2" href="#features">Features</a>
                    </li>
                    <li>
                    <a className="link3" href="#whatbox">What's in the boxs?</a>
                    </li>
                </ol>
                </div>

                <div className="description-a1">
                    <p className="description1"> {products.description} </p>
                </div>

                <div className="title-a6">
                    <p className="title6">Choose your finish.</p>
                </div>

                <div className="button-a1">
                    <button className={`button1 ${finish === 'white'?  "selected" : ""} ${finish ==='black'? "notSelected":""}`} onClick={()=>{setFinish('white');}} > 
                        <p className="TitleButton1">Ivory White </p>
                        <p className="descriptionButton">
                        For the past 75 years, Sennheiser has put sound first. The new MOMENTUM True. 
                        </p>
                    </button>
                </div>
                
                <div className="button-a11">
                    <button className={`button1 ${finish === 'black'?  "selected" : ""} ${finish ==='white'? "notSelected":""}`} onClick={()=>{setFinish('black');}}> 
                        <p className="TitleButton1">Matte Black</p>
                        <p className="descriptionButton">
                        Of all of the celestial bodies that capture our attention and fascination as astronomers.
                        </p>
                    </button>
                </div>

                <div className="title-a7">
                    <p className="title7">Would you like to add extended warranty coverage?.</p>
                </div>

                <div className="button-a2">
                    <button className={`button2 ${warranty === '2years'?  "selected" : ""} ${warranty ==='3years'? "notSelected":""}`} onClick={()=>{setWarranty('2years');}}> 
                        <p className="TitleButton1">2 years coverage</p>
                        <p className="descriptionButton">
                        For the past 75 years, Sennheiser has put sound first.
                        </p>
                    </button>
                </div>

                <div className="button-a22">
                    <button className={`button3 ${warranty === '3years'?  "selected" : ""} ${warranty ==='2years'? "notSelected":""}`} onClick={()=>{setWarranty('3years');}}> 
                        <div>
                        <p className="TitleButton1">3 years coverage</p>
                        <p className="descriptionButton">
                        For the past 75 years, Sennheiser has put sound first.
                        </p>
                        </div>

                        <div>
                        <p className="Titlenumber">+$75</p>

                        </div>
                    </button>
                </div>

                <div className="title-a8">
                    <p className="title7">Features.</p>
                </div>

                <div className="button-a3">
                    <button className={`button4 ${feature === 'voiceA'?  "selected" : ""} ${feature ==='customC'? "notSelected":""}`} onClick={()=>{setFeature('voiceA');}}> 
                        <p className="TitleButton1">Voice Assistant support</p>
                    </button>
                </div>

                <div className="button-a33">
                    <button className={`button5 ${feature === 'customC'?  "selected" : ""} ${feature ==='voiceA'? "notSelected":""}`} onClick={()=>{setFeature('customC');}}> 

                    <div>
                     <p className="TitleButton1">Customizable controls</p> 
                    </div>

                    <div>
                        <p className="TitleButton1"> + $25</p>

                     </div>
                    </button>
                </div>

                <div className="title-a9">
                    <p className="title7">Specifications.</p>
                </div>

                <div className="description-a2">
                    <div><p className="TitleSpecific">Dimensions</p></div>
                    <div><p className="descriptionSpecific">76.8 x 43.8 x 34.7 mm (earbuds and charging case)</p></div>
                </div>

                <div className="description-a3">
                    <div><p className="TitleSpecific">USB Standard</p></div>
                    <div><p className="descriptionSpecific">USB-C</p></div>
                </div>

                <div className="description-a4">
                    <div><p className="TitleSpecific">Power supply</p></div>
                    <div><p className="descriptionSpecific">Sennheiser 7mm dynamic driver</p></div>
                </div>

                <div className="description-a5">
                    <div><p className="TitleSpecific">Frequency response (Microphone)</p></div>
                    <div><p className="descriptionSpecific">100 Hz to 10 kHz</p></div>
                </div>

                <div className="description-a6">
                    <div><p className="TitleSpecific">Frequency response</p></div>
                    <div><p className="descriptionSpecific">5 - 21,000 Hz</p></div>
                </div>

                <div className="description-a7">
                    <div><p className="TitleSpecific">Noise cancellation</p></div>
                    <div><p className="descriptionSpecific">Single-Mic ANC per earbud side</p></div>
                </div>
        
            </div>
        
        </div>
        <Backdrop className={classes.backdrop} open={ loading }>
				<CircularProgress color="inherit" />
		</Backdrop>
    </div>
        <Footer 
            warranty={warranty}
            feature={feature}
        />
    </div>


  );
};

export default Product;
