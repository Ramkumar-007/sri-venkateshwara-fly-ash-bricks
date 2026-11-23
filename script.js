(function(){
  var q=function(s){return Array.prototype.slice.call(document.querySelectorAll(s))};
  var items=q('.sec-head, .benefit, tbody tr, .table-scroll, .split > *, .calc, .panel, details, .contact > *');
  items.forEach(function(el){
    var i=Array.prototype.indexOf.call(el.parentNode.children,el);
    el.classList.add('reveal');
    el.style.setProperty('--d',(Math.min(i,6)*0.08)+'s');
  });
  q('.steps li').forEach(function(li,i){li.style.setProperty('--d',(i*0.22)+'s')});
  var targets=items.concat(q('.steps'));
  if(!('IntersectionObserver' in window)){targets.forEach(function(t){t.classList.add('in')});return}
  var io=new IntersectionObserver(function(es){
    es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}});
  },{threshold:.15,rootMargin:'0px 0px -6% 0px'});
  targets.forEach(function(t){io.observe(t)});
  var bar=document.querySelector('.progress'),tick=false;
  function upd(){
    var h=document.documentElement.scrollHeight-window.innerHeight;
    bar.style.transform='scaleX('+(h>0?Math.min(window.scrollY/h,1):0)+')';
    tick=false;
  }
  window.addEventListener('scroll',function(){if(!tick){tick=true;requestAnimationFrame(upd)}},{passive:true});
  upd();
})();

document.getElementById('quote').addEventListener('submit',function(e){
  e.preventDefault();
  var v=function(id){return document.getElementById(id).value.trim()};
  var err=document.getElementById('err');
  if(!v('f-name')||!v('f-phone')){err.textContent=window.t('Enter your name and phone number so we can call you back.');return}
  err.textContent='';
  var t='Hi, I would like a quote for fly ash bricks.\nName: '+v('f-name')+'\nPhone: '+v('f-phone');
  if(v('f-loc'))t+='\nSite location: '+v('f-loc');
  if(v('f-qty'))t+='\nBricks required: '+v('f-qty');
  if(v('f-msg'))t+='\nMessage: '+v('f-msg');
  window.open('https://wa.me/919629794217?text='+encodeURIComponent(t),'_blank','noopener');
});

