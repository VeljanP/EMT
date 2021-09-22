import React from 'react';
import './home.css';
import productsService from "../../service/productsService";
import {Link} from "react-router-dom";
import ReactCurrencyFormatter from "react-currency-formatter";
import {Pie} from "react-chartjs-2";
import {Line} from 'react-chartjs-2';
import {AnimateOnChange} from 'react-animation';
class Home extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            recommendedProducts: []
        }
       
    } 

    componentDidMount() {
        this.getRecommendedProducts();
    }

    getRecommendedProducts() {
        productsService.fetchRecommendedProducts().then((recommendedProducts) => {
            console.log(recommendedProducts);
            this.setState((previousState) => {
                return {
                    recommendedProducts: recommendedProducts
                }
            })
        });
    }

    render() {
        const productsCarouselItemsHTML = this.state.recommendedProducts.map((product, index) => {
            return (
                <Link to={{pathname: `/products/${product.id}`}}
                      key={product.id}
                      className={'carousel-item img-fluid ' + (index === 0 ? 'active' : '')}>
                    <img src={product.img} className="d-block carousel-img img-fluid" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>{product.name}</h5>
                        <p><ReactCurrencyFormatter quantity={product.price}/></p>
                    </div>
                </Link>
            )
        });

        const carouselControlsHTML = this.state.recommendedProducts.map((product, index) => {
            return <li key={product.id} className={index === 0 ? 'active' : ''}
                       data-target="#carouselExampleIndicators" data-slide-to={index}/>
        });

        return (
            <div className="container-fluid p-0">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1 className="pb-2 mt-4 mb-2 border-bottom">
                                We'll
                                <span className="text-muted">&nbsp; take you to the 🍭 shop</span>
                            </h1>
                            
                        </div>
                    </div>
                </div>
                <div className="row no-gutters">
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <iframe src="https://giphy.com/embed/ZqWpospCiYeBi" width="480" height="251" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/50-cent-candy-shop-50centsbestfriend-ZqWpospCiYeBi"/></p>
                            </div>
                        <div class="col">
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae nihil hic
                                delectus excepturi ipsam reprehenderit iusto rem, quam, repellendus accusantium culpa
                                reiciendis sit dolorum aut aperiam a architecto. Fuga, sit.
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae nihil hic
                                delectus excepturi ipsam reprehenderit iusto rem, quam, repellendus accusantium culpa
                                reiciendis sit dolorum aut aperiam a architecto. Fuga, sit.
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae nihil hic
                                delectus excepturi ipsam reprehenderit iusto rem, quam, repellendus accusantium culpa
                                reiciendis sit dolorum aut aperiam a architecto. Fuga, sit.
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae nihil hic
                                delectus excepturi ipsam reprehenderit iusto rem, quam, repellendus accusantium culpa
                                reiciendis sit dolorum aut aperiam a architecto. Fuga, sit.
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae nihil hic
                                delectus excepturi ipsam reprehenderit iusto rem, quam, repellendus accusantium culpa
                                reiciendis sit dolorum aut aperiam a architecto. Fuga, sit.
                            </p>       
                        </div>
                    </div>
                </div>

            </div>
        </div>
        )
    }
}

export default Home;
