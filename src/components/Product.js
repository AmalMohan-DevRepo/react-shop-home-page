import React from 'react'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


const Product = ({ product }) => {
    const renderPriceDom = () => {
        if (product.productOptions || product.onSale) {

            if (product.productOptions) {
                const minAmt = Math.min(...Object.values(product.productPrice))
                const maxAmt = Math.max(...Object.values(product.productPrice))

                return `$ ${parseFloat(minAmt).toFixed(2)} - $ ${parseFloat(maxAmt).toFixed(2)}`;
            }

            if (product.onSale) {
                const discountedValue = (product.productPrice - (product.discountPercent / 100) * product.productPrice);

                return (<><span className="text-decoration-line-through text-muted"> $ {parseFloat(product.productPrice).toFixed(2)}</span>&nbsp;<span>$ {parseFloat(discountedValue).toFixed(2)}</span> </>)

            }
        }
        else {
            return `$ ${parseFloat(product.productPrice).toFixed(2)}`
        }
    }
    return (
        <Col>
            <Card className='h-100'>
                <div>
                    <Card.Img variant="top" src={product.productImg} />
                    {product.onSale ? <span className="badge bg-success position-absolute" style={{ marginLeft: '-40px', marginTop: '4px' }}>sale</span> : ""}
                </div>
                <Card.Body>
                    <Card.Title className="text-center">{product.productName}</Card.Title>
                    <Card.Text className='w-100 d-flex justify-content-center'>
                        <>
                            {
                                product.rating > 0 ? Array.from({ length: product.rating }).map((_, id) => (
                                    <img src="https://img.icons8.com/color/48/000000/filled-star--v1.png" alt="rating" width="20px" height="20px" key={id} />
                                )) : ""
                            }
                        </>
                    </Card.Text>
                    <Card.Text className='w-100 d-flex justify-content-center'>
                        {renderPriceDom()}
                    </Card.Text>
                </Card.Body>
                <div className='w-100 d-flex justify-content-center m-2 p-2'>
                    {product.productOptions ? <Button variant='outline-success'>View Options</Button>
                        : <Button variant='outline-success'>Add to Cart</Button>}
                </div>
            </Card>
        </Col>
    )
}

export default Product