import axios, { all } from "axios";
import React, { useEffect, useState } from "react";

const SearchInput = () => {
  const [datas, setDatas] = useState([]);
  const [search, setSearch] = useState("");

  const loadData = async () => {
    await axios.get("https://pokeapi.co/api/v2/berry/").then((response) => {
      const allData = response.data.results;
      setDatas(allData);
    });
  };

  const filterData = datas.filter((item) =>
    item.name.toLowerCase().includes(search)
  );

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <h1>Search Pokemon</h1>
      <input
        type="text"
        placeholder="search"
        onChange={(e) => setSearch(e.target.value)}
        style={{ width: 500, height: 30, padding: 5 }}
      />
      {filterData.map((data, idx) => {
        return <h2 key={idx}>{data.name}</h2>;
      })}
    </div>
  );
};

export default SearchInput;
