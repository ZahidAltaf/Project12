import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Navbar from "../../Components/Navbar/Navbar";
import { Container } from "@mui/material";
import { useApiDataContext } from "../../Context/Context";
export default function BasicTable() {
const { apiData } = useApiDataContext();
    

  return (
    <>
      <Navbar />
      <Container>
        <TableContainer sx={{ marginTop: 20 }} component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 900 }}>IMAGES</TableCell>
                <TableCell sx={{ fontWeight: 900 }} align="right">
                  TITLE
                </TableCell>
                <TableCell sx={{ fontWeight: 900 }} align="right">
                  BRAND
                </TableCell>
                <TableCell sx={{ fontWeight: 900 }} align="right">
                  RATING
                </TableCell>
                <TableCell sx={{ fontWeight: 900 }} align="right">
                  PRICE
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {apiData.map((data) => (
                <TableRow
                
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="data">
                    <img
                      src={data.images[0]}
                      alt="pics"
                      style={{ width: 60 }}
                    />
                  </TableCell>
                  <TableCell align="right">{data.title}</TableCell>
                  <TableCell align="right">{data.brand}</TableCell>
                  <TableCell align="right">{data.rating}</TableCell>
                  <TableCell align="right">${data.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
}
