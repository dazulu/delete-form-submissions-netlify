import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="honeypot"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input
            type="hidden"
            name="honeypot"
            tabIndex={-1}
            autoComplete="off"
          />
          <p>
            <label>
              Your Name: <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type="email" name="email" />
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name="message"></textarea>
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </main>
    </div>
  );
}
