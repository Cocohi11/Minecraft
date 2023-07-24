var canvas=new fabric.Canvas("myCanvas");

block_img_width=30;
block_img_height=30;
player_x=10;
player_y=10;

var player_object="";
block_image_object="";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img)
    {
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);

    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img)
    {
        block_image_object=Img;
        block_image_object.scaleToWidth(block_img_width);
        block_image_object.scaleToHeight(block_img_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);
    }
    
    );
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    key_pressed=e.keyCode;
    console.log(key_pressed);
    if(e.shiftKey==true && key_pressed=="80"){
        console.log("p & shift pressed together");
        block_img_width=block_img_width+10;
        block_img_height=block_img_height+10;
        document.getElementById("current_width").innerHTML=block_img_width;
        document.getElementById("current_height").innerHTML=block_img_height;

    }

    if(e.shiftKey==true && key_pressed=="77"){
        console.log("m & shift pressed together");
        block_img_width=block_img_width-10;
        block_img_height=block_img_height-10;
        document.getElementById("current_width").innerHTML=block_img_width;
        document.getElementById("current_height").innerHTML=block_img_height;
        
    }

    if(key_pressed=="38"){
        up();
        console.log("up arrow key is pressed");
    }

    if(key_pressed=="40"){
        down();
        console.log("down arrow key is pressed");
    }
    if(key_pressed=="37"){
        left();
        console.log("left arrow key is pressed");
    }
    if(key_pressed=="39"){
        right();
        console.log("right arrow key is pressed");
    }
    if(key_pressed=="87"){
        new_image("wall.jpg");
        console.log("w key is pressed");
    }

    if(key_pressed=="71"){
        new_image("ground.png");
        console.log("g key is pressed");
    }
    if(key_pressed=="76"){
        new_image("light_green.png");
        console.log("l key is pressed");
    }
    if(key_pressed=="84"){
        new_image("trunk.jpg");
        console.log("t key is pressed");
    }
    if(key_pressed=="82"){
        new_image("roof.jpg");
        console.log("r key is pressed");
    }
    if(key_pressed=="89"){
        new_image("yellow_wall.png");
        console.log("y key is pressed");
    }
    if(key_pressed=="68"){
        new_image("dark_green.png");
        console.log("d key is pressed");
    }
    if(key_pressed=="85"){
        new_image("unique.png");
        console.log("u key is pressed");
    }
    if(key_pressed=="67"){
        new_image("cloud.jpg");
        console.log("c key is pressed");
    }


}

function up(){
    if(player_y>=0){
        player_y=player_y-block_img_height;
        console.log("block image height= "+block_img_height);
        console.log("when up arrow is pressed ,x= "+player_x+" ,y= "+player_y);
        canvas.remove(player_object);
        player_update();

    }
}

function down(){
    if(player_y<=500){
        player_y=player_y+block_img_height;
        console.log("block image height= "+block_img_height);
        console.log("when down arrow is pressed,x= "+player_x+" y= "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left(){
    if(player_x>=0){
        player_x=player_x-block_img_width;
        console.log("block image width= "+block_img_width);
        console.log("when left arrow is pressed,x= "+player_x+" y= "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right(){
    if(player_x<=850){
        player_x=player_x+block_img_width;
        console.log("block image width= "+block_img_width);
        console.log("when right arrow is pressed,x="+player_x+" y= "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
