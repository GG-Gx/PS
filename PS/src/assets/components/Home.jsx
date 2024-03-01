import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleHover = (item) => {
    setHoveredItem(item);
  };

  const menuItems = [
    { name: "MUSIC", backgroundImg: "url(https://scontent-fra5-2.xx.fbcdn.net/v/t39.30808-6/311872584_10160241852224731_2063002137831321654_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=3635dc&_nc_ohc=osQ1uwFGgJ8AX8T-eRL&_nc_ht=scontent-fra5-2.xx&oh=00_AfCKApg-mTdiH1vBqrdqfW_Sk7_pLPD6fHNuGX5PrEnDdQ&oe=65E70207)" },
    { name: "PERFO", backgroundImg: "url('https://scontent-fra5-2.xx.fbcdn.net/v/t39.30808-6/406589341_10161107473779731_241255903474402343_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=3635dc&_nc_ohc=N5pgS2M_EccAX_Rqy7b&_nc_ht=scontent-fra5-2.xx&oh=00_AfCLUkzP2XPkXSy0kTdCLwJTURxA_rjoZk9BtXq8icRolQ&oe=65E7A732')" },
    { name: "CELLO", backgroundImg: "url('https://scontent-fra5-2.xx.fbcdn.net/v/t39.30808-6/395726655_10161041576174731_7098652524167306472_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=vmOb9fRDgcYAX9dbTkL&_nc_ht=scontent-fra5-2.xx&oh=00_AfCT5Zy1KT3tbGAH1_t6OO68nQj6BjfDhnZa4xT-GjY5wQ&oe=65E7940F')" },
    // Add more menu items as needed
  ];

  return (
    <>
      <div className="home" style={{backgroundImage: hoveredItem ? hoveredItem.backgroundImg : ''}}>
        <div className='navBar'>
          <div className='divleft'><Link to="/">PAULA SANCHEZ</Link></div>
          <div className='divcenter'>
            <a onClick={toggleMenu}>WORK</a>
            {isMenuOpen && (
              <div className="menuwork">
                {menuItems.map((menuItem, index) => (
                  <Link 
                    key={index}
                    onMouseEnter={() => handleHover(menuItem)} 
                    onMouseLeave={() => handleHover(null)} 
                    to={`/work/${menuItem.name.toLowerCase()}`}
                  >
                    {menuItem.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <div className='divright'><Link to="/about">ABOUT</Link></div>
          
        </div>
      </div>
    </>
  );
};

export default Home;
