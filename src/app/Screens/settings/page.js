"use client";
import { useEffect, useState } from "react";
import HamburgerMenu from "@/app/Components/NavigationBar";
import { DarkMode, Delete, Email, Notifications, Password, Person } from '@mui/icons-material';
import { Switch } from '@mui/material';
import { useDarkMode } from "@/app/DarkModeContext";

export default function Settings() {
   
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    return (
        <main className={isDarkMode ? "dark" : "light"}>
            <HamburgerMenu />
            <section style={{ width: "100%", height: "90vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <section className={`Profile-section ${isDarkMode ? "dark" : "light"}`}>
                    <h1>Settings</h1>
                    <div className='inner-content'>
                        <div className='inline'>
                            <DarkMode style={{ color: isDarkMode ? "#FFD700" : "#3B82F6", fontSize: "20px" }} />
                            <h2 style={{color: isDarkMode ? "#ffffff":"#333333"}}>Dark Mode</h2>
                            <Switch checked={isDarkMode} onChange={toggleDarkMode} />
                        </div>
                        <div className='inline'>
                            <Password style={{ color: isDarkMode ? "#FFD700" : "#3B82F6", fontSize: "20px" }} />
                            <h2 style={{color: isDarkMode ? "#ffffff":"#333333"}}>Change Password</h2>
                        </div>
                        <div className='inline'>
                            <Notifications style={{color: isDarkMode ? "#FFD700" : "#3B82F6", fontSize: "20px" }} />
                            <h2 style={{color: isDarkMode ? "#ffffff":"#333333"}}>Update Subscription</h2>
                        </div>
                        <div className='inline'>
                            <Delete style={{color: "red", fontSize: "20px" }} />
                            <h2 style={{color: isDarkMode ? "#ffffff":"#333333"}}>Delete Account</h2>
                        </div>
                    </div>
                    <button className='nav-button'>Edit</button>
                </section>
            </section>
        </main>
    );
}
