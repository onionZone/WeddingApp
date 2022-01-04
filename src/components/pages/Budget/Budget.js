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
    <div className="budget">
      {categories}
      <button className="add-button" onClick={() => props.addCategory()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 24 24"
        >
          <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
        </svg>{" "}
        ADD
      </button>
    </div>
  );
}
