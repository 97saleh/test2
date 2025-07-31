import { Box, IconButton } from '@mui/material'
import React from 'react'
import HomeMaxIcon from '@mui/icons-material/HomeMax';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';

const Topbar = () => {
    return (
        <Box sx={{
            position: "fixed",
            top: 0,
            left: 0,
            bgcolor: "black",
            opacity: "0.5",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 10
        }} >
            <Box>
                <IconButton aria-label="delete">
                    < HomeMaxIcon sx={{
                        color: "white",
                        fontSize: "32px",
                        m: 2,
                        transition: "transform 0.3s ease",
                        "&:hover": {
                            transform: "scale(1.3)",
                        },
                    }} />
                </IconButton>
                <IconButton aria-label="delete">
                    <PersonPinIcon sx={{
                        color: "white",
                        fontSize: "32px",
                        m: 2,
                        transition: "transform 0.3s ease",
                        "&:hover": {
                            transform: "scale(1.3)",
                        },
                    }} />
                </IconButton>
                <IconButton aria-label="delete">
                    <PermContactCalendarIcon sx={{
                        color: "white",
                        fontSize: "32px",
                        m: 2,
                        transition: "transform 0.3s ease",
                        "&:hover": {
                            transform: "scale(1.3)",
                        },
                    }} />
                </IconButton>
                <IconButton aria-label="delete">
                    <WorkOutlineIcon sx={{
                        color: "white",
                        fontSize: "32px",
                        m: 2,
                        transition: "transform 0.3s ease",
                        "&:hover": {
                            transform: "scale(1.3)",
                        },
                    }} />
                </IconButton>
                <IconButton aria-label="delete">
                    <LocalPostOfficeIcon sx={{
                        color: "white",
                        fontSize: "32px",
                        m: 2,
                        transition: "transform 0.3s ease",
                        "&:hover": {
                            transform: "scale(1.3)",
                        },
                    }} />
                </IconButton>
            </Box>

        </Box >
    )
}

export default Topbar
