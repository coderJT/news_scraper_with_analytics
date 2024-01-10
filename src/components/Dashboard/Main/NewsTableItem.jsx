import { TableBody, TableRow, TableCell, useMediaQuery } from "@mui/material";
import { useNewsContext } from "../../../utils/providers/newsProvider";
import { useDashboardContext } from "../../../utils/providers/dashboardProvider";

export default function NewsItems({}) {

    const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    const { news, handleSelectedNews } = useNewsContext();
    const { handleDialogOpen } = useDashboardContext();
    // Perform a deep copy of news to prevent overwriting original maps array
    const newsReversed = JSON.parse(JSON.stringify(news)).reverse();
    return (
        <TableBody>
            {newsReversed && newsReversed.map((item, idx) => (
                <TableRow key={item._id.$oid} 
                          onClick={() => {handleSelectedNews({
                                                id: item._id.$oid, 
                                                name: item.name, 
                                                url: item.url, 
                                                content: item.content, 
                                                category: item.category,
                                                sa: "", 
                                                sum: ""
                                            })
                                            handleDialogOpen()
                                        }} 
                          sx={{cursor: 'pointer'}}>

                    <TableCell align='center'>{idx + 1}</TableCell>
                    <TableCell scope='row'>{item.name}</TableCell>
                    <TableCell align='left'>{item.published_date}</TableCell>
                    <TableCell align='left'>{item.tag ? item.tag : item.category}</TableCell>
                    <TableCell align='left'>
                        {item.content.length > 100
                            ? item.content.slice(0, 100) + '...'
                            : item.content
                        }
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    )
}