import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const { pathname } = useLocation();
  return (
    <div className="ml-10 mt-3">
      <Link to="/" className="mr-1 font-bold text-gray-200">
        Home
      </Link>
      <span>{pathname}</span>
    </div>
  );
};

export default Breadcrumbs;