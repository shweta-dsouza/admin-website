import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@mui/material/styles';
import { palette } from "../theme";

const SnackBar = ({ open, handleClose, message }) => {
    const theme = useTheme();
    const colors = palette(theme.palette.mode);

    const action = (
        <>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </>
    );

    return (
        <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            open={open}
            autoHideDuration={5000}
            onClose={handleClose}
            message={message}
            action={action}
            aria-label={message}
            sx={{
                '& .MuiSnackbarContent-root': {
                    backgroundColor: colors.blue[700]
                }
            }}
        />
    )
}

export default SnackBar;