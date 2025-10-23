Complete Step-by-Step Setup

Step 1: Create Vite Project

npm create vite@latest my-tailwind-app -- --template react
cd my-tailwind-app

Step 2: Install Dependencies

npm install
npm install tailwindcss @tailwindcss/vite

Step 3: Configure Vite
// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
plugins: [react(), tailwindcss()],
});

Step 4: Setup CSS

/_ src/index.css _/
@import "tailwindcss";

Step 5: Start Development
npm run dev
