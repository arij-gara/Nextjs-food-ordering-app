import Image from "next/image"
import styles from "../styles/Navbar.module.css"
import {useSelector} from "react-redux"
import Link from "next/link"
const  Navbar = ()=> {

  const quantity =useSelector(state =>state.cart.quantity)
    return (
      <div className={styles.container}>
        <div className={styles.item}>
          <div className={styles.callbutton}>
            <Image src="/img/telephone.png" alt="" width="32" height="32"/>
          </div>

          <div  className={styles.texts}>
            <div className={styles.text}>Order now</div>
            <div className={styles.text}>22344556</div>
          </div>
        </div>
        <div className={styles.item}>
          <ul className={styles.list}>
            <Link href="/" passHref>
              <li className={styles.listitem}>Homepage</li>
              </Link>
              <li className={styles.listitem}>Products</li>
              <li className={styles.listitem}>Menu</li>
              {/* <Image src="/img/logo.png" alt="" width="160" height="69" /> */}
              <span className={styles.span}>PIZZA</span>
              <li className={styles.listitem}>Events</li>
              <li className={styles.listitem}>Blog</li>
              <li className={styles.listitem}>Contact</li>
          </ul>
          </div>
          <Link href="/cart" passHref>
        <div className={styles.item}>
          <div className={styles.cart}>
            <Image src="/img/cart.png" width="30" height="30" />
            <div className={styles.counter}>{quantity}</div>
          </div>
          
        </div>
        </Link>
      </div>
    )
  }
  export default Navbar