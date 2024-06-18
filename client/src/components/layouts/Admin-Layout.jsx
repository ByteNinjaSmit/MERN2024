import { NavLink, Outlet } from "react-router-dom";
import { FaUser,FaHome,FaRegListAlt } from "react-icons/fa";
import { FaMessage} from "react-icons/fa6";


export const AdminLayout = () => {
    return (
        <>
            <header className="w-100">
                <div className="container center">
                    <nav className="center">
                        <ul className="center mt-4 mb-1" style={{ display: "flex",gap: "10px",justifyContent: "center"}}>
                            <li><NavLink to="/admin"><FaHome /> Home</NavLink></li>
                            <li><NavLink to="/admin/users"><FaUser /> users</NavLink></li>
                            <li><NavLink to="/admin/services"><FaRegListAlt/> services</NavLink></li>
                            <li><NavLink to="/admin/contacts"><FaMessage/> Contacts</NavLink></li>
                        </ul>
                    </nav>
                </div>  
            </header>
            <Outlet />
        </>
    );
};