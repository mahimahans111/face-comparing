var img1 = document.querySelector("#img1");
var img2 = document.querySelector("#img2");	
var selectedimg = img1;

var imgList = document.getElementsByClassName("small");
imgList[1].style.display = "none";
imgList[0].classList.add("selectimg");
imgList[0].style.opacity = 1;
for(var i = 1; i < imgList.length; i++){ 
	imgList[i].style.opacity = 0.6;
}

// function send(img){
// 	$.post("www.google.com",{
// 		img:img
// 	})
// }

// img1.addEventListener("change", function(){
// 	send(this);
// });


var a1=document.querySelector("#a1");
var a2=document.querySelector("#a2");
var urlbutton= document.getElementById("urlbutton");
var urlinput=document.getElementById("urlinput");
var input = document.querySelector("input");
var result= document.querySelector("#result");
var scrollmenu = document.querySelector(".scrollmenu");
// var axios = require('axios');
	 for(var i = 0; i < imgList.length; i++){
	 	imgList[i].addEventListener("click", function(){

	 		if(img1.classList.contains("selectedimg")){
	 			for(var j = 0; j < imgList.length; j++){
	 			if(j!=i){
	 				imgList[0].classList.remove("selectimg");
	 				imgList[0].style.opacity = 0.6;
	 				imgList[j].classList.remove("selectimg");
	 				imgList[j].style.opacity=0.6;
	 			}
	 		}
	 		this.classList.add("selectimg");
	 		img1.src = this.src;
	 		this.style.opacity = 1;

	 		// imgchange(img1);
	 		}
	 		else if(img2.classList.contains("selectedimg")){
	 			for(var j = 0; j < imgList.length; j++){
	 			if(j!=i){
	 				imgList[0].classList.remove("selectimg");
	 				imgList[0].style.opacity = 0.6;
	 				imgList[j].classList.remove("selectimg");
	 				imgList[j].style.opacity=0.6;
	 			}
	 		}
	 		this.classList.add("selectimg");
	 		img2.src = this.src;
	 		this.style.opacity = 1;
	 		// imgchange(img2);
	 		}
	 	sendimg(img1,img2);
	 	});
	 }


img1.addEventListener("click", function(){
	selectedimg = img1;
	 img1.classList.add("selectedimg")
	 img2.classList.remove("selectedimg");

	 for(var i = 0; i < imgList.length; i++){
	 	if(imgList[i].src == img1.src){
	 		for(var j = 0; j < imgList.length; j++){
	 			if(j!=i){
	 				imgList[0].classList.remove("selectimg");
	 				imgList[0].style.opacity = 0.6;
	 				imgList[j].classList.remove("selectimg");
	 				imgList[j].style.opacity=0.6;
	 			}
	 		}
	 		imgList[i].classList.add("selectimg");
	 		img1.src = imgList[i].src;
	 		imgList[i].style.opacity = 1;
	 	}
	 }
});

img2.addEventListener("click", function(){
	selectedimg = img2;
	img2.classList.add("selectedimg")
	img1.classList.remove("selectedimg");

	for(var i = 0; i < imgList.length; i++){
	 	if(imgList[i].src == img2.src){
	 		for(var j = 0; j < imgList.length; j++){
	 			if(j!=i){
	 				imgList[0].classList.remove("selectimg");
	 				imgList[0].style.opacity = 0.6;
	 				imgList[j].classList.remove("selectimg");
	 				imgList[j].style.opacity=0.6;
	 			}
	 		}
	 		imgList[i].classList.add("selectimg");
	 		img2.src = imgList[i].src;
	 		imgList[i].style.opacity = 1;
	 	}
	 }
	 // change(img1, img2);
	 // fetch(url, {
  //       method: 'POST',
  //       body: {
  //         image1: img1,
  //         image2: img2
  //       }
  //   }).then(console.log("done!"));
});

a1.addEventListener("click", function(){
	a1.style.background ="white";
	a1.style.color="#00b2e0";
	a2.style.background="#f6f7fb";
	a2.style.color="black";
	result.innerHTML = "isSame:";
});

a2.addEventListener("click", function(){
	a2.style.background ="white";
	a2.style.color="#00b2e0";
	a1.style.background="#f6f7fb";
	a1.style.color="black";
	result.innerHTML=
	result.innerHTML=JSON.stringify(result.innerHTML);

});

