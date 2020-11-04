let hentAppend = () => {
    let tid = new Date();
    let str = "<p id=\"timestamp\" style=\"margin-top: 10vw;\"> Synced date: " + (tid.getDate()<10?'0':'') + tid.getDate() + "." + (tid.getMonth()+1) + ", time: " + tid.getHours() + ":" + (tid.getMinutes()<10?'0':'') + tid.getMinutes() + "</p>";
    //let ret = document.createTextNode(str)
    return str;// ret;
}

//document.addEventListener('DOMContentLoaded', function() {
let elt = document.getElementsByClassName("linkinfo")[0];
elt.innerHTML += hentAppend();//elt.appendChild(hentAppend());
  //}, false);
