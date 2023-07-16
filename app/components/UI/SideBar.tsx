"use client"

import {
    Box,
    List,
    ListItemIcon,
    ListItemText,
    Divider,
    ListItemButton,
    ListItem,
    Drawer,
    Skeleton
} from '@mui/material';

import { useEffect, useState } from 'react';
import { sideBarItems } from '../../../constants/index.js';
import { usePathname } from 'next/navigation';
import { getListCategories } from '../../../services/localStorage';
import { ICategories } from '@/types/sticks.jsx';
import AddCategory from '../AddCategory';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import Link from 'next/link';

const SideBar = () => {
    const path = usePathname();
    const pathName = path?.replace('/', '');
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        setCategories(getListCategories());
    }, []);

    const list = () => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
        >
            <Box sx={{ bgcolor: '#6961c0', display: 'flex', py: 3.2, alignItems: 'center', justifyContent: 'space-around' }}>
                <Skeleton variant="circular" width={30} height={30} sx={{ bgcolor: '#0000008a' }} />
                <Skeleton variant="rounded" width={160} height={30} sx={{ bgcolor: '#0000008a' }} />
            </Box>
            <List>
                {sideBarItems.map((item) => (
                    <ListItem key={item.id} disablePadding>
                        <ListItemButton>
                            <ListItemIcon sx={{ minWidth: 40 }}>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText>
                                {item.title === 'Overview' ? (
                                    <Link href='/'>{item.title}</Link>
                                ) : (
                                    <Link href={`/${(item.title).toLowerCase()}`}
                                    >
                                        {item.title}
                                    </Link>
                                )
                                }
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

            <Divider sx={{ py: 2 }} />

            {pathName === 'notes' ?
                (
                    <>
                        <div className='ml-5 font-bold mt-4 text-[#0000008a]'>Categories</div>
                        <List>
                            {categories.map((category: ICategories) => (
                                <ListItem key={category.id} disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon sx={{ minWidth: 40 }}>
                                            <div
                                                className={`w-[20px] h-[20px] rounded-full`}
                                                style={{ backgroundColor: category.color }}
                                            >
                                            </div>
                                        </ListItemIcon>
                                        <ListItemText primary={category.title} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                            <ListItem disablePadding >
                                <ListItemButton>
                                    <ListItemIcon sx={{ minWidth: 44 }}>
                                        <AddCircleOutlineOutlinedIcon sx={{ ml: -.3 }} />
                                    </ListItemIcon>
                                    <AddCategory />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </>
                )
                :
                null
            }
        </Box>
    );


    return (
        <Drawer
            sx={{
                width: 250,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: 250,
                    boxSizing: 'border-box',
                    backgroundColor: '#8881d8',
                    color: '#fff'
                },
            }}
            variant="permanent"
            anchor="left"
        >
            {list()}
        </Drawer>
    )
}

export default SideBar;