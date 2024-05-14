import { Link } from 'react-router-dom'

const LargeSidebarItem = ({icon, title, url, isActive=false}) => {
  return (
    <Link to={url}>
      <div className={`w-full flex items-center rounded-lg gap-4 p-3 bg-neutral-50 hover:bg-neutral-100 ${isActive ? "bg-neutral-100 font-bold hover:bg-neutral-200" : ""}`}>
      <div >
        {icon}
      </div>
        <p className='whitespace-nowrap overflow-hidden text-ellipsis'>{title}</p>
      </div>
    </Link>
  )
}

export default LargeSidebarItem