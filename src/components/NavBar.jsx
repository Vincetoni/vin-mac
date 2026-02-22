import { label } from "three/tsl"
import { navLinks } from "../../constants"

const NavBar = () => {
  return (
    <header>
      <nav>
        <img src="/logo.svg" alt="Apple logo"></img>

        <ul>
           {navLinks.map(({label}) =>(
            
            <li key={label}>
              <a href="{label}">{label}</a>
            </li>
          ))}
        </ul>
        <div className="flex-center gap-3"> 
           <button>
              <img src="/search.svg" alt="search"></img>
           </button>
           <button>
              <img src="/cart.svg" alt="cart"></img>
           </button>
        </div>
      </nav>
    </header>
  )
}

export default NavBar 
