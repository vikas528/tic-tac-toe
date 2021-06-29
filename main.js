// // document.getElementsByClassName('cross').style.display = "none";
// let arr = document.getElementsByClassName('section');
// for(i=0; i<9; i++){
//     arr[i].addEventListener('click', displayToggle);
// }
// function displayToggle(){
//     let crss = document.getElementsByClassName("cross");
//     if(crss[0].style.display=== "none")
//         crss[0].style.display="block";
//     else
//         crss[0].style.display = "none";
// }

// function collabFun(idName){
//     displayToggle(idName);
//     turn();
// }
var arr = Array(9).fill(0);
/*
\ 0 1 2 \
\ 3 4 5 \
\ 6 7 8 \
*/
var trn=false;
function turn(idName){
    if(trn && arr[idName-1]==0){
        document.getElementById('turn').innerHTML = '1';
        document.getElementById('player').style.color = 'rgb(255, 117, 4)';
        trn=false;
    }
    else if(arr[idName-1]==0){
        document.getElementById('turn').innerHTML = '2';
        document.getElementById('player').style.color = 'red';
        trn=true;
    }
}
    
function displayToggle(idName){
    let crss_str = "cross-";
    let circ_str = "circle-"
    crss_str = crss_str.concat(idName);
    circ_str = circ_str.concat(idName);
    let crss = document.getElementById(crss_str);
    let circ = document.getElementById(circ_str);
    let trn = document.getElementById('turn').textContent;
    if(trn==='1' && arr[idName-1]==0){
        crss.style.display = "block";
        circ.style.display = "none"
        arr[idName-1]=1;
    }
    else if(arr[idName-1]==0) {
        // console.log('check');
        crss.style.display = "none";  
        circ.style.display = "block"
        arr[idName-1]=-1;
    }
    // arr[idName-1]=false;
    let all_check=false;
    for(i=0; i<9; i++)
    if(arr[i]==0){
        all_check=true;
        break;
    }
    if(!all_check) {
        document.getElementById('player').innerHTML = "GAME OVER";
        document.getElementById('player').style.color = 'black';
    }
}

let result=false;
function actual_game(arr)
{
    if(!arr[4]){
        if(!arr[0] && !arr[8]){
            result=true;
        }
        else if(!arr[2] && !arr[6]){
            result=true;
        }
        else if(!arr[1] && !arr[7]){
            result=true;
        }
        else if(!arr[3] && !arr[5]){
            result=true;
        }
    }
    // else if(!arr[0]){
        // if(!arr[1] && !arr[2])
    // }
}