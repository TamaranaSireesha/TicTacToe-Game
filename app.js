let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".restbtn");
let newbtn=document.querySelector(".newbtn");
let msgcontainer=document.querySelector(".msgcontainer");
let msg=document.querySelector(".msg");
let turno=true//x
let winpatterns=[[0,1,2],[3,4,5],[6,7,8],
               [0,3,6],[1,4,7],[2,5,8],
               [0,4,8],[2,4,6]];


 const resetGame=()=>{
                turno=true;
                enableBoxes();
                msgcontainer.classList.add("hide");
            }
            
boxes.forEach((box)=>{
    
    
box.addEventListener("click", ()=>
  {
   
    if(turno){
        
        box.innerText="o";
        box.style.color="green";
        turno=false
    }
    else{
        box.innerText="x";
        box.style.color="red";
        turno=true;
    }
    box.disabled=true;
    checkwinner();
}
);
   
});
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;

    }
};
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
       box.innerText="";
    }
};

const showWinner=(winner)=>{
    msg.innerText=`congratulations winner is ${winner}`;
    msgcontainer.classList.remove("hide");
}

const checkwinner =()=>{
    for(let pattern of winpatterns){
        let post1Val=boxes[pattern[0]].innerText;
        let post2Val=boxes[pattern[1]].innerText;
        let post3Val=boxes[pattern[2]].innerText;

        if(post1Val !="" && post2Val!="" && post3Val!=""){
            if(post1Val===post2Val &&post2Val===post3Val){
                console.log("winner", post1Val);
                showWinner(post1Val);
            }
        }
        }

};

newbtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);