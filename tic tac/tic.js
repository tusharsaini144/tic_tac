let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let turnO=true;
let  newGameBtn=document.querySelector("#new-btn");
let msg=document.querySelector('#msg');
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        box.innerText="abcd"
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
     });
});
const showWinner=(winner)=>{
    msg.innerText=`Congratulations,Winner is ${winner}`;
    msg_contanier .classList.remove("hide");
}
const checkWinner=()=>{
    for(let pattern of winPatterns){
        let pos1Value=boxes[pattern[0]].innerText;
        let pos2Value=boxes[pattern[1]].innerText;
        let pos3Value=boxes[pattern[2]].innerText;
        if(pos1Value !="" && pos2Value !="" && pos3Value !="" ){
            // if(pos1Value===pos2Value && pos2Value===pos3Value){
                if (pos1Value === pos2Value && pos2Value === pos3Value){

                console.log("winner",pos1Value);
                showWinner(pos1Value);
            }
        }
    }
};