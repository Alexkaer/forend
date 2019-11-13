function scrollToCenter(){
    let dBox = document.getElementById('d');
    if(dBox){
        let navBox = document.getElementById('titleBar');
        if(navBox){
            navBox.scrollTo(navBox.scrollWidth/2 - dBox.offsetWidth/2 -20, 0 );
        }
    }
}