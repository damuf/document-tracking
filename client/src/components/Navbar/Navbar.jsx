import { Link, useMatch, useResolvedPath } from "react-router-dom"
import "./Navbar.css";

export default function Navbar() {
  return (
      <nav className="nav" style={{userSelect: "none"}}>
        <Link to="*/home" className="site-title" style={{textShadow: 'red -2px 0, cyan 2px 0'}}>
          Document Tracking
        </Link>
        <ul className='ul'>
          <CustomLink to="*/empresas">Empresas</CustomLink>
          <CustomLink to="*/empleados">Empleados</CustomLink>
          <CustomLink to="*/documentos">Documentos</CustomLink>
          <CustomLink to="*/casos">Casos</CustomLink>
          <CustomLink to="*/parametros">Parametros</CustomLink>

        </ul>
      </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}