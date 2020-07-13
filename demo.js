window.onload = function(){
    var mask = document.getElementsByClassName('mask')
    let appear = [];
    let num = 12;
    document.getElementById("btn1").onclick = start;
    document.getElementById("btn2").onclick = reset;
    function show(){             
        if(appear.length == 0 ){
            appear.push(this.id)
            mask[this.id-1].style.display = 'none'            
        }else if(appear.length == 1){
            appear.push(this.id)
            mask[this.id-1].style.display = 'none' 
            if(document.getElementById(appear[0]).style.background == document.getElementById(appear[1]).style.background){
                document.getElementById(appear[0]).style.visibility = 'hidden'
                document.getElementById(appear[1]).style.visibility = 'hidden'
                appear = [] 
                num = num - 2;      
            }else{
                setTimeout(function(){
                    for(let i = 0 ;i<appear.length;i++){
                        mask[appear[i]-1].style.display = 'block'
                    }
                    appear = []
                },5000)
            }
        }else{
            for (let i=0 ; i<12;i++){
                mask[i].style.display = 'block'
            }
        }
        if(num == 0){
            alert('恭喜通关')
            num =12
            reset()
        }
    }
   
    function start(){
        var color = ["red","green","blue","pink","orange","yellow"]  
        num =12   
        for(let i = 1;i<13;i++){
            document.getElementById(i).addEventListener("click",show)
            document.getElementById(i).style.visibility = 'visible'   
        }
        for (let i=1 ; i<13;i++){
            x = Math.floor(Math.random()*color.length)
            document.getElementById(i).style.background = color[x]
            for (var j=1 ;j<i;j++){
                if(document.getElementById(j).style.background == color[x]){
                    color.splice(x,1)
                    break;
                }
            }
        }
        for (let i=0 ; i<12;i++){
            mask[i].style.display = 'none'
        }
        setTimeout(function(){
            for (let i=0 ; i<12;i++){
                mask[i].style.display = 'block'
            }
        },3000)
    }
    function reset(){
        var color = ["red","green","blue","pink","orange","yellow"]
        for(let i = 1;i<13;i++){
            document.getElementById(i).style.visibility = 'visible'   
            document.getElementById(i).style.background = 'white'
            document.getElementById(i).removeEventListener("click",show)
        }

    }
}