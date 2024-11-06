import Accordion from "react-bootstrap/Accordion";
import Service from "./Service";
import { useContext } from "react";
import { SearchContext } from "../context/Search";
function OrgServices({ allServices }) {
  console.log("in services");
  console.log("all servcies are " + allServices);

  const { searchTerm } = useContext(SearchContext);
  return (
    <Accordion defaultActiveKey="10">
      {allServices.map((service) => !service.sName ? null :
        service.sName.toLowerCase().startsWith(searchTerm.toLowerCase()) || searchTerm === "" ? (
          <Service service={service} />
        ) : null
      )}
    </Accordion>
  );
}

export default OrgServices;
