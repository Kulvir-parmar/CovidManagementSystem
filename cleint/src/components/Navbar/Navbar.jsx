import {
  Nav,
  Navbar,
  NavItem,
  NavbarBrand,
  NavLink,
  Collapse,
  NavbarToggler,
} from "reactstrap";

function NavbarComponent() {
  return (
    <div>
  <Navbar
    dark
    expand="md"
    style={{
      background:"#353535"
    }}>
    <NavbarBrand href="/"
    style={{
      marginLeft:"5%"
    }}>
      CMS
    </NavbarBrand>
    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar>
      <Nav
        className="me-auto"
        navbar 
      >
        <NavItem>
          <NavLink href="/hospital">
            Hospital
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/oxygen">
            Oxygen
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/plasma">
            Plasma
          </NavLink>
        </NavItem>
      </Nav>
    </Collapse>
  </Navbar>
</div>

  )
}
export default NavbarComponent