import "./App.css";
import { useRef, useEffect, useState } from "react";
import ProductList from "./assets/components/ProductList";
import axios from 'axios';

interface Props {
  id: number;
  name: string;
  email: string;
}


function App() {


  const [category, setCategory] = useState<string>("");

  const ref = useRef<HTMLInputElement>(null);

   const [users, setUser] = useState<Props[]>([])
   const [email, setEmail] = useState<Props[]>([])


   useEffect(()=> {
    axios.get<Props[]>('https://jsonplaceholder.typicode.com/users')
    .then(res => {setUser(res.data); console.log(res)})
   }, [])

   useEffect(()=> {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {setEmail(res.data)})
   }, [])

  return (
    <>
      <div>
        <input type="text" name="" id="" ref={ref} />

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
        
        <ul>
          {users.map((user) => <li key={user.id}>{user.name}</li>)}
        </ul>
      </div>

      <ul>
        {email.map((email) => <li key={email.id}>{email.email}</li>)}
      </ul>

      {users.map((user) => console.log(user))}

    </>
  );
}

export default App;
