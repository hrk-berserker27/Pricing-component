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
            <div className="bar"></div>
            <span className="svg-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="-2 0 55 40"
              >
                <g fill="#80FFF3" fillRule="evenodd">
                  <path d="M16 2.558v7.884a1 1 0 001.735.679l3.639-3.943a1 1 0 000-1.356l-3.64-3.943A1 1 0 0016 2.558zM6 2.558v7.884a1 1 0 01-1.735.679L.626 7.178a1 1 0 010-1.356l3.64-3.943A1 1 0 016 2.558z" />
                </g>
              </svg>
            </span>
          </div>
          <div className="toggle-container">
            <span>Monthly Billing</span>
            <div className="toggle">
              <div className="circle"></div>
            </div>
            <div className="slider"></div>
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
