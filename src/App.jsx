import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { depositDollar, withdrawDollar } from "./redux/modules/account";

const App = () => {
  // Component state(이 안에서만 씀)
  const [tempBalance, setTempBalance] = useState(0);

  // store 상에 있는 state를 읽어오는 부분
  const balance = useSelector((state) => state.account.balance);
  //  dispatch를 사용하기 위해 변수화 시킨 것
  const dispatch = useDispatch();

  // input을 제어하는 함수
  const onBalanceChangeHandler = (event) => {
    const { value } = event.target;
    // 앞에 '+'를 붙여 number로 만들어 줌
    setTempBalance(+value);
  };

  // 입금에 대한 reducer 호출
  const onClickDepositBalanceHandler = () => {
    dispatch(depositDollar(tempBalance));
  };

  // 출금에 대한 reducer 호출
  const onClickWithdrawBalanceHandler = () => {
    dispatch(withdrawDollar(tempBalance));
  };

  return (
    <div style={{ padding: "100px" }}>
      <hr />
      <br />
      현재 잔액은? {balance}달러
      <br />
      <input type="number" onChange={onBalanceChangeHandler}></input>
      <br />
      <button onClick={onClickDepositBalanceHandler}>입금</button>
      <button onClick={onClickWithdrawBalanceHandler}>출금</button>
    </div>
  );
};

export default App;
