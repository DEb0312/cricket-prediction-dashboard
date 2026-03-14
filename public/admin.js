function submitResult(){

fetch("/api/result/submitResult",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

match:document.getElementById("match").value,

topRunTeam1:document.getElementById("run1").value,
topRunTeam2:document.getElementById("run2").value,

topWicketTeam1:document.getElementById("wk1").value,
topWicketTeam2:document.getElementById("wk2").value,

firstInningsScore:document.getElementById("score").value

})

})

.then(res=>res.json())
.then(data=>{

document.getElementById("status").innerText =
"Leaderboard Generated ✅"

})

}