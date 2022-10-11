import {useState} from "react";
import {Link} from "react-router-dom";
import {menu} from "./menuBase";

import styles from './Hamburger.module.scss'

import hamburgerImage from "../../../../images/header/hamburger.svg";
import hamburgerCloseImage from "../../../../images/header/hamburger-close.svg";

const Hamburger = () => {
    const [show, setShow] = useState(false)

    const handleLogout = () => {
        console.log('logout')
    }

    return (
        <div className={styles.wrapper}>
            <button type='button' onClick={() => setShow(!show)}>
                <img src={show ? hamburgerCloseImage : hamburgerImage} alt="Auth"/>
            </button>
            <nav className={styles.menu}>
                <ul>
                    {menu.map(item =>
                        <li>
                            <Link to={item.link}>{item.title}</Link>
                        </li>
                    )}
                    <li>
                        <a onClick={handleLogout}>Logout</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Hamburger;