// just to test app
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic'; // support
import ListAltIcon from '@mui/icons-material/ListAlt'; // todo
import StickyNote2Icon from '@mui/icons-material/StickyNote2'; // notes
import DashboardIcon from '@mui/icons-material/Dashboard'; // overview
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';

export const sideBarItems = [
    {
        id: 1,
        title: 'Overview',
        icon: <DashboardIcon />
    },
    {
        id: 2,
        title: 'Notes',
        icon: <StickyNote2Icon />
    },
    {
        id: 3,
        title: 'Todo',
        icon: <ListAltIcon />
    },
    {
        id: 4,
        title: 'Timer',
        icon: <AccessTimeOutlinedIcon />
    },
    {
        id: 5,
        title: 'Support',
        icon: <HeadsetMicIcon />
    },
];

export const notesCategories = [
    {
        title: 'Projects',
        color: '#34ebc6',
    },
    {
        title: 'Business',
        color: '#d39ef0'
    },
    {
        title: 'Personal',
        color: '#f2bc83'
    }
]