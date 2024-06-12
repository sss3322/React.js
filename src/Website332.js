import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel, Button } from 'react-bootstrap';

function Navbar332() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top"> 
                <div className="container">
                    <Link className="navbar-brand" to="/">My Website</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link me-3" to="/">Home</Link> 
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link me-3" to="/fashion">Fashion</Link> 
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link me-3" to="/beauty">Beauty</Link> 
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link me-3" to="/gadgets">Gadgets</Link> 
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/appliances">Appliances</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <Link to="/signup">
                            <Button variant="primary" className="mx-2">Sign Up</Button>
                        </Link>
                        <Link to="/login">
                            <Button variant="primary">Login</Button>
                        </Link>
                    </div>
                </div>
            </nav>
            <Carousel style={{ width: '90%', margin: 'auto', marginTop: '50px' }}> 
                <Carousel.Item>
                    <img src='https://dixplore.com/wp-content/uploads/2020/03/ugztxggoyfvew2pptewkti.jpg' className="d-block w-100" alt='carousel-item' />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src='https://www.dekhnews.com/wp-content/uploads/2020/11/Apple-Foldable-iPhone-Release-Date-Images.jpg' className="d-block w-100" alt='carousel-item' />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src='http://i.huffpost.com/gen/1105939/images/o-BEST-PERFORMING-WINDOWS-LAPTOP-facebook.jpg' className="d-block w-100" alt='carousel-item' />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Navbar332;
