import React from "react";
import { useState } from "react";
import Budget from "./Budget/Budget";
import "../../layouts/Budget.css";
import Summary from "./Budget/Summary";

export default function BudgetPage() {
  const [budget, setBudget] = useState([
    {
      id: 1,
      name: "Wedding Party",
      items: [
        {
          id: 1,
          name: "Wedding hall",
          supplier: "Hallmex",
          price: 30000,
          paid: 1500,
        },
        {
          id: 2,
          name: "Cakes",
          supplier: "Cake",
          price: 111,
          paid: 333,
        },
        {
          id: 3,
          name: "Drinks",
          supplier: "Macro",
          price: 111,
          paid: 333,
        },
        {
          id: 4,
          name: "Tort",
          supplier: "Bakery Smith",
          price: 111,
          paid: 333,
        },
      ],
    },
    {
      id: 2,
      name: "Music",
      items: [
        {
          id: 1,
          name: "Band",
          supplier: "Sway",
          price: 12000,
          paid: 4000,
        },
        {
          id: 2,
          name: "Church",
          supplier: "4Strings Group",
          price: 2000,
          paid: 0,
        },
      ],
    },
    {
      id: 2,
      name: "Clothes",
      items: [
        {
          id: 1,
          name: "Dress",
          supplier: "Zara",
          price: 5000,
          paid: 300,
        },
        {
          id: 2,
          name: "Suite",
          supplier: "Bytom",
          price: 3000,
          paid: 1000,
        },
      ],
    },
    {
      id: 3,
      name: "Transport",
      items: [
        {
          id: 1,
          name: "Car renting",
          supplier: "Auto Skup",
          price: 700,
          paid: 100,
        },
      ],
    },
  ]);

  /*   useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("http://localhost:3000/guests.json");
      const data = await result.json();
      setGuests(data.guests);
    };
    fetchData();
  }, [setGuests]); */

  let categoryCounter = budget.length + 1;

  const deleteCategory = (categoryID) => {
    setBudget(budget.filter((category) => category.id !== categoryID));
    console.log("Deleted category: " + categoryID);
  };

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
    console.log(_budget);
  };

  const changeCategory = (category) => {
    let _budget = [...budget];

    _budget.map((_budget) => {
      if (_budget.id === category.id) {
        _budget = category;
      }
    });

    setBudget(_budget);
    console.log("Changed category: " + category.id);
  };

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
    });
    setBudget(_budget);
    console.log("Changed category: " + categoryID);
  };

  return (
    <div className="page">
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
    </div>
  );
}
