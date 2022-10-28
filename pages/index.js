import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css";

export default function Home() {



  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (

    <div className={styles.container}>
      <Head>

        <title>Warrior&apos;s Group</title>
        <meta name="Warriors Group" content="The official site for the Warriors&apos; Group Organization" />
        <meta name='description' content='The official site for the Warriors&apos; Group LLC' />
        <meta name='title' content='Warriors Group LLC' />
        <meta property='og:locale' content='en_US' />
        <meta name="author" content="Diptanshu Mahish" />
        <meta property='og:type' content='website' />
        <meta property="og:site_name" content="Warriors Group LLC" />
        <meta property='og:title' content='Warriors Group LLC' />
        <meta property='og:description' content='The official site for the Warriors&apos; Group LLC' />
        <meta name='robots' content='index, follow, max-snippet:-1, max-image-preview:large' />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="mobMenuFull">
        <div id="mobCross" onClick={
          () => {
            document.getElementById("mobMenuFull").style.display = "none";
          }
        }>
          ✖
        </div>
        <div id="mobMenuInt">
          <Link href='/'>
            <div className="mobNav">Home</div>
          </Link>
          <Link href='/services'>
            <div className="mobNav">Services</div>
          </Link>

          <Link href="/tech">
            <div className="mobNav">Technologies</div>
          </Link>
          <Link href='/about'>
            <div className="mobNav">About Us</div></Link>
          <Link href='/contact'>
            <div id="mobContact" className="mobNav">
              Contact Us
            </div></Link>
        </div>
      </div>
      <main>

        <nav>
          <div id="navLeft">
            <Link href='/'>
              <div id="logo">Warriors Group LLC</div>
            </Link>
            <Link href='/'>
              <div className="navEle">Home</div>
            </Link>
            <Link href='/services'>
              <div className="navEle">Services</div>
            </Link>

            <Link href="/tech">
              <div className="navEle">Technologies</div>
            </Link>
            <Link href='/about'>
              <div className="navEle">About Us</div></Link>
          </div>
          <Link href='/contact'>
            <div id="navRight">
              Contact Us
            </div></Link>
          <div id="navMob" onClick={() => {

            document.getElementById("mobMenuFull").style.display = "flex";

          }}>
            <Image src='/assets/menu.png' width={20} height={20} />
          </div>
        </nav>
        <div id={styles.topStyle}></div>
        <header data-aos="fade-up">
          <div id={styles.headerLeft}>
            The Best <span>Staffing</span> and <span>Hiring</span> solutions rightaway! <br />
            <Link href='/services'><div id={styles.headerCta}>Exlpore more!</div></Link>

          </div>
          <div id={styles.headerRight}>
            <Image src="/test.jpg" alt="Home image" srcset="" width="348" height="500" />
          </div>
        </header>
        <section id={styles.abtUs}>
          <div id={styles.abtUsArea}>
            <Image src='/assets/abtus.svg' width={500} height={500} data-aos="fade-right" />

            <div id={styles.abtusText} data-aos="fade-left">
              <div id={styles.abtUsHead}>
                Who are we? <br />

              </div>
              <div id={styles.whoContent}>
                <span>Warriors Group</span> provides quality IT talent with outstanding customer satisfaction along with <span>innovative resource planning</span> and <span>staffing solutions.</span>
                <br /> <br />
                In this competitive era of digital, Information Technology talents need to perform under consistent stress with strict delivery timelines. We play a vital role to evaluate best fit talent for our valued customers. We also strive for consistent performance, hinging on evaluation of customer&apos;s strategic plan and has the experience to carry it out.              </div>
            </div>

          </div>
          <div id={styles.abtUsArea}>
            <Image src='/assets/design.svg' width={500} height={500} data-aos="fade-right" />

            <div id={styles.abtusText} data-aos="fade-left">
              <div id={styles.abtUsHead}>
                Our Expertise <br />

              </div>
              <div id={styles.whoContent}>
                Our Solutions are <span>client Centric</span>, <span>cost effective</span> and <span>best in class</span> , So you can <span>rely</span> on them.
              </div>
            </div>

          </div>
          <div id={styles.what}>
            <div className={styles.whatCard} data-aos="fade-up">
              <Image src='/assets/permanent.png' width={80} height={80}></Image>
              <div className={styles.whatHeading}>Permanent Staffing</div>
              <div className={styles.whatContent}>
                Permanent hiring solutions are quite crucial, With our organization you can rely easily for that
              </div>
            </div>
            <div className={styles.whatCard} data-aos="fade-up" data-aos-delay="100">
              <Image src='/assets/tehcnical.png' width={80} height={80}></Image>
              <div className={styles.whatHeading}>Technical Staff</div>
              <div className={styles.whatContent}>Our tehcnical solutions are the best in class , you can easily rely on them </div>
            </div>
            <div className={styles.whatCard} data-aos="fade-up" data-aos-delay="200">
              <Image src='/assets/tempstaff.png' width={80} height={80}></Image>
              <div className={styles.whatHeading}>Temporary Staffing</div>
              <div className={styles.whatContent}>Most people are in need for temporary staffing , Do not worry we got you covered for the same.</div>
            </div>
            <div className={styles.whatCard} data-aos="fade-up" data-aos-delay="300">
              <Image src='/assets/hire.png' width={80} height={80}></Image>
              <div className={styles.whatHeading}>Contract Hiring</div>
              <div className={styles.whatContent}>More suitable for most organizations, Here consider this service sorted for you</div>
            </div>

          </div>
        </section>

        <section id={styles.tech}>
          <div id={styles.servicesHead}>
            Explore our major tech here: <br />


            <div id={styles.techHomeArea}>
              <div id={styles.techCardsHome}>
                <Link href='/tech'>
                  <div className={styles.techCardHome} data-aos="fade-right"><div className={styles.techCardHomeText}>Java FullStack</div>  <Image src='/assets/java.svg' height='30' width='30' /></div>
                </Link>                <Link href='/tech'>
                  <div className={styles.techCardHome} data-aos="fade-right" id={styles.py}><div className={styles.techCardHomeText} >Python</div>  <Image src='/assets/python.svg' height='30' width='30' /></div>

                </Link>
                <Link href='/tech'>
                  <div className={styles.techCardHome} data-aos="fade-right" id={styles.data}><div className={styles.techCardHomeText}>Data Scientist</div>  <Image src='/assets/java.svg' height='30' width='30' /></div>
                </Link>
                <Link href='/tech'>
                  <div className={styles.techCardHome} data-aos="fade-right" id={styles.net}><div className={styles.techCardHomeText}>.NET developer</div>  <Image src='/assets/net.svg' height='30' width='30' /></div>
                </Link>
                <Link href='/tech'>
                  <div className={styles.techCardHome} data-aos="fade-right" id={styles.devOps}><div className={styles.techCardHomeText}>DevOps</div>  <Image src='/assets/devops.svg' height='30' width='30' /></div>
                </Link>
                <Link href='/tech'>
                  <div id={styles.techButton} className={styles.techCardHome} data-aos="fade-right" >Check out all Technologies&apos; candidates we have 🠮 <Image src='/assets/wg.svg' height='30' width='30' />
                  </div>
                </Link>

              </div>

              <div id={styles.img}>
                <Image src='/techback.svg' height='500' width='500' data-aos="fade-left" />
              </div>

            </div>
          </div>
        </section>
        <section id={styles.recruitProcess}>
          <div id={styles.recruitHead}  >
            What is our recruitment procedure? <br />
            <span>This 6 step algorithm explains it </span>
          </div>
          <div id={styles.recruitArea}>
            <div id={styles.recruitCards}>
              {/* first */}
              <div className={styles.recruitCard} data-aos="flip-right">
                <div className={styles.recruitCardNumber}>01.</div>

                <div className={styles.recruitDivider}>
                  <div className={styles.recruitCardProcess}>
                    <div className={styles.recruitCardHead}>Preparing</div>
                    <div className={styles.recruitCardSubhead}>Understanding the Job well</div>
                  </div>
                  <Image src="/assets/prepare.png" width='50' height='50' />
                </div>
              </div>
              {/* second  */}
              <div className={styles.recruitCard} data-aos="flip-right">
                <div className={styles.recruitCardNumber}>02.</div>

                <div className={styles.recruitDivider}>
                  <div className={styles.recruitCardProcess}>
                    <div className={styles.recruitCardHead}>Sourcing</div>
                    <div className={styles.recruitCardSubhead}>Matching the candidates with required jobs</div>
                  </div>
                  <Image src="/assets/match.png" width='50' height='50' />
                </div>
              </div>
              {/* third */}
              <div className={styles.recruitCard} data-aos="flip-right">
                <div className={styles.recruitCardNumber}>03.</div>

                <div className={styles.recruitDivider}>
                  <div className={styles.recruitCardProcess}>
                    <div className={styles.recruitCardHead}>Screening</div>
                    <div className={styles.recruitCardSubhead}>Filtering applicants and shortlisting</div>
                  </div>
                  <Image src="/assets/screen.png" width='50' height='50' />
                </div>
              </div>
              {/* fourth */}
              <div className={styles.recruitCard} data-aos="flip-right">
                <div className={styles.recruitCardNumber}>04.</div>

                <div className={styles.recruitDivider}>
                  <div className={styles.recruitCardProcess}>
                    <div className={styles.recruitCardHead}>Selecting</div>
                    <div className={styles.recruitCardSubhead}>Interviewing candidates and finalizing</div>
                  </div>
                  <Image src="/assets/select.png" width='50' height='50' />
                </div>
              </div>
              {/* fifth */}
              <div className={styles.recruitCard} data-aos="flip-right">
                <div className={styles.recruitCardNumber}>05.</div>

                <div className={styles.recruitDivider}>
                  <div className={styles.recruitCardProcess}>
                    <div className={styles.recruitCardHead}>Hiring</div>
                    <div className={styles.recruitCardSubhead}>Job offering to the candidate</div>
                  </div>
                  <Image src="/assets/hire.png" width='50' height='50' />
                </div>
              </div>
              {/* sixth */}
              <div className={styles.recruitCard} data-aos="flip-right">
                <div className={styles.recruitCardNumber}>06.</div>

                <div className={styles.recruitDivider}>
                  <div className={styles.recruitCardProcess}>
                    <div className={styles.recruitCardHead}>Onboarding</div>
                    <div className={styles.recruitCardSubhead}>The final step </div>
                  </div>
                  <Image src="/assets/onboard.png" width='50' height='50' />
                </div>
              </div>

            </div>
            <div id={styles.rctImage}>
              <Image src="/recruit.svg" width={500} height={500} data-aos="fade-left" alt="recruit Image" />
            </div>

          </div>
        </section>
      </main>
      <footer id={styles.footer}>
        <div id={styles.footerLeft}>
          <div id={styles.footerLogo}>
            <Image src='/assets/war.png' height={100} width={100} />
          </div>
          <div id={styles.logoText}>Warrior&apos;s Group</div>
          <div id={styles.footeradress}>Lewes,USA</div>
        </div>
        <div id={styles.footerRight}>
          <div className={styles.footerContact}>Fax: 302-645-1280</div>
          <div className={styles.footerContact}>16192 Coastal Highway
            Lewes, DE 19958 USA
          </div>
          <div className={styles.footerContact}>Instagram</div>
          <div className={styles.footerContact}>Facebook</div>
          <div className={styles.footerContact}>Contact Form</div>
        </div>

      </footer>
      {/* <Script src='/navv.js' /> */}

    </div>
  )
}
