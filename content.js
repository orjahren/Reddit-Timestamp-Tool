//alert("TIME TE ALERTE")
let hentAppend = () => {
    let tid = new Date();
    let str = "\nSynced date:" + (tid.getDate()<10?'0':'') + tid.getDate() + "." + (tid.getMonth()+1) + ", time: " + tid.getHours() + ":" + (tid.getMinutes()<10?'0':'') + tid.getMinutes();
    let ret = document.createTextNode(str)
    return ret;
}

//document.addEventListener('DOMContentLoaded', function() {
    let elt = document.getElementsByClassName("linkinfo")[0];
    elt.appendChild(hentAppend());
  //}, false);