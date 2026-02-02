import { Link } from "react-router-dom";

const Home = () => {
  const btn =
    "bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded w-full text-center";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg w-96 space-y-4">
        <h1 className="text-2xl text-white font-bold text-center mb-4">
          Vasundharaa Geo Technologies Pvt 
        </h1>

        <Link className={btn} to="/todo">  Todo App   </Link>
        <Link className={btn} to="/forms">  User Form  </Link>
        <Link className={btn} to="/progress">  Progress Bar </Link>
        <Link className={btn} to="/timer">  Timer </Link>
        <Link className={btn} to="/search">  Live Search </Link>
      </div>
    </div>
  );
};

export default Home;
