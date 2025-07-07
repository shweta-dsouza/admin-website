import { useContext } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { useTheme } from '@mui/material/styles';
import InputBase from "@mui/material/InputBase";
import Tooltip from "@mui/material/Tooltip";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { ColorContext, palette } from "../theme";
import DropMenu from "./DropMenu";
import { NOTIFICATION_DATA } from '../constants';

const Topbar = () => {
  const theme = useTheme();
  const colors = palette(theme.palette.mode);
  const colorMode = useContext(ColorContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.blue[200]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display="flex">
        <Tooltip title="Theme Mode">
          <IconButton onClick={colorMode.toggleThemeMode} aria-label="theme-mode-menu">
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlinedIcon />
            ) : (
              <LightModeOutlinedIcon />
            )}
          </IconButton>
        </Tooltip>

        <DropMenu tooltipTitle="Notifications" menuName="notifications" icon={<NotificationsOutlinedIcon />} data={NOTIFICATION_DATA} />

        <Tooltip title="Settings">
          <IconButton aria-label="settings-menu">
            <SettingsOutlinedIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Profile">
          <IconButton aria-label="profile-menu">
            <PersonOutlinedIcon />
          </IconButton>
        </Tooltip>

      </Box>
    </Box>
  );
};

export default Topbar;