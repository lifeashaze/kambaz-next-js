import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (4)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image
              src="/react-js.png"
              width={200}
              height={150}
              alt="react-js-boilerplate-image"
            />
            <div>
              <h5> CS1234 - React JS </h5>
              <p className="wd-dashboard-course-title">Course on ReactJS</p>
              <button> Go </button>
            </div>
          </Link>

          <Link href="/Courses/2345" className="wd-dashboard-course-link">
            <Image
              src="/mongodb.png"
              width={200}
              height={150}
              alt="mongo-db-boilerplate-image"
            />
            <div>
              <h5> CS2345 - MongoDB </h5>
              <p className="wd-dashboard-course-title">Course on MongoDB</p>
              <button> Go </button>
            </div>
          </Link>

          <Link href="/Courses/3456" className="wd-dashboard-course-link">
            <Image
              src="/vercel.webp"
              width={200}
              height={150}
              alt="vercel-boilerplate-image"
            />
            <div>
              <h5> CS3456 - Vercel </h5>
              <p className="wd-dashboard-course-title">Course on MongoDB </p>
              <button> Go </button>
            </div>
          </Link>

          <Link href="/Courses/4567" className="wd-dashboard-course-link">
            <Image
              src="/cloudflare.jpg"
              width={200}
              height={150}
              alt="cloudflare-boilerplate-image"
            />
            <div>
              <h5> CS4567 - Cloudflare </h5>
              <p className="wd-dashboard-course-title">Course on Cloudflare</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course"> ... </div>
        <div className="wd-dashboard-course"> ... </div>
      </div>
    </div>
  );
}
