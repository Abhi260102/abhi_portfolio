const helpers = {
ternaryCondition: (condition, first, second) => {
    return condition ? first : second;
  },
  andOperator: (condition, text) => {
    return condition && text;
  },


};

export default helpers;