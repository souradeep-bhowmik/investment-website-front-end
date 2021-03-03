import React, { useEffect } from "react";
import { MDBDataTableV5 } from "mdbreact";
import { useSelector } from "react-redux";

const TableData = () => {
  const rows = useSelector((state) => {
    // console.log(state);
    return state.data.costBasisData;
  });

  useEffect(() => {
    // console.log(rows);
  }, [rows]);
  // console.log(
  //   useSelector((state) => {
  //     console.log(state);
  //     return state.costBasisData.data;
  //   })
  // );
  const data = {
    columns: [
      {
        label: "Sell Date",
        field: "sellDate",
        sort: "asc",
        width: 150,
      },
      {
        label: "Buy Date",
        field: "buyDate",
        sort: "asc",
        width: 270,
      },
      {
        label: "Amount",
        field: "amountOfShare",
        sort: "asc",
        width: 200,
      },
      {
        label: "Price",
        field: "pricePerShare",
        sort: "asc",
        width: 100,
      },
      {
        label: "fees",
        field: "fees",
        sort: "asc",
        width: 150,
      },
      {
        label: "Sell Cost",
        field: "totalSellPrice",
        sort: "asc",
        width: 100,
      },
      {
        label: "Buy Cost",
        field: "originalCost",
        sort: "asc",
        width: 100,
      },
      {
        label: "Profit",
        field: "profit",
        sort: "asc",
        width: 100,
      },
      {
        label: "Profit %",
        field: "profitPercentage",
        sort: "asc",
        width: 100,
      },
    ],
    rows: rows,
  };
  return (
    <MDBDataTableV5
      order={["sellDate", "desc"]}
      striped
      bordered
      small
      data={data}
      fullPagination
    />
  );
};

export default TableData;
