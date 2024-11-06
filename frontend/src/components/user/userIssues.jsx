// import react from 'react';
import Accordion from "react-bootstrap/Accordion";
import IssueBody from "./issueBody";
import { useContext } from "react";
import { SearchContext } from "../context/Search";
const UserIssues = ({ tempIssues, status }) => {
  const { searchTerm } = useContext(SearchContext);
  return (
    <Accordion>
      {tempIssues && tempIssues.length > 0 ? (
        tempIssues.map((issue) => {
          const newStatus = status.find((ele) => ele.issueId === issue.issueId);
          return issue.issueName
            .toLowerCase()
            .startsWith(searchTerm.toLowerCase()) ? (
            <IssueBody issue={issue} key={issue.issueId} status={newStatus} />
          ) : null;
        })
      ) : (
        <p>No issues available</p>
      )}
    </Accordion>
  );
};

export default UserIssues;
