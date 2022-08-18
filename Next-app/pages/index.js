import Head from "next/head";
import { useState } from "react";
export default function App() {
  const [defaultValue, setValue] = useState("3");

  const setTitle = (value) => {
    let views = "0";
    switch (value) {
      case "1":
        views = "10K";
        break;
      case "2":
        views = "50K";
        break;
      case "3":
        views = "100K";
        break;
      case "4":
        views = "500K";
        break;
      case "5":
        views = "1M";
        break;
      default:
        views = "100K";
    }
    return { __html: `${views} Pageviews` };
  };
  const setPrice = (value) => {
    let price = "0";
    switch (value) {
      case "1":
        price = "8";
        break;
      case "2":
        price = "12";
        break;
      case "3":
        price = "16";
        break;
      case "4":
        price = "24";
        break;
      case "5":
        price = "36";
        break;
      default:
        price = "16";
    }
    return { __html: `$${price}.00` };
  };
  const handleChange = (e) => {
    if (e !== undefined) {
      setValue(e.target.value);
    }
  };
  const handleClick = (e) => {
    if (document !== undefined) {
      const item = e.currentTarget.childNodes[0];
      item.classList.toggle("move");
    }
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
            <span
              id="title"
              dangerouslySetInnerHTML={setTitle(defaultValue)}
            ></span>
            <span className="price-container">
              <span
                className="price"
                dangerouslySetInnerHTML={setPrice(defaultValue)}
              ></span>
              <span>&nbsp;/&nbsp;month</span>
            </span>
          </header>
          <div className="slider">
            <input
              type="range"
              min={"1"}
              max={"5"}
              value={defaultValue}
              onChange={handleChange}
            />
          </div>
          <div className="toggle-container">
            <span>Monthly Billing</span>
            <div className="toggle" onClick={handleClick}>
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
