import { useState } from 'react';
import { formatDate } from '@fullcalendar/core';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from "@fullcalendar/list";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { INITIAL_EVENTS } from '../constants';
import { palette } from "../theme";

const Calendar = () => {
	const theme = useTheme();
	const colors = palette(theme.palette.mode);
	let count = 0;

	const [currentEvents, setCurrentEvents] = useState([]);

	const handleDateSelect = (selected) => {
		const title = prompt('Please enter a new title for your event')
		const calendarApi = selected.view.calendar;

		calendarApi.unselect() // clear date selection

		if (title) {
			calendarApi.addEvent({
				id: count++,
				title,
				start: selected.startStr,
				end: selected.endStr,
				allDay: selected.allDay
			});
		}
	}

	const handleEventClick = (clickInfo) => {
		if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
			clickInfo.event.remove();
		}
	}

	return (
		<Box m={2}>
			<Typography variant='h3'> Calendar </Typography>

			<Box display="flex" justifyContent="space-between" mt={3} overflow="auto">
				{/* EVENTS LIST */}
				<Box flex="1 1 20%" p={1} backgroundColor={colors.blue[400]}>
					<Typography variant="h5">Events</Typography>
					<List>
						{currentEvents.map((eventInfo) => (
							<ListItem key={eventInfo.id} sx={{ backgroundColor: colors.accent[500], margin: "8px 0", color: colors.grey[900] }}>
								<ListItemText
									primary={eventInfo.title}
									secondary={
										<Typography>
											{formatDate(eventInfo.start, {
												year: "numeric",
												month: "short",
												day: "numeric",
											})}
										</Typography>
									}
								/>
							</ListItem>
						))}
					</List>
				</Box>

				{/* CALENDAR */}
				<Box
					flex="1 1 100%"
					ml={1}
					sx={{
						'& .fc-theme-standard .fc-list-day-cushion': {
							backgroundColor: colors.blue[400],
						},
						'& .fc .fc-list-event:hover td': {
							backgroundColor: colors.blue[400]
						}
					}}>
					<FullCalendar
						height="78vh"
						plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
						headerToolbar={{
							left: 'prev,next today',
							center: 'title',
							right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
						}}
						initialView='dayGridMonth'
						editable={true} // determines if the events can be dragged and resized using interaction plugin
						selectable={true} // allows a user to highlight multiple days or timeslots by clicking and dragging using interaction plugin
						selectMirror={true} // draw a “placeholder” event while the user is dragging
						dayMaxEvents={true} // the number of events will be limited to the height of the day cell in dayGrid view
						initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
						select={handleDateSelect}
						eventClick={handleEventClick}
						eventsSet={(events) => setCurrentEvents(events)} // called after events are initialized/added/changed/removed
					/>
				</Box>
			</Box>
		</Box>
	)
}

export default Calendar;