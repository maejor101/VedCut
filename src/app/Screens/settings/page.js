"use client";
import HamburgerMenu from "@/app/Components/NavigationBar";
import { DarkMode, Delete, Email, Notifications, Password, Person } from '@mui/icons-material';
import { Switch } from '@mui/material';

export default function settings() {
    return (
        <main>
            <HamburgerMenu />
            <section style={{ width: "100%", height: "90vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <section className="Profile-section">
                    <h1>Settings</h1>
                    <div className='inner-content'>
                        <div className='inline'>
                            <DarkMode style={{backgroundColor:"#ffffff", color:"#3B82F6", fontSize:"20px"}}/>
                            <h2>Dark Mode</h2>
                            <Switch/>
                        </div>
                        <div className='inline'>
                            <Password style={{backgroundColor:"#ffffff", color:"#3B82F6", fontSize:"20px"}}/>
                            <h2>Change Password</h2>
                        </div>
                        <div className='inline'>
                            <Notifications style={{backgroundColor:"#ffffff", color:"#3B82F6", fontSize:"20px"}}/>
                            <h2>Update Subscription</h2>
                        </div>
                        <div className='inline'>
                            <Delete style={{backgroundColor:"#ffffff", color:"red", fontSize:"20px"}}/>
                            <h2>Delete Account</h2>
                        </div>
                    </div>
                    <button className='nav-button'>Edit</button>
                </section>
            </section>

        </main>
    )
}