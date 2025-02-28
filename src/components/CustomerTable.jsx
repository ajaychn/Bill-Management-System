import React from "react";
import { IoTrashOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { removeCustomer } from "../redux/slices/customerSlice";

const CustomerTable = () => {
    const customers = useSelector((state) => state.customers.list);
    const dispatch = useDispatch()
    const deleteCustomer = (id)=>{
        if (id) {
            dispatch(removeCustomer(id))
        }
    }
    
    return (
        <div className="">
            {customers.length === 0 ? (
                <div className="flex items-center justify-center h-80 flex-col">
                    <img src="empty-list.png" className="opacity-20" alt="empty-list" />
                    <p className="text-xl text-gray-500">No bills generated yet.</p>
                </div>
            ) : (
                <div className="p-6">
                    <div className="overflow-x-auto bg-gray-900 rounded-lg shadow-md">
                        <table className="w-full text-left text-sm text-gray-300">
                            <thead className="bg-gray-800 text-gray-400 uppercase text-xs">
                                <tr>
                                    <th className="px-6 py-3">Client Name</th>
                                    <th className="px-6 py-3">Product Quantity</th>
                                    <th className="px-6 py-3">Billing Date</th>
                                    <th className="px-6 py-3">Contact</th>
                                    <th className="px-6 py-3">Address</th>
                                    <th className="px-6 py-3">Billing Price</th>
                                    <th className="px-6 py-3">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {customers.map((ele, i) => (
                                    <tr
                                        key={i}
                                        className="border-b border-gray-700 hover:bg-gray-800"
                                    >
                                        <td className="px-6 py-4 flex items-center space-x-3">
                                            <span>{ele.name}</span>
                                        </td>
                                        <td className="px-6 py-4">{ele.totalQuantity}</td>
                                        <td className="px-6 py-4">{ele.billingDate}</td>
                                        <td className="px-6 py-4">{ele.contact}</td>
                                        <td className="px-6 py-4">{ele.address}</td>
                                        <td className="px-6 py-4"> ₹{ele.totalPrice}</td>
                                        <td className="px-6 py-4">
                                            <span role="button" onClick={()=>deleteCustomer(ele.id)}>
                                                <IoTrashOutline size={'1.5em'}/>
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )
            }
        </div>
    );
};

export default CustomerTable;