urlbutton.addEventListener("click", function(){
	if(urlinput.value){
		for(var j = 0; j < imgList.length; j++){
	 				imgList[j].classList.remove("selectimg");
	 				imgList[j].style.opacity=0.6;
	 			}


		if(img1.classList.contains("selectedimg")){
			
			img1.src = urlinput.value;
			sendimg(img1,img2);
			// imgchange(img1);
		}
		else{

			img2.src = urlinput.value;
			sendimg(img1,img2);
			// imgchange(img2);
		}
	}
	sendimg(img1,img2);
	urlinput.value="";
});

     function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                for(var j = 0; j < imgList.length; j++){
	 				imgList[j].classList.remove("selectimg");
	 				imgList[j].style.opacity=0.6;
	 			}
                	if(img1.classList.contains("selectedimg")){
                    $('#img1')
                        .attr('src', e.target.result);
                        // imgchange(img1);
                    }
                    else{
                    	 $('#img2')
                        .attr('src', e.target.result);
                        // imgchange(img2);
                    }
                };

                reader.readAsDataURL(input.files[0]);

            }
        }

   $("#upload").bind("click",function(){
   		$("#myImg").click();
   });

img1.addEventListener("click", function(){
	for(var i = 0; i < imgList.length; i++){
		imgList[i].style.display = "inline-block";
		if(imgList[i].src == img2.src){
			imgList[i].style.display = "none";
		}
	}
});

img2.addEventListener("click", function(){
	for(var i = 0; i < imgList.length; i++){
		imgList[i].style.display = "inline-block";
		if(imgList[i].src == img1.src){
			imgList[i].style.display = "none";
		}
	}
});

// $(document).ready(function(){
//   $("button").click(function(){
//     $.post("demo_test_post.asp",
//     {
//       name: "Donald Duck",
//       city: "Duckburg"
//     },
//     function(data,status){
//       alert("Data: " + data + "\nStatus: " + status);
//     });
//   });
// });

function sendimg(image1, image2){
	$.post("http://13.127.173.251:8000/faceR/face/compare/", {
    json_string: JSON.stringify({image1:img1})
    });
}

// 		var img1 = document.querySelector("#img1");
// var img2 = document.querySelector("#img2");
// var selectedimg = img1;
// var imgList = document.getElementsByClassName("small");
// imgList[1].style.display = "none";
// imgList[0].classList.add("selectimg");
// imgList[0].style.opacity = 1;
// for(var i = 1; i < imgList.length; i++){
// 	imgList[i].style.opacity = 0.6;
// }
// var a1=document.querySelector("#a1");
// var a2=document.querySelector("#a2");
// var urlbutton= document.getElementById("urlbutton");
// var urlinput=document.getElementById("urlinput");
// var input = document.querySelector("input");
// var result= document.querySelector("#result");
// var scrollmenu = document.querySelector(".scrollmenu");

// 	 for(var i = 0; i < imgList.length; i++){
// 	 	imgList[i].addEventListener("click", function(){

// 	 		if(img1.classList.contains("selectedimg")){
// 	 			for(var j = 0; j < imgList.length; j++){
// 	 			if(j!=i){
// 	 				imgList[0].classList.remove("selectimg");
// 	 				imgList[0].style.opacity = 0.6;
// 	 				imgList[j].classList.remove("selectimg");
// 	 				imgList[j].style.opacity=0.6;
// 	 			}
// 	 		}
// 	 		this.classList.add("selectimg");
// 	 		img1.src = this.src;
// 	 		this.style.opacity = 1;
// 	 		}
// 	 		else if(img2.classList.contains("selectedimg")){
// 	 			for(var j = 0; j < imgList.length; j++){
// 	 			if(j!=i){
// 	 				imgList[0].classList.remove("selectimg");
// 	 				imgList[0].style.opacity = 0.6;
// 	 				imgList[j].classList.remove("selectimg");
// 	 				imgList[j].style.opacity=0.6;
// 	 			}
// 	 		}
// 	 		this.classList.add("selectimg");
// 	 		img2.src = this.src;
// 	 		this.style.opacity = 1;
// 	 		}
// 	 	});
// 	 }


