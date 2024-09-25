import arrow from "../../assets/Images/png/arrow.png";
import quote from "../../assets/Images/png/get_a_quote.png";
import signUp from "../../assets/Images/png/sign_up.png";
import styles from "./Header.module.css";
export default function Header() {
  return (
    <header className={styles.header}>
      <section>
        <img src={arrow} alt="arrow" className="arrow" />
        <h1>Crazy Bills?</h1>
        <p>
          Worry no more! We offer high quality prints{" "}
          <strong>at production rates.</strong>
        </p>
      </section>

      <div className="">
        <a href="#">
          <div className="">
            <img src={quote} alt="quote" />
            <p className="">Get a Quote</p>
          </div>
        </a>
        <a href="#">
          <div className="d-flex header_container_cta">
            <img src={signUp} alt="sign up" />
            <p className="sec-one-link">Sign Up</p>
          </div>
        </a>
      </div>
    </header>
  );
}
