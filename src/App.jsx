import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import BarcodeGenerator from "./pages/BarcodeGeneratorPage/BarcodePage";
import QrCodeGenerator from "./pages/QrCodeGeneratorPage/QrCodePage";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Navbar />

                <main className="app__main">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <Navigate
                                    to="/qr-code-generator"
                                    replace
                                />
                            }
                        />

                        <Route
                            path="/qr-code-generator"
                            element={<QrCodeGenerator />}
                        />

                        <Route
                            path="/barcode-generator"
                            element={<BarcodeGenerator />}
                        />

                        <Route
                            path="*"
                            element={
                                <Navigate
                                    to="/qr-code-generator"
                                    replace
                                />
                            }
                        />
                    </Routes>
                </main>

                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;