import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Items } from "./Data";
import Product from "./Product";

const Searchitem = ({cart ,setCart}) => {
  const { term } = useParams();
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const filterData = () => {
      const data = Items.filter((p) =>
        p.title.toLowerCase().includes(term.toLocaleLowerCase())
      );
      //  console.log(data);
      setFilterData(data);
    };
    filterData();
  }, [term]);
  return <Product cart={cart} setCart={setCart} Items={filterData} />;
};

export default Searchitem;
