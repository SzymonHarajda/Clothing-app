import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import {ReactComponent as CrawnLogo} from '../assets/crown.svg'
import './navigation.style.scss'


const Navigation = ()=>{
    return(
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <CrawnLogo className="logo"/>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">
                        SHOP
                    </Link>
                    <Link className="nav-link" to="/signin">
                        SIGN IN
                    </Link>
                </div>
            </div>
            <Outlet/>
        </Fragment>
    );
}

export default Navigation;