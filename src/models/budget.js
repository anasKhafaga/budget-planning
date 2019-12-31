// budgetController IIFE
const budgetController = (function () {
  
  // Parent class
  class Finances {

    // Incomes and expense lists
    static finances = {
      eXp: [],
      iNc: []
    };

    // Final results
    static totals = {
      sum: 0,
      exp: 0,
      inc: 0,
    };

    // Elements IDs list
    static ids = [];

    constructor(input) {
      if (input.TYPE === 'exp') {
        Finances.finances.eXp.push(input);
      } else if (input.TYPE === 'inc') {
        Finances.finances.iNc.push(input);
      }
      return input;
    }
  }

  // Expensens subClass
  class Expenses extends Finances {

    constructor(id, iDesc, iValue, type) {
      const exp = {
        ID: id,
        IDESC: iDesc,
        IVALUE: iValue,
        TYPE: type,
      };
      super(exp);
    }
  }

  // Incomes subClass
  class Incomes extends Finances {

    constructor(id, iDesc, iValue, type) {
      const inc = {
        ID: id,
        IDESC: iDesc,
        IVALUE: iValue,
        TYPE: type
      };
      super(inc);
    }
  }

  return {
    Finances,

    // "Adding new item" method
    addItem: (type, desc, value) => {
      let id, item;

      do {
        id = Math.round(Math.random() * 1000);
      } while (Finances.ids.indexOf(`e${id}`) > -1);
      Finances.ids.push(`e${id}`);
      if (type === 'exp') {
        item = new Expenses(`e${id}`, desc, value, type);
      } else if (type === 'inc') {
        item = new Incomes(`e${id}`, desc, value, type);
      }

      return item;
    },

    // "Final results calculation" method
    calc: item => {

      if (!item) {
        return Finances;
      }
      if (item.TYPE === 'inc') {
        Finances.totals.sum += item.IVALUE;
        Finances.totals.inc += item.IVALUE;
      } else if (item.TYPE === 'exp') {
        Finances.totals.sum -= item.IVALUE;
        Finances.totals.exp += item.IVALUE;
      }

      return Finances;
    }
  };
})();

export default budgetController;