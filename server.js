const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const cors = require("cors");

const app = express();

app.use(cors({
  origin: "*",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"]
}));

app.use(
  "/chat",
  createProxyMiddleware({
    target: "http://heychat.runasp.net",
    changeOrigin: true,
    ws: true,
    secure: false,
  })
);

const PORT = process.env.PORT || 3000;
app.listen(PORT);
