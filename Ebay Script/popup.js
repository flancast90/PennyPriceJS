document.body.innerHTML += `
<div style="height: 200px; width: 200px;"></div>
<button id="today" style="position: fixed; height: 60px; font-size: 20px; width: 190px; top: 5px; left: 12.5px; border-radius: 5px;">View Today's Deals</button>
<ul style="position: fixed; top: 60px; font-size: 20px;">
<li id="contact"><img src="mail.png" style="width: 20px; height: 15px;"></img><a href="javascript:void(0);">Contact</a></li>
<li id="donate"><img src="donate.png" style="width:20px; height: 15px;"></img><a href="javascript:void(0);">Website</a></li>
<li id="settings"><img src="gear.png" style="width: 20px; height: 15px;"></img><a href="javascript:void(0);">Settings</a></li>
</ul>

<a href="javascript:void(0);"><img style="position: fixed; bottom: 5px; left: 60px; height: 30px; width: 30px;" id="stack" src="https://cdn1.iconfinder.com/data/icons/picons-social/57/stackoverflow_rounded-128.png"></img></a>
<a href="javascript:void(0);"><img style="position: fixed; bottom: 5px; left: 90px; height: 30px; width: 30px;" id="git" src="https://cdn1.iconfinder.com/data/icons/social-media-vol-1-1/24/_github-128.png"></img></a>
<a href="javascript:void(0);"><img style="position: fixed; bottom: 5px; left: 120px; height: 30px; width: 30px;" id="mail" src="https://cdn0.iconfinder.com/data/icons/picons-social/57/67-gmail-2-128.png"></img></a>
`
document.getElementById('today').addEventListener('click',function(){
window.open('dashboard.html');
});
document.getElementById('contact').addEventListener('click',function(){
window.open('contact.html', "Contact", "width=325,height=400");
});
document.getElementById('donate').addEventListener('click',function(){
window.open('https://www.finnsoftware.net/');
});
document.getElementById('settings').addEventListener('click',function(){
window.open('settings.html');
});
document.getElementById('stack').addEventListener('click',function(){
window.open('https://stackoverflow.com/users/12356427/mutedoriginal');
});
document.getElementById('git').addEventListener('click',function(){
window.open('https://github.com/flancast90');
});
document.getElementById('mail').addEventListener('click',function(){
window.open('contact.html', "Contact", "width=325,height=400");
});