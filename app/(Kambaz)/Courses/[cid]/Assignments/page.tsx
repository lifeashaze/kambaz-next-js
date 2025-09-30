import Link from "next/link";
import Button from "react-bootstrap/Button";
import { FormControl, ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical, BsSearch } from "react-icons/bs";
import { LuNotebookPen } from "react-icons/lu";
import LessonControlButtons from "../Modules/LessonControlButtons";

export default function Assignments() {
  return (
    <div>

      <div className="d-flex justify-content-between ">
        <div>
          <BsSearch className="position-absolute mt-3 ms-4 fs-6 text-secondary" />
          <FormControl type="text" placeholder="Search..." className="ms-2 px-5" size="lg" />
        </div>
        <div className="mb-5 d-flex justify-content-end gap-2">
          <Button variant="light" size="lg">
            + Group
          </Button>
          <Button variant="danger" size="lg">
            + Assignment
          </Button>
        </div>
      </div>

      <ListGroup className="rounded-0" id="wd-modules">
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" /> ASSIGNMENTS
          </div>

          <ListGroup className="wd-lessons rounded-0">
            <ListGroupItem className="wd-assignment p-4 ps-1 d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />{" "}
              <LuNotebookPen className="me-2 fs-5 text-success" />
              <div>
                <span className="fw-bold">A1</span>
              </div>
              <LessonControlButtons />
            </ListGroupItem>

            <ListGroupItem className="wd-assignment p-4 ps-1 d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />{" "}
              <LuNotebookPen className="me-2 fs-5 text-success" />
              <div>
                <span className="fw-bold">A2</span>
              </div>
              <LessonControlButtons />
            </ListGroupItem>

            <ListGroupItem className="wd-assignment p-4 ps-1 d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />{" "}
              <LuNotebookPen className="me-2 fs-5 text-success" />
              <div className="d-flex align-items-center">
                <span className="fw-bold">A3</span>
              </div>
              <LessonControlButtons />
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}
