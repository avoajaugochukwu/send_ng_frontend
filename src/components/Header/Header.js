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
          <button className="HeaderButtons RequestButton my-5">
            Request Quote
          </button>

          <button className="HeaderButtons ShipmentButton my-5 ml-9">
            Book Shipment
          </button>
        </div>
      </div>
      
    </div>
  )
}

