import { useState } from 'react';
import './App.scss';
import Box from './component/Box';



//가위바위보 선택
const choice = {
  rock: {
    name: "Rock",
    img: "./rock.png"
  }
  ,
  scissors: {
    name: "Scissors",
    img: "./scissors.png"
  },
  paper: {
    name: "Paper",
    img: "./paper.png"
  }
}

function App() {
  const [userselect, setUserselect] = useState(null);//user가 어떤 선택을 했는지
  const [computercselect, setComputerselect] = useState(null); // computer의 랜덤선택을 위한
  const [result, setResult] = useState("")
 

  //클릭하면 실행되는 함수! 
  const play = (userchoice) => {
    setUserselect(choice[userchoice]) //user가 선택한 값을 넘겨줌
    let computerChoice = ramdomChoice() // 컴퓨터가 랜덤으로 선택하도록~
    setComputerselect(computerChoice)
    setResult(judgement(choice[userchoice], computerChoice)); // judgement : user와 computer가 선택한 값을 보내줌
    
  }

   //컴퓨터의 랜덤선택을 위한 함수!
  const ramdomChoice = () => {
    let itemArray = Object.keys(choice)//choice에 담겨있는 item들의 index값 출력 
    let randomItem = Math.floor(Math.random() * itemArray.length)
    let final = itemArray[randomItem] //itemArray에 randomItem에 넣어주면 item의 이름으로 나옴
    return choice[final]
  }

//이겼는지 졌는지 확인해주는 함수 : user입장에서 작성된 코드!
  const judgement = (user, computer) => {
    if (user.name == computer.name) {
      return "tie"
    } else if (user.name == "Rock") 
    return computer.name == "Scissors" ? "win" : "lose";
    else if (user.name == "Scissors") 
    return computer.name == "Paper" ? "win" : "lose";
    else if (user.name == "Paper") 
    return computer.name == "Rock" ? "win" : "lose";
  }

 

  return (
    <main>
      <section>
        <div className='Boxes'>
          <Box title="You" item={userselect} result={result}></Box>  {/*선택한 item을 넘겨주기 */}
          <Box title="Computer" item={computercselect} result={result}></Box>
        </div>

        <div className='buttons'>
          <button onClick={() => play("scissors")}><img src="./scissors_icon.png"/>가위</button>
          <button onClick={() => play("rock")}><img src="./rock_icon.png"/>바위</button>
          <button onClick={() => play("paper")}><img src="./paper_icon.png"/>보</button>
        </div>
      </section>
    </main>
  );
}

export default App;
