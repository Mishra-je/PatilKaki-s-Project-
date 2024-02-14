

let hrs = document.getElementsByClassName("hrs")
let min = document.getElementsByClassName("min")
let sec = document.getElementsByClassName("sec")

let currentTime = new Date()

console.log(currentTime)

hrs.innerHTML = currentTime.getHours();
min.innerHTML = currentTime.getMinutes();
sec.innerHTML = currentTime.getSeconds();

setInterval(()=>
{
    sec.innerHTML = currentTime.getSeconds();

},-1000)


// 