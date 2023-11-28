import { Box, AppBar, Toolbar, IconButton, Typography, Button } from "@mui/material"
import ElectricBoltOutlinedIcon from '@mui/icons-material/ElectricBoltOutlined';


function AppBarStyled() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <ElectricBoltOutlinedIcon/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Bilialva & Löbell
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default AppBarStyled