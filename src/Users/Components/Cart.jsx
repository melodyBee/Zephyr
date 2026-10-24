import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import CartItems from "./CartItems";
import { GlobalContext } from "../Context/SignUp/SignUpcontext";

export default function Cart() {
  const [show, setShow] = useState(false);
  const { state, dispatch } = useContext(GlobalContext);

  const count = state.cart.reduce((n, c) => n + c.quantity, 0);
  const total = state.cart.reduce((sum, c) => sum + c.price * c.quantity, 0);

  return (
    <>
      <Button variant="link" className="nav-link" onClick={() => setShow(true)}>
        Cart{count > 0 ? ` (${count})` : ""}
      </Button>
      <Offcanvas
        data-bs-theme="dark"
        show={show}
        onHide={() => setShow(false)}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {state.cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              {state.cart.map((item) => (
                <CartItems
                  key={item.id}
                  data={item}
                  onRemove={() =>
                    dispatch({ type: "REMOVE_FROM_CART", id: item.id })
                  }
                />
              ))}
              <h5 className="mt-3">Total: ${total.toFixed(2)}</h5>
              <Button
                variant="outline-light"
                size="sm"
                onClick={() => dispatch({ type: "CLEAR_CART" })}
              >
                Clear cart
              </Button>
            </>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
