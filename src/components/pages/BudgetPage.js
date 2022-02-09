import React from "react";
import { useState, useEffect } from "react";
import Budget from "./Budget/Budget";
import "../../layouts/Budget.css";
import Summary from "./Budget/Summary";

export default function BudgetPage() {
  /*
   * Budget state hook
   */
  const [budget, setBudget] = useState([]);

  /*
   * Load data from file budget.js
   */
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("http://localhost:3000/budget.json");
      const data = await result.json();
      setBudget(data.budget);
    };
    fetchData();
  }, [setBudget]);

  let categoryCounter = budget.length + 1;

  /*
   * Delete catagory. Paramter - id number of category
   */
  const deleteCategory = (categoryID) => {
    setBudget(budget.filter((category) => category.id !== categoryID));
    console.log("Deleted category: " + categoryID);
  };

  /*
   * Delete item. Paramters - id number of category, id number of item
   */
  const deleteItem = (categoryID, itemID) => {
    let _budget = [...budget];

    _budget = _budget.map((category) => {
      if (categoryID === category.id) {
        category.items = category.items.filter((item) => itemID !== item.id);
      }
      return category;
    });

    setBudget(_budget);
    console.log("Deleted item: " + itemID + " from " + categoryID);
  };

  /*
   * Add new default category
   */
  const addCategory = () => {
    const defaultCategory = {
      id: categoryCounter,
      name: "",
      items: [
        {
          id: 1,
          name: "",
          supplier: "",
          price: 0,
          paid: 0,
        },
      ],
    };

    setBudget((prev) => [...prev, defaultCategory]);

    categoryCounter++;

    console.log("Category add");
  };

  /*
   * Add new default item to specific category. Parameter - id of category
   */
  const addItem = (categoryID) => {
    let itemCounter = 0;

    let _budget = budget;

    let defaultItem = {
      id: itemCounter,
      name: "",
      supplier: "",
      price: 0,
      paid: 0,
    };

    _budget.map((category) => {
      if ((category.id = categoryID)) {
        itemCounter = category.items.length;
        category.items.push(defaultItem);
      }
    });

    setBudget(_budget);

    console.log("Item add");
  };

  /*
   * Change category. Parameter - object category
   */
  const changeCategory = (category) => {
    let _budget = [...budget];

    _budget.map((_budget) => {
      if (_budget.id === category.id) {
        _budget = category;
      }
      return _budget;
    });

    setBudget(_budget);
    console.log("Changed category: " + category.id);
  };

  /*
   * Change item in specific . Parameter - object item, id number of category
   */
  const changeItem = (categoryID, item) => {
    let _budget = [...budget];

    _budget.map((_budget) => {
      if (_budget.id === categoryID) {
        _budget.items.map((_item) => {
          if (_item.id === item.id) {
            item = _item;
          }
        });
      }
      return _budget;
    });
    setBudget(_budget);
    console.log("Changed category: " + categoryID);
  };

  return (
    <section>
      <Budget
        budget={budget}
        deleteItem={deleteItem}
        deleteCategory={deleteCategory}
        changeItem={changeItem}
        changeCategory={changeCategory}
        addItem={addItem}
        addCategory={addCategory}
      />
      <Summary budget={budget} />
    </section>
  );
}
