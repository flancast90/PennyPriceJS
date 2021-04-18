document.body.innerHTML += `
<html>
<!--resizing boxes sourced from w3schools. Content added.-->
<style>
* {
  box-sizing: border-box !important;
}

body {
  margin: 50 !important;
  font-family: Arial !important;
background-color: #F8F8F8 !important;
}

.header {
  text-align: center !important;
  padding: 52px !important;
}

.row {
  display: -ms-flexbox !important; /* IE10 */
  display: flex !important;
  -ms-flex-wrap: wrap !important; /* IE10 */
  flex-wrap: wrap !important;
  padding: 0 4px !important;
}

/* Create four equal columns that sits next to each other */
.column {
  -ms-flex: 25% !important; /* IE10 */
  flex: 25% !important;
  max-width: 25% !important;
  padding: 0 4px !important;
}

.column img {
  margin-top: 8px !important;
  vertical-align: middle !important;
  width: 100% !important;
}

/* Responsive layout - makes a two column-layout instead of four columns */
@media screen and (max-width: 800px) {
  .column {
    -ms-flex: 50% !important;
    flex: 50% !important;
    max-width: 50% !important;
  }
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .column {
    -ms-flex: 100% !important;
    flex: 100% !important;
    max-width: 100% !important;

  }
}
#loading-anim{
display: none;
position: fixed;
left: 48%;
top: 46%;
height: 45px;
width: 45px;
z-index: 1001;
}
.loading-back{
position: fixed;
display: none;
top:0px;
left: 0px;
background-color: white;
width: 100%;
height: 100%;
z-index: 1000;
}
#itm-1{
 border: 2px solid #CECEA1;
  padding: 25px;
  background-repeat: no-repeat !important;
background-size: 80% 80% !important;
}
#itm-2{
 border: 2px solid #CECEA1;
  padding: 25px;
  background-repeat: no-repeat !important;
background-size: 80% 80% !important;
}
#itm-3{
 border: 2px solid #CECEA1;
  padding: 25px;
  background-repeat: no-repeat !important;
background-size: 80% 80% !important;
}
#itm-4{
 border: 2px solid #CECEA1;
  padding: 25px;
  background-repeat: no-repeat !important;
background-size: 80% 80% !important;
}
#itm-5{
 border: 2px solid #CECEA1;
  padding: 25px;
  background-repeat: no-repeat !important;
background-size: 80% 80% !important;
}
#itm-6{
 border: 2px solid #CECEA1;
  padding: 25px;
  background-repeat: no-repeat !important;
background-size: 80% 80% !important;
}
#itm-7{
 border: 2px solid #CECEA1;
  padding: 25px;
  background-repeat: no-repeat !important;
background-size: 80% 80% !important;
}
#itm-8{
 border: 2px solid #CECEA1;
  padding: 25px;
  background-repeat: no-repeat !important;
background-size: 80% 80% !important;
}
#itm-9{
 border: 2px solid #CECEA1;
  padding: 25px;
  background-repeat: no-repeat !important;
background-size: 80% 80% !important;
}
#itm-10{
 border: 2px solid #CECEA1;
  padding: 25px;
  background-repeat: no-repeat !important;
background-size: 80% 80% !important;
}
#itm-11{
 border: 2px solid #CECEA1;
  padding: 25px;
  background-repeat: no-repeat !important;
background-size: 80% 80% !important;
}
#itm-12{
 border: 2px solid #CECEA1;
  padding: 25px;
  background-repeat: no-repeat !important;
background-size: 80% 80% !important;
}
#itm-13{
 border: 2px solid #CECEA1;
  padding: 25px;
  background-repeat: no-repeat !important;
background-size: 80% 80% !important;
}
#itm-14{
 border: 2px solid #CECEA1;
  padding: 25px;
  background-repeat: no-repeat !important;
background-size: 80% 80% !important;
}
#itm-15{
 border: 2px solid #CECEA1;
  padding: 25px;
  background-repeat: no-repeat !important;
background-size: 80% 80% !important;
}
#itm-16{
 border: 2px solid #CECEA1;
  padding: 25px;
  background-repeat: no-repeat !important;
background-size: 80% 80% !important;
}
#itm-17{
 border: 2px solid #CECEA1;
  padding: 25px;
  background-repeat: no-repeat !important;
background-size: 80% 80% !important;
}
#itm-18{
 border: 2px solid #CECEA1;
  padding: 25px;
  background-repeat: no-repeat !important;
background-size: 80% 80% !important;
}
#itm-19{
 border: 2px solid #CECEA1;
  padding: 25px;
  background-repeat: no-repeat !important;
background-size: 80% 80% !important;
}
#itm-20{
 border: 2px solid #CECEA1;
  padding: 25px;
  background-repeat: no-repeat !important;
background-size: 80% 80% !important;
}
#itm-21{
 border: 2px solid #CECEA1;
  padding: 25px;
  background-repeat: no-repeat !important;
background-size: 80% 80% !important;
}
#itm-22{
 border: 2px solid #CECEA1;
  padding: 25px;
  background-repeat: no-repeat !important;
background-size: 80% 80% !important;
}
#itm-23{
 border: 2px solid #CECEA1;
  padding: 25px;
  background-repeat: no-repeat !important;
background-size: 80% 80% !important;
}
#itm-24{
 border: 2px solid #CECEA1;
  padding: 25px;
  background-repeat: no-repeat !important;
background-size: 80% 80% !important;
}


</style>
<body style="">

<!-- Header -->
<div class="header">
<div style="position: absolute; white-space:nowrap; overflow: hidden; top:10px;"><b>Deals </b><button id="tech">Tech</button>&nbsp<button id="fashion">Fashion</button>&nbsp<button id="homeg">Home & Garden</button>&nbsp<button id="sports">Sporting Goods</button>&nbsp<button id="automotive">Automotive</button>&nbsp<button id="other">Other</button>&nbsp</div>
  <canvas id="nav" style="position: absolute; top: 0px; left: 0px; background-color: #A8A8A8; width: 100%; height: 40px; z-index: -1;"></canvas>
  
  
<!--  <canvas id="donateBack" style="position: absolute; height: 120px; width: 95%; left: 2.5%; background-color: #42cacd; top: 45px; z-index: -1; border-radius: 10px;"></canvas>
<center><p id="donateText" style="position: absolute; top: 100px; z-index: 1;">
<h2>Donate Today</h2>
<p><b>Show your appreciation for our services by giving this project<a class="github-button" href="https://github.com/flancast90/PennyPriceJS" data-color-scheme="no-preference: light; light: light; dark: light;" data-size="large" aria-label="Star flancast90/PennyPriceJS on GitHub">A Star</a> now!</b>
</p></center>
<img id="exit" src="https://cdn2.iconfinder.com/data/icons/basic-4/512/close-128.png" style="position: absolute; z-index: 0; width: 15px; height: 15px; right: 2.7%; top: 50px;"></img>-->


</div>
<img id="loading-anim" class="loading-anim" src="assets/loading.gif">
<canvas id="loading-back" class="loading-back"></canvas>
<p id="pageId" style="display:none"></p>
<!-- Photo Grid -->
<div class="row"> 
  <div class="column">
    <div id="itm-1" class="itm" style="height: 300px; width: 100%; background-color: white; box-shadow: 2px 4px #EEEEEE;"></div>
    <div id="itm-2" class="itm" style="height: 300px; width: 100%; background-color: white; box-shadow: 2px 4px #EEEEEE;"></div>
    <div id="itm-3" class="itm" style="height: 300px; width: 100%; background-color: white; box-shadow: 2px 4px #EEEEEE;"></div>
    <div id="itm-4" class="itm" style="height: 300px; width: 100%; background-color: white; box-shadow: 2px 4px #EEEEEE;"></div>
    <div id="itm-5" class="itm" style="height: 300px; width: 100%; background-color: white; box-shadow: 2px 4px #EEEEEE;"></div>
    <div id="itm-6" class="itm" style="height: 300px; width: 100%; background-color: white; box-shadow: 2px 4px #EEEEEE;"></div>
  </div>
  <div class="column">
    <div id="itm-7" class="itm" style="height: 300px; width: 100%; background-color: white; box-shadow: 2px 4px #EEEEEE;"></div>
    <div id="itm-8" class="itm" style="height: 300px; width: 100%; background-color: white; box-shadow: 2px 4px #EEEEEE;"></div>
    <div id="itm-9" class="itm" style="height: 300px; width: 100%; background-color: white; box-shadow: 2px 4px #EEEEEE;"></div>
    <div id="itm-10" class="itm" style="height: 300px; width: 100%; background-color: white; box-shadow: 2px 4px #EEEEEE;"></div>
    <div id="itm-11" class="itm" style="height: 300px; width: 100%; background-color: white; box-shadow: 2px 4px #EEEEEE;"></div>
    <div id="itm-12" class="itm" style="height: 300px; width: 100%; background-color: white; box-shadow: 2px 4px #EEEEEE;"></div>
  </div>  
  <div class="column">
    <div id="itm-13" class="itm" style="height: 300px; width: 100%; background-color: white; box-shadow: 2px 4px #EEEEEE;"></div>
    <div id="itm-14" class="itm" style="height: 300px; width: 100%; background-color: white; box-shadow: 2px 4px #EEEEEE;"></div>
    <div id="itm-15" class="itm" style="height: 300px; width: 100%; background-color: white; box-shadow: 2px 4px #EEEEEE;"></div>
    <div id="itm-16" class="itm" style="height: 300px; width: 100%; background-color: white; box-shadow: 2px 4px #EEEEEE;"></div>
    <div id="itm-17" class="itm" style="height: 300px; width: 100%; background-color: white; box-shadow: 2px 4px #EEEEEE;"></div>
    <div id="itm-18" class="itm" style="height: 300px; width: 100%; background-color: white; box-shadow: 2px 4px #EEEEEE;"></div>
  </div>
  <div class="column">
    <div id="itm-19" class="itm" style="height: 300px; width: 100%; background-color: white; box-shadow: 2px 4px #EEEEEE;"></div>
    <div id="itm-20" class="itm" style="height: 300px; width: 100%; background-color: white; box-shadow: 2px 4px #EEEEEE;"></div>
    <div id="itm-21" class="itm" style="height: 300px; width: 100%; background-color: white; box-shadow: 2px 4px #EEEEEE;"></div>
    <div id="itm-22" class="itm" style="height: 300px; width: 100%; background-color: white; box-shadow: 2px 4px #EEEEEE;"></div>
    <div id="itm-23" class="itm" style="height: 300px; width: 100%; background-color: white; box-shadow: 2px 4px #EEEEEE;"></div>
    <div id="itm-24" class="itm" style="height: 300px; width: 100%; background-color: white; box-shadow: 2px 4px #EEEEEE;"></div>
  </div>
</div>

<p id="show" style="display:none" aria-hidden="true"></p>

</body>
</html>
`

