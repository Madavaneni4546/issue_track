
import { useEffect, useState } from "react";
// import "./App.css";
import axios from "axios";
import EmpNavbar from "./emp_navbar";
import EmpIssues from "./issues";
import Search from "../context/Search.jsx"

const Employee = () => {
  const [currentEmpIssues, setCurrentEmpIssues] = useState([]);
  const [solvedIssues, setSolvedIssues] = useState([]);
  const [unsolvedIssues, setUnsolvedIssues] = useState([]);
  const [tempIssues, setTempIssues] = useState([]);
  const [status, setStatus] = useState([]);
  const [empId, setEmpId] = useState(localStorage.getItem("empId"));
  // const [empId, setEmpId] = useState("201"); // assuming empId is set to "1" for testing

  const fetchData = async () => {
    let statusData = [];
    let currentIssueData = [];

    // Simulating API calls
    try {
      const statusResponse = await axios.get(
        "http://localhost:2000/api/status"
      );
      statusData = statusResponse.data;
      console.log(statusData);

      const issuesResponse = await axios.get(
        `http://localhost:2000/api/issues/employee/${empId}`
        // {
        //   httpAgent: proxyAgent,
        //   httpsAgent: proxyAgent,
        // }
      );
      currentIssueData = issuesResponse.data;
    } catch (error) {
      console.error(error);
    }

    
    setCurrentEmpIssues(currentIssueData);
    setStatus(statusData);

    const solvedIssuesData = currentIssueData.filter((issue) =>
      statusData.some(
        (status) =>
          status.issueId === issue.issueId && status.status === "closed"
      )
    );
    const unsolvedIssuesData = currentIssueData.filter((issue) =>
      statusData.some(
        (status) =>
          status.issueId === issue.issueId && status.status !== "closed"
      )
    );

    setSolvedIssues(solvedIssuesData);
    setUnsolvedIssues(unsolvedIssuesData);
    setTempIssues(currentIssueData);
  };

  useEffect(() => {
    fetchData();
  }, [empId]);

  const handleAllIssues =  () => {
    setTempIssues(currentEmpIssues);
    console.log(currentEmpIssues);
    console.log("All Issues Clicked");
  };

  const handleSolvedIssues = () => {
    console.log(solvedIssues)
    setTempIssues(solvedIssues);
    console.log("Solved Issues Clicked");
  };

  const handleUnsolvedIssues = () => {
    setTempIssues(unsolvedIssues);
    console.log("Unsolved Issues Clicked");
  };

  return (
    <>
      <Search>
      <EmpNavbar
        handleAllIssues={handleAllIssues}
        handleSolvedIssues={handleSolvedIssues}
        handleUnsolvedIssues={handleUnsolvedIssues}
      />
      <EmpIssues tempIssues={tempIssues} status={status} />
      </Search>
    </>
  );
};

export default Employee;


// import { useEffect, useState } from "react";
// import "./App.css";
// import EmpNavbar from "./emp_navbar";
// import EmpIssues from "./issues";
// function App() {
// 	const [issues, setIssues] = useState([]);
// 	const [solvedIssues, setSolvedIssues] = useState([]);
// 	const [unsolvedIssues, setUnsolvedIssues] = useState([]);
// 	const [tempIssues, setTempIssues] = useState([]);
// 	const [status, setStatus] = useState([]);
// 	const [solvedSts, setSolvedSts] = useState([]);
// 	const [unsolvedSts, setUnsolvedSts] = useState([]);
// 	useEffect(() => {
// 		const fetchData = async () => {
// 			// await axios
// 			// 	.get("/api/issues")
// 			// 	.then((res) => {
// 			// 		return setIssues(res.data);
// 			// 	})
// 			// 	.catch((e) => console.log(e));
// 			// await axios
// 			// 	.get("/api/status")
// 			// 	.then((res) => {
// 			// 		return setStatus(res.data);
// 			// 	})
// 			// .catch((e) => console.log(e));
// 			// setIssues({
// 			// 	issueId: "1",
// 			// 	issueName: "Delivery",
// 			// 	issueDesc: "Got wrong item",
// 			// 	connectedTo: "1234",
// 			// });
// 			// setIssues({
// 			// 	issueId: "2",
// 			// 	issueName: "Payment",
// 			// 	issueDesc: "Payment failed",
// 			// 	connectedTo: "1254",
// 			// });

// 			// setStatus({
// 			// 	statusId: "123",
// 			// 	status: "closed",
// 			// 	issueId: "1",
// 			// });

