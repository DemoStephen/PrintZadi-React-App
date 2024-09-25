import logo_dark from "../../assets/Images/png/logo.png";
import basket from "../../assets/Images/png/shopping_cart.png";
import get_quote from "../../assets/Images/png/quote.png";
import styles from "./Navigation.module.css";
export default function Navigation() {
  return (
    <nav className={`${styles.nav} ${styles.d_flex}`}>
      <div className={styles.logo}>
        <a href="./index.html">
          <img src={logo_dark} alt="Print Zadi" />
        </a>
      </div>

      <div className={`${styles.d_flex} ${styles.desktopCTA}`}>
        <ul className={`${styles.d_flex} ${styles.gap}`}>
          <li>
            <a href="#">All items</a>
          </li>
          <li>
            <a href="#">Hire a Designer</a>
          </li>
          <li>
            <a href="#">Sign Up</a>
          </li>
          <li>
            <a href="#">Sign In</a>
          </li>
        </ul>

        <div className={`${styles.d_flex} ${styles.get_quote}`}>
          <a href="#">
            <div className={`${styles.get_a_quote} ${styles.d_flex}`}>
              <img src={get_quote} alt="get a quote" />
              <span>
                Get a<br />
                Quote
              </span>
            </div>
          </a>
          <hr />
          <a href="#">
            <div className={styles.get_a_quote}>
              <span>
                Here to help: <br />
                <strong>+2349086125352</strong>
              </span>
            </div>
          </a>
        </div>

        <div className={styles.basket}>
          <a href="#">
            <img src={basket} alt="basket" />
          </a>
        </div>
      </div>

      <div className={styles.hamburger}>
        <label>
          <input type="checkbox" />
          <svg viewBox="0 0 32 32">
            <path
              className={`${styles.line} ${styles.line_top_bottom}`}
              d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
            ></path>
            <path className={styles.line} d="M7 16 27 16"></path>
          </svg>
        </label>
      </div>
    </nav>
  );
}
