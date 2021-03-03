import React, { useEffect } from "react";
import { MDBDataTableV5 } from "mdbreact";
import { useSelector } from "react-redux";
import styled from "styled-components";

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

  console.log(TOTAL_BOUGHT, TOTAL_SOLD, TOTAL_PROFIT);

  return rows.length !== 0 ? (
    <>
      <Grid>
        <Item>
          <h3>Total Bought: $ {TOTAL_BOUGHT}</h3>
        </Item>
        <Item>
          <h3>Total Sold: $ {TOTAL_SOLD}</h3>
        </Item>
        <Item>
          <h3>Total Profit: $ {TOTAL_PROFIT}</h3>
        </Item>
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

export const Item = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.5rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 50px 50px;
  grid-gap: 5px;
`;

export default TableData;
