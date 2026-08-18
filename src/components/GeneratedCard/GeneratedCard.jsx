import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import QRCode from "qrcode";
import JsBarcode from "jsbarcode";

const GeneratedCard = ({ title, description, type, value }) => {
    const qrRef = useRef(null);
    const barcodeRef = useRef(null);

    useEffect(() => {
        if (!value) return;

        if (type === "qr" && qrRef.current) {
            QRCode.toCanvas(
                qrRef.current,
                value,
                {
                    width: 300,
                    margin: 2,
                },
                (error) => {
                    if (error) {
                        console.error("QR Code generation error:", error);
                    }
                }
            );
        }

        if (type === "barcode" && barcodeRef.current) {
            try {
                JsBarcode(barcodeRef.current, value, {
                    format: "CODE128",
                    width: 2,
                    height: 100,
                    displayValue: true,
                    margin: 10,
                });
            } catch (error) {
                console.error("Barcode generation error:", error);
            }
        }
    }, [type, value]);

    const handleDownload = () => {
        if (!value) return;

        if (type === "qr" && qrRef.current) {
            const link = document.createElement("a");

            link.download = "qr-code.png";
            link.href = qrRef.current.toDataURL("image/png");

            link.click();
        }

        if (type === "barcode" && barcodeRef.current) {
            const svg = barcodeRef.current;

            const serializer = new XMLSerializer();
            const svgString = serializer.serializeToString(svg);

            const svgBlob = new Blob(
                [svgString],
                {
                    type: "image/svg+xml;charset=utf-8",
                }
            );

            const url = URL.createObjectURL(svgBlob);

            const link = document.createElement("a");

            link.href = url;
            link.download = "barcode.svg";

            link.click();

            URL.revokeObjectURL(url);
        }
    };

    return (
        <div className="generated-card-wrapper">

            <motion.div
                className="generated-card"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <div className="generated-card__preview">
                    {type === "qr" && (
                        <canvas ref={qrRef} />
                    )}

                    {type === "barcode" && (
                        <svg ref={barcodeRef}></svg>
                    )}

                    {!value && (
                        <p className="generated-card__placeholder">
                            Your generated code will appear here.
                        </p>
                    )}
                </div>

                <h3>{title}</h3>

                {description && (
                    <p className="generated-card__description">
                        {description}
                    </p>
                )}
            </motion.div>

            {value && (
                <button
                    type="button"
                    onClick={handleDownload}
                    className="generated-card__download"
                >
                    Download
                </button>
            )}

        </div>
    );
};

export default GeneratedCard;