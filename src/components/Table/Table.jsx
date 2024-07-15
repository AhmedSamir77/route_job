import React from "react";
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
import Autocomplete from "@mui/material/Autocomplete";

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
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];
export default function Tables({ data }) {
  // console.log(data);
  // console.log(data.customers[0].name);
  return (
    <>
      {/* <div>
        <Stack spacing={2} sx={{ width: 300 }}>
          <Autocomplete
            freeSolo
          
            disableClearable
            options={data?.customers?.map((option) => option.name)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search input"
                InputProps={{
                  ...params.InputProps,
                  type: "search",
                }}
              />
            )}
          />
        </Stack>

      </div> */}

      <table className="border-collapse border border-slate-500 w-100  mx-auto my-10 text-center">
        <thead>
          <tr className="bg-black">
            <th className="border border-slate-600 p-2  text-white">
              Customer Name
            </th>
            <th className="border border-slate-600  p-2 text-white">
              Transaction
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.customers?.map((item, index) => (
            <tr key={index}>
              <td className="border border-slate-700 p-2 ">{item.name}</td>
              <td className="border border-slate-700 flex flex-wrap flex-row justify-center items-center gap-1 md:gap-3  p-2">
                {data?.transactions?.map((item2, index) =>
                  item2.customer_id === item.id ? (
                    <p key={index}>
                      {"Date:" + item2.date + " : " + item2.amount + "$,"}
                    </p>
                  ) : (
                    ""
                  )
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
