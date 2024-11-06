import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
const OrgIssueBody = ({ issue, status }) => {
	// const [issueStatus, setIssueStatus] = useState();

	// const newStatus = status.filter((st) => st.statusId === issue.statusId);
	// setIssueStatus(newStatus);

	// if(!issue)
	// 		return;
	return (
		<Card className="text-center issue-card">
			<Card.Header className="issue-card-header">
				<p className="issue-card-para-1 ">
					Issue Id <p className="issue-card-para-2">{issue.issueId} </p>
				</p>
				<p className="issue-card-para-1">
					Status Id
					<p className="issue-card-para-2">{issue.issueStatusId}</p>
				</p>
				<p className="issue-card-para-1">
					Employee Id
					<p className="issue-card-para-2">{issue.connectedTo} </p>
				</p>
			</Card.Header>
			<Card.Body className="issue-card-body">
				{/* <Card.Title>Special title treatment</Card.Title> */}
				<Card.Text className="issue-card-text">{issue.issueDesc}</Card.Text>
			</Card.Body>
			<Card.Footer className="text-muted">
				Status Description :{status ? status.statusDescription : ""} | Status :{" "}
				{status ? issue.status : ""} |
				{!issue.issueFileName ? null : (
					<Button
						className="issue-card-button-1"
						variant="dark"
						style={{ margin: "10px" }}
						onClick={() =>
							window.open(
								`http://localhost:2000/files/${issue.issueFileName}`,
								"_blank"
							)
						}
					>
						Show Pdf
					</Button>
				)}
			</Card.Footer>
		</Card>
	);
};

export default OrgIssueBody;
