function adduser(){
    user_name=document.getElementById("user_name").value;
    localStorage.setItem("user_name",username);
    window.location="kwitter_game.html";
}