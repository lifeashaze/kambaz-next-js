import Link from "next/link";
import { FormControl } from "react-bootstrap";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <FormControl
        defaultValue="alice"
        placeholder="username"
        className="mb-2"
      />
      <FormControl
        defaultValue="123"
        placeholder="password"
        type="password"
        className="mb-2"
      />
      <FormControl
        defaultValue="123"
        placeholder="verify password"
        type="password"
        className="mb-2"
      />
      <FormControl
        defaultValue="Alice"
        placeholder="first name"
        className="mb-2"
      />
      <FormControl
        defaultValue="Wonderland"
        placeholder="last name"
        className="mb-2"
      />

      <FormControl
        defaultValue="alice@wonderland"
        placeholder="email"
        type="email"
        className="mb-2"
      />
      <FormControl defaultValue="2000-01-01" type="date" className="mb-2" />

      <FormControl as="select" defaultValue="USER" className="mb-2">
        <option value="USER">User</option> <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>{" "}
        <option value="STUDENT">Student</option>
      </FormControl>

            <Link
        id="wd-signin-btn"
        href="/Account/Profile"
        className="btn btn-danger w-100 mb-2"
      >
        Signout{" "}
      </Link>
    </div>
  );
}
