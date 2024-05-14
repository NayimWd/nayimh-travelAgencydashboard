import SmallSidebarItem from './SmallSidebarItem';
import { IoMdHome } from "react-icons/io";
import { MdWidgets, MdOutlineCreateNewFolder, MdManageAccounts   } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import LargeSidebar from './LargeSidebar';
import LargeSidebarItem from './LargeSidebarItem';
import { useSidebarContext } from '../../assets/context/useSidebar';
import PageHeader from '../../component/PageHeader';

const Sidebar = () => {

    const { isLargeOpen, isSmallOpen} = useSidebarContext();

   

  return (
    <>
    <aside className={`sticky top-0 overflow-y-auto scrolbar-hidden p-4 flex flex-col ml-1  w-[120px] overflow-x-hidden ${isLargeOpen ? "lg:hidden" : "lg:flex"} `}>
    <div className=' flex flex-col gap-3 w-full'>
    <SmallSidebarItem icon={<IoMdHome className='h-6 w-6'/>} title="home" url="/" />
    <SmallSidebarItem icon={<MdWidgets className='h-6 w-6'/>} title="All Tour" url="/" />
    <SmallSidebarItem icon={<MdOutlineCreateNewFolder className='h-6 w-6'/>} title="Create Package" url="/" />
    <SmallSidebarItem icon={<MdManageAccounts  className='h-6 w-6'/>} title="manage Tour" url="/" />
    <SmallSidebarItem icon={<CiUser  className='h-6 w-6'/>} title="manage users" url="/" />
    </div>

    </aside>
  {/* large screen sidebar*/}
    <aside className={`w-64 lg:sticky absolute top-0 overflow-y-auto scrollbar-hidden pb-4  ml-1 gap-2 px-2  flex-col  ${isLargeOpen ? "lg:flex" : "lg:hidden"} ${isSmallOpen ? "flex z-50 bg-white h-screen" : "hidden"}`}>
        <div className='lg:hidden pt-1 pb-4 px-2  bg-white sticky top-0'>
        <PageHeader hidden={false}/>
        </div>
        <LargeSidebar>
            <LargeSidebarItem isActive icon={<IoMdHome className='h-6 w-6'/>} title="home" url="/"/>
        </LargeSidebar>
        <LargeSidebar>
            <LargeSidebarItem  icon={<MdWidgets className='h-6 w-6'/>} title="All Tour" url="/"/>
        </LargeSidebar>
        <LargeSidebar>
            <LargeSidebarItem  icon={<MdOutlineCreateNewFolder className='h-6 w-6'/>} title="Create Tour Package" url="/"/>
        </LargeSidebar>
        <LargeSidebar>
            <LargeSidebarItem  icon={<MdManageAccounts className='h-6 w-6'/>} title="manage Tour Package" url="/"/>
        </LargeSidebar>
        <LargeSidebar>
            <LargeSidebarItem  icon={<CiUser className='h-6 w-6'/>} title="Manage All Users" url="/"/>
        </LargeSidebar>
       
    </aside>
    </>
  )
}

export default Sidebar