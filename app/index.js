const app = require("express")();
const APPID = process.env.APP_ID;
app.get("/", (req, resp) => {
  resp.send(`Hello from lightweight container - ${APPID}`);
});

app.get("/app1", (req, resp) => {
  resp.send(`Hello from APP 1 lightweight container - ${APPID}`);
});

app.get("/app2", (req, resp) => {
  resp.send(`Hello from APP2 lightweight container - ${APPID}`);
});

// app.listen(9999, () => console.log("Listenning on 9999"));
app.listen(APPID, () => console.log(`Listenning on ${APPID}`));
