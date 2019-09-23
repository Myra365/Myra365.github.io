
let x; 

// first sets of options 
document.getElementById('btn').addEventListener('click', (e)=> {
    e.preventDefault();

    x = document.getElementById('drop').value;
    let clock = document.querySelector('input[name="time"]:checked').value;
    console.log(clock);

    //console.log(typeof(y));

    // validation if not correct
    if(x < 2 || x > 12 || x == '' || clock < 0 || clock > 4 || clock == ''){
        document.getElementById('validate').style.display = 'block';
    }
    // if correct proceed with game
    else{
        document.getElementById('validate').style.display = 'none';
        x = parseInt(x);
    
        document.getElementById('main-title').style.display = 'none';
        document.getElementsByClassName('choose-box')[0].style.display = 'none';
        document.getElementById('load').style.display = 'block'; //fix this later, time issue
       
        
         
        let time = 0;
        // start of the game 
        (function start() {
            document.getElementById('score2').addEventListener('click', notRando);
            
            //vars for the game
            document.getElementById('content').style.display = 'block';
            let result = 0;
            let counter = 0;
            let counterProgres = 0;
            let counterCorrect = 0; 
            let counterWrong  =0;
            let counterPos = 0;
            let arry = [1,2,3,4,5,6,7,8,9,10];
            let a = [];
            let indexElement = 0;


            let len = arry.length;
            let randomIndex = Math.floor(Math.random() * len);

            indexElement = arry[randomIndex];

            //display numbers 
            document.getElementById('demo4').textContent = indexElement;
            document.getElementById('plus').textContent = 'x';
            document.getElementById('demo5').textContent = x; // needs to change 

            let sum = indexElement * x; //need to change to input
            
            //brains of the game 
            // random number + change picked number position
            function notRando(e){
                e.preventDefault();
                
                counterProgres = counterProgres + 1;
                progressBar(counterProgres);

                let userAns = document.getElementById('quiz2').value;

                a.push(indexElement);
                grader(userAns, sum);
                arry.splice(randomIndex,1);

                if(arry.length == 0){
                    for(let i =0; i < a.length; i++){
                        arry.push(a[i])
                    }
                    a = [];
                    counterPos = counterPos + 1;

                }

                len = arry.length;
                
                randomIndex = Math.floor(Math.random() * len);
                indexElement = arry[randomIndex];
            
                sum = indexElement * x; // needs to change the 2
            
                document.getElementById('demo4').textContent = indexElement;
                
                document.getElementById('quiz2').value = '';

                if(counterPos % 2 == 1){
                    
                    document.getElementById('demo5').textContent = indexElement;
                    document.getElementById('demo4').textContent = x; // needs be from teacher
                    console.log('this is x: ' + x);

                }
                else{
                    document.getElementById('demo4').textContent = indexElement;
                    document.getElementById('demo5').textContent = x; // needs be from teacher
                }

            }

            //checks fi answer is correct
            function grader(userAns, sum){

                counter++;
                console.log('user: ' + userAns);
                console.log('answer: ' + sum);
                if(userAns == sum){
                    counterCorrect++;
                    console.log('yes');

                }
                else{
                    counterWrong = counterWrong + 1;
                    console.log('wrong');
                
                }

                //number of problems in game
                counter = counterCorrect + counterWrong;
                if(counter === 100){ // number of problems
                    result = counterCorrect/100;
                    result = result * 100;               
                    clearInterval(stop);
                    document.getElementById('main-question-box').style.display = 'none';  
                    document.getElementById('result').style.display = 'block';
                    document.getElementById('result').textContent = 'Score: ' + result + '%';
                }

            }

            //progress bar 
            function progressBar(counter){
                if(counter < 100){
                    //counter = counter + 10;
                    document.getElementById('myBar').style.width = counter + '%';
                    console.log(counter);
                }
            
                else{
                    document.getElementById('myBar').style.width = '100%';
                    //document.getElementById('bar').style.display = 'none';
                }
            }

            // display and set time 
            time = 60*clock; // Time of Game
            let stop =  setInterval(() => {
                document.getElementById('myProgress').style.display = 'block';
                document.getElementById('load').style.display = 'none';
                document.getElementById('main-question-box').style.display = 'block';
                let min = parseInt(time / 60, 10);
                let sec = parseInt(time % 60, 10);

                min = min < 10 ? "0" + min : min;
                sec = sec < 10 ? "0" + sec : sec;

                document.getElementById('time').textContent = min + ':' + sec;
                

                 --time;
            
                //number of problems in game 
                if(time == -1 || counter == 100){  // **** may need to change to user Number of quesitons
                    counter = counterCorrect + counterWrong;
                    result = counterCorrect/100;
                    result = result * 100;
                    //changed here the results 
                    
                    //Display problem
                    document.getElementById('main-question-box').style.display = 'none';  
                    document.getElementById('result').style.display = 'block';
                    document.getElementById('result').textContent = 'Score: ' + result + '%';
                    clearInterval(stop);
                }
                //last 60 sec effects 
                if(time < 60){
                    document.getElementById('time').style.color = 'red';
                }

                }, 1000);
 
        } )(); //end of invoke function 

        
    } //error here 

});




