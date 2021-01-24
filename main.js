canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

car1_width = 120;
car1_height = 70; 

background_image = "https://i.pinimg.com/originals/d0/9c/4c/d09c4cfd1b93cc66dc13c8b461fd2145.jpg"; 
car1_image = "https://o.remove.bg/downloads/23b725fe-6f82-4988-b330-300fdcda7454/images-removebg-preview.png";

car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70; 


car2_image = "https://i.postimg.cc/YqdnnNX1/car1.png";

car2_x = 10;
car2_y = 100;

function add (){
     background_imgTag = new Image();
     background_imgTag.onload = uploadBackground; // setting a function, onloading this variable
	background_imgTag.src = background_image;   // load image

	car2_imgTag = new Image(); //defining a variable with a new image
	car2_imgTag.onload = uploadcar2; // setting a function, onloading this variable
	car2_imgTag.src = car2_image;   // load image
	car1_imgTag = new Image(); //defining a variable with a new image
	car1_imgTag.onload = uploadcar1; // setting a function, onloading this variable
	car1_imgTag.src = car1_image;   // load image
}
function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
	ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}
function uploadcar2() {
	ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		if(keyPressed == '87')
		{
			up_car2();
			console.log("Up for Car2");
		}
		if(keyPressed == '83')
		{
			down_car2();
			console.log("Down for Car2");
		}
		if(keyPressed == '65')
		{
			left_car2();
			console.log("Left for Car2");
		}
		if(keyPressed == '68')
		{
			right_car2();
			console.log("Right for Car2");
		}
}
function up()
{
	if(car1_y >=0)
	{
		car1_y = car1_y - 10;
		 uploadBackground();
		 uploadcar1();
		 uploadcar2();

	}
}
function down()
{
	if(car1_y <=500)
	{
		car1_y = car1_y+ 10;
		uploadBackground();
		uploadcar1();
		uploadcar2();

	}
}
function left()
{
	if(car1_x >= 0)
	{
		car1_x =car1_x - 10;
		uploadBackground();
		 uploadcar1();
		 uploadcar2();

	}
}
function right()
{
	if(car1_x <= 700)
	{
		car1_x =car1_x + 10;
		uploadBackground();
		uploadcar1();
		uploadcar2();

	}} 



	function up_car2()
{
	if(car2_y >=0)
	{
		car2_y = car2_y - 10;
		 uploadBackground();
		 uploadcar1();
		 uploadcar2();

	}
}
function down_car2()
{
	if(car2_y <=500)
	{
		car2_y = car2_y+ 10;
		uploadBackground();
		uploadcar1();
		uploadcar2();

	}
}
function left_car2()
{
	if(car2_x >= 0)
	{
		car2_x =car2_x - 10;
		uploadBackground();
		 uploadcar1();
		 uploadcar2();

	}
}
function right_car2()
{
	if(car2_x <= 700)
	{
		car2_x =car2_x + 10;
		uploadBackground();
		uploadcar1();
		uploadcar2();

	}} 