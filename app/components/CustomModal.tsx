import { Modal, Box } from '@mui/material';

interface ModalProps {
    modalOpen: boolean,
    setModalOpen: (open: boolean) => boolean | void,
    children: React.ReactNode
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
};

const CustomModal: React.FC<ModalProps> = ({ modalOpen, setModalOpen, children }) => {
    return (
        <>
            <Modal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
            >
                <Box sx={style}>
                    {children}
                </Box>
            </Modal>
        </>
    )
}

export default CustomModal;
