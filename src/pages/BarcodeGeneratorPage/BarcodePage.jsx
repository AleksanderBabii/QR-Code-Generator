import React, { useState } from "react";

import GeneratedCard from "../../components/GeneratedCard/GeneratedCard";


import styles from "./BarcodePage.module.scss";

function BarcodeGenerator() {
    const [value, setValue] = useState("");

    const handleInputChange = (event) => {
        setValue(event.target.value);
    };

    const handleClear = () => {
        setValue("");
    };

    return (
        <main className={styles.page}>
            <section className={styles.generator}>
                <div className={styles.header}>
                    <h1>Barcode Generator</h1>
                    <p>
                        Enter a value below to generate a barcode.
                    </p>
                </div>

                <div className={styles.form}>
                    <label htmlFor="barcode-input">
                        Enter text or number
                    </label>

                    <input
                        id="barcode-input"
                        type="text"
                        value={value}
                        onChange={handleInputChange}
                        placeholder="Enter barcode value..."
                    />

                    <button
                        type="button"
                        onClick={handleClear}
                        disabled={!value}
                    >
                        Clear
                    </button>
                </div>

                <GeneratedCard
                    title="Generated Barcode"
                    description={
                        value
                            ? `Barcode for: ${value}`
                            : "Enter a value to generate your barcode."
                    }
                    type="barcode"
                    value={value}
                />

                
            </section>
        </main>
    );
}

export default BarcodeGenerator;