document.getElementById('tech').disabled = true;
document.getElementById('fashion').disabled = false;
document.getElementById('homeg').disabled = false;
document.getElementById('sports').disabled = false;
document.getElementById('automotive').disabled = false;
document.getElementById('other').disabled = false;

document.getElementById('pageId').innerHTML = 'Tech';
  
$.getJSON('https://api.allorigins.win/get?url=' + encodeURIComponent('https://www.ebay.com/deals/trending/tech'), function (data) {
                      document.getElementById('show').innerHTML = (data.contents);

document.getElementsByTagName('body')[0].style.margin = '50';         
     document.getElementById('itm-1').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[0].getElementsByTagName('img')[0].src)+')'; 
     document.getElementById('itm-2').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[1].getElementsByTagName('img')[0].src)+')'; 
     document.getElementById('itm-3').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[2].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-4').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[3].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-5').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[4].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-6').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[5].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-7').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[6].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-8').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[7].getElementsByTagName('img')[0].src)+')'; 

document.getElementById('itm-9').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[8].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-10').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[9].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-11').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[10].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-12').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[11].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-13').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[12].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-14').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[13].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-15').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[14].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-16').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[15].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-17').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[16].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-18').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[17].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-19').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[18].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-20').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[19].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-21').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[20].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-22').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[21].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-23').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[22].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-24').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[23].getElementsByTagName('img')[0].src)+')';

