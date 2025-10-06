import {
  FormControl,
  FormLabel,
  FormSelect,
  FormCheck,
  Button,
} from "react-bootstrap";

export default function AssignmentEditor() {
  return (
    <div className="container mt-4">
      <div className="mb-3">
        <FormLabel>Assignment Name</FormLabel>
        <FormControl type="text" defaultValue="A1" />
      </div>

      <div className="mb-3">
        <FormControl
          as="textarea"
          rows={8}
          defaultValue={`The assignment is available online`}
        />
      </div>

      <div className="row mb-3">
        <div className="col-3 text-end">
          <FormLabel className="mt-2">Points</FormLabel>
        </div>
        <div className="col-9">
          <FormControl type="number" defaultValue={100} />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-3 text-end">
          <FormLabel className="mt-2">Assignment Group</FormLabel>
        </div>
        <div className="col-9">
          <FormSelect defaultValue="ASSIGNMENTS">
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            <option value="EXAMS">EXAMS</option>
          </FormSelect>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-3 text-end">
          <FormLabel className="mt-2">Display Grade as</FormLabel>
        </div>
        <div className="col-9">
          <FormSelect defaultValue="Percentage">
            <option value="Percentage">Percentage</option>
            <option value="Grade">Grade</option>
          </FormSelect>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-3 text-end">
          <FormLabel className="mt-2">Submission Type</FormLabel>
        </div>
        <div className="col-9">
          <div className="border rounded p-3">
            <FormSelect defaultValue="Online" className="mb-3">
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </FormSelect>

            <div>
              <FormLabel className="fw-bold mb-2">
                Online Entry Options
              </FormLabel>
              <FormCheck
                type="checkbox"
                id="text-entry"
                label="Text Entry"
                className="mb-2"
              />
              <FormCheck
                type="checkbox"
                id="website-url"
                label="Website URL"
                className="mb-2"
              />
              <FormCheck
                type="checkbox"
                id="media-recordings"
                label="Media Recordings"
                className="mb-2"
              />
              <FormCheck
                type="checkbox"
                id="student-annotation"
                label="Student Annotation"
                className="mb-2"
              />
              <FormCheck
                type="checkbox"
                id="file-uploads"
                label="File Uploads"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-3 text-end">
          <FormLabel className="mt-2">Assign</FormLabel>
        </div>
        <div className="col-9">
          <div className="border rounded p-3">
            <div className="mb-3">
              <FormLabel className="fw-bold">Assign to</FormLabel>
              <FormControl type="text" defaultValue="Everyone" />
            </div>

            <div className="mb-3">
              <FormLabel className="fw-bold">Due</FormLabel>
              <FormControl
                type="datetime-local"
                defaultValue="2025-09-22T23:59"
              />
            </div>

            <div className="row">
              <div className="col-6">
                <div>
                  <FormLabel className="fw-bold">Available from</FormLabel>
                  <FormControl
                    type="datetime-local"
                    defaultValue="2025-09-12T12:00"
                  />
                </div>
              </div>
              <div className="col-6">
                <div>
                  <FormLabel className="fw-bold">Until</FormLabel>
                  <FormControl
                    type="datetime-local"
                    defaultValue="2025-09-22T23:59"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="d-flex justify-content-end gap-2">
        <Button variant="light" className="border">
          Cancel
        </Button>
        <Button variant="danger">Save</Button>
      </div>
    </div>
  );
}
