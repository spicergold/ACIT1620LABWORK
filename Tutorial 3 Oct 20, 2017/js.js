var chatStr = "";

function replaceEmojis(){
    chatStr = chatStr.replace(":)", "<img class='emoji' src= 'img/smile.jpg' />");
    
   chatStr = chatStr.replace(":(", "<img class='emoji' src= 'img/sad.jpg' />");
    
    chatStr = chatStr.replace(";)", "<img class='emoji' src= 'img/wink.png' />");
    
    chatStr = chatStr.replace(":o", "<img class='emoji' src= 'img/shock.png' />");
    
    chatStr = chatStr.replace(":|", "<img class='emoji' src= 'img/straight.png' />");
    
    chatStr = chatStr.replace("boogie", "******");
    chatStr = chatStr.replace("velvet", "******");
    chatStr = chatStr.replace("moist", "******");
    chatStr = chatStr.replace("goat", "******"); 
    
}
/*-----------------------pP1Chat------------------------*/
function changeChatStr(){
    chatStr = document.getElementById("p1Input").value;
    document.getElementById("p1Input").value = "";
    
    /*if(chatStr == ":)"){
        chatStr = "<img class='emoji' src= 'img/smile.jpg' />";
    } else if(chatStr == ":("){
        chatStr = "<img class='emoji' src='img/sad.jpg' />";
    }*/
    
    /*chatStr = chatStr.replace(":)", "<img class='emoji' src= 'img/smile.jpg' />");
    
   chatStr = chatStr.replace(":(", "<img class='emoji' src= 'img/sad.jpg' />");*/
    
    replaceEmojis();
}

/*------------------------p2Chat------------------------*/
function changeChatStr2(){
    chatStr = document.getElementById("p2Input").value;
    document.getElementById("p2Input").value = "";
    
   /* chatStr = chatStr.replace(":)", "<img class='emoji' src= 'img/smile.jpg' />");
    
   chatStr = chatStr.replace(":(", "<img class='emoji' src= 'img/sad.jpg' />");*/
    
    replaceEmojis();
}

/*---------------------chatDisplay----------------------*/
function createChat(chatNum){
    var ndiv = document.createElement("div");
    ndiv.innerHTML = chatStr;
    
    if(chatNum == 1){
        ndiv.style.backgroundColor = "#AFA";
    } else if (chatNum == 2){
        ndiv.style.backgroundColor = "#AAF";
    }
    
    ndiv.style.padding = "10px";
    
    document.getElementById("chatDisplay").appendChild(ndiv);

}

/*----------------------Interactions---------------------*/
document.getElementById("p1Input").addEventListener("keyup", function(ev){
    if(ev.keyCode == 13){
        changeChatStr();
        createChat(1);
    }
});

/*----------------------Interactions---------------------*/
document.getElementById("p2Input").addEventListener("keyup", function(ev){
    if(ev.keyCode == 13){
        changeChatStr2();
        createChat(2);
    }
});

