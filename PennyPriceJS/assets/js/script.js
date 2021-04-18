document.body.innerHTML += `
<canvas id="canvas" class="canvas"></canvas>
<p id="foo-foo-title" class="foo-foo-title"></p>
<p id="foo-foo-price" class="foo-foo-price"></p>

<p id="linked"></p>

<div class="prices">
<p id="price1"></p>
<p id="price2"><p>
<p id="price3"></p>
<p id="price4"></p>
<p id="price5"></p>
</div>
<p id="AVG" class="AVG"></p>
<canvas id="tab-bar" class="tab-bar"></canvas>
<canvas id="top-tab-bar" class="top-tab-bar"></canvas>
<canvas id="top-tab-bar1" class="top-tab-bar1"></canvas>
<canvas id="top-tab-bar2" class="top-tab-bar2" style="z-index:800;"></canvas>
<canvas id="shape1" class="shape1"></canvas>
<canvas id="shape2" class="shape2"></canvas>
<canvas id="shape3" class="shape3"></canvas>

<canvas id="bar" class="bar"></canvas>
<a href="javascript:void(0);"><img id="contact" alt="gmail-link-icon" class="gmail" src="https://cdn0.iconfinder.com/data/icons/picons-social/57/67-gmail-2-128.png"></img></a>
<a href="https://stackoverflow.com/users/12356427/mutedoriginal"><img class="stackoverflow" src="https://cdn1.iconfinder.com/data/icons/picons-social/57/stackoverflow_rounded-128.png"></img></a>
<canvas id="back" class="back"></canvas>
<p id="itmInfo" class="itmInfo">🔎Item Info</p>
<p id="alertTab" class="alertTab">⚠️Alerts</p>
<p id="settingsTab" class="settingsTab" style="z-index:800;">⚙️Settings</p>

<p id="cheaper" class="cheaper">💰We may have found something cheaper: </p>
<input type="button" id="cio" class="cio" value="Check it Out!"></input>
<canvas id="notif1" class="notif1"></canvas>
<canvas id="notif2" class="notif2"></canvas>
<p id="notif3" class="notif3">Error Establishing Connection</p>

<canvas id="notif4" class="notif4"></canvas>
<p id="notif4text" class="notif4text"></p>

<div>
  <div id="popup"><center>🌐<a href="https://www.bing.com/search?q=anchor+tag+inside+another+a+tag&qs=n&form=QBRE&sp=-1&pq=atag+inside+another+a+tag&sc=1-25&sk=&cvid=7A54D4C3C96D49959DEA8AC4311607A6">Support Us</a>:🌐 Donate Today</center></div>
</div>
<canvas id="line" class="line" style="position:fixed; height:60px; width:3px; background-color: #000;bottom:90px; right:25px; z-index:1001;"></canvas>

<p id="href1" class="href1"></p>
<p id="minVal" class="minVal"></p>
<a href="https://github.com/flancast90"><img class="git" id="git" src="https://cdn1.iconfinder.com/data/icons/social-media-vol-1-1/24/_github-128.png" width="350" alt="Github Logo Png"></img></a>
`

