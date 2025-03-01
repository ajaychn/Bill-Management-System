
import { useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate()
    const { isLoggedIn } = useSelector((state) => state.auth);
    
    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/login");
        }
    }, [isLoggedIn, navigate]);

    return isLoggedIn ? children : null; 
}

export default ProtectedRoute;
