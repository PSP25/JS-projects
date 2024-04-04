const randomcolor=function ran(){
    const hex='123456789ABCDEF'
    let color='#'
    for(let i=0;i<6;i++){
      color+=hex[Math.floor(Math.random()*16)]
    }
    return color;
  }
  let intervalId;
  const start=document.querySelector('#start');
  const stop=document.querySelector('#stop');
  
  const change_col=function change(color){
           document.body.style.backgroundColor=randomcolor();
  }
  const start_changing_color= function col_change(){
     intervalID=setInterval(change_col,1000);
  }
  const stop_changing_color=function stop_chng(){
    clearInterval(intervalID);
    intervalID=null;
  }
  
  const start_change=start.addEventListener('click',start_changing_color)
  const stop_change=stop.addEventListener('click',stop_changing_color)
  
  
  