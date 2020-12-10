var canvas= new fabric.Canvas("myCanvas");

var player_x= 10;
var player_y= 10;

var block_width= 30;
var block_height= 30;

var block_img="";
var player_img="";

function playerUpdate(){
    fabric.Image.fromURL("player.png",function(Img){
        player_img=Img;
        player_img.scaleToWidth(150);
        player_img.scaleToHeight(140);
        player_img.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_img);
    });
}
function blockUpdate(getImage){
    fabric.Image.fromURL(getImage,function(Img){
        block_img=Img;
        block_img.scaleToWidth(block_width);
        block_img.scaleToHeight(block_height);
        block_img.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_img);
    });
}
window.addEventListener("keydown",myKeydown)
function myKeydown(e){
   var keyPressed=e.keyCode;
   console.log(keyPressed);
   if(e.shiftKey == true && keyPressed=='80'){
    block_width=block_width+10;
    block_height=block_height+10;
    document.getElementById("span_width").innerHTML=block_width;
    document.getElementById("span_height").innerHTML=block_height;
   }
   if(e.shiftKey == true && keyPressed=='77'){
    block_width=block_width-10;
    block_height=block_height-10;
    document.getElementById("span_width").innerHTML=block_width;
    document.getElementById("span_height").innerHTML=block_height;
   }
   if(keyPressed=='38'){
       up();
       console.log("up");
   }
   if(keyPressed=='40'){
        down();
    console.log("down");
}
    if(keyPressed=='37'){
    left();
    console.log("left");
}
    if(keyPressed=='39'){
    right();
    console.log("right");
}
if(keyPressed=='70'){
    blockUpdate("ironman_face.png");
    console.log("f");
}
if(keyPressed=='66'){
    blockUpdate("spiderman_body.png");
    console.log("b");
}
if(keyPressed=='82'){
    blockUpdate("thor_right_hand.png");
    console.log("r");
}
if(keyPressed=='76'){
    blockUpdate("captain_america_left_hand.png");
    console.log("l");
}
if(keyPressed=='90'){
    blockUpdate("hulk_legs.png");
    console.log("z");
}
}

function up(){
    if(player_y>=0){
        player_y=player_y-block_height;
        canvas.remove(player_img);
        playerUpdate();
    }
}
function down(){
    if(player_y<=500){
        player_y=player_y+block_height;
        canvas.remove(player_img);
        playerUpdate();
    }
}
    function left(){
        if(player_x>=0){
            player_x=player_x-block_width;
            canvas.remove(player_img);
            playerUpdate();
        }
    }
    function right(){
        if(player_x<=850){
            player_x=player_x+block_width;
            canvas.remove(player_img);
            playerUpdate();
        }
    }