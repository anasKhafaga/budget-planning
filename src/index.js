// Import external files and modules
import './views/style.css';
import _ from 'lodash';
import UIController from './models/UI';
import budgetController from './models/budget';
import icon from './imgImports';
// Controller IIFE
const controller = (function (budgetCtrl, UICtrl) {
  
  // get DOM classeNames
  const DOM = UICtrl.DOM;

  // get current month name
  const getDate = () => {
    const monthField = document.querySelector(DOM.month);
    const curMonthNo = new Date().getMonth();
    let curMonth;
    switch (curMonthNo) {
      case 0:
        curMonth = 'January ';
        break;
      case 1:
        curMonth = 'February ';
        break;
      case 2:
        curMonth = 'March ';
        break;
      case 3:
        curMonth = 'April ';
        break;
      case 4:
        curMonth = 'May ';
        break;
      case 5:
        curMonth = 'June ';
        break;
      case 6:
        curMonth = 'July ';
        break;
      case 7:
        curMonth = 'August ';
        break;
      case 8:
        curMonth = 'September ';
        break;
      case 9:
        curMonth = 'October ';
        break;
      case 10:
        curMonth = 'November ';
        break;
      case 11:
        curMonth = 'December ';
        break;
    }
    monthField.textContent = curMonth;
  }

  // Establish event listeners
  const setupEventlistener = () => {

    // Adding new item
      // withUI adding button
    document.querySelector(DOM.inputBtn).addEventListener('click', addNewItem);
      // with enter key
    document.addEventListener('keypress', event => {
      if (event.keyCode === 13 || event.which === 13) {
        addNewItem();
      }
    });

    // Delete an item with aid of event delegation
    document.querySelector(DOM.container).addEventListener('click', event => {
      if (event.target.className !== DOM.del) {
        return;
      }
      delItem(event.target);
    });
  };

  // "Deleting" function
  const delItem = ele => {

    // Reaching parentNode
    for (let i = 0; i < 4; i++) {
      ele = ele.parentNode;
    }

    // Recalculation of results
    const removed = document.querySelector(`#${ele.id}`);
    const finance = budgetCtrl.calc();
    let identifier;
    const foundId = finance.ids.find(eid => (eid = ele.id));
    const foundItem =
      finance.finances.iNc.find(e => {
        identifier = 'inc';
        return e.ID === ele.id;
      }) ||
      finance.finances.eXp.find(e => {
        identifier = 'exp';
        return e.ID === ele.id;
      });
    
    finance.ids.splice(finance.ids.indexOf(foundId), 1);
    if (identifier === 'inc') {
      finance.totals.sum -= foundItem.IVALUE;
      console.log(finance.totals.sum);
      if (finance.totals.sum < 0) {
        finance.totals.sum += foundItem.IVALUE;
        alert('You can\'t remove this income before removing some expenses')
        console.log(finance.totals.sum);
        return;
      }
      finance.totals.inc -= foundItem.IVALUE;
      finance.finances.iNc.splice(finance.finances.iNc.indexOf(foundItem), 1);
    } else if (identifier === 'exp') {
      finance.totals.sum += foundItem.IVALUE;
      finance.totals.exp -= foundItem.IVALUE;
      finance.finances.eXp.splice(finance.finances.eXp.indexOf(foundItem), 1);
    }
    
    // Updating UI with leatest results
    updateUI(finance, foundItem, 'sub');

    // Item removal from UI
    removed.remove();
  };

  // "Addition" function
  const addNewItem = () => {

    //  Get the fields input
    const userInput = UICtrl.userInputs();

    // Checking user inputs integrity
    if (
      userInput.inputDesc === '' ||
      isNaN(userInput.inputValue) ||
      userInput.inputValue <= 0
    ) {
      return;
    }

    // Checking current balance
    if (userInput.inputType === 'exp' && userInput.inputValue > budgetCtrl.Finances.totals.sum) {
      alert('Sorry, your balance isn\'t sufficient');
      return;
    }
    
    //  Add the item to budgetController
    const newItem = budgetCtrl.addItem(
      userInput.inputType,
      userInput.inputDesc,
      userInput.inputValue
    );

    // Calculation of results
    const total = budgetCtrl.calc(newItem);
    
    //  Add the new item to the UI
    let element, html;
    if (newItem.TYPE === 'inc') {
      element = DOM.incList;
      html = `<div class="item" id="${newItem.ID}">
        <div class="item__description">${newItem.IDESC}</div>
          <div class="right del">
            <div class="item__value">+ ${newItem.IVALUE}</div>
            <div class="item__delete">
                <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
            </div>
          </div>
          </div>`;
    } else if (newItem.TYPE === 'exp') {
      element = DOM.expList;
      html = `<div class="item" id="${newItem.ID}">
                            <div class="item__description">${newItem.IDESC}</div>
                            <div class="right del">
                                <div class="item__value">- ${newItem.IVALUE}</div>
                                <div class="item__delete">
                                    <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
                                </div>
                            </div>
                        </div>`;
    }
    document.querySelector(element).insertAdjacentHTML('beforeend', html);

    // Clear the fields
    UICtrl.clearFields();

    //  Display the Budget in UI
    updateUI(total, newItem, 'add');
  };
  const updateUI = (total, newItem, det) => {
    document.querySelector(DOM.budValue).textContent = `${total.totals.sum}`;
    document.querySelector(DOM.incs).textContent = `${total.totals.inc}`;
    document.querySelector(DOM.exps).textContent = `- ${total.totals.exp}`;
  };

  return {
    init: () => {
      console.log('it works');
      icon();
      getDate();
      setupEventlistener();
    }
  };
})(budgetController, UIController);

controller.init();