(function(){
var TA={
"Why fly ash":"ஏன் ஃபிளை ஆஷ்","Compare":"ஒப்பீடு","Bricks needed":"செங்கல் கணக்கு","How we make it":"தயாரிப்பு முறை","FAQ":"கேள்விகள்","Contact":"தொடர்புக்கு","Call":"அழைக்க","Menu":"மெனு",
"Strong foundation for a better tomorrow":"வலிமையான அடித்தளம், சிறந்த நாளைக்காக","Fly Ash Bricks... For a Better Future...":"ஃபிளை ஆஷ் செங்கற்கள்... சிறந்த எதிர்காலத்திற்காக...","Quality | Trust | Strength":"தரம் | நம்பிக்கை | வலிமை","Also available: Blue Metals and M-Sand":"கூடுதலாக: ப்ளூ மெட்டல்ஸ் மற்றும் எம்-சாண்ட்",
"Fly ash bricks from Tharalkuttai, Salem, for stronger, longer-lasting walls.":"Tharalkuttai, சேலத்திலிருந்து ஃபிளை ஆஷ் செங்கற்கள் — வலிமையான, நீடித்து உழைக்கும் சுவர்களுக்கு.",
"Get a quote":"விலை கேளுங்கள்","Call 96297 94217":"அழைக்க 96297 94217","Call 94446 91505":"அழைக்க 94446 91505",
"What you get on site":"கட்டுமான இடத்தில் உங்களுக்கு கிடைப்பது",
"Five reasons builders around Salem switch from clay to fly ash.":"சேலம் பகுதி கட்டுநர்கள் களிமண் செங்கலிலிருந்து ஃபிளை ஆஷ் செங்கலுக்கு மாறும் ஐந்து காரணங்கள்.",
"High strength":"அதிக வலிமை","Durable, long-lasting walls that hold up for the life of the building.":"கட்டிடத்தின் ஆயுள் முழுவதும் நிலைத்து நிற்கும் உறுதியான சுவர்கள்.",
"Smooth finish":"மென்மையான மேற்பரப்பு","Even faces mean less plaster and a better-looking wall.":"சமமான பரப்பால் பூச்சு குறைவு, சுவர் பார்க்கவும் அழகு.",
"Eco friendly":"சூழலுக்கு நட்பு","Made with fly ash and crusher dust, industrial by-products that would otherwise go to waste.":"கழிவாகப் போகக்கூடிய ஃபிளை ஆஷ், கிரஷர் தூள் ஆகியவற்றில் இருந்து தயாரிக்கப்படுகிறது.",
"Lightweight":"எடை குறைவு","Easy to handle and lay, so masons work faster.":"தூக்கவும் அடுக்கவும் எளிது, கொத்தனார்கள் வேகமாக வேலை செய்யலாம்.",
"Uniform size":"ஒரே அளவு","Consistent quality in every batch, so courses stay straight.":"ஒவ்வொரு தொகுப்பிலும் ஒரே தரம், அடுக்குகள் நேராக இருக்கும்.",
"Fly ash bricks and clay bricks, side by side":"ஃபிளை ஆஷ் செங்கல் மற்றும் களிமண் செங்கல் ஒப்பீடு",
"What changes for your site when you choose fly ash.":"ஃபிளை ஆஷ் தேர்ந்தெடுத்தால் உங்கள் கட்டுமானத்தில் என்ன மாறும்.",
"Fly ash brick":"ஃபிளை ஆஷ் செங்கல்","Clay brick":"களிமண் செங்கல்",
"Size and shape":"அளவும் வடிவமும்","Surface":"மேற்பரப்பு","Plaster needed":"தேவையான பூச்சு","Handling":"கையாளுதல்","Raw material":"மூலப்பொருள்",
"Machine-moulded, uniform":"இயந்திரத்தில் அச்சிடப்பட்டது, ஒரே அளவு","Hand or semi-machine moulded, varies":"கை அல்லது அரை-இயந்திர அச்சு, அளவு மாறுபடும்",
"Smooth, even faces":"மென்மையான, சமமான பரப்பு","Rougher, uneven faces":"சொரசொரப்பான, சமமற்ற பரப்பு",
"Less, because walls come out flatter":"குறைவு, சுவர் சமமாக வரும்","More, to level the surface":"அதிகம், பரப்பை சமப்படுத்த",
"Lighter, easier to carry and lay":"எடை குறைவு, தூக்கி அடுக்க எளிது","Heavier per brick":"ஒரு செங்கல் எடை அதிகம்",
"Fly ash and crusher dust, with cement":"ஃபிளை ஆஷ், கிரஷர் தூள், சிமெண்ட்","Topsoil from fields":"வயல் மேல்மண்",
"Ask us for the test report of the batch you are buying before you place a large order.":"பெரிய ஆர்டர் கொடுக்கும் முன், நீங்கள் வாங்கும் செங்கல் தொகுப்பின் சோதனை அறிக்கையை கேளுங்கள்.",
"Built for load-bearing and partition walls":"தாங்கும் சுவர்கள் மற்றும் பிரிப்புச் சுவர்களுக்கு ஏற்றது",
"Used wherever you would use a standard brick.":"சாதாரண செங்கல் பயன்படுத்தும் எல்லா இடங்களிலும் பயன்படுத்தலாம்.",
"Residential houses":"குடியிருப்பு வீடுகள்","Walls":"சுவர்கள்","Compound walls":"காம்பவுண்ட் சுவர்கள்","Boundary":"எல்லை","Apartments":"அடுக்குமாடி குடியிருப்புகள்","Commercial buildings":"வணிகக் கட்டிடங்கள்","Partitions":"பிரிப்புச் சுவர்கள்","Industrial sheds":"தொழிற்சாலை கொட்டகைகள்",
"How the bricks are made":"செங்கல் எப்படி தயாராகிறது","Six steps from fly ash to your site.":"ஃபிளை ஆஷ்ஷில் இருந்து உங்கள் கட்டுமான இடம் வரை ஆறு படிகள்.",
"Source":"சேகரிப்பு","Fly ash, crusher dust, crusher waste and cement are brought in as raw materials.":"ஃபிளை ஆஷ், கிரஷர் தூள், கிரஷர் கழிவு, சிமெண்ட் ஆகியவை மூலப்பொருளாக கொண்டு வரப்படுகின்றன.",
"Mix":"கலவை","Blended in set proportions for each batch.":"ஒவ்வொரு தொகுப்புக்கும் நிர்ணயித்த விகிதத்தில் கலக்கப்படுகிறது.",
"Mould":"அச்சிடல்","Pressed into bricks of one standard size.":"ஒரே நிலையான அளவில் செங்கலாக அழுத்தப்படுகிறது.",
"Cure":"பதப்படுத்தல்","Left to gain strength before use.":"பயன்படுத்தும் முன் வலிமை பெற விடப்படுகிறது.",
"Check":"சரிபார்ப்பு","Bricks are inspected for size and finish.":"அளவும் மேற்பரப்பும் சோதிக்கப்படுகிறது.",
"Dispatch":"அனுப்புதல்","Loaded and sent to your site.":"ஏற்றி உங்கள் இடத்துக்கு அனுப்பப்படுகிறது.",
"How many bricks do you need?":"எத்தனை செங்கல் தேவை?",
"Enter your wall size for a quick estimate. We confirm the final count on a call.":"சுவர் அளவை உள்ளிட்டால் தோராய கணக்கு கிடைக்கும். இறுதி எண்ணிக்கையை அழைப்பில் உறுதி செய்வோம்.",
"Wall length (ft)":"சுவர் நீளம் (அடி)","Wall height (ft)":"சுவர் உயரம் (அடி)","Doors and windows (sq ft, optional)":"கதவு, ஜன்னல் (சதுர அடி, விருப்பம்)",
"Wall thickness":"சுவர் தடிமன்","4 inch (single brick)":"4 அங்குலம் (ஒரு செங்கல்)","8 inch (double brick)":"8 அங்குலம் (இரு செங்கல்)","Brick size":"செங்கல் அளவு","9 × 3 × 4 inch":"9 × 3 × 4 அங்குலம்",
"Estimated bricks":"தோராய செங்கல் எண்ணிக்கை","Includes 5% extra for breakage.":"உடைசலுக்கு 5% கூடுதல் சேர்க்கப்பட்டுள்ளது.","Get a quote for these bricks":"இந்த செங்கலுக்கு விலை கேளுங்கள்",
"Enter wall length and height.":"சுவர் நீளம், உயரம் உள்ளிடவும்.","Wall area":"சுவர் பரப்பு","sq ft":"சதுர அடி",
"Tell us the quantity and your site location":"தேவையான அளவும் உங்கள் இடமும் சொல்லுங்கள்",
"We will confirm the price per brick, delivery charge and timing on a call. Brick size and strength details are shared with the quote.":"செங்கல் விலை, டெலிவரி கட்டணம், நேரம் ஆகியவற்றை அழைப்பில் உறுதி செய்வோம். செங்கல் அளவு, வலிமை விவரங்கள் விலைப்பட்டியலுடன் வழங்கப்படும்.",
"Request a quote":"விலை கேட்க","Plant":"தொழிற்சாலை","Tharalkuttai, Salem":"Tharalkuttai, சேலம்","Price":"விலை","Quoted per order":"ஆர்டர் வாரியாக","Delivery":"டெலிவரி","By truck to your site":"லாரி மூலம் உங்கள் இடத்துக்கு","Test report":"சோதனை அறிக்கை","Ask before you order":"ஆர்டருக்கு முன் கேளுங்கள்",
"Questions builders ask":"கட்டுநர்கள் கேட்கும் கேள்விகள்",
"How strong are fly ash bricks compared with red bricks?":"சிவப்பு செங்கலுடன் ஒப்பிட்டால் ஃபிளை ஆஷ் செங்கல் எவ்வளவு வலிமையானது?",
"Strength depends on the mix and the batch. Ask us for the test report of the bricks you are buying and compare it with what your engineer specifies.":"வலிமை கலவையையும் தொகுப்பையும் பொறுத்தது. நீங்கள் வாங்கும் செங்கலின் சோதனை அறிக்கையை கேட்டு, உங்கள் பொறியாளர் குறிப்பிடும் அளவுடன் ஒப்பிடுங்கள்.",
"Will I use less plaster?":"பூச்சு குறைவாக தேவைப்படுமா?",
"Fly ash bricks have smooth, even faces and a consistent size, so walls come out flatter and usually need less plaster to level.":"ஃபிளை ஆஷ் செங்கல் மென்மையான சமமான பரப்பும் ஒரே அளவும் கொண்டது; சுவர் சமமாக வருவதால் பூச்சு பொதுவாக குறைவாக தேவைப்படும்.",
"Do the bricks need curing on site?":"கட்டுமான இடத்தில் செங்கலை பதப்படுத்த வேண்டுமா?",
"Bricks are cured at our plant before dispatch. Your mason can ask us about wetting and laying practice when you order.":"அனுப்புவதற்கு முன் எங்கள் தொழிற்சாலையில் பதப்படுத்தப்படுகிறது. நனைத்தல், அடுக்குதல் குறித்து ஆர்டர் செய்யும்போது கொத்தனார் எங்களிடம் கேட்கலாம்.",
"What is the price for bulk orders?":"மொத்த ஆர்டருக்கு விலை என்ன?",
"Price depends on quantity and delivery distance. Call 96297 94217, or send the form below, and we will quote you.":"விலை அளவையும் டெலிவரி தூரத்தையும் பொறுத்தது. 96297 94217 எண்ணை அழைக்கவும், அல்லது கீழே உள்ள படிவத்தை அனுப்பவும்; நாங்கள் விலை சொல்கிறோம்.",
"Where do you deliver?":"எங்கெல்லாம் டெலிவரி செய்கிறீர்கள்?",
"We supply from Tharalkuttai, Salem. Share your site location and we will confirm delivery and charges.":"Tharalkuttai, சேலத்திலிருந்து அனுப்புகிறோம். உங்கள் இடத்தை சொல்லுங்கள், டெலிவரி மற்றும் கட்டணத்தை உறுதி செய்கிறோம்.",
"How do I pay?":"பணம் எப்படி செலுத்துவது?",
"Payment terms are agreed when you confirm your order. Call us to discuss.":"ஆர்டரை உறுதி செய்யும்போது பணம் செலுத்தும் முறை முடிவு செய்யப்படும். அழைத்துப் பேசுங்கள்.",
"Call, or send the form. It opens WhatsApp with your details filled in.":"அழைக்கவும், அல்லது படிவத்தை அனுப்பவும். உங்கள் விவரங்களுடன் WhatsApp திறக்கும்.","Need fly ash bricks for your project?":"உங்கள் திட்டத்திற்கு ஃபிளை ஆஷ் செங்கற்கள் தேவையா?",
"Phone":"தொலைபேசி","Plant address":"தொழிற்சாலை முகவரி","Tharalkuttai, Salem, Tamil Nadu":"Tharalkuttai, சேலம், தமிழ்நாடு","Directions":"வழி காட்டி","Open in Google Maps":"Google Maps-ல் திற",
"Name":"பெயர்","Site location":"இடம்","Bricks required":"தேவையான செங்கல்","Message":"செய்தி","Send on WhatsApp":"WhatsApp-ல் அனுப்பு",
"Enter your name and phone number so we can call you back.":"திரும்ப அழைக்க உங்கள் பெயரையும் தொலைபேசி எண்ணையும் உள்ளிடவும்."
};
var PH={"Village or town":"கிராமம் அல்லது ஊர்","e.g. 5000":"எ.கா. 5000","e.g. 40":"எ.கா. 40","e.g. 10":"எ.கா. 10","e.g. 30":"எ.கா. 30","Wall type, delivery date, anything else":"சுவர் வகை, டெலிவரி தேதி, மற்றவை"};
var lang='en',nodes=[],phs=[];
function $(id){return document.getElementById(id)}
window.t=function(s){return lang==='ta'&&TA[s]?TA[s]:s};
var w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,null),n;
while((n=w.nextNode())){
  var p=n.parentNode;
  if(!p||/^(SCRIPT|STYLE)$/i.test(p.nodeName)||(p.closest&&p.closest('[data-dyn]')))continue;
  var k=n.nodeValue.replace(/\s+/g,' ').trim();
  if(TA[k])nodes.push({n:n,en:n.nodeValue,k:k});
}
Array.prototype.forEach.call(document.querySelectorAll('[placeholder]'),function(el){var en=el.getAttribute('placeholder');if(PH[en])phs.push({el:el,en:en})});
function num(id){var v=parseFloat($(id).value);return isFinite(v)&&v>0?v:0}
function calc(){
  var L=num('c-l'),H=num('c-h'),O=num('c-o'),out=$('est-n'),sub=$('est-sub');
  if(!L||!H){out.textContent='—';sub.textContent=t('Enter wall length and height.');window.__est=0;return}
  var net=Math.max(L*H-O,0);
  var face=9.4*(parseFloat($('c-s').value)+0.4);
  var total=Math.ceil(net*144/face*parseInt($('c-t').value,10)*1.05/10)*10;
  window.__est=total;
  out.textContent=total.toLocaleString('en-IN');
  sub.textContent=t('Wall area')+': '+Math.round(net)+' '+t('sq ft');
}
['c-l','c-h','c-o','c-t','c-s'].forEach(function(id){$(id).addEventListener('input',calc)});
$('est-q').addEventListener('click',function(){
  if(window.__est){
    $('f-qty').value=window.__est;
    if(!$('f-msg').value)$('f-msg').value='Wall '+num('c-l')+' x '+num('c-h')+' ft';
  }
});
function setLang(l){
  lang=l;
  nodes.forEach(function(o){
    if(l==='ta'){o.n.nodeValue=o.en.match(/^\s*/)[0]+TA[o.k]+o.en.match(/\s*$/)[0]}
    else{o.n.nodeValue=o.en}
  });
  phs.forEach(function(o){o.el.setAttribute('placeholder',l==='ta'?PH[o.en]:o.en)});
  document.documentElement.lang=l==='ta'?'ta':'en';
  $('lang').textContent=l==='ta'?'English':'தமிழ்';
  var er=$('err');if(er&&er.textContent)er.textContent=t('Enter your name and phone number so we can call you back.');
  calc();
  try{localStorage.setItem('lang',l)}catch(e){}
}
$('lang').addEventListener('click',function(){setLang(lang==='ta'?'en':'ta')});
var navToggle=$('nav-toggle'),mainNav=$('main-nav');
navToggle.addEventListener('click',function(){
  var open=this.getAttribute('aria-expanded')!=='true';
  this.setAttribute('aria-expanded',open?'true':'false');
  mainNav.classList.toggle('open',open);
});
mainNav.addEventListener('click',function(e){
  if(e.target.closest&&e.target.closest('a')){
    navToggle.setAttribute('aria-expanded','false');
    mainNav.classList.remove('open');
  }
});
document.addEventListener('keydown',function(e){
  if(e.key==='Escape'&&navToggle.getAttribute('aria-expanded')==='true'){
    navToggle.setAttribute('aria-expanded','false');
    mainNav.classList.remove('open');
    navToggle.focus();
  }
});
calc();
try{if(localStorage.getItem('lang')==='ta')setLang('ta')}catch(e){}
})();