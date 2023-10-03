import { NavLink } from 'react-router-dom'



export const Nav = () => {

    const navArray = [
        { Link: "/", page: "Home" },
        { Link: "/characters", page: "characters" },
      ];


    return (
        <nav>
            <ul>
            {navArray.map((item, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={item.Link}
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "#D97852" : "#524641",
                    };
                  }}
                >
                  {item.page}
                </NavLink>
              </li>
            );
          })}
            </ul>
        </nav>
    )

}