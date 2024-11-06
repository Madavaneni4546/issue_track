import { useEffect, useState } from "react";
// import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import RaiseTicket from "./raiseTicket";
import UserNavbar from "./user_navbar";
import UserIssues from "./userIssues";
import axios from "axios";
import Search from "../context/Search";

const User = () => {
	// const [issues, setIssues] = useState([]);
	const [solvedIssues, setSolvedIssues] = useState([]);
	const [unsolvedIssues, setUnsolvedIssues] = useState([]);
	const [tempIssues, setTempIssues] = useState([]);
	const [status, setStatus] = useState([]);
	// const [userIssues, setUserIssues] = useState([]);
	const [userId, setUserId] = useState(localStorage.getItem("userId"));
	// const [userId, setUserId] = useState("1123");
	const [currentUserIssues, setCurrentUserIssues] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchData = async () => {
			let issuesData = [];
			let userIssueData = [];
			let statusData = [];
			let solvedIssuesData = [];
			let unsolvedIssuesData = [];
			let currentIssueData = [];
			// setUserId(localStorage.getItem("userId"));
			await axios
				.get(`http://localhost:2000/api/issues/user/${userId}`)
				.then((res) => {
					currentIssueData = res.data;
			});
			setCurrentUserIssues(currentIssueData);
			// await axios
			// 	.get("http://localhost:2000/api/issues")
			// 	.then((res) => {
			// 		issuesData = res.data;
			// 	})
			// 	.catch((e) => console.log(e));
			await axios
				.get("http://localhost:2000/api/status")
				.then((res) => {
					statusData = res.data;
				})
				.catch((e) => console.log(e));
			
			setCurrentUserIssues(currentIssueData);

			setStatus(statusData);

			solvedIssuesData = currentIssueData.filter((issue) =>
				statusData.some(
					(status) =>
						status.issueId === issue.issueId && status.status === "closed"
				)
			);

			unsolvedIssuesData = currentIssueData.filter((issue) =>
				statusData.some(
					(status) =>
						status.issueId === issue.issueId && status.status !== "closed"
				)
			);

			setSolvedIssues(solvedIssuesData);
			setUnsolvedIssues(unsolvedIssuesData);
			console.log(currentIssueData);
			setTempIssues(currentIssueData);
		};

		fetchData();
	}, []);

	const handleAllIssues = () => {
		console.log(currentUserIssues);
		setTempIssues(currentUserIssues); //issues
		navigate("/dashboard/user");
	};

	const handleSolvedIssues = () => {
		console.log(solvedIssues);
		setTempIssues(solvedIssues);
		navigate("/dashboard/user/solved");
	};

	const handleUnsolvedIssues = () => {
		console.log(unsolvedIssues);
		setTempIssues(unsolvedIssues);
		navigate("/dashboard/user/unsolved");
	};

	const handleIssues = () => {
		navigate("/dashboard/user/raise-ticket");
	};

	return (
		<>
		<Search>
			<UserNavbar
				handleAllIssues={handleAllIssues}
				handleSolvedIssues={handleSolvedIssues}
				handleUnsolvedIssues={handleUnsolvedIssues}
				handleIssues={handleIssues}
			/>
			<Routes>
				<Route
					path="/"
					element={<UserIssues tempIssues={tempIssues} status={status} />}
				/>
				<Route
					path="solved"
					element={<UserIssues tempIssues={solvedIssues} status={status} />}
				/>
				<Route
					path="unsolved"
					element={<UserIssues tempIssues={unsolvedIssues} status={status} />}
				/>
				<Route path="raise-ticket" element={<RaiseTicket userId={userId} />} />
			</Routes>
			</Search>
		</>
	);
};

export default User;





			// issuesData = [
			// 	{
			// 		issueId: "1",
			// 		issueName: "Delivery",
			// 		issueDesc: "Got wrong item",
			// 		connectedTo: "1234",
			// 		status: "123",
			// 	},
			// 	{
			// 		issueId: "2",
			// 		issueName: "Payment",
			// 		issueDesc: "Payment failed",
			// 		connectedTo: "1254",
			// 		status: "124",
			// 	},
			// 	{
			// 		issueId: "3",
			// 		issueName: "Online",
			// 		issueDesc: "Payment failed",
			// 		connectedTo: "125",
			// 		status: "125",
			// 	},
			// ];

			// issuesData = issuesData.filter((issue) =>
			// 	userIssueData.some((userIssue) => userIssue === issue.issueId)
			// );

			// statusData = [
			// 	{
			// 		statusId: "123",
			// 		status: "closed",
			// 		issueId: "1",
			// 		statusDescription: "It may take 2 days",
			// 	},
			// 	{
			// 		statusId: "124",
			// 		status: "open",
			// 		issueId: "2",
			// 		statusDescription: "It may take 5 days",
			// 	},
			// 	{
			// 		statusId: "125",
			// 		status: "open",
			// 		issueId: "3",
			// 		statusDescription: "It may take 1 day",
			// 	},
			// ];

			// setIssues(issuesData);

