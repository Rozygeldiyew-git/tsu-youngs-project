var allExample;
var JsonGet, i;
var umumy = false;
getExample = (x) => {

  async function loadNames() {
    const response = await fetch('http://localhost:2000/Tasks');
    const allExample1 = await response.json();
    allExample = allExample1;
    TakeTask1(x);
  }
  loadNames();
  
  TakeTask1 = (x) => {
    
    JsonGet = '';
    $(".tasksAll").empty();
    for (i = x * 20 - 20; i <= x * 20 - 1; i++) {
      JsonGet += `<tr><th  style='text-align:center' >${allExample[i].id}</th><td style='text-align:center'><a href='taskDetail.html?taskId=${allExample[i].id}'  onclick='takeTaskDiscreption(${allExample[i].id})'  "> ${allExample[i].taskName}</a> </td><td  style='text-align:center'>${allExample[i].taskTema}</td><td  style='text-align:center'><a href="#"> ${allExample[i].taskCurrent}</a> </td></tr>`
    }
    console.log(JsonGet);
    $(".tasksAll").append(JsonGet);
  }
}

var allNews;
var JsonGet1, i1;



getNews = (x) => {

  async function loadNames1() {
    const response = await fetch('http://localhost:2001/News');
    const allExample1 = await response.json();
    allNews = allExample1;
    TakeNews1(x);
  }
  loadNames1();

  TakeNews1 = (x) => {
    JsonGet1 = '';
    $(".newsItems").empty();
    for (i1 = x * 10 - 10; i1 <= x * 10 - 1; i1++) {
      JsonGet1 += `<div class='newsItem' style='display:flex;'> 	<div class='newsData' style='color: #0088cc; font-weight: bold;'> ${allNews[i1].dataa}   </div> <div class='newsText ml-xl' style='text-align:justify;'> ${allNews[i1].discreption}  </div> </div> <hr> `;
    }
    $(".newsItems").append(JsonGet1);
  }
}




takeTaskDiscreption = (x) => {
  x=x.split('=')[1]
  async function loadNames2() {
    const response = await fetch('http://localhost:2000/Tasks');
    const allExample1 = await response.json();
    allNews = allExample1;
    TakeDiscreption1(x);
  }
  loadNames2();

  TakeDiscreption1 = (x) => {
    $("#ibersene").empty();
    JsonGet1 = ` <h4 style='text-align: center; font-weight: bold; color:#0088cc'> ${allNews[x - 1].taskName}  </h4> <p style='padding-left: 50px;'>     ${allNews[x - 1].discreption}  </p>   <h4 style='color: #0088cc; padding-left: 10px; text-transform: none;'> Giriş faýyly </h4> <p style='padding-left: 50px;'>  ${allNews[x - 1].discreptionIn} </p> <h4 style='color: #0088cc; padding-left: 10px; text-transform: none;'> Çykyş faýyly</h4> <p style='padding-left: 50px;'>  ${allNews[x - 1].discreptionOut} </p> <h4 style='color: #0088cc; padding-left: 10px; text-transform: none;'> Mysal üçin </h4> <p style='padding-left: 50px;'> <table class='table table-bordered'> <thead id='ListenerGo'> <tr style='text-align: center; align-items: center;'> <th style='text-align: center; font-size: 14px; width: 16%;'>id</th> <th style='text-align: center; font-size: 14px; width: 42%;'>INPUT.txt</th> <th style='text-align: center; font-size: 14px; width: 42%;'>OUTPUT.txt</th> </tr> </thead> <tbody class='tasksAll'> <tr> <th style='text-align:center; font-size: 14px; '>1</th> <td style='text-align:center; font-size: 14px; color: black; '>2</td> <td style='text-align:center; font-size: 14px; color:black; '>4</td> </tr> </tbody> </table> </p>`;
    $('#ibersene').append(JsonGet1);
  }


}



function auto_grow(element) {
  element.style.height = "50px";
  element.style.height = (element.scrollHeight)+"px";
}





$("#talypp").click(function()
{
  $(".gorunyan").css("display","block");
  $(".gorunmeyan").css("display","none");
});

$("#okuwchyy").click(function()
{
  $(".gorunyan").css("display","none");
  $(".gorunmeyan").css("display","block");
})






UserOpen = () => {

  async function girmek() {
    const response = await fetch('http://localhost:3000');
    const allUser = await response.json();
    allUsers = allUser;
    InGirmek(allUsers);
  }
  girmek();

  InGirmek = (allUsers) => {
    var ll = false;
    console.log(allUsers);

    for (i2 = 0; i2 <= allUsers.length -1; i2++) {
      if (      allUsers[i2].Login === document.getElementById("LoginGir").value &&  allUsers[i2].Parol === document.getElementById("ParolGir").value)
      {

        umumy = true;

        $(".loaderr").css("display","block");
        $(".loaderr").css("opacity","0");
        setTimeout(function() { 
          $(".loaderr").css("opacity","1");
      }, 1);


      
      
      
      setTimeout(function() { 
        $(".loaderr").css("opacity","0");
        $(".loaderr").css("display","none");
        
      }, 1200);
      
      setTimeout(function() { 
        $(".UserBar").css("display","block");
        $(".UserYok").css("display","none");
          
      }, 1200);
      


        document.getElementById("UserGet").innerHTML="Ulanyjy: "+allUsers[i2].Ady + " " +allUsers[i2].Familya; 
        ll=true;
        break;
      } 
    }
    if (ll===false) {
      alert("Bular yaly ulanyjy yok!!!")
    }
  }
}


function LogOut(){
  umumy = false;
  $(".loaderr").css("display","block");
  $(".loaderr").css("opacity","0");
  setTimeout(function() { 
    $(".loaderr").css("opacity","1");
}, 1);



setTimeout(function() { 
  $(".loaderr").css("opacity","0");
  $(".loaderr").css("display","none");
  
}, 1200);

setTimeout(function() { 
  $(".UserBar").css("display","none");
  $(".UserYok").css("display","block");
  document.getElementById("ParolGir").value="";
}, 1200);


}


  


function LogOut1(){
  $(".UserBar").css("display","block");
  $(".UserYok").css("display","none");
}




$(document).ready(function()
{
  setTimeout(function() { 
    $(".loaderr").css("opacity","0");
    $(".loaderr").css("display","none");
    
}, 1200);
})



function checkOut(){
   if (umumy==false) {
     alert("Içeri giriň!!!");
   } else {

    var id=window.location.search.split('=')[1];
    var task = document.getElementById('UserExampleGet').value;

    console.log(id)
    console.log(task)


    fetch('http://localhost:3000/run-task', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: id, task: task }),
    })
    .then(response => response.json())
    .then(data => {
      alert(data)
    })
    .catch(error => {
      console.log(error)
    })



  }
}