// 			const issuesData = [
// 				{
// 					issueId: "1",
// 					issueName: "Delivery",
// 					issueDesc: "Got wrong item",
// 					connectedTo: "1234",
// 				},
// 				{
// 					issueId: "2",
// 					issueName: "Payment",
// 					issueDesc: "Payment failed",
// 					connectedTo: "1254",
// 				},
// 			];

// 			const statusData = [
// 				{
// 					statusId: "123",
// 					status: "closed",
// 					issueId: "1",
// 				},
// 				{
// 					statusId: "124",
// 					status: "open",
// 					issueId: "2",
// 				},
// 			];

// 			setIssues(issuesData);
// 			setStatus(statusData);

// 			const solved = [];
// 			const unsolved = [];

// 			statusData.forEach((ele) => {
// 				if (ele.status === "closed") {
// 					solved.push(ele.statusId);
// 				} else {
// 					unsolved.push(ele.statusId);
// 				}
// 			});

// 			setSolvedSts(solved);
// 			setUnsolvedSts(unsolved);
// 			const solvedIssuesData = issuesData.filter((issue) =>
// 				statusData.some(
// 					(status) =>
// 						status.issueId === issue.issueId && status.status === "closed"
// 				)
// 			);
// 			const unsolvedIssuesData = issuesData.filter((issue) =>
// 				statusData.some(
// 					(status) =>
// 						status.issueId === issue.issueId && status.status !== "closed"
// 				)
// 			);
// 			console.log(issues);
// 			setSolvedIssues(solvedIssuesData);
// 			setUnsolvedIssues(unsolvedIssuesData);
// 			setTempIssues(issuesData);
// 			console.log(tempIssues);
// 			// status.forEach((ele) => {
// 			// 	if (ele.status === "closed") {
// 			// 		setSolvedSts(...solvedSts, ele.statusId);
// 			// 	} else {
// 			// 		setUnsolvedSts(...unsolvedSts, ele.statusId);
// 			// 	}
// 			// });
// 			// issues.forEach((ele) => {
// 			// 	if (solvedSts.find(ele.status)) setSolvedIssues([...solvedIssues, ele]);
// 			// 	else setUnsolvedIssues([...unsolvedIssues, ele]);
// 			// });
// 		};
// 		fetchData();
// 	}, []);

// 	const handleAllIssues = () => {
// 		setTempIssues(issues);
// 		console.log("All Issues Clicked");
// 	};

// 	const handleSolvedIssues = () => {
// 		setTempIssues(solvedIssues);
// 		console.log("Solved Issues Clicked");
// 	};

// 	const handleUnsolvedIssues = () => {
// 		setTempIssues(unsolvedIssues);
// 		console.log("Unsolved Issues Clicked");
// 	};

// 	return (
// 		<>
// 			<EmpNavbar
// 				handleAllIssues={handleAllIssues}
// 				handleSolvedIssues={handleSolvedIssues}
// 				handleUnsolvedIssues={handleUnsolvedIssues}
// 			/>
// 			<EmpIssues tempIssues={tempIssues} />
// 		</>
// 	);
// }

// export default App;

// await axios
// 	.get("http://localhost:2000/api/issues")
// 	.then((res) => {
// 		return setIssues(res.data);
// 	})
// 	.catch((e) => console.log(e));

// const issuesData = [
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
// ];

// import { useEffect, useState } from "react";
// // import "./App.css";
// import EmpNavbar from "./emp_navbar";
// import EmpIssues from "./issues";

// const Employee = () => {
// 	// const [issues, setIssues] = useState([]);
// 	const [currentEmpIssues, setCurrentEmpIssues] = useState([]);
// 	const [solvedIssues, setSolvedIssues] = useState([]);
// 	const [unsolvedIssues, setUnsolvedIssues] = useState([]);
// 	const [tempIssues, setTempIssues] = useState([]);
// 	const [status, setStatus] = useState([]);
// 	const [empId, setEmpId] = useState("100");
// 	setEmpId(localStorage.getItem("empId"));
// 	useEffect(() => {
// 		const fetchData = async () => {
// 			let statusData = [];
// 			let currentIssueData = [];

// 			// await axios
// 			// 	.get("http://localhost:2000/api/status")
// 			// 	.then((res) => {
// 			// 		return setStatus(res.data);
// 			// 	})
// 			// .catch((e) => console.log(e));
// 			// await axios
// 			// 	.get("http://localhost:2000/api/issues/employee/${empId}")
// 			// 	.then((res) => {
// 			// 		currentIssueData = res.data;
// 			// 	});
// 			setCurrentEmpIssues(currentIssueData);

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
// 			];