document.head.innerHTML += `
<style>
.canvas {
position: fixed;
z-index: 998;
bottom: 4px;
right: 4px;
height: 276px;
width: 298px;
border-radius: 4px;
background-color:#8C8C8C;
}
.back {
position: fixed;
z-index: 999;
bottom: 12px;
right: 12px;
height: 230px;
width: 282px;
background-color:#fff;
}
.foo-foo-title {
position: fixed;
z-index: 1000;
bottom: 220px;
right: 65px;
}
.foo-foo-price {
position: fixed;
z-index: 1000;
bottom: 200px;
right: 100px;
}

}
.AVG {
position: fixed;
z-index: 1002;
bottom: 100px;
right: 40px;
}
.prices {
display: none;
}
.tab-bar {

}
.top-tab-bar {
position: fixed;
z-index: 998;
bottom: 242px;
right: 200px;
height: 30px;
width: 92px;
border-right: outset 2px;
border-top: outset 2px;
background-color: #fff;
}
.top-tab-bar1 {
position: fixed;
z-index: 998;
bottom: 242px;
right: 106px;
height: 30px;
width: 92px;
border-top: outset 2px;
border-right: outset 2px;
background-color: #F5F5F5;
}
.top-tab-bar2 {
position: fixed;
z-index: 998;
bottom: 242px;
right: 12px;
height: 30px;
width: 92px;
border-top: outset 2px;
border-right: outset 2px;
background-color: #F5F5F5;
}
.itmInfo {
position: fixed;
z-index: 1000;
right: 212px;
bottom: 248px;
color: black;
}
.alertTab {
position: fixed;
z-index: 1000;
right: 132px;
bottom: 248px;
color: white;
}
.settingsTab {
position: fixed;
z-index: 1000;
right: 24px;
bottom: 248px;
color: white;
}
.shape1 {
position: fixed;
z-index: 1000;
background-color: #78ff66;
border-radius: 50px 0px 0px 50px;
width: 135px;
height: 60px;
right: 150px;
bottom: 90px;
}
.shape2 {
position: fixed;
z-index: 1001;
right: 105px;
bottom: 90px;
width:90px;
height:60px;
transform: skew(-20deg);
background-color: yellow;

}
.shape3 {
position: fixed;
z-index: 1000;
background-color: red;
border-radius: 0px 50px 50px 0px;
width: 135px;
height: 60px;
right: 20px;
bottom: 90px;
}
.cheaper {
position: fixed;
z-index: 1001;
display: none;
bottom: 200px;
right: 20px;
}
.cio {
position: fixed;
z-index: 1001;
display: none;
bottom: 170px;
right: 110px;
}
.notif1 {
position: fixed;
z-index: 1000;
bottom: 170px;
right: 15px;
height: 60px;
width: 278px;
border-radius: 50px;
background-color: red;
display: none;
mix-blend-mode: multiply;
}
.notif2 {
position: fixed;
z-index: 1000;
bottom: 100px;
right: 15px;
height: 60px;
width: 278px;
border-radius: 50px;
background-color: red;
display: none;
mix-blend-mode: multiply;
}
.notif3 {
position: fixed;
z-index: 1001;
display: none;
bottom: 120px;
right: 80px;
}
.notif4 {
position: fixed;
z-index: 1000;
bottom: 30px;
right: 15px;
height: 60px;
width: 278px;
border-radius: 50px;
background-color: red;
display: none;
mix-blend-mode: multiply;
}
.notif4text {
position: fixed;
z-index: 1001;
display: block;
bottom: 50px;
right: 50px;
}
#popup{
  position: fixed;
  z-index: 1000;
bottom: 222px;
right: 15px;
height: 20px;
width: 278px;
border-radius: 0px 0px 10px 10px;
  background-color: #c2feff;
  display: block;
  visibility: hidden;
  opacity: 0;
  -webkit-transition: opacity 0.7s;
  transition: opacity 0.7s;
}
.git{
position: fixed;
z-index: 1000;
bottom: 10px;
right: 140px;
width: 20px;
height: 20px;
}
.gmail{
position: fixed;
z-index: 1000;
bottom: 9px;
right: 115px;
width: 23px;
height: 23px;
}
.stackoverflow{
position: fixed;
z-index: 1000;
bottom: 9px;
right: 163px;
width: 23px;
height: 23px;
}
.minVal {
position: fixed;
display: none;
}
.href1 {
position: fixed;
display: none;
}

</style>
`
document.getElementById('notif4').style.opacity = '0';
document.getElementById('notif4text').style.opacity = '0';

var date = new Date();
var year = date.getFullYear();
var hour = date.getHours();
var minute = date.getMinutes();

       var top=screen.height-1200;
    var left=screen.width-15;

