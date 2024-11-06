// import axios from "axios";
// import { useEffect, useState } from "react";
// import Form from "react-bootstrap/Form";
// function SelectOrg({ handleOrgId }) {
// 	const [orgs, setOrg] = useState([]);
// 	const [selectedOrg, setSelectedOrg] = useState("");

// 	const handleOrgChange = (event) => {
// 		setSelectedOrg(event.target.value);
// 		handleOrgId(selectedOrg);
// 	};

// 	useEffect(() => {
// 		const fetchOrg = async () => {
// 			// await axios
// 			// 	.get("http://localhost:2000/api/organization")
// 			// 	.then((res) => {
// 			// 		return setOrg(res.data);
// 			// 	})
// 			// 	.catch((e) => {
// 			// 		console.error(e);
// 			// 	});


// 		};
// 		fetchOrg();
// 	}, []);

// 	return (
// 		<Form.Select
// 			aria-label="Default select example"
// 			onChange={handleOrgChange}
// 			value={selectedOrg}
// 		>
// 			<option>Open this select menu</option>
// 			{orgs.forEach((org) => {
// 				<option value={org.orgId}>{org.orgName}</option>;
// 			})}
// 		</Form.Select>
// 	);
// }

// export default SelectOrg;


import axios from "axios";
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";

function SelectOrg({ handleOrgId }) {
  const [orgs, setOrgs] = useState([]);
  const [selectedOrg, setSelectedOrg] = useState("");

  const handleOrgChange = (event) => {
    setSelectedOrg(event.target.value);
    handleOrgId(event.target.value); // Use event.target.value directly
  };

  useEffect(() => {
    const fetchOrgs = async () => {
      try {
        // Example API call using axios (uncomment and replace with actual endpoint)
        const response = await axios.get("http://localhost:2000/api/organization");
        setOrgs(response.data);

        // Example data for testing without API call
        // const testData = [
        //   { orgId: 1, orgName: "Org 1" },
        //   { orgId: 2, orgName: "Org 2" },
        // ];
        // setOrgs(testData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchOrgs();
  }, []);

  return (
    <Form.Select
      aria-label="Default select example"
      onChange={handleOrgChange}
      value={selectedOrg}
    >
      <option>Open this select menu</option>
      {orgs.map((org) => (
        <option key={org.orgId} value={org.orgId}>
          {org.orgName}
        </option>
      ))}
    </Form.Select>
  );
}

export default SelectOrg;
