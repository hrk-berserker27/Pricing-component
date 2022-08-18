import Head from "next/head";
export default function App() {
  const handleChange = () => {
    console.log("hello");
  };
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
        <header className="main-header">
          <h1>Simple, traffic-based pricing</h1>
          <div className="content-container">
            <p>Sign-up for our 30-day trial.</p>
            <p>No credit card required.</p>
          </div>
        </header>
        <section className="slider-section">
          <header>
            <span>100K Pageviews</span>
            <span className="price-container">
              <span className="price">$16.00</span>
              <span>&nbsp;/&nbsp;month</span>
            </span>
          </header>
          <div className="slider">
            <input type="range" onChange={handleChange} />
          </div>
          <div className="toggle-container">
            <span>Monthly Billing</span>
            <div className="toggle">
              <div className="circle"></div>
            </div>
            <span className="billing">Yearly Billing</span>
            <span className="discount">-25%</span>
          </div>
          <footer>
            <div className="features">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="-4 -9 10 25"
                >
                  <path
                    fill="none"
                    stroke="#10D8C4"
                    strokeWidth="2"
                    d="M1 4.134l1.907 1.908L7.949 1"
                  />
                </svg>
                Unlimited websites
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="-4 -9 10 25"
                >
                  <path
                    fill="none"
                    stroke="#10D8C4"
                    strokeWidth="2"
                    d="M1 4.134l1.907 1.908L7.949 1"
                  />
                </svg>
                100% data ownership
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="-4 -9 10 25"
                >
                  <path
                    fill="none"
                    stroke="#10D8C4"
                    strokeWidth="2"
                    d="M1 4.134l1.907 1.908L7.949 1"
                  />
                </svg>
                Email reports
              </span>
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
