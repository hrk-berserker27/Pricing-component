import Head from "next/head";
export default function App() {
  return (
    <>
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./images/favicon-32x32.png"
        ></link>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="This is Pricing component" />
        <meta
          name="keywords"
          content="Next.js,react,javascript,SASS,SCSS,CSS,HTML-5,Progressive-Web-app"
        />
        <title>Frontend Mentor | Interactive pricing component</title>
      </Head>
      <main>
        <header>
          <h1>Simple, traffic-based pricing</h1>
          <p>Sign-up for our 30-day trial.No credit card required.</p>
        </header>
        <section>
          <header>
            <span>100K Pageviews</span> <span>$16.00 /month </span>
          </header>
          <p className="slider-container">
            Monthly Billing <div className="slider"></div>Yearly Billing
            <span>25% discount</span>
          </p>
          <footer>
            <div className="features">
              <span>Unlimited websites </span>
              <span>100% data ownership</span>
              <span>Email reports</span>
            </div>
            <div className="button-container">
              <button>Start my trial</button>
            </div>
          </footer>
        </section>
      </main>
    </>
  );
}
