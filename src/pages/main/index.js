import React, {Component} from 'react';
import api from './../../services/api';
import './styles.css';

export default class Main extends Component {
    state = {
        products:[]
    }

    componentDidMount(){
        this.loadProduct();
    }

    loadProduct = async () => {
        const response = await api.get('/products');
        console.log(response); 
        this.setState({products: response.data.docs});
    };

    render(){
        const {products} = this.state;
        return (
            <div className="products-list">
                <h1>Number of Products {products.length}</h1>
                {products.map(product => (
                    <article key={product._id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>
                        <a href="">Acessar</a>
                    </article>
                ))}
            </div>
        )
    }
}