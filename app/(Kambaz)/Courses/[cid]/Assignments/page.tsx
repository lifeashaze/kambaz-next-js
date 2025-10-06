import Link from "next/link";
import Button from "react-bootstrap/Button";
import { FormControl, ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical, BsSearch } from "react-icons/bs";
import { LuNotebookPen } from "react-icons/lu";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import LessonControlButtons from "../Modules/LessonControlButtons";

export default function Assignments() {
  return (
    <div>
      <div className="d-flex justify-content-between mb-3">
        <div className="position-relative">
          <BsSearch className="position-absolute mt-3 ms-3 fs-6 text-secondary" />
          <FormControl
            type="text"
            placeholder="Search..."
            className="ps-5 pe-3"
            style={{ width: "300px" }}
          />
        </div>
        <div className="d-flex gap-2">
          <Button variant="light" className="border">
            <FaPlus className="me-1" /> Group
          </Button>
          <Button variant="danger">
            <FaPlus className="me-1" /> Assignment
          </Button>
        </div>
      </div>

      <ListGroup className="rounded-0" id="wd-modules">
        <ListGroupItem className="p-0 border border-secondary">
          <div className="d-flex justify-content-between align-items-center p-3 bg-light">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-4" />
              <span className="fw-bold">ASSIGNMENTS</span>
            </div>
            <div className="d-flex align-items-center gap-2">
              <span className="border rounded-pill px-3 py-1 small">
                40% of Total
              </span>
              <FaPlus />
              <IoEllipsisVertical />
            </div>
          </div>

          <ListGroup className="rounded-0">
            <ListGroupItem className="p-3 d-flex align-items-center border-start-0 border-end-0">
              <BsGripVertical className="me-2 fs-4 text-secondary" />
              <LuNotebookPen className="me-3 fs-4 text-success" />
              <div className="flex-grow-1">
                <Link
                  href="/Courses/1234/Assignments/123"
                  className="fw-bold text-dark text-decoration-none"
                >
                  A1
                </Link>
                <div className="small text-danger">
                  <span className="text-dark">Multiple Modules</span> | Not
                  available until May 6 at 12:00am |
                </div>
                <div className="small text-secondary">
                  Due May 13 at 11:59pm | 100 pts
                </div>
              </div>
              <LessonControlButtons />
            </ListGroupItem>

            <ListGroupItem className="p-3 d-flex align-items-center border-start-0 border-end-0">
              <BsGripVertical className="me-2 fs-4 text-secondary" />
              <LuNotebookPen className="me-3 fs-4 text-success" />
              <div className="flex-grow-1">
                <Link
                  href="/Courses/1234/Assignments/123"
                  className="fw-bold text-dark text-decoration-none"
                >
                  A2
                </Link>
                <div className="small text-danger">
                  <span className="text-dark">Multiple Modules</span> | Not
                  available until May 13 at 12:00am |
                </div>
                <div className="small text-secondary">
                  Due May 20 at 11:59pm | 100 pts
                </div>
              </div>
              <LessonControlButtons />
            </ListGroupItem>

            <ListGroupItem className="p-3 d-flex align-items-center border-start-0 border-end-0">
              <BsGripVertical className="me-2 fs-4 text-secondary" />
              <LuNotebookPen className="me-3 fs-4 text-success" />
              <div className="flex-grow-1">
                <Link
                  href="/Courses/1234/Assignments/123"
                  className="fw-bold text-dark text-decoration-none"
                >
                  A3
                </Link>
                <div className="small text-danger">
                  <span className="text-dark">Multiple Modules</span> | Not
                  available until May 20 at 12:00am |
                </div>
                <div className="small text-secondary">
                  Due May 27 at 11:59pm | 100 pts
                </div>
              </div>
              <LessonControlButtons />
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}
