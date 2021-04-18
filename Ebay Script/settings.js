localStorage.setItem("OpenInterval", 86400000);
document.body.innerHTML += `
<title>Settings</title>
<canvas style="z-index: -1; position: absolute; width: 100%; height: 40px; background-color: #A8A8A8; top: 0px; left: 0px;"></canvas>
<center><h2 style="z-index: 2;">Settings</h2></center>
<h3>Select Interval of Best Deals Page Opening:<br>
<select id="selection">
<option value=""> -- </option>
<option value="86400000">24 hrs</option>
<option value="43200000">12 hrs</option>
<option value="21600000">6 hrs</option>
<option value="10800000">3 hrs</option>
<option value="3600000">1 hrs</option>
</select>
<button id="open">Save my Input!</button>

</h3>
<h3>Opt-in to receive occasional emails about coming updates?</h3>
<input value="" id="email" type="text" placeholder="Your Email"></input><button id="opt-in">Sure!</button>

<h3>Have any Ideas for New Updates?</h3>
<textarea id="suggestions" value="" style="width: 33%; height: 300px;" placeholder="Share Here..."></textarea><br>
<button id="clear">Reset</button><button id="submit">Submit</button>
<br><a href="changelog.html" style="font-size: 15px;">View Changelog</a><br>

<a href="javascript:void(0);"><img style="position: fixed; bottom: 5px; left: 0px; height: 30px; width: 30px;" id="stack" src="https://cdn1.iconfinder.com/data/icons/picons-social/57/stackoverflow_rounded-128.png"></img></a>
<a href="javascript:void(0);"><img style="position: fixed; bottom: 5px; left: 35px; height: 30px; width: 30px;" id="git" src="https://cdn1.iconfinder.com/data/icons/social-media-vol-1-1/24/_github-128.png"></img></a>
<a href="javascript:void(0);"><img style="position: fixed; bottom: 5px; left: 70px; height: 30px; width: 30px;" id="mail" src="https://cdn0.iconfinder.com/data/icons/picons-social/57/67-gmail-2-128.png"></img></a>
`

document.getElementById('opt-in').addEventListener('click',function(){
if ((document.getElementById('email').value != "")&&(document.getElementById('email').value.includes('@'))){

Email.send({
    SecureToken : "a48279e5-6fff-4cee-9398-55298ef67de5",
    To : 'precise.price01@gmail.com',
    From : "precise.price01@gmail.com",
    Subject : document.getElementById('email').value+' OPTED IN',
    Body : "THIS PERSON CAN BE ADDED TO THE MAILING LIST FOR UPDATES!"
});
alert('Message sent. Thank you!');
localStorage.setItem("Opted-in", "true");
document.getElementById('email').disabled = true;

}else{
alert('Please enter a valid email address (includes @)');
}

});
if (localStorage.getItem('Opted-in') == 'true') {
document.getElementById('email').disabled = true;
}

document.getElementById('clear').addEventListener('click',function(){
document.getElementById('suggestions').value = "";
});
document.getElementById('submit').addEventListener('click',function(){
if (document.getElementById('suggestions').value != ""){

Email.send({
    SecureToken : "a48279e5-6fff-4cee-9398-55298ef67de5",
    To : 'precise.price01@gmail.com',
    From : "precise.price01@gmail.com",
    Subject : 'SUGGESTION',
    Body : document.getElementById('suggestions').value
});
alert('Message sent. Thank you for your valuable input!');

}else{
alert('Please fill out the required fields before submitting.');
}
});

document.getElementById('open').addEventListener('click',function(){
localStorage.setItem("OpenInterval", document.getElementById('selection').value);
/*TESTING alert(localStorage.getItem("OpenInterval"));*/

chrome.runtime.sendMessage({greeting: localStorage.getItem('OpenInterval')}, function(response) {
  console.log(response.farewell);
});

});

if (localStorage.getItem("OpenInterval") == '86400000'){
document.getElementById('selection')[0].innerHTML = 'Current: 24 hrs';
}
if (localStorage.getItem("OpenInterval") == '43200000'){
document.getElementById('selection')[0].innerHTML = 'Current: 12 hrs';
}
if (localStorage.getItem("OpenInterval") == '21600000'){
document.getElementById('selection')[0].innerHTML = 'Current: 6 hrs';
}
if (localStorage.getItem("OpenInterval") == '10800000'){
document.getElementById('selection')[0].innerHTML = 'Current: 3 hrs';
}
if (localStorage.getItem("OpenInterval") == '3600000'){
document.getElementById('selection')[0].innerHTML = 'Current: 1 hrs';
}

document.getElementById('stack').addEventListener('click',function(){
window.open('https://stackoverflow.com/users/12356427/mutedoriginal');
});
document.getElementById('git').addEventListener('click',function(){
window.open('https://github.com/flancast90');
});
document.getElementById('mail').addEventListener('click',function(){
window.open('contact.html', "Contact", "width=325,height=400");
});