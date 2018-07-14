


// function  chooseJob(job1,job2){
// 	if(job1 > job2){
// 		console.log("job 1 has the higher salary: " + job1);
// 	} else {
// 		console.log("job 2 has the higher salary: " + job2);
// 	}
// } 

// chooseJob(1096.5,1000);



// function sign(num){
// 	if (num > 0){
// 		console.log("1");
// 	} 
// 		else if(num === 0 ){
// 		console.log("0");
// 	} 	
// 		else{
// 		console.log("-1");
// 	}
// }


// 	sign(-4);



// 	function trafficMessage(color){
	

// 	if (color === "green"){
// 		console.log("Vehicles can move");
// 	} 
// 		else if(color === "yellow"){
// 		console.log("Vehicles should get ready to move");
// 	} 	
// 		else if(color === "red"){
// 		console.log("Vehicles must stop");
// 	}   else {
// 		console.log("you have to follow trafficMessage")
// 	}
// }


// 	trafficMessage("green");



// function evenNum(num){
// 	if(num %2 ===0){
// 		console.log("True");
// 	} else {
// 		console.log("Flase");
// 	}
// }


// evenNum(10);


// function salePrice(num1, num2){
// 	let discount = (num1 * num2) / 100;
// 		console.log(discount);
// 	console.log( "salePrice ="+ (num1 - discount));

// }

// salePrice(5000,40);


// let stringArray = ["4000"];

// function arrayPosition (stringArray){
// 	if ( stringArray.length=== 4 ){
// 		console.log("thousand position ");
// 	} else if (stringArray.length === 3){
// 		console.log("hundred position");
// 	} else if (stringArray.length === 2){
// 		console.log("ten position");
// 	} else {
// 		console.log("unit position");
// 	}
// }

// arrayPosition("1526");




// function ageDOB(){

// }








// function add(a,b){
// 	let c=a+b;
// 	return c;
// }



// function sub(a,b){
// 	let c=a-b;
// 	return c;
// }




// function mul(a,b){
// 	let c=a*b;
// 	return c;
// }


// function div(a,b){
// 	let c=a/b;
// 	return c;
// }


// function operate(a,b,c){

// if(c=="add"){
// 	console.log(add(a,b));
// }else if(c=="sub"){
// 	console.log(sub(a,b));
// }else if(c=="mul"){
// 	console.log(mul(a,b));
// }else if(c=="div"){
// 	console.log(div(a,b));
// }


// }

// operate(6,3,"mul");





function bodyTemp(f){
	let temp  =(f - 32)*5 /9;
	console.log(temp);
	if(temp<37){
		console.log( 37-temp);
	}
	else{
		console.log(temp-37);
	}


}

bodyTemp(50);
