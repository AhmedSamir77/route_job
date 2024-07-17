import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Tables({ data }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [amountTerm, setAmountTerm] = useState("");

  // Filter customers based on name search input
  const filteredCustomers = data?.customers?.filter((customer) =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  //  // Further filter transactions based on amount only
  //  const filteredData = filteredCustomers?.map(customer => {
  //   const transactions = data?.transactions?.filter(transaction =>
  //     transaction.customer_id === customer.id &&
  //     transaction.amount.toString().includes(amountTerm)
  //   );
  //   return { ...customer, transactions };
  // });

  // Filter transactions based on amount and create a new list with only relevant customers
  const displayedCustomers = filteredCustomers?.filter((customer) => {
    const hasRelevantTransactions = data?.transactions?.some(
      (transaction) =>
        transaction.customer_id === customer.id &&
        transaction.amount.toString().includes(amountTerm)
    );
    return hasRelevantTransactions;
  });

  return (
    <>
      <Stack
        direction="row"
        spacing={2}
        sx={{ width: 300, margin: "20px auto" }}
      >
        <TextField
          label="Search Customer"
          variant="outlined"
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            type: "search",
          }}
        />
        <TextField
          label="Search by Amount"
          variant="outlined"
          onChange={(e) => setAmountTerm(e.target.value)}
          InputProps={{
            type: "search",
          }}
        />
      </Stack>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Customer Name</StyledTableCell>
              <StyledTableCell>Transaction</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedCustomers?.map((customer) => (
              <StyledTableRow key={customer.id}>
                <StyledTableCell>{customer.name}</StyledTableCell>
                <StyledTableCell>
                  {data?.transactions
                    ?.filter(
                      (transaction) =>
                        transaction.customer_id === customer.id &&
                        transaction.amount.toString().includes(amountTerm)
                    )
                    .map((transaction, index) => (
                      <p key={index}>
                        {"Date: " +
                          transaction.date +
                          " : " +
                          transaction.amount +
                          "$"}
                      </p>
                    ))}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
