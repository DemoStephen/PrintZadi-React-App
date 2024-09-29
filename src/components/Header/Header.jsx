import arrow from "../../assets/Images/png/arrow.png";
import quote from "../../assets/Images/png/get_a_quote.png";
import signUp from "../../assets/Images/png/sign_up.png";
import styles from "./Header.module.css";
export default function Header() {
  return (
    <header className={styles.header}>
      <section className={styles.header_text}>
        <img src={arrow} alt="arrow" className="arrow" />
        <h1>Crazy Bills?</h1>
        <p>
          Worry no more! We offer high quality prints{" "}
          <strong>at production rates.</strong>
        </p>
      </section>

      <div className={styles.header_cta}>
        <a href="#">
          <div className={styles.header_ctas}>
            <img src={quote} alt="quote" />
            <p>Get a Quote</p>
          </div>
        </a>
        <a href="#">
          <div className={styles.header_ctas}>
            <img src={signUp} alt="sign up" />
            <p>Sign Up</p>
          </div>
        </a>
      </div>
    </header>
  );
}
