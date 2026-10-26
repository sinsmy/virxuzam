(function(){
var b=document.getElementById('burger'),n=document.getElementById('nav'),h=document.getElementById('svc');
b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)});
var t=h.querySelector('button');
t.addEventListener('click',function(e){e.stopPropagation();var o=h.classList.toggle('open');t.setAttribute('aria-expanded',o)});
document.addEventListener('click',function(e){if(!h.contains(e.target)){h.classList.remove('open');t.setAttribute('aria-expanded','false')}});
document.addEventListener('keydown',function(e){if(e.key==='Escape'){h.classList.remove('open');n.classList.remove('open')}});
n.addEventListener('click',function(e){if(e.target.tagName==='A'){n.classList.remove('open');h.classList.remove('open')}});
})();
