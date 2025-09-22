export default function AssignmentEditor() {
  return (
    <div>
      <p><b>Assignment Name</b></p>
      <table id="wd-assignments-editor" cellPadding={8}>
        <tbody>
          <tr>
            <td colSpan={4}>
              <input id="wd-name" defaultValue="A1 - ENV + HTML" size={40} />
            </td>
          </tr>

          <tr>
            <td colSpan={4}>
              <textarea
                id="wd-description"
                rows={4}
                cols={50}
                defaultValue="The assignment is available online."
              />
            </td>
          </tr>

          <tr>
            <td align="right">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" defaultValue={100} />
            </td>
          </tr>

          <tr>
            <td align="right">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                <option value="EXAMS">EXAMS</option>
              </select>
            </td>
          </tr>

          <tr>
            <td align="right">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as">
                <option value="PERCENTAGE">Percentage</option>
                <option value="GRADE">Grade</option>
              </select>
            </td>
          </tr>

          <tr>
            <td align="right">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type">
                <option value="ONLINE">Online</option>
                <option value="OFFLINE">Offline</option>
              </select>
            </td>
          </tr>

          <tr>
            <td align="right"></td>
            <td>
              <label htmlFor="">Only Entry Options</label>
              <br />
              <input type="checkbox" name="check-entry" id="wd-text-entry" />
              <label htmlFor="wd-text-entry">Text Entry</label>
              <br />
              <input type="checkbox" name="check-entry" id="wd-website-url" />
              <label htmlFor="wd-website-url">Website URL</label>
              <br />
              <input
                type="checkbox"
                name="check-entry"
                id="wd-media-recordings"
              />
              <label htmlFor="wd-media-recordings">Media Recordings</label>
              <br />
              <input
                type="checkbox"
                name="check-entry"
                id="wd-student-annotation"
              />
              <label htmlFor="wd-student-annotation">Student Annotation</label>
              <br />
              <input type="checkbox" name="check-entry" id="wd-file-upload" />
              <label htmlFor="wd-file-upload">File Uploads</label>
            </td>
          </tr>

          <tr>
            <td align="right">
              <label htmlFor="wd-assign-to">Assign</label>
            </td>
            <td>
              <label htmlFor="wd-assign-to">Assign to</label>
              <br />
              <input id="wd-assign-to" type="text" defaultValue="Everyone" />
            </td>
          </tr>

          <tr>
            <td align="right"></td>
            <td>
              <label htmlFor="">Due</label>
              <br />
              <input id="wd-due-date" type="date" defaultValue="2025-09-22" />
            </td>
          </tr>

          <tr>
            <td align="right"></td>
            <td>
              <label htmlFor="">Available from</label>
              <br />
              <input
                id="wd-available-from"
                type="date"
                defaultValue="2025-09-12"
              />
            </td>
            <td>
              <label htmlFor="">Until</label>
              <br />
              <input
                id="wd-available-until"
                type="date"
                defaultValue="2025-09-22"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <hr />

      <button>Cancel</button>
      <button>Save</button>
    </div>
  );
}