document.getElementById('itm-1').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[0].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[0].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[0].innerHTML+'</b>'+'</a>';
document.getElementById('itm-2').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[1].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[1].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[1].innerHTML+'</b>'+'</a>';
document.getElementById('itm-3').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[2].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[2].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[2].innerHTML+'</b>'+'</a>';
document.getElementById('itm-4').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[3].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[3].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[3].innerHTML+'</b>'+'</a>';
document.getElementById('itm-5').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[4].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[4].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[4].innerHTML+'</b>'+'</a>';
document.getElementById('itm-6').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[5].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[5].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[5].innerHTML+'</b>'+'</a>';
document.getElementById('itm-7').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[6].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[6].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[6].innerHTML+'</b>'+'</a>';
document.getElementById('itm-8').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[7].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[7].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[7].innerHTML+'</b>'+'</a>';
document.getElementById('itm-9').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[8].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[8].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[8].innerHTML+'</b>'+'</a>';
document.getElementById('itm-10').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[9].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[9].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[9].innerHTML+'</b>'+'</a>';
document.getElementById('itm-11').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[10].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[10].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[10].innerHTML+'</b>'+'</a>';
document.getElementById('itm-12').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[11].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[11].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[11].innerHTML+'</b>'+'</a>';
document.getElementById('itm-13').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[12].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[12].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[12].innerHTML+'</b>'+'</a>';
document.getElementById('itm-14').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[13].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[13].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[13].innerHTML+'</b>'+'</a>';
document.getElementById('itm-15').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[14].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[14].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[14].innerHTML+'</b>'+'</a>';
document.getElementById('itm-16').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[15].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[15].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[15].innerHTML+'</b>'+'</a>';
document.getElementById('itm-17').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[16].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[16].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[16].innerHTML+'</b>'+'</a>';
document.getElementById('itm-18').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[17].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[17].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[17].innerHTML+'</b>'+'</a>';
document.getElementById('itm-19').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[18].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[18].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[18].innerHTML+'</b>'+'</a>';
document.getElementById('itm-20').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[19].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[19].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[19].innerHTML+'</b>'+'</a>';
document.getElementById('itm-21').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[20].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[20].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[20].innerHTML+'</b>'+'</a>';
document.getElementById('itm-22').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[21].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[21].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[21].innerHTML+'</b>'+'</a>';
document.getElementById('itm-23').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[22].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[22].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[22].innerHTML+'</b>'+'</a>';
document.getElementById('itm-24').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[23].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[23].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[23].innerHTML+'</b>'+'</a>';

var ii=0;

while (ii<24){

(document.getElementsByClassName('itm')[ii].getElementsByTagName('a')[0]).style.backgroundColor = 'white';

ii++;
}

});

