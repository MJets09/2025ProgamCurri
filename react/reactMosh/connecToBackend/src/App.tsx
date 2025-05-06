import "./App.css";
import { useRef, useEffect, useState } from "react";
import ProductList from "./assets/components/ProductList";

function App() {

  const [category, setCategory] = useState("");

  const ref = useRef<HTMLInputElement>(null);

  return (
    <>
      <div>
        <input type="text" name="" id="" ref={ref}   onChange={(e) => {
          console.log(category)
          }}/>

        <select
          className="form-select"
          onChange={(e) => {
            setCategory(e.target.value);
            console.log(e.target.value);
          }}
        >
          <option value=""></option>
          <option value="Clothing">Clothing</option>
          <option value="Household">Household</option>
        </select>

        <ProductList category={category}></ProductList>
      </div>
    </>
  );
}

export default App;
