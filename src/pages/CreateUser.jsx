import { useState, lazy } from "react";
import { Formik } from "formik";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { initialValues, validationSchema, formFields } from "../constants/form";
import { useAddUserQuery } from "../customHooks/apiQuery";
const SnackBar = lazy(() => import("../components/SnackBar"));

const CreateUser = () => {
	const isDesktop = useMediaQuery("(min-width:600px)");
	const { isPending, mutate, isError, error } = useAddUserQuery();
	const [open, setOpen] = useState(false);

	const handleFormSubmit = (values) => {
		mutate(values);
		setOpen(true);
	};

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpen(false);
	};

	return (
		<Box m={2}>
			<Typography variant='h3' > Create User </Typography>

			<Formik
				onSubmit={handleFormSubmit}
				initialValues={initialValues}
				validationSchema={validationSchema}
			>
				{({
					values,
					errors,
					touched,
					handleBlur,
					handleChange,
					handleSubmit,
				}) => (
					<form onSubmit={handleSubmit}>
						<Box
							display="grid"
							gap={3}
							gridTemplateColumns="repeat(4, minmax(0, 1fr))"
							mt={4}
							sx={{ "& > div": { gridColumn: isDesktop ? undefined : "span 4" } }}
						>
							{formFields.map((field) => (
								<TextField
									fullWidth
									id={field.name}
									key={field.name}
									name={field.name}
									type="text"
									variant="filled"
									label={field.label}
									onBlur={handleBlur}
									onChange={handleChange}
									value={values[field.name]}
									error={!!touched[field.name] && !!errors[field.name]}
									helperText={touched[field.name] && errors[field.name]}
									sx={{ gridColumn: field.gridSpan }}
									aria-required={true}
									aria-label={field.label}
								/>
							))}
						</Box>

						<Box display="flex" justifyContent="end" mt={3}>
							<Button type="submit" color="secondary" variant="contained" disabled={isPending} aria-label="create new user" aria-busy={isPending} >
								Create New User
							</Button>
						</Box>
					</form>
				)}
			</Formik>

			<SnackBar 
				open={open} 
				handleClose={handleClose} 
				message={isError ? error.message : "User Created Successfully"} 
			/>
		</Box>
	)
}

export default CreateUser;