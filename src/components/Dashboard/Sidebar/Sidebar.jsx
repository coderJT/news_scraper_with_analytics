import MenuIcon from "@mui/icons-material/Menu";
import { useDashboardContext } from "../../../utils/providers/dashboardProvider";
import { Drawer, Toolbar, IconButton, ListItemButton, ListItemText, List, ListSubheader, ListItem } from "@mui/material";
import * as themes from "../../../utils/colors/colorThemes";

export default function DashboardSidebar() {

    const { openDrawer, handleDrawer, handleTheme } = useDashboardContext();

    return (
        <Drawer 
            variant="temporary"
            open={openDrawer}
            onOpen={handleDrawer}
            onClose={handleDrawer}
            PaperProps={{
                sx: [{width: {xs: "100%", sm: "25%"}}]
            }}>
            
            <Toolbar>
                <IconButton onClick={handleDrawer}>
                    <MenuIcon />
                </IconButton>
            </Toolbar>

            {/* List all available themes as options */}
            {
                <List>
                    <ListSubheader>Themes</ListSubheader>
                    {
                        Object.entries(themes).map(theme => (
                            <ListItem>
                                <ListItemButton onClick={() => handleTheme(theme[1])}>
                                    <ListItemText>{theme[0]}</ListItemText>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
            }
        </Drawer>
        
    )
}