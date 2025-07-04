import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTheme } from '@mui/material/styles';
import { palette } from "../theme";
import { FAQData } from "../constants";

const FAQ = () => {
    const theme = useTheme();
    const colors = palette(theme.palette.mode);

    return (
        <Box m={2}>
            <Typography variant='h3'> Frequently Asked Questions </Typography>

            <Box mt={4}>
                {FAQData.map ((data) => (
                    <Accordion 
                        slotProps={{ transition: { unmountOnExit: true } }} 
                        key={data.title}
                        sx={{  background: colors.blue[100] }}
                        defaultExpanded
                    >
                        <AccordionSummary expandIcon={<ExpandMoreIcon aria-hidden="true"/>} id={`${data.title}-header`} aria-controls={`${data.title}-content`}>
                            <Typography variant="h5">
                                {data.title}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                {data.desc}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Box>
        </Box>
    )
}

export default FAQ;