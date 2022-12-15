import Dashbord from "../components_admin/Dashbord";
import Employees from "../components_admin/Employees";
import { MdOutlineDashboard } from 'react-icons/md';
import {HiUserGroup} from 'react-icons/hi';
import {BiLogOutCircle} from 'react-icons/bi';
import {HiOutlineCurrencyRupee} from 'react-icons/hi';
import Logout from "../components_admin/Logout";
import Payroll from "../components_admin/Payroll";

// export const Sidebar_data=[
//     [
//         {
//             id:1,
//             title:'Dashboard',
//             component:<Dashbord/>,
//             icon:<MdOutlineDashboard/>
//         }
//     ],
//     [
//         {
//             id:2,
//             title:'Employee',
//             component:<Employees/>,
//             icon:<HiUserGroup/>
//         }
//     ]
// ] 

export const Sidebar_data=[
    {
        id:'1',
        title: 'Dashboard',
        component: Dashbord,
        icon: <MdOutlineDashboard />
    },
    {
        id:'2',
        title: 'Employee',
        component: Employees,
        icon: <HiUserGroup />
    },
    {
        id:'3',
        title:'Payroll',
        component:Payroll,
        icon:<HiOutlineCurrencyRupee/>
    },
    {
        id:'4',
        title:'Logout',
        component:Logout,
        icon:<BiLogOutCircle/>
    }
]