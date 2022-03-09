import background from '../public/images/bg-header-desktop.svg'

const styles = {
    backgroundImage: `url(${background})`,
    backgroundColor: "hsl(180, 29%, 50%)",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '10vh',
}

const NavBar =()=>
    <nav style={styles}>
        &nbsp;
    </nav>

export default NavBar;