import React, { useEffect, useState } from "react";
import Chart from "../../components/Chart/Chart.jsx";
import Table from "../../components/Table/Table.jsx";
import axios from "axios";

export default function Home() {
  // const [users, setUsers] = useState([]);
  const [data, setData] = useState([]);

  // function getUser() {
  //   axios
  //     .get("http://localhost:3000/customers")
  //     .then((res) => setUsers(res.data));
  // }
  // function getDataUser() {
  //   axios
  //     .get("http://localhost:3000/transactions")
  //     .then((res) => setData(res.data));
  // }

  async function getData() {
    try {
      let { data } = await axios.get("http://localhost:8000/api/data");
      console.log(data);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    // getUser();
    // getDataUser();
    getData();
  }, []);

  return (
    <>
      <Chart data={data} />
      <Table data={data} />
    </>
  );
}
