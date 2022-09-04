import Link from "next/link";
function Navbar() {
  return (
    <div className="navbar">
      <h1 className="navbar__title">Board Masters</h1>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/games">
            <a>Games</a>
          </Link>
        </li>
        {/* <li>
          <Link>
            <button className="navbar__cta">
              <a>Get Started</a>
            </button>
          </Link>
        </li> */}
      </ul>
    </div>
  );
}

export default Navbar;
