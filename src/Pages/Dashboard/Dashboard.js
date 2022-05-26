import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import ToolsIcon from './ToolsIcon';

const Dashboard = () => {

    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);


    return (
        <div>
            <ToolsIcon />
            <div class="drawer drawer-mobile my-4 lg:my-11">
                <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    <h2 className='text-2xl font-bold text-center text-sky-300'>User Dashboard Analytics</h2>

                    <Outlet></Outlet>
                </div>
                <div class="drawer-side">
                    <label for="dashboard-sidebar" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-48 bg-base-200 rounded-2xl text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        {!admin && <>
                            <li><Link to="/dashboard/order">MY ORDERS</Link></li>
                            <li><Link to="/dashboard/review">REVIEWS</Link></li>
                        </>

                        }
                        <li><Link to="/dashboard/">MY PROFILE</Link></li>



                        {admin && <>
                            <li><Link to="/dashboard/makeAdmin">MAKE ADMIN</Link></li>
                            <li><Link to="/dashboard/addProduct">ADD PRODUCT</Link></li>
                            <li><Link to="/dashboard/manageProducts">MANAGE GOODS</Link></li>
                            
                        </>}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;