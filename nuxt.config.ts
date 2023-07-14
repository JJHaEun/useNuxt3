export default defineNuxtConfig({
  devtools: { enabled: true },
  plugins: [
    { src: "/SBGrid/css/SBGrid_Lightblue_Default.css", ssr: false },
    { src: "/SBGrid/css/SBGrid_Lightblue.css", ssr: false },
    { src: "/SBGrid/SBGrid_Lib.js", ssr: false },
    { src: "/SBGrid/SBGrid_min.js", ssr: false },
    { src: "/SBGrid.vue", ssr: false },
    { src: "./pages/index.vue", ssr: false },
  ],
  app: {
    head: {
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "" },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [
        {
          rel: "stylesheet",
          type: "text/css",
          href: "./public/SBGrid/css/SBGrid_Lightblue.css",
        },
        {
          rel: "stylesheet",
          type: "text/css",
          href: "./public/SBGrid/css/SBGrid_Lightblue_Default.css",
        },
      ],
      script: [
        { src: "./public/SBGrid/SBGrid_Lib.js", type: "text/javascript" },
        { src: "./public/SBGrid/SBGrid_min.js", type: "text/javascript" },
      ],
    },
  },
});
