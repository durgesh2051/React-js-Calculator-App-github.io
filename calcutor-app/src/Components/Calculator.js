import React, { useState } from "react";
import { Container, Screen, Prevoius, Current, Button } from "../styles/Main";

const Calculator = () => {
  const [current, setCurrent] = useState("");
  const [prevoius, setPrevoius] = useState("");
  const [operation, setoperation] = useState("");

  const appendValueHandler = (el) => {
    const value = el.target.getAttribute("data");
    if (value === "." && current.includes(".")) return;
    setCurrent(current + value);
  };
  const deletHandler = () => {
    setCurrent(String(current).slice(0, -1));
  };
  const allclearHandler = () => {
    setCurrent("");
    setoperation("");
    setPrevoius("");
  };
   
  const chooseOperationHandler = (el) => {
    if(current === '') return
    if(prevoius !== ''){
        let value = compute()
        setPrevoius(value)
    }else{
            setPrevoius(current) 
            }
            setCurrent('')
            setoperation(el.target.getAttribute('data'))
    };

    const equalsHandler = ()=> {
        let value = compute();
        if (value === undefined || value == null) return;
        setCurrent(value);
          setPrevoius("");
          setoperation("");
    }
const compute = ()=> {
    let result;
    let prevoiusNumber = parseFloat(prevoius)
    let currentNamber = parseFloat(current)
    if(isNaN(prevoiusNumber) || isNaN(currentNamber))return
    switch(operation){
        case '÷':
        result = prevoiusNumber / currentNamber;
        break;

        case 'X':
        result = prevoiusNumber * currentNamber;
        break;

        case '+':
        result = prevoiusNumber + currentNamber;
        break;

        case '-':
        result = prevoiusNumber - currentNamber;
        break;
        default:
            return;

    }
    return result;
};

  return (
    <>
      <Container>
        <Screen>
          <Prevoius>
            {prevoius} {operation}
          </Prevoius>
          <Current>{current}</Current>
        </Screen>
        <Button gridspan={2} control onClick={allclearHandler}>
          AC
        </Button>
        <Button onClick={deletHandler}>DEL</Button>
        <Button data={'÷'} onClick={chooseOperationHandler} operation>÷</Button>
        <Button data={7} onClick={appendValueHandler}>
          7
        </Button>
        <Button data={8} onClick={appendValueHandler}>
          8
        </Button>
        <Button data={9} onClick={appendValueHandler}>
          9
        </Button>
        <Button data={'X'} onClick={chooseOperationHandler}operation>X</Button>
        <Button data={4} onClick={appendValueHandler}>
          4
        </Button>
        <Button data={5} onClick={appendValueHandler}>
          5
        </Button>
        <Button data={6} onClick={appendValueHandler}>
          6
        </Button>
        <Button  data={'+'} onClick={chooseOperationHandler} operation>+</Button>
        <Button data={1} onClick={appendValueHandler}>
          1
        </Button>
        <Button data={2} onClick={appendValueHandler}>
          2
        </Button>
        <Button data={3} onClick={appendValueHandler}>
          3
        </Button>
        <Button  data={'-'} onClick={chooseOperationHandler} operation>-</Button>
        <Button decimal data={"."} onClick={appendValueHandler}>
          .
        </Button>
        <Button data={0} onClick={appendValueHandler}>
          0
        </Button>
        <Button gridspan={2} equals  onClick={equalsHandler}>
          =
        </Button>
      </Container>
    </>
  );
};

export default Calculator;
