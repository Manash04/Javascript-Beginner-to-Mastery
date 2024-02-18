var istatus = document.querySelector("h5")
var btn = document.querySelector("#add")
// var removeFriend = document.querySelector("#remove")
// removeFriend.addEventListener('click', function(){
//     istatus.innerHTML="Stanger"
//     istatus.style.color="red"
// })
flag = 0;
btn.addEventListener("click", function () {
    if (flag == 0) {
        istatus.innerHTML = "Friends"
        istatus.style.color = "green"
        btn.innerHTML = "Remove Friend"
        flag = 1;
    } else {

        istatus.innerHTML = "Stranger"
        istatus.style.color = "Red"
        btn.innerHTML = "Add Friend"

        flag = 0;
    
    }
})