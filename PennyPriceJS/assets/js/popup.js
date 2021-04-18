document.head.innerHTML += `
<script async defer src="https://buttons.github.io/buttons.js"></script>
`
document.body.innerHTML += `
<div style="height: 200px; width: 200px;"></div>
<button id="today" style="position: fixed; height: 60px; font-size: 1.1em; width: 200px; top:0px; left:0px; background-color:white; border:none;">View Today's Deals</button>
<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/flancast90/PennyPriceJS" data-color-scheme="no-preference: light; light: light; dark: light;" data-size="large" aria-label="Star flancast90/PennyPriceJS on GitHub">Star</a>
<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/flancast90/PennyPriceJS/subscription" data-color-scheme="no-preference: light; light: light; dark: light;" data-size="large" aria-label="Watch flancast90/PennyPriceJS on GitHub">Watch</a>
<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/flancast90/PennyPriceJS/issues" data-color-scheme="no-preference: light; light: light; dark: light;" data-size="large" aria-label="Issue flancast90/PennyPriceJS on GitHub">Issue</a>


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
