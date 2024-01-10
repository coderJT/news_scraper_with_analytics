import { Box, TableContainer, Table, TableHead, TableRow, TableCell } from "@mui/material";
import NewsItems from "./NewsTableItem";

export default function DashboardNewsTable({}) {
    return (
        <TableContainer
            sx={{
                overflowY: "auto",
                minHeight: {sm: "100%"},
                width: {xs: "100%", sm: "80%"},
                height: {xs: "70%", sm: "100%"},
                backgroundColor: "primary.main"
            }}>

            <Table stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell>No.</TableCell>
                        <TableCell>Title</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Tag / Category</TableCell>
                        <TableCell>Content</TableCell>
                    </TableRow>
                </TableHead>
                <NewsItems></NewsItems>
            </Table>
        </TableContainer>
    )
}