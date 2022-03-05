import React from 'react'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Product from './Product'
import ProductData from '../ProductData'


const ProductList = () => {
    return (
        <Container className='p-5 mt-5 mb-5'>
            <Row xs={1} md={2} lg={4} className="g-5">
                {
                    ProductData.map(product => <Product key={product.productId} product={product} />)
                }
            </Row>
        </Container>
    )
}

export default ProductList