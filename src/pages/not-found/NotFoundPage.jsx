import { Link } from "react-router-dom";
import './NotFoundPage.scss';

export default function NotFoundPage() {
  return (
    <div className="not-found">
      <span className="not-found-code">404</span>

      <h1 className="not-found-title">Page Not Found</h1>

      <p className="not-found-description">
        The route you are trying to access does not exist or has been moved.
      </p>

      <Link to="/" className="not-found-link">
        Return to GlobeTech Home
      </Link>
    </div>

  );
}
