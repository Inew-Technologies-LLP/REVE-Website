import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-5xl font-bold mb-4">404</h1>

      <p className="text-lg mb-6">
        Page not found
      </p>

      <Link
        to="/"
        className="bg-black text-white px-6 py-3 font-medium hover:bg-gray-800 transition"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;