import React, {Component} from 'react';
import api from './../../services/api';
import './styles.css';
import { Link } from 'react-router-dom';

export default class Main extends Component {
    state = {
        products: [],
        productInfo: {},
        page: 1
    }

    componentDidMount(){
        this.loadProduct();
    }

    loadProduct = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`);
        console.log(response.data.docs[0]._id)
        const { docs, ...productInfo } = response.data;

        this.setState({products: docs, productInfo, page});
    };

    nextPage = () => {
        const { page, productInfo } = this.state;

        console.log(productInfo.page);
        
        if(page === productInfo.page) return

        const pageNumber = page + 1;

        this.loadProduct(pageNumber);
    }
    
    prevPage = () => {
        const { page, productInfo } = this.state;
        
        if(page === 1) return;

        const pageNumber = page - 1;
        this.loadProduct(pageNumber);
    }

    render(){
        const {products, page, productInfo} = this.state;
        return (
            <div className="products-list">
                {products.map(product => (
                    <article key={product._id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>
                        <Link to={`/product/${product._id}`}>Acessar</Link>
                    </article>
                ))}
                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevPage}>Back</button>
                    <button disabled={page === productInfo.pages} onClick={this.nextPage}>Forward</button>
                </div>
            </div>
        )
    };
}