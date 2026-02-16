const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

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
  res.send("Proxy running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
