//UIController IIFE
const UIController = (function () {
  
  //DOMs classNames
  const DOMStrings = {
    inputType: '.add__type',
    inputDesc: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn',
    expList: '.expenses__list',
    incList: '.income__list',
    budValue: '.budget__value',
    incs: '.budget__income--value',
    exps: '.budget__expenses--value',
    container: '.container',
    del: 'ion-ios-close-outline',
    month: '.budget__title--month'
  };
  
  return {
    DOM: DOMStrings,
    
    // "Access user inputs" method
    userInputs: function() {
      return {
        inputType: document.querySelector(DOMStrings.inputType).value,
        inputDesc: document.querySelector(DOMStrings.inputDesc).value,
        inputValue: parseFloat(
          document.querySelector(DOMStrings.inputValue).value
        )
      };
    },

    // "Clear field" method
    clearFields: function() {
      const inputs = document.querySelectorAll('input');
      const inputsArr = Array.from(inputs);
      inputsArr.forEach(ele => {
        ele.value = '';
        inputsArr[0].focus();
        console.log(inputsArr);
      });
    }
    
  };
})();

export default UIController;