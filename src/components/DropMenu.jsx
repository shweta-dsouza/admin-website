import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { palette } from "../theme";
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import Tooltip from '@mui/material/Tooltip';

const DropMenu = ({ tooltipTitle, menuName, icon, data }) => {
    const theme = useTheme();
    const colors = palette(theme.palette.mode);

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Tooltip title={tooltipTitle}>
                <IconButton
                    id={`${menuName}-button`}
                    aria-controls={open ? `${menuName}-menu` : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <Badge badgeContent={5} color="primary">
                        {icon}
                    </Badge>
                </IconButton>
            </Tooltip>

            <Menu
                id={`${menuName}-menu`}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                slotProps={{
                    list: {
                        'aria-labelledby': `${menuName}-button`,
                    },
                }}
                sx={{
                    '& .MuiPaper-root': {
                        backgroundColor: colors.blue[200],
                        width: 300
                    }
                }}
            >
                {data.map(item => (
                    <MenuItem
                        key={item.title}
                        onClick={handleClose}
                        sx={{
                            display: "flex",
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            borderBottom: `0.5px solid white`,
                            ':last-child': {
                                borderBottom: '0px'
                            },
                            whiteSpace: 'normal'
                        }}
                    >
                        <Typography variant='h5'>{item.title}</Typography>
                        <Typography color={colors.grey[300]} >{item?.desc}</Typography>
                        <Typography color={colors.grey[300]} fontStyle="italic">{item?.time}</Typography>
                    </MenuItem>
                ))}
            </Menu>
        </>
    )
}

export default DropMenu;