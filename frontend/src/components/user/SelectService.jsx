// import { useEffect, useState } from "react";
// import Form from "react-bootstrap/Form";
// function SelectService({ orgId, handleServiceId }) {
// 	const [services, setServices] = useState([]);
// 	const [totalServices, setTotalServices] = useState([]);
// 	const [orgServices, setOrgServices] = useState([]);
// 	const [selectedService, setSelectedService] = useState("");

// 	const handleServiceChange = (event) => {
// 		setSelectedService(event.target.value);
// 		handleServiceId(selectedService);
// 	};

// 	useEffect(() => {
// 		let servicesData = [];
// 		let totalServicesData = [];

// 		const fetchServices = async () => {
// 			// await axios
// 			// 	.get(`http://localhost:2000/org/orgservices/:${orgId}`)
// 			// 	.then((res) => {
// 			// 		servicesData = res.data;
// 			// 	})
// 			// 	.catch((e) => {
// 			// 		console.error(e);
// 			// 	});
// 			// await axios
// 			// 	.get("http://localhost:2000/api/service")
// 			// 	.then((res) => {
// 			// 		totalServicesData = res.data;
// 			// 	})
// 			// 	.catch((e) => {
// 			// 		console.error(e);
// 			// 	});
// 		};

// 		fetchServices();
// 		setServices(servicesData);
// 		setTotalServices(totalServicesData);
// 	}, []);

// 	const tempServices = totalServices.filter((tservice) =>
// 		services.some((service) => service === tservice.sId)
// 	);

// 	setOrgServices(tempServices);
// 	return (
// 		<Form.Select
// 			aria-label="Default select example"
// 			onChange={handleServiceChange}
// 			value={selectedService}
// 		>
// 			<option>Open this select menu</option>
// 			{orgServices.map((service) =>
// 				<option value={service.sId}>{service.sName}</option>
// 			)}
// 		</Form.Select>
// 	);
// }

// export default SelectService;

import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
// Import axios if you uncomment the API calls
import axios from "axios";

function SelectService({ orgId, handleServiceId }) {
	const [services, setServices] = useState([]);
	const [totalServices, setTotalServices] = useState([]);
	const [orgServices, setOrgServices] = useState([]);
	const [selectedService, setSelectedService] = useState("");

	useEffect(() => {
		const fetchServices = async () => {
			try {
				// Example API call using axios (uncomment and replace with actual endpoints)
				let serviceData = [];
				let totalServiceData = [];
				const response1 = await axios.get(`http://localhost:2000/api/organization/${orgId}`);
				const response2 = await axios.get("http://localhost:2000/api/service");
				serviceData = response1.data;
				totalServiceData = response2.data;
				// Assuming response1.data and response2.data are arrays of services
				// setServices(response1.data);
				// setTotalServices(response2.data);

				// Example data for testing without API calls
				// const testData1 = [{ sId: 1 }];
				// const testData2 = [
				// 	{ sId: 1, sName: "Service 1" },
				// 	{ sId: 2, sName: "Service 2" },
				// ];

				setServices(serviceData);
				setTotalServices(totalServiceData);
			} catch (error) {
				console.error(error);
			}
		};

		fetchServices();
	}, [orgId]); // Add dependencies to control when useEffect should run

	useEffect(() => {
		const tempServices = totalServices.filter((tservice) =>
			services.some((service) => service === tservice.sId)
		);

		setOrgServices(tempServices);
	}, [services, totalServices]);

	const handleServiceChange = (event) => {
		setSelectedService(event.target.value);
		handleServiceId(event.target.value); // Update to use the current value
	};

	return (
		<Form.Select
			aria-label="Default select example"
			onChange={handleServiceChange}
			value={selectedService}
		>
			<option>Open this select menu</option>
			{orgServices.map((service) => (
				<option key={service.sId} value={service.sId}>
					{service.sName}
				</option>
			))}
		</Form.Select>
	);
}

export default SelectService;
