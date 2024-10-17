import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    base: mode === "production" ? "/portfolio-react/" : "/", // Set base for production
    define: {
      "process.env.BASE_PATH": JSON.stringify(
        mode === "production" ? "/portfolio-react/" : "/"
      ),
    },
  };
});
