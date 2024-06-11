const $ = (id) => document.getElementById(id);

cong.addEventListener('click', function(e) {
    var so1 = +$("so1").value;
    var so2 = +$("so2").value;
    $("inra1").innerHTML="result:"+(so1+so2);
    $("so1").value = " ";
    $("so2").value = " ";
})
tru.addEventListener('click', function(){
    var so1 = $("so1").value;
    var so2 = $("so2").value;
    $("inra1").innerHTML="result"+(so1-so2);
    $("so1").value = " ";
    $("so2").value = " ";

})
nhan.addEventListener('click', function(){
    var so1 = $("so1").value;
    var so2 = $("so2").value;
    $("inra1").innerHTML="result:"+(so1*so2);
    $("so1").value = " ";
    $("so2").value = " ";

})
chia.addEventListener('click', function(){
    var so1 = $("so1").value;
    var so2 = $("so2").value;
    if(so2 != 0) {
        $("inra1").innerHTML = "result:" + (so1 / so2);
        $("so1").value = " ";
        $("so2").value = " ";
    }
    else {
        $("inra1").innerHTML = "mausophaikhac0"
    }
})