document.getElementById('tech').addEventListener('click',function(){

setTimeout(function(){
document.getElementById('loading-anim').style.display = 'none';
document.getElementById('loading-back').style.display = 'none';
}, 2000);
document.getElementById('tech').disabled = true;
document.getElementById('fashion').disabled = false;
document.getElementById('homeg').disabled = false;
document.getElementById('sports').disabled = false;
document.getElementById('automotive').disabled = false;
document.getElementById('other').disabled = false;

document.getElementById('loading-anim').style.display = 'block';
document.getElementById('loading-back').style.display = 'block';
document.getElementById('pageId').innerHTML = 'Tech';
  
$.getJSON('https://api.allorigins.win/get?url=' + encodeURIComponent('https://www.ebay.com/deals/trending/tech'), function (data) {
                      document.getElementById('show').innerHTML = (data.contents);

document.getElementsByTagName('body')[0].style.margin = '50';         
     document.getElementById('itm-1').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[0].getElementsByTagName('img')[0].src)+')'; 
     document.getElementById('itm-2').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[1].getElementsByTagName('img')[0].src)+')'; 
     document.getElementById('itm-3').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[2].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-4').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[3].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-5').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[4].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-6').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[5].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-7').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[6].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-8').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[7].getElementsByTagName('img')[0].src)+')'; 

document.getElementById('itm-9').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[8].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-10').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[9].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-11').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[10].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-12').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[11].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-13').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[12].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-14').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[13].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-15').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[14].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-16').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[15].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-17').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[16].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-18').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[17].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-19').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[18].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-20').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[19].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-21').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[20].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-22').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[21].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-23').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[22].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-24').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[23].getElementsByTagName('img')[0].src)+')';

document.getElementById('itm-1').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[0].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[0].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[0].innerHTML+'</b>'+'</a>';
document.getElementById('itm-2').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[1].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[1].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[1].innerHTML+'</b>'+'</a>';
document.getElementById('itm-3').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[2].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[2].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[2].innerHTML+'</b>'+'</a>';
document.getElementById('itm-4').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[3].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[3].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[3].innerHTML+'</b>'+'</a>';
document.getElementById('itm-5').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[4].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[4].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[4].innerHTML+'</b>'+'</a>';
document.getElementById('itm-6').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[5].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[5].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[5].innerHTML+'</b>'+'</a>';
document.getElementById('itm-7').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[6].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[6].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[6].innerHTML+'</b>'+'</a>';
document.getElementById('itm-8').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[7].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[7].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[7].innerHTML+'</b>'+'</a>';
document.getElementById('itm-9').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[8].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[8].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[8].innerHTML+'</b>'+'</a>';
document.getElementById('itm-10').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[9].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[9].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[9].innerHTML+'</b>'+'</a>';
document.getElementById('itm-11').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[10].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[10].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[10].innerHTML+'</b>'+'</a>';
document.getElementById('itm-12').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[11].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[11].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[11].innerHTML+'</b>'+'</a>';
document.getElementById('itm-13').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[12].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[12].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[12].innerHTML+'</b>'+'</a>';
document.getElementById('itm-14').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[13].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[13].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[13].innerHTML+'</b>'+'</a>';
document.getElementById('itm-15').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[14].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[14].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[14].innerHTML+'</b>'+'</a>';
document.getElementById('itm-16').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[15].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[15].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[15].innerHTML+'</b>'+'</a>';
document.getElementById('itm-17').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[16].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[16].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[16].innerHTML+'</b>'+'</a>';
document.getElementById('itm-18').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[17].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[17].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[17].innerHTML+'</b>'+'</a>';
document.getElementById('itm-19').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[18].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[18].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[18].innerHTML+'</b>'+'</a>';
document.getElementById('itm-20').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[19].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[19].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[19].innerHTML+'</b>'+'</a>';
document.getElementById('itm-21').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[20].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[20].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[20].innerHTML+'</b>'+'</a>';
document.getElementById('itm-22').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[21].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[21].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[21].innerHTML+'</b>'+'</a>';
document.getElementById('itm-23').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[22].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[22].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[22].innerHTML+'</b>'+'</a>';
document.getElementById('itm-24').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[23].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[23].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[23].innerHTML+'</b>'+'</a>';

var ii=0;

while (ii<24){

(document.getElementsByClassName('itm')[ii].getElementsByTagName('a')[0]).style.backgroundColor = 'white';

ii++;
}

});
});

document.getElementById('fashion').addEventListener('click',function(){
 
setTimeout(function(){
document.getElementById('loading-anim').style.display = 'none';
document.getElementById('loading-back').style.display = 'none';
}, 2000);
document.getElementById('tech').disabled = false;
document.getElementById('fashion').disabled = true;
document.getElementById('homeg').disabled = false;
document.getElementById('sports').disabled = false;
document.getElementById('automotive').disabled = false;
document.getElementById('other').disabled = false;

document.getElementById('loading-anim').style.display = 'block';
document.getElementById('loading-back').style.display = 'block';
document.getElementById('pageId').innerHTML = 'Fashion';
  
$.getJSON('https://api.allorigins.win/get?url=' + encodeURIComponent('https://www.ebay.com/deals/trending/fashion'), function (data) {
                      document.getElementById('show').innerHTML = (data.contents);

document.getElementsByTagName('body')[0].style.margin = '50';         

     document.getElementById('itm-1').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[0].getElementsByTagName('img')[0].src)+')'; 
     document.getElementById('itm-2').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[1].getElementsByTagName('img')[0].src)+')'; 
     document.getElementById('itm-3').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[2].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-4').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[3].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-5').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[4].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-6').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[5].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-7').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[6].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-8').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[7].getElementsByTagName('img')[0].src)+')'; 