document.getElementById('contact').addEventListener('click',function() {

//requirement for list in window.open function criteria
 
  var win = window.open("", "Title", "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=300,height=300,top="+top+",left="+left);

  win.document.body.innerHTML += `
  <body>
	<form method="post">
    <input type="text" id="em" placeholder="Your email address..." style="width:300px;height:25px;"/><br>
    <input type="text" id="sub" placeholder="Subject" style="width:300px;height:25px;"/><br>
    <textarea type="text" id="msg" placeholder="Your Message" style="width: 300px; height:200px;"></textarea><br>
		<input type="button" value="Send Email" id="send"/>
	</form>
</body>
  `

  var script = win.document.createElement('script');
  script.setAttribute('src','https://smtpjs.com/v3/smtp.js');
  win.document.head.appendChild(script);

  var script1 = win.document.createElement('script');
  script1.innerHTML += `
  document.getElementById('send').addEventListener('click', function(){
  Email.send({
    SecureToken : "a48279e5-6fff-4cee-9398-55298ef67de5",
    To : 'precise.price01@gmail.com',
    From : "precise.price01@gmail.com",
    Subject : document.getElementById('sub').value,
    Body : document.getElementById('em').value + " " + document.getElementById('msg').value
}).then(
  message => document.write(message+". Message Sent.")
);
  });
  `
  win.document.head.appendChild(script1);
    win.opener.document.getElementById('notif4').style.display = "block";
    win.opener.document.getElementById('notif4text').innerHTML = "📧Client->Server mail connection: "+"<br><center>"+year+":"+hour+":"+minute+"</center>";

    });

//TESTING url detection for various services*** alert(window.location.href);

let completedAVG;
var term = document.getElementById('vi-lkhdr-itmTitl').innerHTML;
$.getJSON('https://api.allorigins.win/get?url=' + encodeURIComponent('https://www.google.com/search?tbm=shop&sxsrf=ALeKk00vpz_J5g1MGlAQ_1T09CBmMNRt5A%3A1605124018281&ei=sj-sX83GEKnP5gLNtIawDA&q='+term+'%20ZS360&oq='+term+'%20ZS360&gs_lcp=Cgtwcm9kdWN0cy1jYxADMggIABCxAxCDATICCAAyAggAMggIABCxAxCDATIICAAQsQMQgwEyCAgAELEDEIMBMggIABCxAxCDATICCAAyCAgAELEDEIMBMgIIADoHCCMQ6gIQJzoECAAQQzoKCAAQsQMQgwEQQ1DCW1igY2CkZWgBcAB4AIABuQGIAeoFkgEDMC41mAEAoAEBqgEPcHJvZHVjdHMtY2Mtd2l6sAEDwAEB&sclient=products-cc&ved=0ahUKEwjN57f3oPvsAhWpp1kKHU2aAcYQ4dUDCAs&uact=98989#spd=3850758306885422595'), function (data) {
                      document.getElementById('linked').innerHTML = (data.contents);
     document.getElementById('linked').style.display = 'none';
                      document.getElementById('price1').innerHTML = document.getElementsByClassName('HRLxBb')[0].innerHTML;

                      document.getElementById('price2').innerHTML = document.getElementsByClassName('HRLxBb')[1].innerHTML;

                      document.getElementById('price3').innerHTML = document.getElementsByClassName('HRLxBb')[2].innerHTML;

                      document.getElementById('price4').innerHTML = document.getElementsByClassName('HRLxBb')[3].innerHTML;

                      document.getElementById('price5').innerHTML = document.getElementsByClassName('HRLxBb')[4].innerHTML;

var AvgedValues = (document.getElementById('price1').innerHTML).replace(/[^\d.-]/g, '');
var AvgedValues1 = (document.getElementById('price2').innerHTML).replace(/[^\d.-]/g, '');
var AvgedValues2 = (document.getElementById('price3').innerHTML).replace(/[^\d.-]/g, '');
var AvgedValues3 = (document.getElementById('price4').innerHTML).replace(/[^\d.-]/g, '');
var AvgedValues4 = (document.getElementById('price5').innerHTML).replace(/[^\d.-]/g, '');

        //TESTING*** alert('prices: 1--'+AvgedValues+' --2--'+AvgedValues1+' --3--'+AvgedValues2+' --4--'+AvgedValues3+' --5--'+AvgedValues4);
    var minval = document.getElementById('minVal').innerHTML = (Math.min(AvgedValues, AvgedValues1, AvgedValues2, AvgedValues3, AvgedValues4));
    if (minval == AvgedValues) {
        document.getElementById('href1').innerHTML = document.getElementsByClassName('rgHvZc')[0].getElementsByTagName('a')[0].href;
	//TESTING*** alert('ClassName: [0]');
    }
    if (minval == AvgedValues1) {
        document.getElementById('href1').innerHTML = document.getElementsByClassName('rgHvZc')[1].getElementsByTagName('a')[0].href;
	//TESTING*** alert('ClassName: [1]');
    }
    if (minval == AvgedValues2) {
        document.getElementById('href1').innerHTML = document.getElementsByClassName('rgHvZc')[2].getElementsByTagName('a')[0].href;
    }
    if (minval == AvgedValues3) {
        document.getElementById('href1').innerHTML = document.getElementsByClassName('rgHvZc')[3].getElementsByTagName('a')[0].href;
    }
    if (minval == AvgedValues4) {
        document.getElementById('href1').innerHTML = document.getElementsByClassName('rgHvZc')[4].getElementsByTagName('a')[0].href;
    }
        //TESTING*** alert(minval);

    var ebayPrice = ((document.querySelector("#prcIsum, #mm-saleDscPrc, #prcIsum_bidPrice") || {}).innerHTML);
    var comparePrice = parseFloat(ebayPrice.replace(/[^\d.-]/g, ''));
	//AUCTION TESTING*** alert(document.getElementById('prcIsum_bidPrice').innerHTML);
    if (minval > comparePrice) {
        document.getElementById('cio').style.zIndex = 900;
        document.getElementById('cheaper').innerHTML = "Everything Looks Good. You're all set!";
    }

    var completedAVG = document.getElementById('AVG').innerHTML = (((parseFloat(AvgedValues)+parseFloat(AvgedValues1)+parseFloat(AvgedValues2)+parseFloat(AvgedValues3)+parseFloat(AvgedValues4)))/5).toFixed(0);
    var AVG4 = completedAVG/4;
    var AVG2 = completedAVG/2;
    var AVG75 = completedAVG*0.75;


    var href = ((document.getElementById('href1').innerHTML).replace('https://www.ebay.com/url?q=','').replace('&amp;','&'));
    var hrefee = href.split('%3')[0];

href1;
if (hrefee.includes("sa=L")) {
href1 = hrefee;
} 
else {
href1 = hrefee.split('&amp')[0];
href1 = href1.replace('&sa=U', '');
}


    var linePos = document.getElementById('line');

    if (comparePrice < AVG4) {
        linePos.style.right = 250+"px";
    }
    if ((comparePrice >= AVG4)&&(comparePrice < AVG2)) {
        linePos.style.right = 200+"px";
    }
    if ((comparePrice >= AVG2)&&(comparePrice < AVG75)) {
        linePos.style.right = 150+"px";
    }
    if ((comparePrice >= AVG75)&&(comparePrice < completedAVG)){
        linePos.style.right = 100+"px";
    }

    if (comparePrice >= completedAVG){
        linePos.style.right = 100+"px";
    }
    document.getElementById('notif3').innerHTML = "⚡Connection Established: "+"<br><center>"+year+":"+hour+":"+minute+"</center>";
    document.getElementById('cio').addEventListener('click',function(){
    window.open(href1,"Title");
});
});
var priceClass = ((document.querySelector("#prcIsum, #mm-saleDscPrc, #prcIsum_bidPrice") || {}).innerHTML);

