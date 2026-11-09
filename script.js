(function(){
var ids=['montage','design','writing','web'];
function go(){
var h=(location.hash||'').replace('#','');
if(ids.indexOf(h)<0)h='montage';
ids.forEach(function(i){document.getElementById(i).classList.toggle('on',i===h)});
document.querySelectorAll('#nav a').forEach(function(a){a.classList.toggle('on',a.getAttribute('href')==='#'+h)});
var P={montage:['المونتاج','01050604721'],design:['التصميم','01225320285'],writing:['الكتابة وإدخال البيانات','01225320285'],web:['تصميم المواقع','01225320419']};
document.getElementById('ct').textContent='للتواصل بخصوص '+P[h][0]+' كلمني على واتساب';
var a=document.getElementById('cl');a.href='https://wa.me/2'+P[h][1];a.textContent=P[h][1];
window.scrollTo(0,0);
}
window.addEventListener('hashchange',go);go();
var N={montage:'01050604721',design:'01225320285',writing:'01225320285',web:'01225320419'};
document.querySelectorAll('.c').forEach(function(c){c.addEventListener('click',function(){
var n=N[c.closest('section').id];
var t='السلام عليكم، عايز أطلب خدمة: '+c.querySelector('h3').textContent;
var a=document.createElement('a');a.href='https://wa.me/2'+n+'?text='+encodeURIComponent(t);a.target='_blank';a.rel='noopener';document.body.appendChild(a);a.click();a.remove();
});});
})();
