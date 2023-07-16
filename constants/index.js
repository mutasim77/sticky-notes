// just to test app
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic'; // support
import ListAltIcon from '@mui/icons-material/ListAlt'; // todo
import StickyNote2Icon from '@mui/icons-material/StickyNote2'; // notes
import DashboardIcon from '@mui/icons-material/Dashboard'; // overview

export const notes = [
    {
        id: '1',
        title: 'Title Example',
        note: '1.Hello',
        color: '#ffcf7c'
    },
    {
        id: '2',
        title: 'Test',
        note: 'How are you',
        color: '#fea67e'
    },
    {
        id: '3',
        title: 'Test',
        note: "I'm okay",
        color: '#be9efd'
    },
    {
        id: '4',
        title: 'Test',
        note: 'Perceived end knowledge certainly day sweetness why cordially. Ask quick six seven offer see among. Perceived end knowledge certainly day sweetness why cordially. Ask quick six seven offer see among. Handsome met debating sir dwelling age material. As style lived he worse dried. Offered related so visitor we private removed. Moderate do subjects to distance.',
        color: '#05d9fe'
    },
    {
        id: '5',
        title: 'Test',
        note: "You're You're You're",
        color: '#e7f09b'
    },
    {
        id: '6',
        title: 'Test',
        note: "You're Mutasim",
        color: '#fb7878'
    },
]

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
        title: 'Support',
        icon: <HeadsetMicIcon />
    }
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