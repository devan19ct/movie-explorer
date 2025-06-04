import { createRoot } from "react-dom/client"
import App from "./components/App.jsx"
import React, { useState } from 'react';


const root = createRoot(document.getElementById("root"))
const apiKey = import.meta.env.VITE_TMDB_API_KEY;






root.render(

      < App />

)