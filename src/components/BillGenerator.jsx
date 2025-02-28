import React from "react";

import Invoice from "./Invoice";
import { PDFDownloadLink } from "@react-pdf/renderer";
import useCustomHook from "../utils/useCustomHook";

const BillGenerator = () => {
   
    const {generatedBill,customer,handleGenerateBill,handleCustomerChange,products,
        handleProductChange,calculateTotal,addProductField} = useCustomHook()

    return (
        <div className="p-5">
            <div className="w-full p-6 bg-gray-900 rounded-md shadow-lg">
                <div className="mb-4 flex justify-between">
                    <h2 className="text-xl font-semibold">Generate Bill</h2>
                    {generatedBill && (
                        <span className="btn btn-sm btn-success">
                            <PDFDownloadLink document={<Invoice customer={generatedBill} />} fileName="invoice.pdf">
                                {({ loading }) => (loading ? "Generating PDF..." : "Download Invoice")}
                            </PDFDownloadLink>
                        </span>
                    )}
                </div>
                <form onSubmit={handleGenerateBill}>
                    <div className="flex gap-3">
                        <div className="flex-1">
                            <label className="block text-gray-400 mb-1">Customer name</label>
                            <input
                                type="text"
                                className="w-full bg-gray-800 text-white p-2 rounded border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                placeholder="Enter name"
                                name="name"
                                value={customer.name}
                                onChange={handleCustomerChange}
                                required
                            />
                        </div>
                        <div className="flex-1">
                            <label className="block text-gray-400 mb-1">Mobile number</label>
                            <input
                                type="text"
                                className="w-full bg-gray-800 text-white p-2 rounded border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                placeholder="Enter number"
                                name="contact"
                                value={customer.contact}
                                onChange={handleCustomerChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="flex gap-3 mt-4">
                        <div className="flex-1">
                            <label className="block text-gray-400 mb-1">Address</label>
                            <input
                                type="text"
                                className="w-full bg-gray-800 text-white p-2 rounded border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                placeholder="Enter address"
                                name="address"
                                value={customer.address}
                                onChange={handleCustomerChange}
                                required
                            />
                        </div>
                        <div className="flex-1">
                            <label className="block text-gray-400 mb-1">Billing date</label>
                            <input
                                type="date"
                                className="w-full bg-gray-800 text-white p-2 rounded border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                name="billingDate"
                                value={customer.billingDate}
                                onChange={handleCustomerChange}
                                required
                            />
                        </div>
                    </div>

                    {
                        products.map((ele, i) => {
                            return (
                                <div className="flex gap-3 mt-4" key={i}>
                                    <div className="flex-1">
                                        <label className="block text-gray-400 mb-1">Product name</label>
                                        <input
                                            type="text"
                                            className="w-full bg-gray-800 text-white p-2 rounded border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                            placeholder="name"
                                            name="productName"
                                            value={ele.productName} onChange={(e) => handleProductChange(i, e)}
                                            required

                                        />
                                    </div>
                                    <div className="flex-1">
                                        <label className="block text-gray-400 mb-1">Quantity</label>
                                        <input
                                            type="number"
                                            className="w-full bg-gray-800 text-white p-2 rounded border border-gray-700 
                                        focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                            name="quantity"
                                            value={ele.quantity} onChange={(e) => handleProductChange(i, e)}
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <label className="block text-gray-400 mb-1">Price</label>
                                        <input
                                            type="number"
                                            className="w-full bg-gray-800 text-white p-2 rounded border border-gray-700 
                                        focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                            name="price"
                                            value={ele.price} onChange={(e) => handleProductChange(i, e)}
                                        />
                                    </div>

                                </div>
                            )
                        })
                    }
                    <div className="flex mt-4 justify-between">
                        <div className="self-end">
                            <button type="submit" className="btn btn-primary">Generate Bill</button>
                        </div>
                        <div className="flex justify-end items-end flex-col">
                            <button className="btn btn-active btn-neutral" onClick={addProductField}>Add Product</button>
                            <label className="block text-xl my-2 text-primary">Total Price: ₹{calculateTotal().toFixed(2)}</label>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BillGenerator;
