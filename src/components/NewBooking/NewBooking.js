import './NewBooking.css'
import leftArrow from '../../assets/img/Font_Awesome_5_solid_arrow-left.svg'


export default function NewBooking() {
  return (
    <div className="NewBookingFlexContainer">
      <div className="NewBookingFlexItem">
        
        <img src={leftArrow} alt="left arrow" className="NewBookingLeftArrow" />
        
        
      </div>
      <div className="NewBookingFlexItem">
        <h1 className="NewBookingHeader">New Booking</h1>
        <p className="NewBookingText">
          Fill in the information below to get a quote or create a new booking
        </p>
      </div>
      
    </div>
  )
}