// 			// setIssues(issuesData);
// 			setStatus(statusData);
// 			// issuesData
// 			const solvedIssuesData = currentEmpIssues.filter((issue) =>
// 				statusData.some(
// 					(status) =>
// 						status.issueId === issue.issueId && status.status === "closed"
// 				)
// 			);
// 			const unsolvedIssuesData = currentEmpIssues.filter((issue) =>
// 				statusData.some(
// 					(status) =>
// 						status.issueId === issue.issueId && status.status !== "closed"
// 				)
// 			);

// 			setSolvedIssues(solvedIssuesData);
// 			setUnsolvedIssues(unsolvedIssuesData);
// 			setTempIssues(currentEmpIssues);
// 		};

// 		fetchData();
// 	}, []);

// 	const handleAllIssues = () => {
// 		setTempIssues(currentEmpIssues);
// 		console.log("All Issues Clicked");
// 	};

// 	const handleSolvedIssues = () => {
// 		setTempIssues(solvedIssues);
// 		console.log("Solved Issues Clicked");
// 	};

// 	const handleUnsolvedIssues = () => {
// 		setTempIssues(unsolvedIssues);
// 		console.log("Unsolved Issues Clicked");
// 	};

// 	return (
// 		<>
// 			<EmpNavbar
// 				handleAllIssues={handleAllIssues}
// 				handleSolvedIssues={handleSolvedIssues}
// 				handleUnsolvedIssues={handleUnsolvedIssues}
// 			/>
// 			<EmpIssues tempIssues={tempIssues} status={status} />
// 		</>
// 	);
// };

// export default Employee;


// import ProxyAgent from "proxy-agent";

// const proxyAgent = new ProxyAgent("http://172.16.20.200:3128");
// const Employee = () => {
// 	const [currentEmpIssues, setCurrentEmpIssues] = useState([]);
// 	const [solvedIssues, setSolvedIssues] = useState([]);
// 	const [unsolvedIssues, setUnsolvedIssues] = useState([]);
// 	const [tempIssues, setTempIssues] = useState([]);
// 	const [status, setStatus] = useState([]);
// 	// const [empId, setEmpId] = useState(localStorage.getItem("empId"));
// 	const [empId, setEmpId] = useState("1");

// 	useEffect(() => {
// 		const fetchData = async () => {
// 			let statusData = [];
// 			let currentIssueData = [];

// 			// try {
// 			// 	const statusResponse = await axios.get(
// 			// 		"http://localhost:2000/api/status"
// 			// 	);
// 			// 	statusData = statusResponse.data;

// 			// 	const issuesResponse = await axios.get(
// 			// 		`http://localhost:2000/api/issues/employee/${empId}`
// 			// 	);
// 			// 	currentIssueData = issuesResponse.data;
// 			// } catch (error) {
// 			// 	console.error(error);
// 			// }
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
// 			];

// 			currentIssueData = [
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
// 			];

// 			setCurrentEmpIssues(currentIssueData);
// 			setStatus(statusData);

// 			const solvedIssuesData = currentIssueData.filter((issue) =>
// 				statusData.some(
// 					(status) =>
// 						status.issueId === issue.issueId && status.status === "closed"
// 				)
// 			);
// 			const unsolvedIssuesData = currentIssueData.filter((issue) =>
// 				statusData.some(
// 					(status) =>
// 						status.issueId === issue.issueId && status.status !== "closed"
// 				)
// 			);

// 			setSolvedIssues(solvedIssuesData);
// 			setUnsolvedIssues(unsolvedIssuesData);
// 			setTempIssues(currentEmpIssues);
// 		};

// 		// if (empId) {
// 		fetchData();
// 		console.log(currentEmpIssues);
// 		console.log(status);
// 		// }
// 	}, []);

// 	const handleAllIssues = () => {
// 		setTempIssues(currentEmpIssues);
// 		console.log("All Issues Clicked");
// 	};

// 	const handleSolvedIssues = () => {
// 		setTempIssues(solvedIssues);
// 		console.log("Solved Issues Clicked");
// 	};

// 	const handleUnsolvedIssues = () => {
// 		setTempIssues(unsolvedIssues);
// 		console.log("Unsolved Issues Clicked");
// 	};

// 	return (
// 		<>
// 			<EmpNavbar
// 				handleAllIssues={handleAllIssues}
// 				handleSolvedIssues={handleSolvedIssues}
// 				handleUnsolvedIssues={handleUnsolvedIssues}
// 			/>
// 			<EmpIssues tempIssues={tempIssues} status={status} />
// 		</>
// 	);
// };

// export default Employee;


// Mock data for testing
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
      // ];

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
      // ];
