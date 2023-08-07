import { Row, Col } from 'reactstrap'
const Footer = () => {
    return (
        <>
            <div>

                <Row className="Footer-main">
                    <Col>
                        <div>
                            <img src='https://www.rexcelitservices.com/wp-content/uploads/2018/10/logo2-2.png   ' alt="no Image" />
                            <p>Rexcel IT Services Pvt. Ltd. is a professional web design and development company in Noida, Delhi NCR, India. We provide a wide range of services and are always ready to share our professional experience and methodological ability.</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="Footer-menu" >

                            <h1>Quick Links</h1>
                            <div>
                                <p>Home</p>
                                <p>About</p>
                                <p>Service</p>
                                <p>Portfolio</p>
                                <p>Career</p>
                                <p>Blog</p>
                                <p>Contacts</p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="Footer-menu" >
                            <h1>Our Services</h1>
                            <p>Ecommerce Development</p>
                            <p>Software Development</p>
                            <p>Mobile Application Development</p>
                            <p>CMS Website Development</p>
                            <p>Website Designing</p>
                            <p>SEO and SMO</p>
                            <p>Web Hosting</p>
                            <div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="Footer-menu" >
                            <h1>Our Address</h1>
                            <div>
                                <div>
                                    <p>D-15, 1stFloor, Sector 6, Near Metro Sector 15, Noida, India – 201301</p>
                                </div>
                                <br />
                                <div>
                                    <div>
                                        <div >+91-(120) 4512529</div>
                                        <div >+91-9953110287</div>
                                    </div>
                                </div>
                                <br />
                                <div>
                                    <div >info@rexcelitservices.com</div>
                                    <div >support@rexcelitservices.com</div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className='footer-end'>
                    © 2021 Rexcel IT Services Pvt. Ltd.
                </div>
            </div>
        </>
    )
}
export default Footer