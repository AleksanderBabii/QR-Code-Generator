import React from "react";
import { Link, useLocation } from "react-router-dom";

import styles from "./Navbar.module.scss";

function Navbar() {
    const location = useLocation();

    return (
        <nav className={styles.navbar}>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <Link
                        to="/qr-code-generator"
                        className={`${styles.navLink} ${
                            location.pathname === "/qr-code-generator"
                                ? styles.active
                                : ""
                        }`}
                    >
                        QR Code Generator
                    </Link>
                </li>

                <li className={styles.navItem}>
                    <Link
                        to="/barcode-generator"
                        className={`${styles.navLink} ${
                            location.pathname === "/barcode-generator"
                                ? styles.active
                                : ""
                        }`}
                    >
                        Barcode Generator
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;