var images = ["https://previews.12rf.com/images/blueringmedia/blueringmedia1706/blueringmedia170600092/79459803-cute-girl-in-white-shirt-and-red-skirt-illustration.jpg",
"https://i.pinimg.com/474x/c6/70/14/c67014c9461b8a382227f8c297e49372--clipart-boys.jpg"
,"https://thumbs.dreamstime.com/b/happy-man-points-out-something-presentation-showing-element-advertising-goods-vector-illustration-cartoon-style-119680930.jpg"
,"https://www.pngitem.com/pimgs/m/284-2841358_mother-with-short-brown-hair-clip-art-at.png"];

var names = ["Me", "Brother", "Dad","Mom"];
var i = 0;

function update(){

  var array_length = images.length;
  var updated_image = images[i];
  var updated_text = names[i];

  document.getElementById("family_member_image").src = updated_image;
  document.getElementById("family_member_name").innerHTML = updated_text;

  i++;


  if (i>array_length){
  i = 0;
                
  }
}