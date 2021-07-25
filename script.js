var config={apiKey:"AIzaSyAWLIWBwYa0hYSMJkxf5kfYKn9zuH0cSpo",authDomain:"anis-fikriyyah.firebaseapp.com",databaseURL:"https://anis-fikriyyah-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"anis-fikriyyah",storageBucket:"anis-fikriyyah.appspot.com",messagingSenderId:"331568142881",appId:"1:331568142881:web:579d81f0548e3b20546160",measurementId:"G-XMLZ3YK61E"};firebase.initializeApp(config);var auth=firebase.auth(),email_text=document.getElementById("emailText"),password_text=document.getElementById("passwordText"),login_btn=document.getElementById("loginBtn"),btnModalLogin=document.getElementById("modalLoginBtn"),logout_btn=document.getElementById("logoutBtn");function handleLogin(){auth.signInWithEmailAndPassword(email_text.value,password_text.value).then(function(t){console.log(t),window.location.reload()}).catch(function(t){console.log(t)})}function handleLogout(){auth.signOut().then(function(){window.location.reload()}).catch(function(t){console.log(t)})}login_btn.addEventListener("click",handleLogin),logout_btn.addEventListener("click",handleLogout),auth.onAuthStateChanged(function(t){t?(logout_btn.classList.remove("hidden"),login_btn.classList.add("hidden"),btnModalLogin.classList.add("hidden")):(logout_btn.classList.add("hidden"),login_btn.classList.remove("hidden"))});var database=firebase.database(),membersRef=database.ref("members");const blogsRef=database.ref("blogs");var title_text=document.getElementById("titleText"),desc_text=document.getElementById("descText"),submitBtn=document.getElementById("submitBtn"),updateBtn=document.getElementById("updateBtn");function showDataMembers(t){var e="";t.forEach(function(t){e+=`<tr>
                        <td>${t.val().name}</td>
                        <td>${t.val().flag}</td>
                        <td class="${t.val().has_win?"table-danger":"table-success"}">${t.val().has_win?"Has Winner":"Waiting..."}</td>
                    </tr>`}),document.getElementById("tbody").innerHTML=e}function showDataErr(t){console.log(t)}function cannon(){confetti({particleCount:100,spread:70,origin:{y:.6}})}function random(){function t(t,e){return Math.random()*(e-t)+t}confetti({angle:t(55,125),spread:t(50,70),particleCount:t(50,100),origin:{y:.6}})}function realistic(){var n={origin:{y:.7}};function t(t,e){confetti(Object.assign({},n,e,{particleCount:Math.floor(200*t)}))}t(.25,{spread:26,startVelocity:55}),t(.2,{spread:60}),t(.35,{spread:100,decay:.91,scalar:.8}),t(.1,{spread:120,startVelocity:25,decay:.92,scalar:1.2}),t(.1,{spread:120,startVelocity:45})}function fireworks(){var e=Date.now()+15e3,n={startVelocity:30,spread:360,ticks:60,zIndex:0};function a(t,e){return Math.random()*(e-t)+t}var o=setInterval(function(){var t=e-Date.now();if(t<=0)return clearInterval(o);t=t/15e3*50;confetti(Object.assign({},n,{particleCount:t,origin:{x:a(.1,.3),y:Math.random()-.2}})),confetti(Object.assign({},n,{particleCount:t,origin:{x:a(.7,.9),y:Math.random()-.2}}))},250)}function snow(){var a=Date.now()+15e3,o=1;function i(t,e){return Math.random()*(e-t)+t}!function t(){var e=a-Date.now(),n=Math.max(200,e/15e3*500);o=Math.max(.8,o-.001),confetti({particleCount:1,startVelocity:0,ticks:n,origin:{x:Math.random(),y:Math.random()*o-.2},colors:["#ffffff"],shapes:["circle"],gravity:i(.4,.6),scalar:i(.4,1),drift:i(-.4,.4)}),0<e&&requestAnimationFrame(t)}()}function continuous(){var e=Date.now()+15e3,n=["#bb0000","#ffffff"];!function t(){confetti({particleCount:2,angle:60,spread:55,origin:{x:0},colors:n}),confetti({particleCount:2,angle:120,spread:55,origin:{x:1},colors:n}),Date.now()<e&&requestAnimationFrame(t)}()}membersRef.on("value",showDataMembers,showDataErr);const ayat=document.getElementById("ayat"),ayatname=document.getElementById("ayatname");function getAyat(){axios.get("https://api.banghasan.com/quran/format/json/acak").then(function(t){ayat.innerText=t.data.acak.id.teks,ayatname.innerText=t.data.surat.nama+" : "+t.data.surat.ayat}).catch(function(t){ayat.innerHTML="Kamu yang terbaik hari ini..."})}getAyat();var namesList=[],time=0;const winnerMusic=new Audio("/applause.wav"),hororMusic=new Audio("/horor.wav");let i=0,intervalHandle=null,timeOver=null;const startButton=document.getElementById("startButton");function getDataMember(t){t.forEach(function(t){t.val().has_win||namesList.push({has_win:t.val().has_win,name:t.val().name,flag:t.val().flag,id:t.key})})}function getDataMemberErr(t){return[]}function mouseDown(t){if(3==t.which)return getQuran(),!1}function RightMouseDown(){return!1}async function getQuran(){swal("Maaf fitur ini sedang kami tutup untuk sementara")}membersRef.on("value",getDataMember,showDataErr),startButton.addEventListener("click",function(){hororMusic.play(),startButton.setAttribute("disabled",!0),startButton.innerText=".......",intervalHandle=setInterval(function(){headerNames.textContent=namesList[i++%namesList.length].name},100*Math.random());let t=11;timeOver=setInterval(()=>{t<=0&&(startButton.innerText="Yeiii, you win today",winnerMusic.play(),hororMusic.pause(),fireworks(),getAyat(),clearInterval(intervalHandle)),0<t?t--:clearInterval(timeOver)},1e3)}),document.oncontextmenu=RightMouseDown,document.onmousedown=mouseDown,window.oncontextmenu=function(){return!1},$(document).keydown(function(t){return 123==t.keyCode||t.ctrlKey&&t.shiftKey&&73==t.keyCode||t.ctrlKey&&t.shiftKey&&74==t.keyCode?(getQuran(),!1):void 0});