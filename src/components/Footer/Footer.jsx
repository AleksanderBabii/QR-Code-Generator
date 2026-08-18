import React from "react";
import { motion } from "framer-motion";

import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <motion.footer className={styles.footer}>
            <p>© 2024 QR Code Generator. All rights reserved.</p>
        </motion.footer>
    );
};

export default Footer;