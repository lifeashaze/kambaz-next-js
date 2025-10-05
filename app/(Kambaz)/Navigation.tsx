import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaComputer, FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import { BiBook, BiCalendar } from "react-icons/bi";
import { PiPrinter } from "react-icons/pi";
export default function KambazNavigation() {
  return (
    <ListGroup
      className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
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
        <Image src="/neu.png" width={90} height={90} alt={""} />
      </ListGroupItem>

      <br />

      <ListGroupItem className="border-0 bg-black text-center">
        <Link
          href="/Account"
          id="wd-account-link"
          className="text-white text-decoration-none"
        >
          <FaRegCircleUser className="fs-1 text-white" />
          <br />
          Account
        </Link>
      </ListGroupItem>

      <br />

      <ListGroupItem className="border-0 bg-white text-center">
        <Link
          href="/Dashboard"
          id="wd-dashboard-link"
          className="text-danger text-decoration-none"
        >
          <AiOutlineDashboard className="fs-1 text-danger" />
          <br />
          Dashboard
        </Link>
      </ListGroupItem>

      <br />

      <ListGroupItem className="border-0 bg-black text-center">
        <Link
          href="/Courses/1234"
          id="wd-courses-link"
          className="text-white text-decoration-none"
        >
          <BiBook className="fs-1 text-danger" />
          <br />
          Courses
        </Link>
      </ListGroupItem>

      <br />

      <ListGroupItem className="border-0 bg-black text-center">
        <Link
          href="/Calendar"
          id="wd-calendar-link"
          className="text-white text-decoration-none"
        >
          <BiCalendar className="fs-1 text-danger" />
          <br />
          Calendar
        </Link>
      </ListGroupItem>

      <br />

      <ListGroupItem className="border-0 bg-black text-center">
        <Link
          href="/Inbox"
          id="wd-inbox-link"
          className="text-white text-decoration-none"
        >
          <PiPrinter className="fs-1 text-danger" />
          <br />
          Inbox
        </Link>
      </ListGroupItem>

      <br />

      <ListGroupItem className="border-0 bg-black text-center">
        <Link
          href="/Labs"
          id="wd-courses-link"
          className="text-white text-decoration-none"
        >
          <FaComputer className="fs-1 text-danger" />
          <br />
          Labs
        </Link>
      </ListGroupItem>

      <br />
    </ListGroup>
  );
}
