// import React, { useContext, useEffect, useState } from "react";
// import "aos/dist/aos.css";
// import Button from "react-bootstrap/Button";
// import Offcanvas from "react-bootstrap/Offcanvas";
// import CartItems from "./CartItems";
// import axios from "axios";
// import { GlobalContext } from "../Context/SignUp/SignUpcontext";
// export default function Cart() {
//   const [show, setShow] = useState(false);
//   const { state, dispatch } = useContext(GlobalContext);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   return (
//     <>
//       <Button variant="nav-link" onClick={handleShow}>
//         Cart
//       </Button>
//       <Offcanvas
//         data-bs-theme="dark"
//         show={show}
//         onHide={handleClose}
//         placement="end"
//       >
//         <Offcanvas.Header closeButton>
//           <Offcanvas.Title>Cart</Offcanvas.Title>
//         </Offcanvas.Header>
//         <Offcanvas.Body>
//           {state.cart.map((val, key) => (
//             <CartItems key={key} data={val} />
//           ))}
//         </Offcanvas.Body>
//       </Offcanvas>
//     </>
//   );
// }
