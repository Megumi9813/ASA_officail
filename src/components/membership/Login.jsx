import { useState } from "react";
import Modal from "react-bootstrap/Modal";

function Login() {
  const [loginOpen, setLoginOpen] = useState(false);
  const handleClose = () => setLoginOpen(false);

  return (
    <div className="membershipLogin">
      <div
        className="h-10 flex items-center mr-3.5 rounded"
        style={{ boxShadow: "0 1px 6px rgba(0, 0, 0, 10%)" }}
      >
        <button
          onClick={() => setLoginOpen(!loginOpen)}
          className="px-6 py-0 text-sm font-light"
          style={{ color: "#212529" }}
        >
          Login
        </button>
      </div>

      <Modal
        show={loginOpen}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div>
              <label>Email</label>
              <input type="email" placeholder="asa@example.com" />
            </div>
            <div>
              <label>Password</label>
              <input type="password" placeholder="• • • • • • • • • • • •" />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button>Sing in</button>
          <div>Forgot password?</div>
          <div>
            Don't have an account yet?
            <span>Register</span>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Login;
