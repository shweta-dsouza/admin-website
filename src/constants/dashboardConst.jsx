import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import PointOfSaleOutlinedIcon from '@mui/icons-material/PointOfSaleOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';

export const stats = [
    {
        icon: <GroupsOutlinedIcon fontSize="large" />,
        title: "Customers",
        total: "12,004",
        subtitle: "Since last month", 
        increase: "12.6",
        decrease: 0
    },
    {
        icon: <PointOfSaleOutlinedIcon fontSize="large" />,
        title: "Sales",
        total: "$ 58,342",
        subtitle: "Since last month", 
        increase: "1.5",
        decrease: 0
    }, {
        icon: <MonetizationOnOutlinedIcon fontSize="large" />,
        title: "Revenue",
        total: "$ 105,788",
        subtitle: "Since last month", 
        increase: 0,
        decrease: "8.1"
    },  {
        icon: <ReceiptOutlinedIcon fontSize="large" />,
        title: "Invoices",
        total: "732",
        subtitle: "Since last month", 
        increase: "0.7",
        decrease: 0
    }, 
]

export const transactions = [
    {
        id: "001",
        name: "John Doe",
        time: "Jun 20, 2025 12:32 AM",
        color: "success",
        value: "$22,789",
        type: "+ income"
    },
    {
        id: "002",
        name: "Kate Rose",
        time: "Jun 17, 2025 02:09 PM",
        color: "error",
        value: "$10,000",
        type: "- outcome"
    },
    {
        id: "003",
        name: "Alex Locke",
        time: "Jun 16, 2025 10:45 AM",
        color: "error",
        value: "$12,789",
        type: "- outcome"
    },
    {
        id: "004",
        name: "Kim Min Jung",
        time: "Jun 09, 2025 00:09 PM",
        color: "success",
        value: "$45,602",
        type: "+ income"
    },
    {
        id: "005",
        name: "Lily Walt",
        time: "May 31, 2025 06:08 PM",
        color: "success",
        value: "$12,332",
        type: "+ income"
    },
    {
        id: "006",
        name: "Mary Clarks",
        time: "May 25, 2025 11:11 AM",
        color: "error",
        value: "$10,432",
        type: "- outcome"
    }
]