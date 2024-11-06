// import { useRef } from "react";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import Card from "react-bootstrap/Card";
// import axios from "axios";
// import { Bounce, ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const OrgAddService = ({ orgId }) => {
//   const emailRef = useRef();
//   const nameRef = useRef();
//   const idRef = useRef();
//   const contactRef = useRef();
//   const descRef = useRef();

//   const handleAdd = async (e) => {
//     e.preventDefault();
//     const newService = {
//       sId: idRef.current.value,
//       sEmail: emailRef.current.value,
//       sName: nameRef.current.value,
//       sPhno: contactRef.current.value,
//       sOrgId: orgId,
//       sEmpIds: [],
//       sIssueIds: [],
//       sDescription: descRef.current.value,
//     };
//     console.log(newService);
//     await axios
//       .post(`http://localhost:2000/api/service`, newService)
//       .then((res) => {
//         console.log(res.data);
//         toast.success("Service added successfully", {
//           position: "top-right",
//           autoClose: 2000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "colored",
//           transition: Bounce,
//         });
//         // alert("Service added successfully");
//       })
//       .catch((e) => {
//         toast.warn("Failed to add Service", {
//           position: "top-right",
//           autoClose: 2000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "colored",
//           transition: Bounce,
//         });
//         // alert("Failed to add Service");
//         console.log(e);
//       });
//   };

//   const handleEdit = async (e) => {
//     e.preventDefault();
//     const newService = {
//       sId: idRef.current.value,
//       sEmail: emailRef.current.value,
//       sName: nameRef.current.value,
//       sPhno: contactRef.current.value,
//       sOrgId: orgId,
//       sDescription: descRef.current.value,
//     };
//     console.log(newService);
//     await axios
//       .put(
//         `http://localhost:2000/api/service/${idRef.current.value}`,
//         newService
//       )
//       .then((res) => {
//         // alert("Service edited successfully");
//         toast.success("Service data edited successfully", {
//           position: "top-right",
//           autoClose: 2000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "colored",
//           transition: Bounce,
//         });
//         console.log(res.data);
//       })
//       .catch((e) => {
//         // alert("Failed to edit service");
//         toast.warn("Failed to edit Service data", {
//           position: "top-right",
//           autoClose: 2000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "colored",
//           transition: Bounce,
//         });
//         console.log(e);
//       });
//   };

//   return (
//     <div
//       className="d-flex justify-content-center align-items-center"
//       style={{ height: "100vh" }}>
//       <Card style={{ width: "30rem" }} className="p-4 shadow">
//         <h2
//           className="text-center mb-4"
//           style={{ color: "#17a2b8", fontWeight: "bold" }}>
//           Add/Edit Service
//         </h2>
//         <Form>
//           <Form.Group className="mb-3" controlId="formServiceId">
//             <Form.Label className="fw-bold">Service Id</Form.Label>
//             <Form.Control type="text" placeholder="Eg: 123456" ref={idRef} />
//           </Form.Group>
//           <Form.Group className="mb-3" controlId="formServiceName">
//             <Form.Label className="fw-bold">Service Name</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Eg: Payment Services"
//               ref={nameRef}
//             />
//           </Form.Group>
//           <Form.Group className="mb-3" controlId="formEmail">
//             <Form.Label className="fw-bold">Email address</Form.Label>
//             <Form.Control
//               type="email"
//               placeholder="Eg: name@example.com"
//               ref={emailRef}
//             />
//           </Form.Group>
//           <Form.Group className="mb-3" controlId="formContact">
//             <Form.Label className="fw-bold">Contact Number</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Eg: 99999xxxxx"
//               ref={contactRef}
//             />
//           </Form.Group>
//           <Form.Group className="mb-3" controlId="formDescription">
//             <Form.Label className="fw-bold">Service Description</Form.Label>
//             <Form.Control as="textarea" rows={3} ref={descRef} />
//           </Form.Group>
//           <div className="d-flex justify-content-between">
//             <Button variant="info" type="submit" onClick={(e) => handleEdit(e)}>
//               Edit
//             </Button>
//             <Button variant="info" type="submit" onClick={(e) => handleAdd(e)}>
//               Add
//             </Button>
//           </div>
//         </Form>
//       </Card>
//       <ToastContainer
//         position="top-right"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="colored"
//         transition="Bounce"
//       />
//     </div>
//   );
// };

// export default OrgAddService;


import { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OrgAddService = ({ orgId }) => {
  const emailRef = useRef();
  const nameRef = useRef();
  const idRef = useRef();
  const contactRef = useRef();
  const descRef = useRef();

  const resetForm = () => {
    idRef.current.value = "";
    nameRef.current.value = "";
    emailRef.current.value = "";
    contactRef.current.value = "";
    descRef.current.value = "";
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    const newService = {
      sId: idRef.current.value,
      sEmail: emailRef.current.value,
      sName: nameRef.current.value,
      sPhno: contactRef.current.value,
      sOrgId: orgId,
      sEmpIds: [],
      sIssueIds: [],
      sDescription: descRef.current.value,
    };
    console.log(newService);
    await axios
      .post(`http://localhost:2000/api/service`, newService)
      .then((res) => {
        console.log(res.data);
        toast.success("Service added successfully", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
        resetForm(); // Clear form after successful add
      })
      .catch((e) => {
        toast.warn("Failed to add Service", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
        console.log(e);
      });
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    const newService = {
      sId: idRef.current.value,
      sEmail: emailRef.current.value,
      sName: nameRef.current.value,
      sPhno: contactRef.current.value,
      sOrgId: orgId,
      sDescription: descRef.current.value,
    };
    console.log(newService);
    await axios
      .put(
        `http://localhost:2000/api/service/${idRef.current.value}`,
        newService
      )
      .then((res) => {
        toast.success("Service data edited successfully", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
        resetForm(); // Clear form after successful edit
        console.log(res.data);
      })
      .catch((e) => {
        toast.warn("Failed to edit Service data", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
        console.log(e);
      });
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}>
      <Card style={{ width: "30rem" }} className="p-4 shadow">
        <h2
          className="text-center mb-4"
          style={{ color: "#17a2b8", fontWeight: "bold" }}>
          Add/Edit Service
        </h2>
        <Form>
          <Form.Group className="mb-3" controlId="formServiceId">
            <Form.Label className="fw-bold">Service Id</Form.Label>
            <Form.Control type="text" placeholder="Eg: 123456" ref={idRef} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formServiceName">
            <Form.Label className="fw-bold">Service Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Eg: Payment Services"
              ref={nameRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label className="fw-bold">Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Eg: name@example.com"
              ref={emailRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formContact">
            <Form.Label className="fw-bold">Contact Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Eg: 99999xxxxx"
              ref={contactRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Label className="fw-bold">Service Description</Form.Label>
            <Form.Control as="textarea" rows={3} ref={descRef} />
          </Form.Group>
          <div className="d-flex justify-content-between">
            <Button variant="info" type="submit" onClick={(e) => handleEdit(e)}>
              Edit
            </Button>
            <Button variant="info" type="submit" onClick={(e) => handleAdd(e)}>
              Add
            </Button>
          </div>
        </Form>
      </Card>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition="Bounce"
      />
    </div>
  );
};

export default OrgAddService;
