import './facebook.css'
const Facebook = () => {
    return (
        <div className="container flex">
        <div className="facebook-page flex">

        {/* Login left part */}
          <div className="text">
            <h1>facebook</h1>
            <p>Connect with friends and the world </p>
            <p> around you on Facebook.</p>
          </div>

            {/* login right part */}
          <form action="#">

          <input type="email" placeholder="Email or phone number" required/>
            <input type="password" placeholder="Password" required/>
                
            <div className="link">
              <button type="submit" className="login">Login</button>
              <a href="#" className="forgot">Forgot password?</a>
            </div>
          
            <div className="button">
              <a href="#">Create new account</a>
            </div>

          </form>

        </div>
      </div>
      
    );
};

export default Facebook;