import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();  // Get the current location from react-router-dom
  const pathnames = location.pathname.split('/').filter((x) => x);  // Split the path into segments

  return (
    <nav className="bg-gray-200 h-10 px-10 flex items-center">
      <ul className="flex items-center space-x-2 text-sm text-gray-700">
        <li>
          <Link to="/" className="hover:text-blue-600 ">
            Home
          </Link>
        </li>
        {pathnames.map((segment, index) => {
          // Construct the path for each segment
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;

          return (
            <React.Fragment key={to}>
              <li className="mx-2">{"<<"}</li>
              <li>
                {index === pathnames.length - 1 ? (
                  // Last segment is the current page, displayed as text
                  <span className="text-gray-500">{segment}</span>
                ) : (
                  // Other segments are clickable links
                  <Link to={to} className="hover:text-blue-600">
                    {segment}
                  </Link>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
