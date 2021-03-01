export  function debounce(fn,time){
    let timer = null
    return function(){
        let context = this
        let args = arguments
        if(timer){
            clearTimeout(timer)
            timer= null
        }
        timer = setTimeout(() => {
            fn.apply(context,args)
        }, time);
    }
}