var topPricetoFloat = document.getElementById('AVG').innerHTML;
var ebayClass = document.getElementById('vi-lkhdr-itmTitl').innerHTML;
var newebayClass = ebayClass.substring(0, 20)
document.getElementById('foo-foo-title').innerHTML = '<strong>Title: </strong>'+'<strong>'+(newebayClass)+'</strong>'+'...';


document.getElementById('foo-foo-price').innerHTML = '<strong>Price: </strong>'+(priceClass);


var tabbar = document.getElementById('top-tab-bar');
var tabbar1 = document.getElementById('top-tab-bar1');
var tabbar2 = document.getElementById('top-tab-bar2');


tabbar.addEventListener("click", function(){
    //item info tab
    document.getElementById("itmInfo").style.color= '#000';
    document.getElementById("alertTab").style.color= '#fff';
    document.getElementById("settingsTab").style.color= '#fff';

    document.getElementById("top-tab-bar").style.backgroundColor= '#fff';
    document.getElementById("top-tab-bar1").style.backgroundColor= '#F5F5F5';
    document.getElementById("top-tab-bar2").style.backgroundColor= '#F5F5F5';

    document.getElementById('foo-foo-title').style.display = 'block';
    document.getElementById('foo-foo-price').style.display = 'block';
    document.getElementById('shape1').style.display = 'block';
    document.getElementById('shape2').style.display = 'block';
    document.getElementById('shape3').style.display = 'block';

        document.getElementById('cheaper').style.display = "none";
    document.getElementById('cio').style.display = "none"
        document.getElementById('notif1').style.display = "none";
    document.getElementById('notif2').style.display = "none";
    document.getElementById('notif3').style.display = "none";

    document.getElementById('notif4').style.opacity = "0";
    document.getElementById('notif4text').style.opacity = "0";

    document.getElementById("popup").style.visibility = "hidden";
    document.getElementById('line').style.display = 'block';
});

