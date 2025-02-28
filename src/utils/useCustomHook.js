import toast from "react-hot-toast";
import { addCustomer } from "../redux/slices/customerSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";


const useCustomHook = ()=>{

    const dispatch = useDispatch();

    const [generatedBill,setGeneratedBill] = useState(null)
    const [products, setProducts] = useState([
        { productName: "", quantity: 1, price: 0 },
    ]);

    const [customer, setCustomer] = useState({
        name: "",
        contact: "",
        address: "",
        billingDate: "",
    });

    const handleCustomerChange = (e) => {
        setCustomer({ ...customer, [e.target.name]: e.target.value });
    };

    const addProductField = () => {
        setProducts([...products, { productName: "", quantity: 1, price: 0 }]);
    };


    const handleProductChange = (index, e) => {
        const { name, value } = e.target
        const updatedProducts = [...products];
        updatedProducts[index][name] = value;
        setProducts(updatedProducts);
    };

    const calculateTotal = () => {
        return products.reduce((sum, item) => sum + item.quantity * item.price, 0);
    };

    const handleGenerateBill = (e) => {
        e.preventDefault();
        const totalQuantity = products.reduce((accum, item) => accum + Number(item.quantity), 0);
        const totalPrice = calculateTotal();
        const id = crypto.randomUUID();        
        const billData = { ...customer, totalQuantity, totalPrice,id }
        setGeneratedBill(billData)
        dispatch(addCustomer(billData));
        toast.success('Bill Generated Successfully')
    }

    return {customer,products,generatedBill,calculateTotal,handleProductChange,handleGenerateBill,addProductField,handleCustomerChange}
}

export default useCustomHook;