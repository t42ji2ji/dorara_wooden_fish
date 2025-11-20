import CustomCursor from "@/components/CustomCursor"
import { ThemeProvider } from "@/components/ThemeProvider"
import Home from "@/pages/Home"
import PrivacyPolicy from "@/pages/PrivacyPolicy"
import { useState } from "react"
import { Toaster } from "react-hot-toast"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import LanguageToggle from "./components/LanguageToggle"
import { ThemeToggle } from "./components/ThemeToggle"

function App() {
    const [showCustomCursor,] = useState(true)
    const [cursorColor,] = useState('#000000')
    const [cursorLightColor,] = useState('#ffffff')

    return (
        <ThemeProvider defaultTheme="system" storageKey="vibe-ui-theme">
            <BrowserRouter>
                {showCustomCursor && (
                    <CustomCursor
                        color={cursorColor}
                        lightColor={cursorLightColor}
                        invertOnDarkMode
                    />
                )}

                <div className="absolute top-4 right-4 flex items-center gap-2">
                    <LanguageToggle />
                    <ThemeToggle />
                </div>

                <Toaster position="top-center" />

                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="/privacy" element={<PrivacyPolicy />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App 