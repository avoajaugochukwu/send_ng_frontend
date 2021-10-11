import './SearchBar.css'
import icon16 from '../../../../assets/img/search-13-16.png'
export default function SearchBar() {
  return (
    <div className="SearchBar">
      <input className="SearchBarInput" type="text" placeholder="Search" style={{ backgroundColor: 'transparent' }} />
      <button className="SearchBarButton">
        
        <img src={icon16} alt="search icon" className="SearchBarIcon" />  
      </button>
      
    </div>
  )
}
