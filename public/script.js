function submitPrediction(){

fetch("/api/prediction/submit",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

userId: localStorage.getItem("userId"),   // important fix

match:document.getElementById("match").value,

topRunTeam1:document.getElementById("run1").value,
topRunTeam2:document.getElementById("run2").value,

topWicketTeam1:document.getElementById("wk1").value,
topWicketTeam2:document.getElementById("wk2").value,

scoreLow:document.getElementById("scoreLow").value,
scoreHigh:document.getElementById("scoreHigh").value

})

})

.then(res=>res.json())

.then(data=>{

document.getElementById("status").innerText = "Prediction Submitted ✅"

})

}



function register(){

fetch("/api/auth/register",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

username:document.getElementById("username").value,
email:document.getElementById("email").value

})

})

.then(res=>res.json())

.then(data=>{

// store user id for future predictions
localStorage.setItem("userId", data._id)

alert("Registered Successfully")

window.location="dashboard.html"

})

}