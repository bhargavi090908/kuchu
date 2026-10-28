// 1. SCREEN NAVIGATION
function showScreen(id){
  document.querySelectorAll(".screen").forEach(function(screen){screen.classList.remove("active");});
  const target=document.getElementById(id);
  if(target){target.classList.add("active");window.scrollTo(0,0);}
}

// 2. PASSWORD
const passwordForm=document.getElementById("passwordForm");
const passwordInput=document.getElementById("passwordInput");
const passwordError=document.getElementById("passwordError");
passwordForm.addEventListener("submit",function(event){
  event.preventDefault();
  if(passwordInput.value.trim()==="10/12/2022"){
    passwordError.textContent="";
    showScreen("welcomeScreen");
  }else{
    passwordError.textContent="Wrong date! Remember our first auto meeting 🛺💗";
  }
});

// 3. START
document.getElementById("startButton").addEventListener("click",function(){showScreen("memoriesScreen");});

// 4. THREE UNIQUE MEMORIES
const memories=[
 {emoji:"💐💗",title:"I'm so lucky to have you",text:"Bubu, sometimes I think about us and feel so lucky that life brought you to me. 🥹❤️ Enni ups and downs vachina, breaks vachina, malli manam WE ARE US avvadam naaku chala special. Mana journey perfect kakapovachu, but you're someone I genuinely care about. If I could give you something right now, it would be a beautiful bouquet and a little note saying, 'Thank you for being in my life, my handsome boy.' 🌹💌"},
 {emoji:"🫶🏻💞",title:"I notice your efforts",text:"Naa kosam nee kopam tagginchukovadaniki, nannu understand cheskovadaniki nuvvu try chesina efforts nenu notice chesanu, Bubu. ❤️ Nuvvu perfect ga undalsina avasaram ledu, and nenu kuda perfect kaadu. Manam iddaram mistakes nunchi nerchukuntu, okariki okaram support chesthu grow avvali ani korukuntunna. Nee dreams kosam work cheyyi, neeku nachina path ni choose chesuko. I genuinely want to see you succeed, and nee success chusi proud ga feel avvalani undi. I'll always cheer for you, darling. 🌟"},
 {emoji:"🤗💗",title:"A little love for you",text:"Sometimes words saripovu, Bubu, so imagine I'm giving you a big warm hug and a bouquet full of flowers. 💐🤗 Oka little forehead kiss 😘, a warm imaginary hug, and a reminder that you deserve happiness, peace, and success. Mana silly talks, random reels, songs, laughs, and little memories anni naaku precious. Future ela untundo teliyadu, but let's keep communicating, respecting each other, and working towards our dreams. I'm so lucky to have you, my handsome boy. Love you, Bubu. 🥹💗"}
];
let memoryIndex=0;
function renderMemory(){
 const memory=memories[memoryIndex];
 document.getElementById("memoryEmoji").textContent=memory.emoji;
 document.getElementById("memoryTitle").textContent=memory.title;
 document.getElementById("memoryText").textContent=memory.text;
 document.getElementById("memoryDots").textContent=memories.map((_,i)=>i===memoryIndex?"●":"○").join(" ");
}
document.getElementById("nextMemory").addEventListener("click",function(){
 memoryIndex++;
 if(memoryIndex>=memories.length){showScreen("visitQuestion");}else{renderMemory();}
});

// 5. BOUQUET, HUG, AND KISS BUTTONS
const giftMessage=document.getElementById("giftMessage");
document.getElementById("bouquetButton").addEventListener("click",function(){
 giftMessage.textContent="💐🌹 A beautiful bouquet for my Bubu! You deserve all the lovely things in this world. 💗";
});
document.getElementById("hugButton").addEventListener("click",function(){
 giftMessage.textContent="🤗💞 Sending you the biggest imaginary hug! Take a deep breath, smile, and remember I'm cheering for you.";
});
document.getElementById("kissButton").addEventListener("click",function(){
 giftMessage.textContent="😘💗 One tiny virtual kiss for my handsome boy! A little reminder that you're special to me. 💌";
});

// 6. VISIT QUESTION
const yesVisit=document.getElementById("yesVisit");
const noVisit=document.getElementById("noVisit");
const visitMessage=document.getElementById("visitMessage");
const girlCartoon=document.getElementById("girlCartoon");
yesVisit.addEventListener("click",function(){
 girlCartoon.textContent="👧🏻 💖 🥰";
 visitMessage.textContent="YAY! Imaginary hug ready, Bubu! 😂💗";
 yesVisit.textContent="COMINGGG 💕";
 noVisit.hidden=true;
 setTimeout(function(){showScreen("prankScreen");},1500);
});
noVisit.addEventListener("click",function(){
 girlCartoon.textContent="👧🏻 🧱😤";
 visitMessage.textContent="CHALK WARNING! 😂 Just kidding! One more chance, Bubu 💗";
 noVisit.textContent="Wait, let me think! 😭";
 noVisit.style.transform="translate("+(Math.random()*40-20)+"px, "+(Math.random()*20-10)+"px)";
});

// 7. FINAL LETTER (the same three messages appear only here once)
const loveSteps=[
 {title:"I'm so lucky to have you 💗",text:"Bubu, sometimes I think about us and feel so lucky that life brought you to me. Enni ups and downs vachina, breaks vachina, malli manam WE ARE US avvadam naaku chala special. Mana journey perfect kakapovachu, but you're someone I genuinely care about. Thank you for being part of my life, my handsome boy. 🥹❤️"},
 {title:"I notice your efforts 🫶🏻",text:"Naa kosam nee kopam tagginchukovadaniki, nannu understand cheskovadaniki nuvvu try chesina efforts nenu notice chesanu, Bubu. Nuvvu perfect ga undalsina avasaram ledu. Manam iddaram nerchukuntu, okariki okaram support chesthu grow avvali. Nee dreams kosam work cheyyi. I genuinely want to see you succeed, and I'll always cheer for you. 🌟💗"},
 {title:"A little love for you 💐",text:"Imagine I'm giving you a big warm hug, a bouquet full of flowers, and a little forehead kiss. 💐🤗😘 Mana silly talks, random reels, songs, laughs, and little memories naaku precious. Future ela untundo teliyadu, but let's keep communicating, respecting each other, and working towards our dreams. I'm so lucky to have you. Love you, Bubu, my handsome boy. 🥹💗"}
];
let loveIndex=0;
function renderLoveStep(){
 const step=loveSteps[loveIndex];
 document.getElementById("loveTitle").textContent=step.title;
 document.getElementById("loveText").textContent=step.text;
 document.getElementById("stepCount").textContent="Step "+(loveIndex+1)+" of "+loveSteps.length;
 document.getElementById("loveDots").textContent=loveSteps.map((_,i)=>i<=loveIndex?"●":"○").join(" ");
 document.getElementById("nextLove").textContent=loveIndex===loveSteps.length-1?"Read Again, Bubu 💗":"Read Next 💗";
}
document.getElementById("showLetter").addEventListener("click",function(){loveIndex=0;renderLoveStep();showScreen("loveEnding");});
document.getElementById("nextLove").addEventListener("click",function(){loveIndex=loveIndex===loveSteps.length-1?0:loveIndex+1;renderLoveStep();});

// 8. INITIAL DISPLAY
renderMemory();
renderLoveStep();
