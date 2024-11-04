"use client";
import HamburgerMenu from "@/app/Components/NavigationBar";
import Image from "next/image";
import vid1 from '../assets/vid1.PNG';
import vid5 from '../assets/vid5.PNG';
import vid6 from '../assets/vid6.PNG';
import { Mic, VideoCameraFront } from "@mui/icons-material";




export default function dashboard() {
    return (
        <main>
            <HamburgerMenu />
            <section className="dash-container">
                <h1>Previous Work</h1>
                <section className="mainCont-cards">
                    <section className="dash-cards">
                        <Image
                            src={vid1}
                            alt="App Logo"
                            style={{ width: "80px", height: "80px",borderTopLeftRadius:"20px", borderBottomLeftRadius:"20px" }}
                        />
                        <div className="vid-details">
                            <h2>2024-10-19</h2>
                            <p>Duration: 60s</p>
                        </div>
                    </section>
                    <section className="dash-cards">
                        <Image
                            src={vid5}
                            alt="App Logo"
                            style={{ width: "80px", height: "80px", borderTopLeftRadius:"20px", borderBottomLeftRadius:"20px"  }}
                        />
                        <div className="vid-details">
                            <h2>2024-10-20</h2>
                            <p>Duration: 50s</p>
                        </div>
                    </section>
                    <section className="dash-cards">
                        <Image
                            src={vid6}
                            alt="App Logo"
                            style={{ width: "80px", height: "80px", borderTopLeftRadius:"20px", borderBottomLeftRadius:"20px"  }}
                        />
                        <div className="vid-details">
                            <h2>2024-10-21</h2>
                            <p>Duration: 40s</p>
                        </div>
                    </section>
                </section>
                <h1>Create New Project</h1>
                <section style={{width:"100%",display:"flex", flexDirection:"row",alignItems:"center",justifyContent:"center", columnGap:"20px",marginTop:"30px"}}>
                    <div className="action-container">
                        <Mic style={{backgroundColor:"#ffffff", color:"#3B82F6", fontSize:"25px"}}/>
                        <p>Audio</p>
                    </div>
                    <div className="action-container">
                        <VideoCameraFront style={{backgroundColor:"#ffffff", color:"#3B82F6", fontSize:"25px"}}/>
                        <p>Video</p>
                    </div>
                </section>
            </section>
        </main>
    )
}