document.getElementById('itm-9').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[8].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-10').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[9].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-11').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[10].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-12').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[11].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-13').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[12].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-14').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[13].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-15').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[14].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-16').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[15].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-17').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[16].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-18').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[17].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-19').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[18].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-20').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[19].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-21').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[20].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-22').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[21].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-23').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[22].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-24').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[23].getElementsByTagName('img')[0].src)+')';

document.getElementById('itm-1').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[0].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[0].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[0].innerHTML+'</b>'+'</a>';
document.getElementById('itm-2').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[1].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[1].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[1].innerHTML+'</b>'+'</a>';
document.getElementById('itm-3').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[2].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[2].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[2].innerHTML+'</b>'+'</a>';
document.getElementById('itm-4').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[3].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[3].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[3].innerHTML+'</b>'+'</a>';
document.getElementById('itm-5').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[4].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[4].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[4].innerHTML+'</b>'+'</a>';
document.getElementById('itm-6').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[5].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[5].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[5].innerHTML+'</b>'+'</a>';
document.getElementById('itm-7').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[6].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[6].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[6].innerHTML+'</b>'+'</a>';
document.getElementById('itm-8').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[7].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[7].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[7].innerHTML+'</b>'+'</a>';
document.getElementById('itm-9').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[8].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[8].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[8].innerHTML+'</b>'+'</a>';
document.getElementById('itm-10').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[9].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[9].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[9].innerHTML+'</b>'+'</a>';
document.getElementById('itm-11').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[10].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[10].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[10].innerHTML+'</b>'+'</a>';
document.getElementById('itm-12').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[11].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[11].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[11].innerHTML+'</b>'+'</a>';
document.getElementById('itm-13').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[12].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[12].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[12].innerHTML+'</b>'+'</a>';
document.getElementById('itm-14').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[13].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[13].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[13].innerHTML+'</b>'+'</a>';
document.getElementById('itm-15').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[14].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[14].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[14].innerHTML+'</b>'+'</a>';
document.getElementById('itm-16').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[15].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[15].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[15].innerHTML+'</b>'+'</a>';
document.getElementById('itm-17').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[16].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[16].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[16].innerHTML+'</b>'+'</a>';
document.getElementById('itm-18').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[17].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[17].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[17].innerHTML+'</b>'+'</a>';
document.getElementById('itm-19').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[18].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[18].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[18].innerHTML+'</b>'+'</a>';
document.getElementById('itm-20').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[19].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[19].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[19].innerHTML+'</b>'+'</a>';
document.getElementById('itm-21').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[20].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[20].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[20].innerHTML+'</b>'+'</a>';
document.getElementById('itm-22').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[21].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[21].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[21].innerHTML+'</b>'+'</a>';
document.getElementById('itm-23').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[22].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[22].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[22].innerHTML+'</b>'+'</a>';
document.getElementById('itm-24').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[23].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[23].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[23].innerHTML+'</b>'+'</a>';

var ii=0;

while (ii<24){

(document.getElementsByClassName('itm')[ii].getElementsByTagName('a')[0]).style.backgroundColor = 'white';

ii++;
}
                  
});
});


document.getElementById('homeg').addEventListener('click',function(){
 
setTimeout(function(){
document.getElementById('loading-anim').style.display = 'none';
document.getElementById('loading-back').style.display = 'none';
}, 2000);
document.getElementById('tech').disabled = false;
document.getElementById('fashion').disabled = false;
document.getElementById('homeg').disabled = true;
document.getElementById('sports').disabled = false;
document.getElementById('automotive').disabled = false;
document.getElementById('other').disabled = false;

document.getElementById('loading-anim').style.display = 'block';
document.getElementById('loading-back').style.display = 'block';
document.getElementById('pageId').innerHTML = 'HomeG';
  
$.getJSON('https://api.allorigins.win/get?url=' + encodeURIComponent('https://www.ebay.com/deals/trending/home-garden'), function (data) {
                      document.getElementById('show').innerHTML = (data.contents);

document.getElementsByTagName('body')[0].style.margin = '50';         

     document.getElementById('itm-1').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[0].getElementsByTagName('img')[0].src)+')'; 
     document.getElementById('itm-2').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[1].getElementsByTagName('img')[0].src)+')'; 
     document.getElementById('itm-3').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[2].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-4').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[3].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-5').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[4].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-6').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[5].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-7').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[6].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-8').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[7].getElementsByTagName('img')[0].src)+')'; 

document.getElementById('itm-9').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[8].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-10').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[9].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-11').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[10].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-12').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[11].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-13').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[12].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-14').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[13].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-15').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[14].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-16').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[15].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-17').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[16].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-18').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[17].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-19').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[18].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-20').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[19].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-21').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[20].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-22').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[21].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-23').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[22].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-24').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[23].getElementsByTagName('img')[0].src)+')';

