import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Food-Delivery-ReactApp/",
  plugins: [react()],
});