// const User = () => {
// 	const [issues, setIssues] = useState([]);
// 	const [solvedIssues, setSolvedIssues] = useState([]);
// 	const [unsolvedIssues, setUnsolvedIssues] = useState([]);
// 	const [tempIssues, setTempIssues] = useState([]);
// 	const [status, setStatus] = useState([]);
// 	const [userIssues, setUserIssues] = useState([]);
// 	const [userId, setUserId] = useState();
// 	const [raiseTicket, setRaiseTicket] = useState(false);
// 	const navigate = useNavigate();
// 	useEffect(() => {
// 		const fetchData = async () => {
// 			let issuesData = [];
// 			let userIssueData = [];
// 			let statusData = [];
// 			let solvedIssuesData = [];
// 			let unsolvedIssuesData = [];
// 			// setUserId(localStorage.getItem("userId"));
// 			// await axios
// 			// 	.get("http://localhost:2000/api/issues")
// 			// 	.then((res) => {
// 			// 		issuesData = res.data;
// 			// 	})
// 			// 	.catch((e) => console.log(e));
// 			// await axios
// 			// 	.get("http://localhost:2000/api/status")
// 			// 	.then((res) => {
// 			// 		statusData = res.data;
// 			// 	})
// 			// 	.catch((e) => console.log(e));
// 			// await axios
// 			// .get(`http://localhost:2000/api/user/status/:${userId}`)
// 			// 	.then((res) => {
// 			// 		userIssueData = res.data;
// 			// 	})
// 			// 	.catch((e) => console.log(e));

// 			userIssueData = ["1", "2"];
// 			setUserIssues(userIssueData);

// 			issuesData = [
// 				{
// 					issueId: "1",
// 					issueName: "Delivery",
// 					issueDesc: "Got wrong item",
// 					connectedTo: "1234",
// 					status: "123",
// 				},
// 				{
// 					issueId: "2",
// 					issueName: "Payment",
// 					issueDesc: "Payment failed",
// 					connectedTo: "1254",
// 					status: "124",
// 				},
// 				{
// 					issueId: "3",
// 					issueName: "Online",
// 					issueDesc: "Payment failed",
// 					connectedTo: "125",
// 					status: "125",
// 				},
// 			];
// 			issuesData = issuesData.filter((issue) =>
// 				userIssueData.some((userIssue) => userIssue === issue.issueId)
// 			);
// 			statusData = [
// 				{
// 					statusId: "123",
// 					status: "closed",
// 					issueId: "1",
// 					statusDescription: "It may take 2 days",
// 				},
// 				{
// 					statusId: "124",
// 					status: "open",
// 					issueId: "2",
// 					statusDescription: "It may take 5 days",
// 				},
// 				{
// 					statusId: "125",
// 					status: "open",
// 					issueId: "3",
// 					statusDescription: "It may take 1 day",
// 				},
// 			];

// 			// statusData = statusData.filter((status) =>
// 			// 	userIssueData.some((userIssue) => userIssue === issue.issueId)

// 			setIssues(issuesData);
// 			setStatus(statusData);

// 			solvedIssuesData = issuesData.filter((issue) =>
// 				statusData.some(
// 					(status) =>
// 						status.issueId === issue.issueId && status.status === "closed"
// 				)
// 			);
// 			unsolvedIssuesData = issuesData.filter((issue) =>
// 				statusData.some(
// 					(status) =>
// 						status.issueId === issue.issueId && status.status !== "closed"
// 				)
// 			);

// 			setSolvedIssues(solvedIssuesData);
// 			setUnsolvedIssues(unsolvedIssuesData);
// 			setTempIssues(issuesData);
// 		};

// 		fetchData();
// 	}, []);

// 	const handleAllIssues = () => {
// 		setTempIssues(issues);
// 		console.log("All Issues Clicked");
// 		navigate("/user/issues");
// 	};

// 	const handleSolvedIssues = () => {
// 		setTempIssues(solvedIssues);
// 		console.log("Solved Issues Clicked");
// 		navigate("/user/issues");
// 	};

// 	const handleUnsolvedIssues = () => {
// 		setTempIssues(unsolvedIssues);
// 		console.log("Unsolved Issues Clicked");
// 		navigate("/user/issues");
// 	};

// 	const handleIssues = () => {
// 		setRaiseTicket((prevState) => !prevState);
// 		// console.log(raiseTicket);
// 		navigate("/user/raise-ticket");
// 		console.log("Raising issue");
// 	};
// 	return (
// 		<>
// 			<UserNavbar
// 				handleAllIssues={handleAllIssues}
// 				handleSolvedIssues={handleSolvedIssues}
// 				handleUnsolvedIssues={handleUnsolvedIssues}
// 				handleIssues={handleIssues}
// 			/>
// 			{raiseTicket ? (
// 				<RaiseTicket handleIssues={handleIssues} />
// 			) : (
// 				<UserIssues tempIssues={tempIssues} status={status} />
// 			)}
// 		</>
// 	);
// };

// export default User;

// import { useEffect, useState } from 'react';
// import { useNavigate, Routes, Route } from 'react-router-dom';
// import RaiseTicket from './RaiseTicket';
// import UserNavbar from './UserNavbar';
// import UserIssues from './UserIssues';


// await axios
			// .get(`http://localhost:2000/api/user/userissues/:${userId}`)
			// 	.then((res) => {
			// 		userIssueData = res.data;
			// 	})
			// 	.catch((e) => console.log(e));
			// currentIssueData = [
			// 	{
			// 		issueId: "1",
			// 		issueName: "Delivery",
			// 		issueDesc: "Got wrong item",
			// 		connectedTo: "1234",
			// 		status: "123",
			// 	},
			// 	{
			// 		issueId: "2",
			// 		issueName: "Payment",
			// 		issueDesc: "Payment failed",
			// 		connectedTo: "1254",
			// 		status: "124",
			// 	},
			// 	{
			// 		issueId: "3",
			// 		issueName: "Online",
			// 		issueDesc: "Payment failed",
			// 		connectedTo: "125",
			// 		status: "125",
			// 	},
			// ];
			// userIssueData = ["1", "2"];