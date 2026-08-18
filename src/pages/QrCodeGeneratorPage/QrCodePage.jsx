import React, { useState } from "react";

import GeneratedCard from "../../components/GeneratedCard/GeneratedCard";

import styles from "./QrCodePage.module.scss";

function QrCodeGenerator() {
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
          <h1>QR Code Generator</h1>
          <p>Enter a URL or text below to generate a QR code.</p>
        </div>

        <div className={styles.form}>
          <label htmlFor="qr-input">Enter URL or text</label>

          <input
            id="qr-input"
            type="text"
            value={value}
            onChange={handleInputChange}
            placeholder="https://example.com"
          />

          <button type="button" onClick={handleClear} disabled={!value}>
            Clear
          </button>
        </div>

        <GeneratedCard
          title="Generated QR Code"
          description={
            value
              ? `QR code for: ${value}`
              : "Enter a URL or text to generate your QR code."
          }
          type="qr"
          value={value}
        />
      </section>
    </main>
  );
}

export default QrCodeGenerator;
