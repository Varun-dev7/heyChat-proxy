const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const cors = require("cors");

const app = express();

app.use(cors({
  origin: "https://hey-chat-peach.vercel.app/",
  credentials: true,
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "X-Requested-With"
  ]
}));

app.options("*", cors());

app.use(
  "/chat",
  createProxyMiddleware({
    target: "http://heychat.runasp.net",
    changeOrigin: true,
    ws: true,
    secure: false,
  })
);

app.get("/", (req, res) => {
  res.send("Proxy running 🚀");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);
