import {
  HomeIcon,
  UserIcon,
  DocumentTextIcon,
  BriefcaseIcon,
  CogIcon,
  EnvelopeIcon,
  ChevronDownIcon, 
} from '@heroicons/react/24/solid';

const Sidebar = () => {
  return (
    <div className="bg-gray-900 text-white w-64 h-screen p-8">
      <div className="flex flex-col items-center">
        <img
          src="https://via.placeholder.com/100" // Reemplaza con la URL de tu imagen
          alt="Profile"
          className="rounded-full w-24 h-24 mb-4"
        />
        <h1 className="text-2xl font-semibold">Michelle Perez</h1>
        <p className="text-sm text-gray-400">I'm Developer</p>
        <div className="flex mt-4 space-x-3">
          {/* Reemplaza los íconos de redes sociales con enlaces o imágenes si es necesario */}
        </div>
      </div>
      <nav className="mt-10">
        <a href="#" className="flex items-center py-2.5 px-4 rounded hover:bg-gray-700">
          <HomeIcon className="h-5 w-5 mr-3" />
          Home
        </a>
        <a href="#" className="flex items-center py-2.5 px-4 rounded hover:bg-gray-700">
          <UserIcon className="h-5 w-5 mr-3" />
          About
        </a>
        <a href="#" className="flex items-center py-2.5 px-4 rounded hover:bg-gray-700">
          <DocumentTextIcon className="h-5 w-5 mr-3" />
          Resume
        </a>
        <a href="#" className="flex items-center py-2.5 px-4 rounded hover:bg-gray-700">
          <BriefcaseIcon className="h-5 w-5 mr-3" />
          Portfolio
        </a>
        <a href="#" className="flex items-center py-2.5 px-4 rounded hover:bg-gray-700">
          <CogIcon className="h-5 w-5 mr-3" />
          Services
        </a>
        <div className="relative group">
          <a href="#" className="flex items-center py-2.5 px-4 rounded hover:bg-gray-700">
            <ChevronDownIcon className="h-5 w-5 mr-3" />
            Dropdown
          </a>
          <div className="absolute hidden group-hover:block bg-gray-800 w-full">
            <a href="#" className="block py-2.5 px-4 hover:bg-gray-700">Submenu 1</a>
            <a href="#" className="block py-2.5 px-4 hover:bg-gray-700">Submenu 2</a>
          </div>
        </div>
        <a href="#" className="flex items-center py-2.5 px-4 rounded hover:bg-gray-700">
          <EnvelopeIcon className="h-5 w-5 mr-3" />
          Contact
        </a>
      </nav>
    </div>
  );
}

export default Sidebar;
