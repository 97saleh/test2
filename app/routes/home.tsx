import { Box, Typography } from "@mui/material";
import type { Route } from "./+types/home";
import Topbar from "~/src/components/topbar/topbar";

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
        <Typography sx={{ color: "gray", }}> صالح امین  </Typography>
        <Typography> برنامه نویس وب </Typography>
      </Box>
    </ Box >
  );
}
