import {Link} from "react-router-dom"
import styles from "./NavBar.module.css"
const NavBar = () => {
return(
<div className={styles.container}>
<Link className={styles.link} to="/home">Home</Link>
<Link className={styles.link2}  to="/create">Crear Actividad</Link>
</div>
)}
export default NavBar