// img1.addEventListener("click", function(){
// 	selectedimg = img1;
// 	 img1.classList.add("selectedimg")
// 	 img2.classList.remove("selectedimg");

// 	 for(var i = 0; i < imgList.length; i++){
// 	 	if(imgList[i].src == img1.src){
// 	 		for(var j = 0; j < imgList.length; j++){
// 	 			if(j!=i){
// 	 				imgList[0].classList.remove("selectimg");
// 	 				imgList[0].style.opacity = 0.6;
// 	 				imgList[j].classList.remove("selectimg");
// 	 				imgList[j].style.opacity=0.6;
// 	 			}
// 	 		}
// 	 		imgList[i].classList.add("selectimg");
// 	 		img1.src = imgList[i].src;
// 	 		imgList[i].style.opacity = 1;
// 	 	}
// 	 }
//     $.post("http://13.127.173.251:8000/faceR/face/compare/", {
//     json_string: JSON.stringify({image1:img1, image2:img2})
//     });
// });

// img2.addEventListener("click", function(){
// 	selectedimg = img2;
// 	img2.classList.add("selectedimg")
// 	img1.classList.remove("selectedimg");

// 	for(var i = 0; i < imgList.length; i++){
// 	 	if(imgList[i].src == img2.src){
// 	 		for(var j = 0; j < imgList.length; j++){
// 	 			if(j!=i){
// 	 				imgList[0].classList.remove("selectimg");
// 	 				imgList[0].style.opacity = 0.6;
// 	 				imgList[j].classList.remove("selectimg");
// 	 				imgList[j].style.opacity=0.6;
// 	 			}
// 	 		}
// 	 		imgList[i].classList.add("selectimg");
// 	 		img2.src = imgList[i].src;
// 	 		imgList[i].style.opacity = 1;
// 	 	}
// 	 }
//     $.post("http://13.127.173.251:8000/faceR/face/compare/", {
//     json_string: JSON.stringify({image1:img1})
//     });
// });

// a1.addEventListener("click", function(){
// 	a1.style.background ="white";
// 	a1.style.color="#00b2e0";
// 	a2.style.background="#f6f7fb";
// 	a2.style.color="black";
// 	result.innerHTML = "isSame:";
// });

// a2.addEventListener("click", function(){
// 	a2.style.background ="white";
// 	a2.style.color="#00b2e0";
// 	a1.style.background="#f6f7fb";
// 	a1.style.color="black";
// 	result.innerHTML = JSON.stringify();
// });

// urlbutton.addEventListener("click", function(){
// 	if(urlinput.value){
// 		for(var j = 0; j < imgList.length; j++){
// 	 				imgList[j].classList.remove("selectimg");
// 	 				imgList[j].style.opacity=0.6;
// 	 			}


// 		if(img1.classList.contains("selectedimg")){
// 			img1.src = urlinput.value;
// 		}
// 		else{
// 			img2.src = urlinput.value;
// 		}
// 	}
// 	urlinput.value="";
// });

//      function readURL(input) {
//             if (input.files && input.files[0]) {
//                 var reader = new FileReader();

//                 reader.onload = function (e) {
//                 for(var j = 0; j < imgList.length; j++){
// 	 				imgList[j].classList.remove("selectimg");
// 	 				imgList[j].style.opacity=0.6;
// 	 			}
//                 	if(img1.classList.contains("selectedimg")){
//                     $('#img1')
//                         .attr('src', e.target.result);
//                     }
//                     else{
//                     	 $('#img2')
//                         .attr('src', e.target.result);
//                     }
//                 };

//                 reader.readAsDataURL(input.files[0]);

//             }
//         }

//    $("#upload").bind("click",function(){
//    		$("#myImg").click();
//    });

// img1.addEventListener("click", function(){
// 	for(var i = 0; i < imgList.length; i++){
// 		imgList[i].style.display = "inline-block";
// 		if(imgList[i].src == img2.src){
// 			imgList[i].style.display = "none";
// 		}
// 	}
// });

// img2.addEventListener("click", function(){
// 	for(var i = 0; i < imgList.length; i++){
// 		imgList[i].style.display = "inline-block";
// 		if(imgList[i].src == img1.src){
// 			imgList[i].style.display = "none";
// 		}
// 	}
// });