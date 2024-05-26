import { CiSearch } from "react-icons/ci";
import { FaArrowLeftLong } from "react-icons/fa6";
import { BiLeftArrow } from "react-icons/bi";
import Button from "../../component/reusableComopnent/Button";

const SearchBar = ({showFullSearch, setFullSearch, setSearch}) => {
  return (
    <div className='flex flex-grow justify-center items-center'>
        <button onClick={()=> setFullSearch(!showFullSearch)} className={` mr-1  bg-slate-50 hover:bg-soft_neutrals  p-3 rounded-full ${showFullSearch ? "flex md:hidden" : "hidden"}`}>
            <FaArrowLeftLong className="w-5 h-5"/>
           
        </button>
        <div className={`items-center flex-grow max-w-[620px] ${showFullSearch ? "flex " : " hidden md:flex "} `}>
            <input
            onChange={(e)=> setSearch(e.target.value)}
            type='text'
            placeholder='search'
            className=' rounded-l-full border-2 border-neutral-200 shadow-inner shadow-neutral-200 py-1 px-4 text-lg w-full  outline-none flex-grow max-w-[600px]'
            />
            <button className=" rounded-r-full bg-neutral-300 flex-shrink-0" >
                <CiSearch  className="w-10 h-10 p-2 border border-neutral-300 rounded-r-full border-l-0"/>
            </button>
        </div>
     
    </div>
  )
}

export default SearchBar