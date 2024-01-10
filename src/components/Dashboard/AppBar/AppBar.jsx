import { AppBar, Box, CircularProgress, IconButton, Toolbar, Typography } from "@mui/material";
import { useDashboardContext } from "../../../utils/providers/dashboardProvider";
import { useNewsContext } from "../../../utils/providers/newsProvider";
import MenuIcon from "@mui/icons-material/Menu";

export default function DashboardAppBar() {
    
    const { handleDrawer } = useDashboardContext();
    const { loading } = useNewsContext();

    return (
        <AppBar position="static" sx={{bgcolor: "primary.appbar"}}>
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    sx={{mr: 2, color: "primary.details"}}
                    onClick={handleDrawer}>
                    <MenuIcon />
                </IconButton>

                <Typography sx={{color: "primary.main"}}>News Scraper with Analytics</Typography>

                <Box sx={{ml: 'auto', display: loading ? 'block' : 'none'}}>
                    <CircularProgress sx={{color: "primary.details"}}/>
                </Box>
            </Toolbar>
        </AppBar>
    )   
}