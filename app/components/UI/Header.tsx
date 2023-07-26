import { AppBar, Toolbar, Box, TextField, Avatar, Button } from '@mui/material';
import { Typography } from '@mui/joy';
import CustomModal from './CustomModal';
import SearchIcon from '@mui/icons-material/Search';
import { FormEventHandler, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import useLocalStorage from '@/app/hooks/useLocalStorage';
import { usePathname } from 'next/navigation';

const Header = () => {
    const [isUserLogined, setIsUserLogined] = useState<boolean>(false);
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [userLoginValue, setUserLoginValue] = useState<string>('');
    const [userPasswordValue, setUserPasswordValue] = useState<string>('');
    const [userInfo, setUserInfo] = useLocalStorage('user', '');

    const handleSubmitUser: FormEventHandler<HTMLFormElement> = (evt) => {
        evt.preventDefault();

        setUserInfo({
            id: uuidv4(),
            username: userLoginValue,
            password: userPasswordValue,
        })

        setModalOpen(false);
        setUserLoginValue('');
        setUserPasswordValue('');
    }

    useEffect(() => {
        setIsUserLogined(!!userInfo);

    }, [userInfo]);

    return (
        <AppBar component="nav" sx={{ backgroundColor: '#fff', width: '85%', py: 1 }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <div></div>
                <SearchIcon />
                <Box sx={{ display: { xs: 'none', sm: 'block' }, color: '#000' }}>
                    {isUserLogined ?
                        (
                            <div onClick={() => setModalOpen(!modalOpen)}>
                                <Avatar sx={{ cursor: 'pointer' }} alt="ProfilePicture" src="https://mcdn.wallpapersafari.com/medium/30/24/Vwmyh9.jpg" />
                            </div>
                        )
                        :
                        (
                            <>
                                <Button type="button"
                                    variant="contained"
                                    style={{ backgroundColor: '#1976d2' }}
                                    onClick={() => setModalOpen(!modalOpen)}
                                >
                                    Login
                                </Button>
                            </>
                        )
                    }
                    <CustomModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
                        {
                            isUserLogined ?
                                (
                                    <>
                                        <Typography color="info"
                                            level="h4"
                                            className="text-center"
                                        >
                                            Hey, {userInfo.username}
                                        </Typography>
                                    </>
                                )
                                :
                                (
                                    <form className="flex flex-col gap-5" onSubmit={handleSubmitUser}>
                                        <Typography color="info" level="h4" className="text-center">Register</Typography>
                                        <TextField
                                            id="outlined-basic"
                                            label="Login"
                                            variant="outlined"
                                            value={userLoginValue}
                                            onChange={(e) => setUserLoginValue(e.target.value)}
                                        />
                                        <TextField
                                            id="outlined-basic"
                                            label="Password"
                                            variant="outlined"
                                            value={userPasswordValue}
                                            onChange={(e) => setUserPasswordValue(e.target.value)}
                                        />
                                        <Button type="submit" variant="contained" style={{ backgroundColor: '#1976d2' }}>Register</Button>
                                    </form>
                                )
                        }

                    </CustomModal>
                </Box>
            </Toolbar >
        </AppBar >
    )
}

export default Header;
