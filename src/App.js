import './App.css';
import List from "./components/List"
import EmployeeList from "./components/EmployeeList"
import Translation from "./components/Translation"
import Artical from "./components/Artical"
import Count from "./components/Count"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';


function App() {

  const EMPLOYEES = [
    {
      name: "Parker Green",
    },
    {
      name: "Jordan Richards",
    },
    {
      name: "Alex Stevens",
    },
    {
      name: "Avery Scott",
    },
    {
      name: "Riley Miller",
    },
    {
      name: "Charlie Green",
    },
  ];

  const TRANSLATIONS = new Map([
    ['ball', 'pelota'],
    ['house', 'casa'],
    ['dog', 'perro'],
    ['dogs', 'perros'],
    ['milk', 'leche'],
    ['orange', 'naranja'],
  ]);

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Count />} />
            <Route path="ajaxExample" element={<List />} />
            <Route path="employeeList" element={<EmployeeList emp={EMPLOYEES} />} />
            <Route path="translation" element={<Translation translation={TRANSLATIONS} />} />
            <Route path="artical" element={<Artical />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
