import { Outlet } from "react-router-dom";
import Header from "../Header/Header";




const Root = () => {
    return (
        <div>   
            <Header></Header>
            <br />
            <Outlet></Outlet>
        </div>
    );
};

export default Root;