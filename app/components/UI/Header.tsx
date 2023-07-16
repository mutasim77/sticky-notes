import { AppBar, Toolbar, Box, TextField, Avatar } from '@mui/material';

const Header = () => {
    return (
        <AppBar component="nav" sx={{ backgroundColor: '#fff', width: '85%', py: 1 }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <TextField placeholder='Search' variant="outlined" sx={{ ml: 10 }} />
                <Box sx={{ display: { xs: 'none', sm: 'block' }, color: '#000' }}>
                    <Avatar alt="Remy Sharp" src="https://mcdn.wallpapersafari.com/medium/30/24/Vwmyh9.jpg" />
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header;
