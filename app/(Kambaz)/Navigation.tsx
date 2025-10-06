import { AiOutlineDashboard } from "react-icons/ai";
import { FaComputer, FaGithub, FaRegCircleUser } from "react-icons/fa6";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import { BiBook, BiCalendar } from "react-icons/bi";
import { PiPrinter } from "react-icons/pi";


export default function KambazNavigation() {
  return (
    <ListGroup
      className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-flex flex-column align-items-center justify-content-start bg-black overflow-auto"
      style={{ width: 120 }}
      id="wd-kambaz-navigation"
    >
      <ListGroupItem
        className="bg-black border-0 text-center"
        as="a"
        target="_blank"
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
      >
        <Image
          src="/neu.png"
          width={60}
          height={60}
          alt="Northeastern University"
        />
      </ListGroupItem>

      <ListGroupItem className="border-0 bg-black text-center">
        <Link
          href="/Account"
          id="wd-account-link"
          className="text-white text-decoration-none d-flex flex-column align-items-center gap-1"
        >
          <FaRegCircleUser className="icon text-white" />
          <span>Account</span>
        </Link>
      </ListGroupItem>

      <ListGroupItem className="border-0 bg-white text-center">
        <Link
          href="/Dashboard"
          id="wd-dashboard-link"
          className="text-danger text-decoration-none d-flex flex-column align-items-center gap-1"
        >
          <AiOutlineDashboard className="icon text-danger" />
          <span>Dashboard</span>
        </Link>
      </ListGroupItem>

      <ListGroupItem className="border-0 bg-black text-center">
        <Link
          href="/Courses/1234"
          id="wd-courses-link"
          className="text-white text-decoration-none d-flex flex-column align-items-center gap-1"
        >
          <BiBook className="icon text-danger" />
          <span>Courses</span>
        </Link>
      </ListGroupItem>

      <ListGroupItem className="border-0 bg-black text-center">
        <Link
          href="/Calendar"
          id="wd-calendar-link"
          className="text-white text-decoration-none d-flex flex-column align-items-center gap-1"
        >
          <BiCalendar className="icon text-danger" />
          <span>Calendar</span>
        </Link>
      </ListGroupItem>

      <ListGroupItem className="border-0 bg-black text-center">
        <Link
          href="/Inbox"
          id="wd-inbox-link"
          className="text-white text-decoration-none d-flex flex-column align-items-center gap-1"
        >
          <PiPrinter className="icon text-danger" />
          <span>Inbox</span>
        </Link>
      </ListGroupItem>

      <ListGroupItem className="border-0 bg-black text-center">
        <Link
          href="/Labs"
          id="wd-labs-link"
          className="text-white text-decoration-none d-flex flex-column align-items-center gap-1"
        >
          <FaComputer className="icon text-danger" />
          <span>Labs</span>
        </Link>
      </ListGroupItem>

      <ListGroupItem className="border-0 bg-black text-center">
        <Link
          href="https://github.com/lifeashaze/kambaz-next-js/tree/a2"
          id="wd-labs-link"
          className="text-white text-decoration-none d-flex flex-column align-items-center gap-1"
        >
          <FaGithub className="icon text-danger" />
          <span>GitHub Repo</span>
        </Link>
      </ListGroupItem>
    </ListGroup>
  );
}
