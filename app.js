let boxes= document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newbtn = document.querySelector("#Newgame");
//document.getElementById('mylocation').innerText=msg;  
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#Msg");


let turn= true; //player1,player2

const correctpatterens = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,7]
]; 
const resetgame = () => {
    turn= true;
    enableboxes();
}
boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if(turn == true)
        {
            box.innerText = "X";
            turn=false;
        }
        else{
            box.innerText = "O";        
            turn = true;
        }
        box.disabled = true;
        console.log("box was clicked");
        checkwinner();
    });
});
newbtn.addEventListener("click",() =>
{
    enableboxes();
})
resetbtn.addEventListener("click",resetgame);

const disableboxes = () => 
{
    for(box of boxes)
    {
        box.disabled = true;
    }
}
const enableboxes = () => 
{
    for(box of boxes)
    {
       
        box.disabled = false;
        box.innerHTML="";
        msgContainer.classList.add("hide");
    }
}
const showWinner = (player) => 
    {
        msg.innerHTML = `Congratulations - ${player} is the winner`;
        msgContainer.classList.remove("hide");
        disableboxes();
    }

const checkwinner = () => {
    for (let pattern of correctpatterens)
    {
  
         let posval1 = boxes[pattern[0]].innerText;
         let posval2 = boxes[pattern[1]].innerText;
         let posval3 = boxes[pattern[2]].innerText;
         if(posval1 != "" && posval2 != "" && posval3 != "")
         {
            if(posval1 == posval2  && posval3 == posval2)
              {
                if(posval1 == "X")
                {   let player = "player1";
                    showWinner(player);
                }
                else{
                    let player = "player2";
                    showWinner(player);
                }
              }
         }
    }
};
