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
