const express = require("express");
const i18next = require("i18next");
const Backend = require("i18next-fs-backend");
const middleware = require("i18next-http-middleware");
const cookieParser = require("cookie-parser");

const app = express();

// Initialize i18next
i18next
  .use(Backend)
  .use(middleware.LanguageDetector)
  .init({
    fallbackLng: "en", // Default language
    preload: ["en", "es", "fr", "it"], // Load available languages
    backend: {
      loadPath: "./locales/{{lng}}/translation.json", // Translation files
    },
    detection: {
      order: ["cookie", "header", "querystring"], // Language detection methods
      caches: ["cookie"],
    },

  });

// Middleware
app.use(cookieParser());
app.use(middleware.handle(i18next));

// Routes
app.get("/", (req, res) => {
  res.send(req.t("welcome")); // Translate the "welcome" key
});

// Start Server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});


