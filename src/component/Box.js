import React from 'react'

function Box(props) {
    let result;

    if(
        props.title === "Computer" && //title이 컴퓨터이거나// result 결과가 tie가 아니거나//결과가 비어있지 않은 경우
        props.result !== "tie" && 
        props.result !== "" ){     
            result = props.result === "win"?"lose":"win";
    }else { 
        result = props.result;
    }
    return (
        <section className={`box ${result}`}>
            <h1>{props.title}</h1>
            <h2>{props.item && props.item.name}</h2>
            <img src={props.item && props.item.img} /> {/*클릭하면 함수가 실행돼서 img를 보여주기 때문에 처음화면은 오류남 item이거나 클릭시 img를 보여줘라 */}
            <h2>{result}</h2>
        </section>
    )
}

export default Box
