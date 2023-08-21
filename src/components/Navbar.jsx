import { headerLogo } from '../assets/images';
import { navLinks } from '../constants';
import { hamburger } from '../assets/icons';


const Navbar = () => {
  navLinks
  return (
    <header className='padding-x py-8 w-full x-10 relative'>
      <nav className='flex justify-between items-center max-container'>
        <a href="#">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((navLink) => (
            <li key={navLink.label}>
              <a href={navLink.href} className='font-montserrat leading-normal text-lg text-slate-gray'>
                {navLink.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='hidden max-lg:block'>
          <img src={hamburger} width={25} height={25} alt='Hamburger' />
        </div>
      </nav>
    </header>
  )
}

export default Navbar