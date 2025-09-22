import Link from "next/link";
export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
      <input
        placeholder="username"
        className="wd-username"
        defaultValue="username"
      />
      <br />
      <input
        placeholder="password"
        type="password"
        className="wd-password"
        defaultValue="password"
      />
      <br />
      <input
        placeholder="verify password"
        type="password"
        className="wd-password-verify"
        defaultValue="password"
      />
      <br />
      <Link href="Profile"> Sign up </Link>
      <br />
      <Link href="/Account/SignIn"> Sign in </Link>
    </div>
  );
}
