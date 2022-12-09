import React, { useEffect, useState } from "react";
import Select from "react-select";

const Searchable = () => {
  const [data, setData] = useState([]);
  const [dataSelected, setDataSelected] = useState("");

  const getData = async () => {
    const allData = await fetch("https://pokeapi.co/api/v2/berry/");
    const value = await allData.json();
    const result = await value.results.map((select) => {
      return {
        label: select.name,
        value: select.name,
      };
    });
    const finalResult = result.sort((a, b) => a.label.localeCompare(b.label));
    setData(finalResult);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleChange = (e) => {
    setDataSelected(e.value);
  };

  return (
    <div style={{ marginTop: 30, marginLeft: 20, marginRight: 20 }}>
      <h1>Searchable Option</h1>
      <Select options={data} onChange={handleChange} />
      <h2>{dataSelected}</h2>
    </div>
  );
};

export default Searchable;
