const target=document.querySelector('.centre')
let colourValue=0;
target.addEventListener('mousemove',(event)=>{
    const getRect=target.getBoundingClientRect();
    const rectmid=getRect.width/2
    const loc=event.clientX-getRect.left
    console.log(rectmid,getRect.right);
    // console.log();
    if( loc<rectmid){
        // console.log("left",loc);
        const colourscaling=255/rectmid
         colourValue=255-Math.floor(colourscaling*loc)
        // console.log(colourValue);
        target.style.backgroundColor='rgb(' + colourValue + ',' + 0 + ',' + 0 + ')';
    }
    else{
        // console.log("mid",loc);
        const colourscaling=255/rectmid
        colourValue=Math.floor(colourscaling*(loc-220))
    //    console.log(colourValue);
    target.style.backgroundColor='rgb(' + 0 + ',' + 0 + ',' + colourValue + ')';

    }
})