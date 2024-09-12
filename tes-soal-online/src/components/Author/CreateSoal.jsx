import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import menu from '../../assets/menu.png';

const CreateSoal = () => {
  return (
    <div className="fixed top-0 w-full bg-biru text-black shadow-md h-16">
      <div className="container pv-2 sm:py-0">
        <div className="flex items-center justify-between">
            <Link to="/" onClick={() => window.scrollTo(0,0)}>
            <img src={menu} alt= "menu" className="h-8 absolute left-4 ml-0 mt-4"/></Link>
          </div>
          <div className="mr-10">
            <Link to="/" onClick={() => window.scrollTo(0,0)}>
            <img src={logo} alt="logo" className="h-8 absolute left-8 ml-10 mt-4"/>
            </Link>
            </div>
          </div>
          <div className="fixed top-16 w-full bg-birumuda h-10">
          <div className="container pv-2 sm:py-0 w-full">
            <div className="flex items-center justify-between">
              <div className="grid grid-cols-2 gap-2">
                <NavLink to="/create-soal">
                  <button className="bg-birumuda border border-birumuda text-black hover:bg-abumuda py-2 px-4 rounded text-xs mt-1 w-auto">
                    Buat Soal
                  </button>
                  </NavLink>
                  <buttton className="bg-birumuda border border-birumuda text-black hover:bg-abumuda py-2 px-4 rounded text-xs mt-1 ml-12 w-auto">
                    Publish Soal
                  </buttton>
                  <button className="bg-birumuda border border-birumuda text-black hover:bg-abumuda py-2 px-4 rounded text-xs mt-1 ml-24">
                    Analisis
                  </button>
              </div>
            </div>
          </div>
        </div>
        </div>
    
    
  )
}

export default CreateSoal
