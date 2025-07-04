import { string, object } from 'yup';

export const phoneRegExp = /(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/g;

export const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address: "",
  department: "",
};

export const validationSchema = object().shape({
  firstName: string().required("First Name is required"),
  lastName: string().required("Last Name is required"),
  email: string().email("Invalid email").required("Email is required"),
  contact: string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Phone Number is required"),
  address: string().required("Address is required"),
  department: string().required("Department is required"),
});

export const formFields = [
	{
		name: "firstName",
		label: "First Name",
		gridSpan: "span 2"
	}, {
		name: "lastName",
		label: "Last Name",
		gridSpan: "span 2"
	}, {
		name: "contact",
		label: "Contact Number",
		gridSpan: "span 2"
	}, {
		name: "department",
		label: "Department",
		gridSpan: "span 2"
	}, {
		name: "email",
		label: "Email ID",
		gridSpan: "span 4"
	}, {
		name: "address",
		label: "Address",
		gridSpan: "span 4"
	}
]