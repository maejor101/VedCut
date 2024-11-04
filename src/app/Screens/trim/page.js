"use client";
import HamburgerMenu from "@/app/Components/NavigationBar";
import React, { useRef, useState } from 'react';
import { Box, IconButton, Slider } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import { ContentCut, Download, Merge } from "@mui/icons-material";
import PopUpForm from "@/app/Components/PopUpForm";

export default function trim() {

    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(50);
    const [open, setOpen] = useState(false);

    const openPopUp = () => {
        setOpen(true);
    };

    const handlePlayPause = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleVolumeChange = (event, newValue) => {
        setVolume(newValue);
        videoRef.current.volume = newValue / 100;
    };

    const handleFullscreen = () => {
        if (videoRef.current.requestFullscreen) {
            videoRef.current.requestFullscreen();
        }
    };

    return (
        <main>
            <HamburgerMenu />
            <section style={{position:"relative"}}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: 640, marginTop: "50px 20px" }}>
                    <video ref={videoRef} src="../assets/small.mp4" title="small.mp4" width="100%" style={{ borderRadius: 8 }} />
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', mt: 1 }}>
                        <IconButton onClick={handlePlayPause}>
                            {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
                        </IconButton>
                        <Box sx={{ display: 'flex', alignItems: 'center', width: '40%' }}>
                            <VolumeUpIcon />
                            <Slider value={volume} onChange={handleVolumeChange} aria-labelledby="volume-slider" />
                        </Box>
                        <IconButton onClick={handleFullscreen}>
                            <FullscreenIcon />
                        </IconButton>
                    </Box>
                </Box>
                <section className="trimmed-section">
                    <h1>Trimmed Parts</h1>
                    <div className="trimmed-parts">
                        <video width="300" controls>
                            <source src="../assets/small.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <video width="300" controls>
                            <source src="../assets/small.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <video width="300" controls>
                            <source src="../assets/small.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </section>
                {open && <PopUpForm setOpen={setOpen} />}
            </section>
            <section className="bottom-nav">
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", rowGap: "10px" }} onClick={openPopUp}>
                    <ContentCut style={{ color: "#3B82F6;", fontSize: "20px" }} />
                    <p>Trim</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", rowGap: "10px" }}>
                    <Merge style={{ color: "#3B82F6;" }} />
                    <p>Merge</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", rowGap: "10px" }}>
                    <Download style={{ color: "#3B82F6;" }} />
                    <p>Download</p>
                </div>
            </section>
        </main>
    )
}