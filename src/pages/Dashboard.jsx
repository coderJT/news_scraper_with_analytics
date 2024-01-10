import DashboardAppBar from "../components/Dashboard/AppBar/AppBar";
import DashboardSidebar from "../components/Dashboard/Sidebar/Sidebar";
import DashboardNewsTable from "../components/Dashboard/Main/NewsTable";
import DashboardControlPanel from "../components/Dashboard/Main/ControlPanel";
import DashboardDetails from "../components/Dashboard/Details/Details";
import { useDashboardContext } from "../utils/providers/dashboardProvider";
import { Box, ThemeProvider  } from "@mui/material";

export default function Dashboard() {

    const { theme } = useDashboardContext();
    
    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                        xs: '1fr',
                        sm: 'repeat(4, 1fr)'
                    },
                    gap: 2,
                    gridTemplateRows: {
                        xs: '50px 2fr 1fr',
                        sm: '10% 1fr 1fr'
                    },
                    gridTemplateAreas: {
                        xs: `'appbar'
                             'main'
                             'details'`,
                        sm: `'appbar appbar appbar appbar'
                             'main main main details'
                             'main main main details'`
                    },
                    height: { xs: '200vh', sm: '100vh' }
                }}>
                <Box sx={{
                    gridArea: 'appbar'
                }}>
                    <DashboardAppBar></DashboardAppBar>
                    <DashboardSidebar></DashboardSidebar>
                </Box>

                <Box sx={{
                    gridArea: 'main',
                    overflowX: 'auto',
                    overflowY: 'auto',
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    justifyContent: 'space-between',
                    height: '100%',
                }}>

                    <DashboardNewsTable></DashboardNewsTable>
                    <DashboardControlPanel></DashboardControlPanel>
                </Box>

                <Box sx={{
                    gridArea: 'details',
                    bgcolor: 'primary.details',
                    overflowX: 'auto',
                    overflowY: 'auto',
                }}>
                    <DashboardDetails></DashboardDetails>
                </Box>
            </Box>
        </ThemeProvider>
    )
}
