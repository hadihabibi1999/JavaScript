function startTime() {

    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
  
    m = checkTime(m);
    s = checkTime(s);
  
    document.getElementById('h').innerHTML = h;
    document.getElementById('m').innerHTML = m;
    document.getElementById('s').innerHTML = s;
  
    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) 
    i='0'+i;
    return i;
  }