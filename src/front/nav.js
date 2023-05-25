import './front.css';
import {Link} from "react-router-dom";
const Nav = () => {
    return (
      <div>
        <div className="topnav">
        <img className="img" src="https://res.cloudinary.com/dtrytsho8/image/upload/v1668835658/logo1_bay2ex.png"  alt="logo"/>
        <br></br>
        <h1 >STARBUILD</h1>
        <button style={{float: 'right'}}><Link to='/orders'>ORDERS</Link></button>
        <button style={{float: 'right'}}><Link to='/contact'>CONTACT</Link></button>
        <button style={{float: 'right'}}><Link to='/service'>SERVICE</Link></button>
        <button style={{float: 'right'}}><Link to='/about'>ABOUT</Link></button>
        <button style={{float: 'right'}}><Link to='/'>HOME</Link></button>
      
      </div>
      </div>
    )
};


export default Nav