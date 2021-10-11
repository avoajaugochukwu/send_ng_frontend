import './SearchBar.css'
import icon16 from '../../../../assets/img/search-13-16.png'
export default function SearchBar() {
  return (
    <div className="SearchBar">
      <input className="SearchBarInput placeholder-gray-300" type="text" placeholder="Search" style={{ backgroundColor: 'transparent' }} />
      <button className="w-auto flex justify-end items-center text-blue-500 p-2 hover:text-blue-400">
        
        <img src={icon16} className="SearchBarIcon" />  
      </button>
      
    </div>
  )
}
