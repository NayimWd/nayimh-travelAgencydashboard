import { CiBoxList } from "react-icons/ci";

const Stats = () => {
  return (
    <div className='bg-deep_blue  py-8 rounded flex justify-center items-center gap-5'>
        <div>
        <CiBoxList className="w-6 h-6 text-white"/>
        </div>
        <div className="text-white flex flex-col  gap-2">  
            <p className="font-playfair">Total Package</p>
            <p className="font-lato text-lg font-bold">30</p>
        </div>
    </div>
  )
}

export default Stats