document.getElementById('itm-1').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[0].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[0].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[0].innerHTML+'</b>'+'</a>';
document.getElementById('itm-2').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[1].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[1].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[1].innerHTML+'</b>'+'</a>';
document.getElementById('itm-3').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[2].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[2].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[2].innerHTML+'</b>'+'</a>';
document.getElementById('itm-4').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[3].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[3].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[3].innerHTML+'</b>'+'</a>';
document.getElementById('itm-5').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[4].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[4].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[4].innerHTML+'</b>'+'</a>';
document.getElementById('itm-6').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[5].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[5].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[5].innerHTML+'</b>'+'</a>';
document.getElementById('itm-7').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[6].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[6].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[6].innerHTML+'</b>'+'</a>';
document.getElementById('itm-8').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[7].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[7].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[7].innerHTML+'</b>'+'</a>';
document.getElementById('itm-9').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[8].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[8].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[8].innerHTML+'</b>'+'</a>';
document.getElementById('itm-10').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[9].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[9].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[9].innerHTML+'</b>'+'</a>';
document.getElementById('itm-11').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[10].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[10].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[10].innerHTML+'</b>'+'</a>';
document.getElementById('itm-12').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[11].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[11].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[11].innerHTML+'</b>'+'</a>';
document.getElementById('itm-13').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[12].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[12].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[12].innerHTML+'</b>'+'</a>';
document.getElementById('itm-14').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[13].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[13].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[13].innerHTML+'</b>'+'</a>';
document.getElementById('itm-15').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[14].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[14].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[14].innerHTML+'</b>'+'</a>';
document.getElementById('itm-16').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[15].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[15].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[15].innerHTML+'</b>'+'</a>';
document.getElementById('itm-17').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[16].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[16].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[16].innerHTML+'</b>'+'</a>';
document.getElementById('itm-18').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[17].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[17].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[17].innerHTML+'</b>'+'</a>';
document.getElementById('itm-19').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[18].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[18].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[18].innerHTML+'</b>'+'</a>';
document.getElementById('itm-20').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[19].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[19].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[19].innerHTML+'</b>'+'</a>';
document.getElementById('itm-21').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[20].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[20].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[20].innerHTML+'</b>'+'</a>';
document.getElementById('itm-22').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[21].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[21].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[21].innerHTML+'</b>'+'</a>';
document.getElementById('itm-23').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[22].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[22].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[22].innerHTML+'</b>'+'</a>';
document.getElementById('itm-24').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[23].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[23].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[23].innerHTML+'</b>'+'</a>';

var ii=0;

while (ii<24){

(document.getElementsByClassName('itm')[ii].getElementsByTagName('a')[0]).style.backgroundColor = 'white';

ii++;
}
                  
});
});

document.getElementById('sports').addEventListener('click',function(){
 
setTimeout(function(){
document.getElementById('loading-anim').style.display = 'none';
document.getElementById('loading-back').style.display = 'none';
}, 2000);
document.getElementById('tech').disabled = false;
document.getElementById('fashion').disabled = false;
document.getElementById('homeg').disabled = false;
document.getElementById('sports').disabled = true;
document.getElementById('automotive').disabled = false;
document.getElementById('other').disabled = false;

document.getElementById('loading-anim').style.display = 'block';
document.getElementById('loading-back').style.display = 'block';
document.getElementById('pageId').innerHTML = 'Sports';
  
$.getJSON('https://api.allorigins.win/get?url=' + encodeURIComponent('https://www.ebay.com/deals/trending/Sporting-Goods'), function (data) {
                      document.getElementById('show').innerHTML = (data.contents);

document.getElementsByTagName('body')[0].style.margin = '50';         

     document.getElementById('itm-1').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[0].getElementsByTagName('img')[0].src)+')'; 
     document.getElementById('itm-2').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[1].getElementsByTagName('img')[0].src)+')'; 
     document.getElementById('itm-3').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[2].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-4').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[3].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-5').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[4].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-6').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[5].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-7').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[6].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-8').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[7].getElementsByTagName('img')[0].src)+')'; 

document.getElementById('itm-9').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[8].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-10').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[9].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-11').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[10].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-12').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[11].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-13').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[12].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-14').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[13].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-15').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[14].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-16').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[15].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-17').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[16].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-18').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[17].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-19').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[18].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-20').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[19].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-21').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[20].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-22').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[21].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-23').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[22].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-24').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[23].getElementsByTagName('img')[0].src)+')';

document.getElementById('itm-1').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[0].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[0].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[0].innerHTML+'</b>'+'</a>';
document.getElementById('itm-2').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[1].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[1].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[1].innerHTML+'</b>'+'</a>';
document.getElementById('itm-3').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[2].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[2].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[2].innerHTML+'</b>'+'</a>';
document.getElementById('itm-4').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[3].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[3].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[3].innerHTML+'</b>'+'</a>';
document.getElementById('itm-5').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[4].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[4].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[4].innerHTML+'</b>'+'</a>';
document.getElementById('itm-6').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[5].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[5].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[5].innerHTML+'</b>'+'</a>';
document.getElementById('itm-7').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[6].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[6].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[6].innerHTML+'</b>'+'</a>';
document.getElementById('itm-8').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[7].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[7].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[7].innerHTML+'</b>'+'</a>';
document.getElementById('itm-9').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[8].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[8].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[8].innerHTML+'</b>'+'</a>';
document.getElementById('itm-10').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[9].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[9].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[9].innerHTML+'</b>'+'</a>';
document.getElementById('itm-11').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[10].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[10].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[10].innerHTML+'</b>'+'</a>';
document.getElementById('itm-12').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[11].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[11].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[11].innerHTML+'</b>'+'</a>';
document.getElementById('itm-13').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[12].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[12].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[12].innerHTML+'</b>'+'</a>';
document.getElementById('itm-14').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[13].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[13].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[13].innerHTML+'</b>'+'</a>';
document.getElementById('itm-15').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[14].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[14].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[14].innerHTML+'</b>'+'</a>';
document.getElementById('itm-16').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[15].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[15].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[15].innerHTML+'</b>'+'</a>';
document.getElementById('itm-17').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[16].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[16].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[16].innerHTML+'</b>'+'</a>';
document.getElementById('itm-18').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[17].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[17].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[17].innerHTML+'</b>'+'</a>';
document.getElementById('itm-19').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[18].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[18].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[18].innerHTML+'</b>'+'</a>';
document.getElementById('itm-20').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[19].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[19].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[19].innerHTML+'</b>'+'</a>';
document.getElementById('itm-21').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[20].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[20].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[20].innerHTML+'</b>'+'</a>';
document.getElementById('itm-22').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[21].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[21].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[21].innerHTML+'</b>'+'</a>';
document.getElementById('itm-23').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[22].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[22].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[22].innerHTML+'</b>'+'</a>';
document.getElementById('itm-24').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[23].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[23].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[23].innerHTML+'</b>'+'</a>';

