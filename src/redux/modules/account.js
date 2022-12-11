// Action Value
const DEPOSIT_DOLLAR = "DEPOSIT_DOLLAR";
const WITHDRAW_DOLLAR = "WITHDRAW_DOLLAR";

// Action Creator
export const depositDollar = (payload) => {
  return {
    type: DEPOSIT_DOLLAR,
    payload,
  };
};

export const withdrawDollar = (payload) => {
  return {
    type: WITHDRAW_DOLLAR,
    payload,
  };
};

const initialState = {
  balance: 0,
};

// Reducer
const account = (state = initialState, action) => {
  switch (action.type) {
    //  입금 : payload로 받아온 값을 더함
    case DEPOSIT_DOLLAR: {
      return {
        balance: state.balance + action.payload,
      };
    }

    //  출금 : payload로 받아온 값을 뺌
    case WITHDRAW_DOLLAR: {
      return {
        balance: state.balance - action.payload,
      };
    }
    default:
      return state;
  }
};

export default account;
