function scrollToIt(data) {
    var element = document.querySelector("#" + data);
    element.scrollIntoView({
        behavior: 'smooth',
        block:'start',
    });
}
window.onload = function onload(){

    document.getElementById('mainBar').setAttribute('class','loadingagain');
    document.getElementById('sideBar').setAttribute('class','onloading');


    
}
function downloadCv(){
    window.open("https://drive.google.com/file/d/1usD2xSBAgrc6_eed7Vu9wLd_c51so8nG/view?usp=sharing","_blank");
}