var ii=0;

while (ii<24){

(document.getElementsByClassName('itm')[ii].getElementsByTagName('a')[0]).style.backgroundColor = 'white';

ii++;
}
 
});
});

document.getElementById('automotive').addEventListener('click',function(){
setTimeout(function(){
document.getElementById('loading-anim').style.display = 'none';
document.getElementById('loading-back').style.display = 'none';
}, 2000);
document.getElementById('tech').disabled = false;
document.getElementById('fashion').disabled = false;
document.getElementById('homeg').disabled = false;
document.getElementById('sports').disabled = false;
document.getElementById('automotive').disabled = true;
document.getElementById('other').disabled = false;

document.getElementById('loading-anim').style.display = 'block';
document.getElementById('loading-back').style.display = 'block';
document.getElementById('pageId').innerHTML = 'automotive';
  
$.getJSON('https://api.allorigins.win/get?url=' + encodeURIComponent('https://www.ebay.com/deals/trending/Automotive'), function (data) {
                      document.getElementById('show').innerHTML = (data.contents);

document.getElementsByTagName('body')[0].style.margin = '50';         

     document.getElementById('itm-1').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[0].getElementsByTagName('img')[0].src)+')'; 
     document.getElementById('itm-2').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[1].getElementsByTagName('img')[0].src)+')'; 
     document.getElementById('itm-3').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[2].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-4').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[3].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-5').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[4].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-6').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[5].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-7').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[6].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-8').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[7].getElementsByTagName('img')[0].src)+')'; 

document.getElementById('itm-9').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[8].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-10').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[9].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-11').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[10].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-12').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[11].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-13').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[12].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-14').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[13].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-15').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[14].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-16').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[15].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-17').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[16].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-18').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[17].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-19').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[18].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-20').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[19].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-21').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[20].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-22').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[21].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-23').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[22].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-24').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[23].getElementsByTagName('img')[0].src)+')';

document.getElementById('itm-1').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[0].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[0].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[0].innerHTML+'</b>'+'</a>';
document.getElementById('itm-2').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[1].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[1].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[1].innerHTML+'</b>'+'</a>';
document.getElementById('itm-3').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[2].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[2].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[2].innerHTML+'</b>'+'</a>';
document.getElementById('itm-4').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[3].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[3].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[3].innerHTML+'</b>'+'</a>';
document.getElementById('itm-5').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[4].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[4].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[4].innerHTML+'</b>'+'</a>';
document.getElementById('itm-6').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[5].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[5].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[5].innerHTML+'</b>'+'</a>';
document.getElementById('itm-7').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[6].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[6].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[6].innerHTML+'</b>'+'</a>';
document.getElementById('itm-8').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[7].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[7].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[7].innerHTML+'</b>'+'</a>';
document.getElementById('itm-9').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[8].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[8].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[8].innerHTML+'</b>'+'</a>';
document.getElementById('itm-10').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[9].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[9].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[9].innerHTML+'</b>'+'</a>';
document.getElementById('itm-11').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[10].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[10].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[10].innerHTML+'</b>'+'</a>';
document.getElementById('itm-12').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[11].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[11].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[11].innerHTML+'</b>'+'</a>';
document.getElementById('itm-13').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[12].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[12].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[12].innerHTML+'</b>'+'</a>';
document.getElementById('itm-14').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[13].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[13].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[13].innerHTML+'</b>'+'</a>';
document.getElementById('itm-15').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[14].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[14].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[14].innerHTML+'</b>'+'</a>';
document.getElementById('itm-16').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[15].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[15].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[15].innerHTML+'</b>'+'</a>';
document.getElementById('itm-17').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[16].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[16].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[16].innerHTML+'</b>'+'</a>';
document.getElementById('itm-18').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[17].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[17].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[17].innerHTML+'</b>'+'</a>';
document.getElementById('itm-19').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[18].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[18].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[18].innerHTML+'</b>'+'</a>';
document.getElementById('itm-20').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[19].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[19].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[19].innerHTML+'</b>'+'</a>';
document.getElementById('itm-21').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[20].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[20].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[20].innerHTML+'</b>'+'</a>';
document.getElementById('itm-22').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[21].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[21].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[21].innerHTML+'</b>'+'</a>';
document.getElementById('itm-23').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[22].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[22].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[22].innerHTML+'</b>'+'</a>';
document.getElementById('itm-24').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[23].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[23].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[23].innerHTML+'</b>'+'</a>';

