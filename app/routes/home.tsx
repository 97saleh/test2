import { Box } from "@mui/material";
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
    < Box sx={{
    
    }} >
        <Topbar/>
    </ Box >
  );
}
