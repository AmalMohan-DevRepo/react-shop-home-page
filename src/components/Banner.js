import React from 'react'
import Container from 'react-bootstrap/Container'

const Banner = () => {
    return (
        <Container fluid className="d-flex align-items-center justify-content-center bg-dark" style={{ height: '20rem' }}>
            <div>
                <h1 className="fw-bold text-center text-light" style={{ fontSize: '4em' }}>Shop in style</h1>
                <h3 className="text-muted text-center">With this shop hompeage template</h3>
            </div>
        </Container>
    )
}

export default Banner