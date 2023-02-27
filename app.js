const express = require("express");
const bodyParser = require("body-parser");


const app = express();

var items = ["Buy Food","Cook Food","Eat Food"]

app.set('view engine','ejs');


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


app.get("/",function(req,res){
    var today = new Date();
    var currentDay = today.getDay();
    var day = " ";

    if(currentDay == 0){
        day = "Sunday";
        res.render("list",{kindOfDay:day,newListItems:items});

    }
    else if(currentDay == 1){
        day = "Monday";
        res.render("list",{kindOfDay:day,newListItems:items});
        
    }

    else if(currentDay == 2){
        day = "Tuesday";
        res.render("list",{kindOfDay:day,newListItems:items});

    }

    else if(currentDay == 3){
        day = "Wednesday";
        res.render("list",{kindOfDay:day,newListItems:items});

    }

    else if(currentDay == 4){
        day = "Thursday";
        res.render("list",{kindOfDay:day,newListItems:items});

    }

    else if(currentDay == 5){
        day = "Friday";
        res.render("list",{kindOfDay:day,newListItems:items});
    }

    else{
        day = "Saturday";
        res.render("list",{kindOfDay:day,newListItems:items});
    }




});

app.post("/",function(req,res){
    var item = req.body.newItem;
    items.push(item);
    res.redirect("/");

   

});

app.listen(3000,function(){
    console.log("Server started at Port 3000");
});