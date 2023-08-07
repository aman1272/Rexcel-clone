
import { Row, Col } from 'reactstrap'
const Header = () => {
    return (
        <>
            <Row className='header-home' >
                <Col xs={2}>
                    <img className='header-icon' src='https://www.rexcelitservices.com/wp-content/uploads/2018/10/logo-2.png' alt="no Image" />
                </Col>
                <Col xs={10} >
                    <div className='inner-tabs-container'>
                        <p>Home</p>
                        <p>About</p>
                        <p>Service</p>
                        <p>Portfolio</p>
                        <p>Career</p>
                        <p>Blog</p>
                        <p>Contacts</p>
                        <div className='straight-line'></div>
                    </div>
                </Col>
            </Row>
        </>
    )
}
export default Header