tabbar1.addEventListener("click", function(){
    //alerts tab
    document.getElementById("itmInfo").style.color= '#fff';
    document.getElementById("alertTab").style.color= '#000';
    document.getElementById("settingsTab").style.color= '#fff';

    document.getElementById("top-tab-bar1").style.backgroundColor= '#fff';
    document.getElementById("top-tab-bar").style.backgroundColor= '#F5F5F5';
    document.getElementById("top-tab-bar2").style.backgroundColor= '#F5F5F5';

    document.getElementById('foo-foo-title').style.display = 'none';
    document.getElementById('foo-foo-price').style.display = 'none';
    document.getElementById('shape1').style.display = 'none';
    document.getElementById('shape2').style.display = 'none';
    document.getElementById('shape3').style.display = 'none';

    document.getElementById('cheaper').style.display = "block";
    document.getElementById('cio').style.display = "block";
        document.getElementById('notif1').style.display = "block";
    document.getElementById('notif2').style.display = "block";
    document.getElementById('notif3').style.display = "block";

    document.getElementById('notif4').style.opacity = "0.9";
    document.getElementById('notif4text').style.opacity = "0.9";

    document.getElementById("popup").style.visibility = "hidden";
document.getElementById('line').style.display = 'none';
});

tabbar2.addEventListener("click", function(){
    //settings tab
    document.getElementById("itmInfo").style.color= '#fff';
    document.getElementById("alertTab").style.color= '#fff';
    document.getElementById("settingsTab").style.color= '#000';

    document.getElementById("top-tab-bar2").style.backgroundColor= '#fff';
    document.getElementById("top-tab-bar").style.backgroundColor= '#F5F5F5';
    document.getElementById("top-tab-bar1").style.backgroundColor= '#F5F5F5';

    document.getElementById('foo-foo-title').style.display = 'none';
    document.getElementById('foo-foo-price').style.display = 'none';
    document.getElementById('shape1').style.display = 'none';
    document.getElementById('shape2').style.display = 'none';
    document.getElementById('shape3').style.display = 'none';

        document.getElementById('cheaper').style.display = "none";
    document.getElementById('cio').style.display = "none"
        document.getElementById('notif1').style.display = "none";
    document.getElementById('notif2').style.display = "none";
    document.getElementById('notif3').style.display = "none";

        document.getElementById('notif4').style.opacity = "0";
    document.getElementById('notif4text').style.opacity = "0";
document.getElementById('line').style.display = 'none';

    //donate popup smooth open
    var element = document.getElementById("popup");

var t=setTimeout(openPopUp,2000);
function openPopUp() {
  element = document.getElementById("popup");
  element.style.visibility = "visible";
  element.style.opacity = "1";
}
});




tabbar.addEventListener("mouseover", function(){
tabbar.style.height = "32px";
});

tabbar1.addEventListener("mouseover", function(){
tabbar1.style.height = "32px"
});

tabbar2.addEventListener("mouseover", function(){
tabbar2.style.height = "32px"
});


tabbar.addEventListener("mouseout", function(){
tabbar.style.height = "30px";
});

tabbar1.addEventListener("mouseout", function(){
tabbar1.style.height = "30px"
});

tabbar2.addEventListener("mouseout", function(){
tabbar2.style.height = "30px"
});



var text = document.getElementById('itmInfo');
var text1 = document.getElementById('alertTab');
var text2 = document.getElementById('settingsTab');

