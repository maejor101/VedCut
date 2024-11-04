import { CloseRounded } from '@mui/icons-material';
import React, { useState } from 'react';

function PopUpForm({setOpen}) {


function handleClose(){
    setOpen(false)
}

    return (
        <section className='pop-up-background'>
            <form>
                <CloseRounded onClick={handleClose} style={{ backgroundColor: "#3B82F6", color: "#ffffff", borderRadius: "100%", marginLeft: "auto" }} />
                <div style={{marginTop:"30px",display:"flex", flexDirection:"column",rowGap:"20px"}}>
                    <label>
                        Start
                        <input placeholder='00:10:00' required/>
                    </label>
                    <label>
                        End
                        <input placeholder='00:20:00'  required/>
                    </label>
                    <button className='nav-button'>Trim</button>
                </div>

            </form>

        </section>
    );
}

export default PopUpForm;
