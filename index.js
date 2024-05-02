const express = require('express');
const app = express();

// console.dir(app);

let port = 8080;

app.listen(port, () => {
    console.log(`app is listing on port ${port}`);
});

app.get("/",(req,res)=> {
    res.send("You can contacted root path");
})

app.get("/apple",(req,res)=> {
    res.send("You can contacted with apple root path");
})

app.get("/Banana",(req,res)=> {
    res.send("You can contacted with Banana root path");
})

app.get("/",(req,res)=> {
    res.send("chale ja bosdeke");
})

app.post("/",(req,res)=> {
    res.send("You send Post request");
})

// app.use((req,res)=> {
//     // console.log(req);
//     console.log("request received");
//     let code ="<h1>Fruits</1h><ul><li>apple</li><li>Banana</li></ul>";
//     res.send(code);
// });