text.addEventListener("click", function(){
    document.getElementById("itmInfo").style.color= '#000';
    document.getElementById("alertTab").style.color= '#fff';
    document.getElementById("settingsTab").style.color= '#fff';

    document.getElementById("top-tab-bar").style.backgroundColor= '#fff';
    document.getElementById("top-tab-bar1").style.backgroundColor= '#F5F5F5';
    document.getElementById("top-tab-bar2").style.backgroundColor= '#F5F5F5';

        document.getElementById('foo-foo-title').style.display = 'block';
    document.getElementById('foo-foo-price').style.display = 'block';
    document.getElementById('shape1').style.display = 'block';
    document.getElementById('shape2').style.display = 'block';
    document.getElementById('shape3').style.display = 'block';

        document.getElementById('cheaper').style.display = "none";
    document.getElementById('cio').style.display = "none"
        document.getElementById('notif1').style.display = "none";
    document.getElementById('notif2').style.display = "none";
    document.getElementById('notif3').style.display = "none";

    document.getElementById('notif4').style.opacity = "0";
    document.getElementById('notif4text').style.opacity = "0";

    document.getElementById("popup").style.vsibility = "hidden";
document.getElementById('line').style.display = 'block';
});

text1.addEventListener("click", function(){
    document.getElementById("itmInfo").style.color= '#fff';
    document.getElementById("alertTab").style.color= '#000';
    document.getElementById("settingsTab").style.color= '#fff';

    document.getElementById("top-tab-bar1").style.backgroundColor= '#fff';
    document.getElementById("top-tab-bar").style.backgroundColor= '#F5F5F5';
    document.getElementById("top-tab-bar2").style.backgroundColor= '#F5F5F5';

    document.getElementById('foo-foo-title').style.display = 'none';
    document.getElementById('foo-foo-price').style.display = 'none';
    document.getElementById('shape1').style.display = 'none';
    document.getElementById('shape2').style.display = 'none';
    document.getElementById('shape3').style.display = 'none';

        document.getElementById('cheaper').style.display = "block";
    document.getElementById('cio').style.display = "block"
        document.getElementById('notif1').style.display = "block";
    document.getElementById('notif2').style.display = "block";
    document.getElementById('notif3').style.display = "block";

        document.getElementById('notif4').style.opacity = "0.9";
    document.getElementById('notif4text').style.opacity = "0.9";

   document.getElementById('popup').style.visibility = "hidden";
document.getElementById('line').style.display = 'none';
});

text2.addEventListener("click", function(){
    document.getElementById("itmInfo").style.color= '#fff';
    document.getElementById("alertTab").style.color= '#fff';
    document.getElementById("settingsTab").style.color= '#000';

    document.getElementById("top-tab-bar2").style.backgroundColor= '#fff';
    document.getElementById("top-tab-bar").style.backgroundColor= '#F5F5F5';
    document.getElementById("top-tab-bar1").style.backgroundColor= '#F5F5F5';

    document.getElementById('foo-foo-title').style.display = 'none';
    document.getElementById('foo-foo-price').style.display = 'none';
    document.getElementById('shape1').style.display = 'none';
    document.getElementById('shape2').style.display = 'none';
    document.getElementById('shape3').style.display = 'none';

        document.getElementById('cheaper').style.display = "none";
    document.getElementById('cio').style.display = "none"
    document.getElementById('notif1').style.display = "none";
    document.getElementById('notif2').style.display = "none";
    document.getElementById('notif3').style.display = "none";

        document.getElementById('notif4').style.opacity = "0";
    document.getElementById('notif4text').style.opacity = "0";

document.getElementById('line').style.display = 'none';
    var element = document.getElementById("popup");

var t=setTimeout(openPopUp,2000);
function openPopUp() {
  element = document.getElementById("popup");
  element.style.visibility = "visible";
  element.style.opacity = "1";
}
});




text.addEventListener("mouseover", function(){
tabbar.style.height = "32px";
});

text1.addEventListener("mouseover", function(){
tabbar1.style.height = "32px"
});

text2.addEventListener("mouseover", function(){
tabbar2.style.height = "32px"
});

text.addEventListener("mouseout", function(){
tabbar.style.height = "30px";

});

text1.addEventListener("mouseout", function(){
tabbar1.style.height = "30px"
});

text2.addEventListener("mouseout", function(){
tabbar2.style.height = "30px"
});
