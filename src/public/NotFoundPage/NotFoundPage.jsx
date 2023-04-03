import * as React from "react";
import "./NotFoundPage.css";
import {useEffect} from "react";
import {useNavigate} from "react-router";
function NotFoundPage() {

  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 500);
  }, []);

  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <h1>Oops!</h1>
          <h2>404 - The Page can&quott be found</h2>
        </div>
        <a href="/">Go TO Homepage</a>
      </div>
    </div>
  );
}
export default NotFoundPage;
