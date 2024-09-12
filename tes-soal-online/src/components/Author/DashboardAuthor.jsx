import { NavLink } from 'react-router-dom';

const DashboardAuthor = () => {
  return (
    <div>
      <h1>Welcome Author</h1>
      <NavLink 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        to="/create-soal">
        Buat Soal
      </NavLink>
    </div>
  );
}

export default DashboardAuthor;
