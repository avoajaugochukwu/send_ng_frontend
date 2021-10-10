import SearchBar from './components/SearchBar'
import './Header.css'


import logo from '../../assets/img/send_ng_logo.png'

export default function Header() {
  return (
    <div>
      <div className="Header flex ">
        <div className=" my-5 pl-14 pr-28">
          <a href=".">
            <img src={logo} />
          </a>

        </div>
        {/* ----------------------------------------------------- */}
        <div>
          <SearchBar />
        </div>
        {/* ----------------------------------------------------- */}
        <div className="flex">
          <button className="RequestButton border-solid border-2 my-4">
            Request Quote
          </button>

          <button>
            Book Shipment
          </button>
        </div>
      </div>
      
    </div>
  )
}

