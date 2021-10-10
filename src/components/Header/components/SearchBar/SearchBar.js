import './SearchBar.css'
import icon16 from '../../../../assets/img/search-13-16.png'
export default function SearchBar() {
  return (
    <div className="flex SearchBar my-5">
      <input className=" text-gray-300 w-full p-2 focus:outline-none placeholder-gray-300" type="text" placeholder="Search" style={{ backgroundColor: 'transparent' }} />
      <button className="w-auto flex justify-end items-center text-blue-500 p-2 hover:text-blue-400">
        
        <img src={icon16} className="SearchBarIcon" />  
      </button>
      
    </div>
  )
}
