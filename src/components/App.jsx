import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [items, setItems] = useState([]);
  function addItems(title, content) {
    setItems((prevItems) => [...prevItems, { title: title, content: content }]);
  }
  function deleteItems(ind) {
    setItems((prev) => prev.filter((item, pos) => pos !== ind));
  }
  return (
    <div>
      <Header />
      <CreateArea addItems={addItems} />
      {items.map((item, ind) => (
        <Note
          key={ind}
          id={ind}
          handleDelete={deleteItems}
          title={item.title}
          content={item.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
