import SearchBar from './components/SearchBar'
import './Header.css'


import logo from '../../assets/img/send_ng_logo.png'

export default function Header() {
  return (
    <div>
      <div className="HeaderFlexContainer">
        <div className=" HeaderFlexItem">
          <a href=".">
            <img src={logo} alt="logo" />
          </a>

        </div>
        {/* ----------------------------------------------------- */}
        <div className="HeaderFlexItem">
          <SearchBar />
        </div>
        {/* ----------------------------------------------------- */}
        <div className="HeaderFlexItem">
          <button className="HeaderButtons RequestButton">
            Request Quote
          </button>

          <button className="HeaderButtons ShipmentButton ml-9">
            Book Shipment
          </button>
        </div>
      </div>
      
    </div>
  )
}

