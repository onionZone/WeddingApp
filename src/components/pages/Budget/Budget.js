import React from "react";
import Category from "./Category";

export default function Budget(props) {
  const categories = props.budget.map((category) => {
    return (
      <Category
        key={category.id}
        category={category}
        deleteCategory={props.deleteCategory}
        deleteItem={props.deleteItem}
        changeCategory={props.changeCategory}
        changeItem={props.changeItem}
        addItem={props.addItem}
      />
    );
  });

  return (
    <div id="budget" className="container">
      {categories}
      <button className="add-button" onClick={() => props.addCategory()}>
        ADD CATEGORY
      </button>
    </div>
  );
}
