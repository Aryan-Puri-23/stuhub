import { useState, useMemo, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../Components/Button';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = useCallback(() => {
    setMenuOpen(prev => !prev);
  }, []);

  const navLinks = useMemo(() => [
    { path: "/", label: "HOME" },
    { path: "/events", label: "EVENTS" },
    { path: "/clubs", label: "CLUBS" },
    { path: "/services", label: "SERVICES" }
  ], []);

  return (
    <>
      <div className="flex justify-between p-2 items-center border-b-2 border-gray-300">
        <div className="text-2xl">StuHub</div>

        <div className="hidden md:flex">
          <ul className="flex space-x-5 text-xl">
            {navLinks.map(({ path, label }) => (
              <li key={path}>
                <NavLink 
                  to={path} 
                  className={({ isActive }) => `hover:underline hover:decoration-1 hover:underline-offset-4 ${isActive ? 'underline decoration-2' : ''}`}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:flex">
          <Button style="p-2 mr-2 rounded hover:bg-blue-600" text="Sign In" />
          <Button style="p-2 rounded hover:bg-blue-600" text="Sign Up" />
        </div>

        <div className="md:hidden">
          <Button style="p-2 rounded" text="Menu" onClick={handleMenuToggle} />
        </div>
      </div>

      <div className={`md:hidden bg-gray-100 ${menuOpen ? 'block' : 'hidden'}`}>
        <ul className="flex gap-3 rounded w-auto absolute right-0 flex-col items-stretch text-xs border border-gray-400">
          {navLinks.map(({ path, label }) => (
            <li key={path}>
              <NavLink 
                to={path} 
                className={({ isActive }) => `hover:bg-gray-300 px-2 py-1 rounded w-full text-center ${isActive ? 'underline decoration-2' : ''}`}
              >
                {label}
              </NavLink>
            </li>
          ))}
          <li className='mr-2'>
            <Button style={"p-1 rounded text-sm"} text="Sign In" type="secondary" />
          </li>
          <li>
            <Button style={"p-1 rounded text-sm"} type="secondary" text="Sign Up" />
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;





// import { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import Button from '../Components/Button';

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const handleMenuToggle = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <>
//       <div className="flex justify-between p-2 items-center border-b-2 border-gray-300">
//         <div className="flex gap-1">
//           <div className='text-2xl'>StuHub</div>
//         </div>

//         <div className="hidden md:flex">
//           <ul className="flex space-x-5 text-xl">
//             <li>
//               <NavLink 
//                 to="/" 
//                 className={({ isActive }) => `hover:underline hover:decoration-1 hover:underline-offset-4 ${isActive ? 'underline decoration-2' : ''}`}
//               >
//                 HOME
//               </NavLink>
//             </li>
//             <li>
//               <NavLink 
//                 to="/events" 
//                 className={({ isActive }) => `hover:underline hover:decoration-1 hover:underline-offset-4 ${isActive ? 'underline decoration-2' : ''}`}
//               >
//                 EVENTS
//               </NavLink>
//             </li>
//             <li>
//               <NavLink 
//                 to="/clubs" 
//                 className={({ isActive }) => `hover:underline hover:decoration-1 hover:underline-offset-4 ${isActive ? 'underline decoration-2' : ''}`}
//               >
//                 CLUBS
//               </NavLink>
//             </li>
//             <li>
//               <NavLink 
//                 to="/services" 
//                 className={({ isActive }) => `hover:underline hover:decoration-1 hover:underline-offset-4 ${isActive ? 'underline decoration-2' : ''}`}
//               >
//                 SERVICES
//               </NavLink>
//             </li>
//           </ul>
//         </div>

//         <div className="hidden md:flex">
//           <Button style="p-2 mr-2 rounded hover:bg-blue-600" text="Sign In" />
//           <Button style="p-2 rounded hover:bg-blue-600" text="Sign Up" />
//         </div>

//         <div className="md:hidden">
//           <Button style="p-2 rounded" text="Menu" onClick={handleMenuToggle} />
//         </div>
//       </div>

//       <div className={`md:hidden bg-gray-100 ${menuOpen ? 'block' : 'hidden'}`}>
//         <ul className="flex gap-3 rounded w-auto absolute right-0 flex-col items-stretch text-xs border border-gray-400">
//           <li>
//             <NavLink 
//               to="/" 
//               className={({ isActive }) => `hover:bg-gray-200 px-2 py-1 rounded w-full text-center ${isActive ? 'underline decoration-2 ' : ''}`}
//             >
//               HOME
//             </NavLink>
//           </li>
//           <li>
//             <NavLink 
//               to="/events" 
//               className={({ isActive }) => `hover:bg-gray-300 px-2 py-1 rounded w-full text-center ${isActive ? 'underline decoration-2' : ''}`}
//             >
//               EVENTS
//             </NavLink>
//           </li>
//           <li>
//             <NavLink 
//               to="/clubs" 
//               className={({ isActive }) => `hover:bg-gray-300 px-2 py-1 rounded w-full text-center ${isActive ? 'underline decoration-2' : ''}`}
//             >
//               CLUBS
//             </NavLink>
//           </li>
//           <li>
//             <NavLink 
//               to="/services" 
//               className={({ isActive }) => `hover:bg-gray-300 px-2 py-1 rounded w-full text-center ${isActive ? 'underline decoration-2' : ''}`}
//             >
//               SERVICES
//             </NavLink>
//           </li>
//           <li className='mr-2'>
//             <Button style={"p-1 rounded text-sm"} text="Sign In" type="secondary" />
//           </li>
//           <li>
//             <Button style={"p-1 rounded text-sm"} type="secondary" text="Sign Up" />
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// }

// export default Navbar;