var ii=0;

while (ii<24){

(document.getElementsByClassName('itm')[ii].getElementsByTagName('a')[0]).style.backgroundColor = 'white';

ii++;
} 

});
});

document.getElementById('other').addEventListener('click',function(){
setTimeout(function(){
document.getElementById('loading-anim').style.display = 'none';
document.getElementById('loading-back').style.display = 'none';
}, 2000);
document.getElementById('tech').disabled = false;
document.getElementById('fashion').disabled = false;
document.getElementById('homeg').disabled = false;
document.getElementById('sports').disabled = false;
document.getElementById('automotive').disabled = false;
document.getElementById('other').disabled = true;

document.getElementById('loading-anim').style.display = 'block';
document.getElementById('loading-back').style.display = 'block';
document.getElementById('pageId').innerHTML = 'Other';
  
$.getJSON('https://api.allorigins.win/get?url=' + encodeURIComponent('https://www.ebay.com/deals/trending/other-deals'), function (data) {
                      document.getElementById('show').innerHTML = (data.contents);

document.getElementsByTagName('body')[0].style.margin = '50';         

     document.getElementById('itm-1').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[0].getElementsByTagName('img')[0].src)+')'; 
     document.getElementById('itm-2').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[1].getElementsByTagName('img')[0].src)+')'; 
     document.getElementById('itm-3').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[2].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-4').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[3].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-5').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[4].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-6').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[5].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-7').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[6].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-8').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[7].getElementsByTagName('img')[0].src)+')'; 

document.getElementById('itm-9').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[8].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-10').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[9].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-11').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[10].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-12').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[11].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-13').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[12].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-14').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[13].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-15').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[14].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-16').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[15].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-17').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[16].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-18').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[17].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-19').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[18].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-20').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[19].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-21').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[20].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-22').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[21].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-23').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[22].getElementsByTagName('img')[0].src)+')'; 
document.getElementById('itm-24').style.background = 'url('+(document.getElementsByClassName('slashui-image-cntr')[23].getElementsByTagName('img')[0].src)+')';

document.getElementById('itm-1').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[0].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[0].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[0].innerHTML+'</b>'+'</a>';
document.getElementById('itm-2').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[1].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[1].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[1].innerHTML+'</b>'+'</a>';
document.getElementById('itm-3').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[2].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[2].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[2].innerHTML+'</b>'+'</a>';
document.getElementById('itm-4').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[3].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[3].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[3].innerHTML+'</b>'+'</a>';
document.getElementById('itm-5').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[4].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[4].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[4].innerHTML+'</b>'+'</a>';
document.getElementById('itm-6').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[5].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[5].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[5].innerHTML+'</b>'+'</a>';
document.getElementById('itm-7').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[6].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[6].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[6].innerHTML+'</b>'+'</a>';
document.getElementById('itm-8').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[7].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[7].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[7].innerHTML+'</b>'+'</a>';
document.getElementById('itm-9').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[8].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[8].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[8].innerHTML+'</b>'+'</a>';
document.getElementById('itm-10').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[9].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[9].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[9].innerHTML+'</b>'+'</a>';
document.getElementById('itm-11').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[10].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[10].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[10].innerHTML+'</b>'+'</a>';
document.getElementById('itm-12').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[11].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[11].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[11].innerHTML+'</b>'+'</a>';
document.getElementById('itm-13').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[12].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[12].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[12].innerHTML+'</b>'+'</a>';
document.getElementById('itm-14').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[13].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[13].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[13].innerHTML+'</b>'+'</a>';
document.getElementById('itm-15').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[14].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[14].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[14].innerHTML+'</b>'+'</a>';
document.getElementById('itm-16').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[15].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[15].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[15].innerHTML+'</b>'+'</a>';
document.getElementById('itm-17').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[16].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[16].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[16].innerHTML+'</b>'+'</a>';
document.getElementById('itm-18').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[17].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[17].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[17].innerHTML+'</b>'+'</a>';
document.getElementById('itm-19').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[18].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[18].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[18].innerHTML+'</b>'+'</a>';
document.getElementById('itm-20').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[19].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[19].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[19].innerHTML+'</b>'+'</a>';
document.getElementById('itm-21').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[20].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[20].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[20].innerHTML+'</b>'+'</a>';
document.getElementById('itm-22').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[21].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[21].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[21].innerHTML+'</b>'+'</a>';
document.getElementById('itm-23').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[22].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[22].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[22].innerHTML+'</b>'+'</a>';
document.getElementById('itm-24').innerHTML = '<a href='+document.getElementsByClassName("dne-itemtile-detail")[23].getElementsByTagName("a")[0].href+'>'+'<b>'+document.getElementsByClassName('first')[23].innerHTML+': '+document.getElementsByClassName("ebayui-ellipsis-2")[23].innerHTML+'</b>'+'</a>';
 
var ii=0;

while (ii<24){

(document.getElementsByClassName('itm')[ii].getElementsByTagName('a')[0]).style.backgroundColor = 'white';

ii++;
}

});
});
