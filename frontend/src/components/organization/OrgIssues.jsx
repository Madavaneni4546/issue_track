// import react from 'react';
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { SearchContext } from "../context/Search";
import OrgIssueBody from "./OrgIssueBody";
const OrgIssues = ({ tempIssues }) => {
	// console.log("in orgissues " + tempIssues);
	const { searchTerm } = useContext(SearchContext);
	const [statuses, setStatuses] = useState([]);
	useEffect(() => {
		const fetchStatuses = async () => {
			const newStatuses = {};
			for (const issue of tempIssues) {
				const response = await axios.get(
					`http://localhost:2000/api/status/${issue.issueStatusId}`
				);
				newStatuses[issue.issueId] = response.data;
			}
			setStatuses(newStatuses);
		};

		if (tempIssues && tempIssues.length > 0) {
			fetchStatuses();
		}
	}, [tempIssues]);

	// const getStatus = async (serviceId) => {
	//   const newStatus = await axios.get(
	//     `http://localhost:2000/api/status/${serviceId}`
	//   );
	//   setStatus(newStatus);
	// };
	return (
		<Accordion>
			{tempIssues && tempIssues.length > 0 ? (
				tempIssues.map((issue) => {
					if (issue) {
						const status = statuses[issue.issueId];
						return !issue.status
							.toLowerCase()
							.startsWith(searchTerm.toLowerCase()) ? null : (
							<Accordion.Item eventKey={issue.issueId} key={issue.issueId}>
								<Accordion.Header className="issue-header roboto-slab-medium">
									<p className="issue-header-1 ">{issue.issueName} </p>
								</Accordion.Header>
								<Accordion.Body className="issue-body">
									<OrgIssueBody
										issue={issue}
										key={issue.issueId}
										status={status}
									/>
								</Accordion.Body>
							</Accordion.Item>
						);
					}
					return undefined;
				})
			) : (
				<p>No issues available</p>
			)}
		</Accordion>
	);
};

export default OrgIssues;
