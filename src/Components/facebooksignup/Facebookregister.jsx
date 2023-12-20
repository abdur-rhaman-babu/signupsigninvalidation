
import { useState } from "react";
import "./facebookregister.css";
import { FaTimes } from "react-icons/fa";
const Facebookregister = () => {
const currentYear = new Date().getFullYear()

// create date input 
const currentDate = new Date().getDate()
  const [selectedDate,setSelectedDate] = useState(currentDate)
  // const dates = Array.from({ length: 31 }, (_, index) => index + 1);
  const dates = []
  for(let i=0; i<31;i++){
    dates.push(1+i)
  }

  const handleDateChange = (event) => {
    setSelectedDate(parseInt(event.target.value));
  };
  
  // create month input 
  const months = ['January','February','March','April','May','June','July','August','September','November','December']
  const [selectedmonth,setSelectedMonth] = useState('January')

  const handleMonthChange = (event) => {
    setSelectedMonth((event.target.value));
  };
  

// create year input 
  const [selectedYear, setSelectedYear] = useState(currentYear);
  // const years = Array.from({ length: 150 }, (_, index) => currentYear - index);

  const years = []
  for(let index = 0; index<150; index++){
      years.push(currentYear - index)
  }

  const handleYearChange = (event) => {
    setSelectedYear(parseInt(event.target.value,10));
  };

  
  return (
    <div className="container">
      <div className="facebook-page">
        <form>
          <div className="form-text flex">
            <div>
            <h1>Sign Up </h1>
            </div>
            <FaTimes className="form-text-time"/>
          </div>

          <div className="form-input"> 
            <div className="form-name flex">
              <input type="text" placeholder="First name" />
              <input type="text" placeholder="Surename" />
            </div>

            <div className="signup-part flex">
              <input
                type="email"
                placeholder="Mobile number or email address"
              />
              <input type="password" placeholder="New password" />
            </div>


            <label>Date of birth:</label> 
            <div className="date-part flex">
            <div className="dateOfBirth">

            <select
                    id="dateselected"
                    value={selectedDate}
                    onChange={handleDateChange}
                    className="date-input" 
                  >
                    {dates.map((date) => (
                      <option key={date} value={date}>
                        {date}
                      </option>
                    ))}
                  </select>
              </div>


              <div  className="dateOfBirth">
              <select
                    id="monthselected"
                    value={selectedmonth}
                    onChange={handleMonthChange}
                    className="date-input" 
                  >
                    {months.map((month) => (
                      <option key={month} value={month}>
                        {month}
                      </option>
                    ))}
                  </select>
              </div>

                  <select
                    id="yearSelect"
                    value={selectedYear}
                    onChange={handleYearChange}
                    className="date-input" 
                  >
                    {years.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
             
            </div>
            

            <label>Gender</label>
            <div className="gender-part flex">
         <div className="gender flex">
            <label htmlFor="Male">Male</label> 
            <input type="radio" id="Male" name="gender" value="Male"/>
        </div>

          <div className="gender flex">
          <label htmlFor="Famale">Famale</label>
            <input type="radio" id="Famale" name="gender" value="Famale"/>
          </div>

           <div className="gender flex">
           <label htmlFor="Custom">Custom</label>
            <input type="radio" id="custom" name="gender" value="custom"/>
           </div>

            </div>
            </div>
            <p>
              People who use our service may have uploaded your contact
              information to Facebook. Learn more.
            </p>
            <p>
              By clicking Sign Up, you agree to our Terms, Privacy Policy and
              Cookies Policy. You may receive SMS notifications from us and can
              opt out at any time.
            </p>

          <div className="sign-uplink">
            <button type="submit">
              <a href="#">Sign Up</a>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};


export default Facebookregister;

