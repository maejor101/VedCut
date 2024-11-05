// app/LayoutWrapper.js
"use client";
import { DarkModeProvider } from "@/app/DarkModeContext";

export default function LayoutWrapper({ children }) {
    return (
        <DarkModeProvider>
            <main>{children}</main>
        </DarkModeProvider>
    );
}
