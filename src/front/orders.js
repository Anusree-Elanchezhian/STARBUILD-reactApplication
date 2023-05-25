import './orders.css';
const Orders = () =>
{
    return(
        <div className="bg-img">
        <form action="/action_page.php" className="cont">
          <h1>MAKE A REQUEST....</h1>
          <label htmlFor="name"><b>NAME</b></label>
          <input type="text1" placeholder="Enter your name..." name="name" required />
          <label htmlFor="email"><b>EMAIL</b></label>
          <input type="text1" placeholder="Enter your email id..." name="email" required />
           <label htmlFor="psw"><b>SERVICE WANTED</b></label>
          <input type="password" placeholder="Enter service..." name="psw" required />
          <button type="submit" className="btn">SUBMIT</button>
        </form>
      </div>
    )
};
export default Orders;