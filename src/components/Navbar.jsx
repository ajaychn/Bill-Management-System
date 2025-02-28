import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../redux/slices/authSlice';
import { clearAllCustomer } from '../redux/slices/customerSlice';

const Navbar = () => {
    const userData = useSelector((store) => store.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logoutHandle = () => {
        dispatch(logout());
        dispatch(clearAllCustomer())
        return navigate('/login')
    }

    return (
        <div className="navbar bg-base-200 px-4 py-3">
            <div className="flex-1">
                <h1 className="text-xl font-semibold text-primary">Bill Management System</h1>
            </div>
            {
                userData &&
                <div className="flex-none gap-2">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-200 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <Link className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </Link>
                            </li>

                            <li><a onClick={logoutHandle}>Logout</a></li>
                        </ul>
                    </div>
                </div>
            }
        </div>
    )
}

export default Navbar