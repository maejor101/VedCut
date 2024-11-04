"use client";
import Image from 'next/image';
import profilePic from '../assets/profilePic.jpg';
import HamburgerMenu from "@/app/Components/NavigationBar";
import { Email, Notifications, Person } from '@mui/icons-material';

export default function profile() {
    return (
        <main>
            <HamburgerMenu />
            <section style={{ width: "100%", height: "90vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <section className="Profile-section">
                    <h1>Profile</h1>
                    <Image
                        src={profilePic}
                        alt="App Logo"
                        style={{ borderRadius: "100%", width: "100px", height: "100px", borderRadius: "100%" }}
                    />
                    <div className='inner-content'>
                        <div className='inline'>
                            <Person style={{backgroundColor:"#ffffff", color:"#3B82F6", fontSize:"25px"}}/>
                            <h2>Promise Magoga</h2>
                        </div>
                        <div className='inline'>
                            <Email style={{backgroundColor:"#ffffff", color:"#3B82F6", fontSize:"25px"}}/>
                            <h2>tshegofatsopromise362@gmail.com</h2>
                        </div>
                        <div className='inline'>
                            <Notifications style={{backgroundColor:"#ffffff", color:"#3B82F6", fontSize:"25px"}}/>
                            <h2>Basic</h2>
                        </div>
                    </div>
                    <button className='nav-button'>Edit</button>
                </section>
            </section>

        </main>
    )
}