let selectedPack = "";

function showTab(tab){

  document.getElementById("ff").classList.add("hidden");
  document.getElementById("pubg").classList.add("hidden");

  document.getElementById(tab).classList.remove("hidden");

  document.getElementById("btn-ff").classList.remove("active");
  document.getElementById("btn-pubg").classList.remove("active");

  document.getElementById("btn-" + tab).classList.add("active");
}

function openOrder(pack){
  selectedPack = pack;
  document.getElementById("formBox").classList.remove("hidden");
  document.getElementById("selectedPack").innerText = "Package: " + pack;
}

function sendOrder(){

  let uid = document.getElementById("uid").value;
  let method = document.getElementById("method").value;
  let ref = document.getElementById("ref").value;

  if(uid === "" || ref === ""){
    document.getElementById("msg").innerHTML = "❌ Fill all fields";
    return;
  }

  document.getElementById("msg").innerHTML =
  "⏳ Sending via " + method + "...";

  setTimeout(()=>{
    document.getElementById("msg").innerHTML =
    "✅ Order sent successfully";
  },2000);
    }
