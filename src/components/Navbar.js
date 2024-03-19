import styles from './Navbar.module.css'
import { useState } from 'react';

const Navbar = () => {


    // adding states

    const[isActive,setIsActive] = useState(false);

    // add the active class

    const toggleActiveClass = () => {
        setIsActive(!isActive)
    }

    const removeActive =() => {
        setIsActive(false);
    }




    return(
        
        <div className='App'>
            <header className='App-header'>
                <nav className={`${styles.navbar}`}>

                    {/* logo */}
                    <a href='#home' className={`${styles.logo}`}>Blog-Corner.</a>
                    <ul className={`${styles.navMenu} ${isActive ? styles.active:''}`} >
                        <li>
                            <a href='#home'>Home</a>
                        </li>
                        <li>
                            <a href='#home'>Add-Blog</a>
                        </li>
                        <li>
                            <a href='#home'>Login</a>
                        </li>
                    </ul>

                    <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`}
                         onClick={toggleActiveClass}>
                        
                        <span className={`${styles.bar}`}></span>
                        <span className={`${styles.bar}`}></span>
                        <span className={`${styles.bar}`}></span>


                    </div>
                    

                </nav>
            </header>
        </div>
    )
}

export default Navbar;