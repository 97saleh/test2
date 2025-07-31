import { Box, IconButton, Typography } from "@mui/material";
import type { Route } from "./+types/home";
import Topbar from "~/src/components/topbar/topbar";
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Saleh Amin" },
    { name: "description", content: "Welcome to Rezomeh Saleh" },
  ];
}

export default function Home() {
  return (
    < Box >
      <Topbar />
      <Box sx={{
        minHeight: "100vh",
        paddingTop: "90px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <Typography sx={{
          fontSize: "64px",
          color: "#00b894",
        }}> صالح امین  </Typography>
        <Typography sx={{
          fontSize: "16px",
          color: "gray",
        }}> برنامه نویس وب </Typography>
      </Box>


      <Box sx={{
        display: "flex",
        flexDirection: "column" ,
        alignItems:"start",
        marginTop: "-550px" ,
        pb: 2,
      }}>
        <IconButton>
          < InstagramIcon sx={{
            color: "gray",
            fontSize: "16px",
            marginLeft: 2,
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.3)",
              color: "white"
            },
          }} />
        </IconButton>
        <IconButton>
          <TelegramIcon sx={{
            color: "gray",
            fontSize: "16px",
            marginLeft: 2,
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.3)",
              color: "white"
            },
          }} />
        </IconButton>
        <IconButton>
          <WhatsAppIcon sx={{
            color: "gray",
            fontSize: "16px",
            marginLeft: 2,
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.3)",
              color: "white"
            },
          }} />
        </IconButton>
        <IconButton>
          <YouTubeIcon sx={{
            color: "gray",
            fontSize: "16px",
            marginLeft: 2,
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.3)",
              color: "white"
            },
          }} />
        </IconButton>
      </Box>
    </ Box >
  );
}
