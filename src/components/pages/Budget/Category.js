import React from "react";
import Item from "./Item";

export default function Category(props) {
  const category = props.category;
  const id = category.id;
  const name = category.name;

  const items = category.items.map((item) => {
    return (
      <Item
        categoryID={id}
        key={item.id}
        item={item}
        deleteItem={props.deleteItem}
        changeItem={props.changeItem}
      />
    );
  });

  const handleChange = (e) => {
    let _category = category;
    const value = e.target.value;

    _category.name = value;

    props.changeCategory(_category);
  };

  return (
    <div className="category">
      <table>
        <thead>
          <tr>
            <td colSpan="5">
              <input
                name="name"
                type="text"
                value={name}
                onChange={handleChange}
              />
            </td>
            <td>
              <button
                className="remove"
                onClick={() => props.deleteCategory(id)}
              >
                <svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                >
                  <path d="M9 3h6v-1.75c0-.066-.026-.13-.073-.177-.047-.047-.111-.073-.177-.073h-5.5c-.066 0-.13.026-.177.073-.047.047-.073.111-.073.177v1.75zm11 1h-16v18c0 .552.448 1 1 1h14c.552 0 1-.448 1-1v-18zm-10 3.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v12c0 .276.224.5.5.5s.5-.224.5-.5v-12zm5 0c0-.276-.224-.5-.5-.5s-.5.224-.5.5v12c0 .276.224.5.5.5s.5-.224.5-.5v-12zm8-4.5v1h-2v18c0 1.105-.895 2-2 2h-14c-1.105 0-2-.895-2-2v-18h-2v-1h7v-2c0-.552.448-1 1-1h6c.552 0 1 .448 1 1v2h7z" />
                </svg>
              </button>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr className="head-row">
            <td>
              <strong>Name</strong>
            </td>
            <td>
              <strong>Supplier</strong>
            </td>
            <td>
              <strong>Total Price</strong>
            </td>
            <td>
              <strong>Paid</strong>
            </td>
            <td>
              <strong>Left</strong>
            </td>
            <td></td>
          </tr>
          {items}
          <tr className="add-row">
            <td colSpan="5"></td>
            <td>
              <button
                className="add-item-btn"
                onClick={() => props.addItem(id)}
              >
                <svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                >
                  <path d="M11.5 0c6.347 0 11.5 5.153 11.5 11.5s-5.153 11.5-11.5 11.5-11.5-5.153-11.5-11.5 5.153-11.5 11.5-11.5zm0 1c5.795 0 10.5 4.705 10.5 10.5s-4.705 10.5-10.5 10.5-10.5-4.705-10.5-10.5 4.705-10.5 10.5-10.5zm.5 10h6v1h-6v6h-1v-6h-6v-1h6v-6h1v6z" />
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
