import SearchBar from './components/SearchBar'
import './Header.css'


import logo from '../../assets/img/send_ng_logo.png'

export default function Header() {
  return (
    <div>
      <div className="header-flex-container">
        <div className=" header-flex-item">
          <a href=".">
            <img src={logo} />
          </a>

        </div>
        {/* ----------------------------------------------------- */}
        <div className="header-flex-item">
          <SearchBar />
        </div>
        {/* ----------------------------------------------------- */}
        <div className="header-flex-item">
          <button className="RequestButton px-8 my-5 rounded font-semibold text-sm">
            Request Quote
          </button>

          <button className="ShipmentButton px-8 my-5 rounded font-semibold text-sm ml-9">
            Book Shipment
          </button>
        </div>
      </div>
      
    </div>
  )
}

