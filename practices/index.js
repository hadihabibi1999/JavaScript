function changeTime() {
    let time = new Date();
    let hr  = time.getHours();
    let mn = time.getMinutes();
    let sc = time.getSeconds();
    
    hr=checkTime('hr');
    mn=checkTime('mn');
    sc=checkTime('sc');

    document.getElementById("hr").innerHTML=hr;
    document.getElementById("mn").innerHTML=mn;
    document.getElementById("sc").innerHTML=sc;

    let t = setTimeout("changeTime",500)

    function checkTime(id) {
        if (id<10)
        id='0'+id;
        return id;
    }
}