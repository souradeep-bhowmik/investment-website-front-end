import React, { useEffect } from "react";
import { MDBDataTableV5 } from "mdbreact";
import { useSelector } from "react-redux";
import { Item, Grid } from "../styled-components/Styles";

const TableData = () => {
  const rows = useSelector((state) => {
    return state.data.costBasisData;
  });

  useEffect(() => {}, [rows]);

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
        label: "Fees",
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

  const TOTAL_BOUGHT = rows.reduce((a, b) => a + b.originalCost, 0);
  const TOTAL_SOLD = rows.reduce((a, b) => a + b.totalSellPrice, 0);
  const TOTAL_PROFIT = `${TOTAL_SOLD - TOTAL_BOUGHT} (${
    ((TOTAL_SOLD - TOTAL_BOUGHT) / TOTAL_BOUGHT) * 100
  }) %`;

  return rows.length !== 0 ? (
    <>
      <Grid>
        <Item>Total Bought: $ {TOTAL_BOUGHT}</Item>
        <Item>Total Sold: $ {TOTAL_SOLD}</Item>
        <Item>Total Profit: $ {TOTAL_PROFIT}</Item>
      </Grid>
      <MDBDataTableV5
        order={["sellDate", "desc"]}
        striped
        bordered
        small
        data={data}
        fullPagination
      />
    </>
  ) : null;
};

export default TableData;
