import hamburgerImage from "../../../../images/header/hamburger.svg";
import {useState} from "react";
import styles from './Hamburger.module.scss'

const Hamburger = () => {
    const [show, setShow] = useState(false)

    return (
        <div className={styles.wrapper}>
            <button type='button' onClick={() => setShow(!show)}>
                <img src={hamburgerImage} alt="Auth"/>
            </button>
            <nav className={styles.menu}>
                <ul>
                    <li>
                        <Link>Workouts</Link>
                    </li>
                    <li>
                        <Link>Create new</Link>
                    </li>
                    <li>
                        <Link>Profile</Link>
                    </li>
                    <li>
                        <Link>Logout</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Hamburger;