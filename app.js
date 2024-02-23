const express= require("express");

const https=require("https");

const app = express();

app.get("/",function(req,res){
    const url = "https://api.openweathermap.org/data/2.5/weather?q=wardha&appid=9912244a11e31bde5c5ddc4a8f8c9066&units=metric"
   
    https.get(url,function(response){    
    console.log(response.statusCode);
    })

    response.on("data", function(data){
        const weatherData=JSON.parse(data)
        console.log(weatherData)
        // const temp= weatherData.main.temp
        // console.log(temp)
    })
    res.send("server is running")
})

app.listen(737, function(){
    console.log("server is running on port 737");
})