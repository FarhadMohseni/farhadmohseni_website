import type { NextPage } from "next";
import Header from "../components/Header";
import styles from "../styles/Career.module.css";
import Head from "next/head";
const Career: NextPage<{ posts: any }> = ({ posts }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="This is the Farhad Mohseni's career history."
        />
        <meta name="theme-color" content="#ffdf64" />
        <meta name="og:type" content="article" />
        <meta name="og:title" content="Career profile | Farhad Mohseni" />

        <meta name="og:url" content="https://farhadmohseni.me/career/" />
        <meta
          name="og:description"
          content="This is the Farhad Mohseni's career history."
        />
        <title>Career profile | Farhad Mohseni</title>
      </Head>
      <div className={styles.main}>
        <Header dark={true} text="My Career Profile" />
        <div className={styles.histories}>
          <div className={styles.history_item}>
            <div className={styles.history_details}>
              <div className={styles.history_title}>
                <h1>Lead Developer</h1>
                <span>July 2020 - Present</span>
              </div>
              <p className={styles.history_company}>
                DalgaDev Inc. | SEO and Automation Company
              </p>
              <div className={styles.history_summary}>
                <ul>
                  <li>
                    <span> Built an algorithmic </span>
                    <strong>crypto-trading</strong>
                    <span> bot using </span>
                    <strong>NodeJS </strong>
                    <span>for the </span>
                    <strong>back-end </strong>
                    <span>and </span>
                    <strong>React </strong>
                    <span>for the </span>
                    <strong>front-end&nbsp;</strong>
                    <ul>
                      <li>
                        <span>
                          {" "}
                          Integrated the software with TradingView.com via{" "}
                        </span>
                        <strong>web-hooks </strong>
                        <span>for the price alerts</span>
                      </li>
                      <li>
                        <span>
                          {" "}
                          Added support for multiple exchanges and backed the
                          whole code with{" "}
                        </span>
                        <strong>unit-tests</strong>
                      </li>
                      <li>
                        <span> Developed a</span>
                        <strong> real-time</strong>
                        <span> logging system using </span>
                        <strong>web sockets </strong>
                        <span>and UI notifications with </span>
                        <strong>JQuery</strong>
                      </li>
                      <li>
                        <strong>
                          This resulted in 20 new customers for Dalga, some of
                          them making %300+ profits per month
                        </strong>
                      </li>
                    </ul>
                  </li>
                  <br />
                  <li>
                    <span>
                      {" "}
                      Led the design and development of the company&rsquo;s
                      commercial product, a{" "}
                    </span>
                    <strong>website traffic optimizer</strong>
                    <ul>
                      <li>
                        <span> Made the code reusable by using the</span>
                        <strong> bridge design pattern </strong>
                        <span>for the core functions</span>
                      </li>
                      <li>
                        <span> Connect the </span>
                        <strong>NodeJS </strong>
                        <span>server to the </span>
                        <strong>C#</strong>
                        <span> app by developing an internal</span>
                        <strong> REST API </strong>
                        <span>using </span>
                        <strong>express</strong>
                      </li>
                      <li>
                        <span>Stored license information using </span>
                        <strong>MongoDB </strong>
                        <span>with a visualized </span>
                        <strong>React </strong>
                        <span>UI for the sales team</span>
                      </li>
                      <li>
                        <span>
                          <strong>
                            with +50 sales, It&rsquo;s the highest-rated traffic
                            sender by users in the Envato Market [
                          </strong>
                          <a href="https://codecanyon.net/item/awesome-traffic-bot-without-using-vpn-proxy/24096895">
                            <strong>Link</strong>
                          </a>
                          <strong>]</strong>
                        </span>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.history_item}>
            <div className={styles.history_details}>
              <div className={styles.history_title}>
                <h1>Full-stack Developer</h1>
                <span>Jun 2019 - 2020</span>
              </div>
              <p className={styles.history_company}>
                Pasha Sanaat Inc. | IT Solutions for governmental organizations
              </p>
              <div className={styles.history_summary}>
                <ul>
                  <li>
                    <span>
                      {" "}
                      Developed various websites for governmental companies with
                    </span>
                    <strong> ASP.NET</strong>
                    <span> by using </span>
                    <strong>MVC </strong>
                    <span>design-pattern</span>
                  </li>
                  <li>
                    <span>
                      {" "}
                      Designed a React-Native shopping android app which{" "}
                    </span>
                    <strong>resulted in %100 customer satisfaction</strong>
                  </li>
                  <li>
                    <strong>Reduced administration cost by 50%</strong>
                    <span>
                      {" "}
                      by optimizing the company&rsquo;s custom CMS coded with
                    </span>
                    <strong> ASP.NET</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.history_item}>
            <div className={styles.history_details}>
              <div className={styles.history_title}>
                <h1>Full-stack Developer</h1>
                <span>Jun 2016 - July 2020</span>
              </div>
              <p className={styles.history_company}>
                Learn Site | Microsoft Windows / Cloud-Based IT solutions
              </p>
              <div className={styles.history_summary}>
                <ul>
                  <li>
                    <strong>Increased social media sales by %15</strong>
                    <span>
                      {" "}
                      by developing an Instagram direct message marketing
                      software using{" "}
                    </span>
                    <strong>NodeJS </strong>
                    <span>and </span>
                    <strong>PuppeteerJS </strong>
                  </li>
                  <li>
                    <strong>Saved time and testing costs by 50%</strong>
                    <span>
                      {" "}
                      by developing an android emulator controller used for
                      integration testing written in{" "}
                    </span>
                    <strong>C# </strong>
                    <span>and used</span>
                    <strong> OpenCV </strong>
                    <span>for the</span>
                    <strong> image processing</strong>
                  </li>
                  <li>
                    <span> Migrated customers </span>
                    <strong>SQL </strong>
                    <span>database to </span>
                    <strong>MongoDB </strong>
                    <span>documents using </span>
                    <strong>T-SQL </strong>
                    <span>and OpenSQL </span>
                    <strong>
                      resulting in a significant increase in query performance
                    </strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Career;
