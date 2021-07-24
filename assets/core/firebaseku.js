var config = {
    apiKey: "AIzaSyAWLIWBwYa0hYSMJkxf5kfYKn9zuH0cSpo",
    authDomain: "anis-fikriyyah.firebaseapp.com",
    databaseURL: "https://anis-fikriyyah-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "anis-fikriyyah",
    storageBucket: "anis-fikriyyah.appspot.com",
    messagingSenderId: "331568142881",
    appId: "1:331568142881:web:579d81f0548e3b20546160",
    measurementId: "G-XMLZ3YK61E"
};
firebase.initializeApp(config);

//===  FIREBASE AUTH
var auth = firebase.auth();
//prepare elements
var email_text = document.getElementById('emailText');
var password_text = document.getElementById('passwordText');
var login_btn = document.getElementById('loginBtn');
var btnModalLogin = document.getElementById('modalLoginBtn')
var logout_btn = document.getElementById('logoutBtn');

login_btn.addEventListener('click', handleLogin);
logout_btn.addEventListener('click', handleLogout);

//------ Login
function handleLogin() {
    auth.signInWithEmailAndPassword(email_text.value, password_text.value)
        .then(function (data) {
            console.log(data)
            window.location.reload()
        })
        .catch(function (err) {
            console.log(err)
        })
}

//------ fungsi Logout
function handleLogout() {
    auth.signOut().then(function () {
        window.location.reload()
    }).catch(function (err) {
        console.log(err)
    })
}

//--- Status Auth
auth.onAuthStateChanged(function (user) {
    if (user) {
        logout_btn.classList.remove('hidden')
        login_btn.classList.add('hidden')
        btnModalLogin.classList.add('hidden')
    } else {
        logout_btn.classList.add('hidden')
        login_btn.classList.remove('hidden')
    }
})

//==== REALTIME DATABASE
var database = firebase.database();
var membersRef = database.ref('members');
const blogsRef = database.ref('blogs');

//prepare elements
var title_text = document.getElementById('titleText');
var desc_text = document.getElementById('descText');
var submitBtn = document.getElementById('submitBtn');
var updateBtn = document.getElementById('updateBtn');


// member section
membersRef.on('value', showDataMembers, showDataErr)
function showDataMembers(items) {
    var content = ''
    items.forEach(function (child) {
        content += `<tr>
                        <td>${child.val().name}</td>
                        <td>${child.val().flag}</td>
                        <td class="${child.val().has_win ? 'table-danger' : 'table-success'}">${child.val().has_win ? "Has Winner" : "Waiting..."}</td>
                    </tr>`
    })
    document.getElementById('tbody').innerHTML = content
}

function showDataErr(err) {
    console.log(err)
}