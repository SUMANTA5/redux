import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { bindActionCreators } from 'redux';
import { actionCreators } from "../state/index";

const Shop = () => {
  const dispatch = useDispatch();
  const amount = useSelector (store => store.amount)
  const {withdorawMoney,depositMoney} = bindActionCreators(actionCreators,dispatch)
  return (
    <div>
      <h2>Deposit/withdoraw</h2>
      <button
        className="btn-primary mx-2"
        onClick={() => {
          withdorawMoney(100);
        }}
      >
        -
      </button>
      Update Balance
      <button
        className="btn-primary mx-2"
        onClick={() => {
          depositMoney(100);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Shop;
