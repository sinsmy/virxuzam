(function(){
var f=document.getElementById('cf');if(!f)return;
var s=new URLSearchParams(location.search).get('s');
if(s){[].forEach.call(f.querySelectorAll('option'),function(o){if(o.dataset.s===s)o.selected=true})}
f.addEventListener('submit',function(e){
e.preventDefault();
var b=f.querySelector('button[type=submit]');b.disabled=true;b.textContent='Envoi en cours…';
fetch('https://formsubmit.co/ajax/virxuzam2.0@gmail.com',{method:'POST',headers:{'Accept':'application/json'},body:new FormData(f)})
.then(function(r){if(!r.ok)throw 0;window.location.href='merci.html'})
.catch(function(){f.submit()});
});
})();
