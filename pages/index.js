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
        <meta name="Warriors&apos; Group" content="The official site for the Warriors&apos; Group Organization" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <nav>
          <div id={styles.navLeft}>
            <Link href='#'>
              <div id={styles.logo}>Warriors&apos; Group</div>
            </Link>
            <Link href='#'>
              <div className={styles.navEle}>Home</div>
            </Link>
            <Link href='#'>
              <div className={styles.navEle}>Services</div>
            </Link>
            <Link href="/tech">
              <div className={styles.navEle}>Technologies</div>
            </Link>
            <Link href='#'>
              <div className={styles.navEle}>About Us</div></Link>
          </div>
          <div id={styles.navRight}>
            Contact Us
          </div>
        </nav>
        <div id={styles.topStyle}></div>
        <header>
          <div id={styles.headerLeft}>
            The Best <span>Staffing</span> and <span>Hiring</span> solutions rightaway! <br />
            <div id={styles.headerCta}>Exlpore more!</div>

          </div>
          <div id={styles.headerRight}>
            <Image src="/test.jpg" alt="" srcset="" width="348" height="500" />
          </div>
        </header>
        <section id={styles.services}>
          <div id={styles.servicesHead} >
            What services do we offer? <br />
            <span>Explore our services below</span>
          </div>
          <div id={styles.serviceCards}>



            <div className={styles.serviceCard} data-aos="fade-up">
              <div className={styles.serviceCardLeft}>
                <div className={styles.servTop}>
                  <div className={styles.serviceCardHeading}>IT Consulting</div>
                  <span>We offer IT Consulting services that will help you improve your software architecture.
                    Create
                    a
                    software driven strategy, improve opertaions by optimising your portfolio...</span>
                </div>
                <div className={styles.servBottom}>
                  Get the service!
                </div>
              </div>
              <div className={styles.serviceCardRight}>
                <Image src="https://unsplash.com/photos/wzVQp_NRIHg/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MjR8fGNvbXB1dGVyfGVufDB8fHx8MTY2NjgyOTQ3Mw&force=true" alt="" width="210" height="600" />
              </div>
            </div>
            <div className={styles.serviceCard} data-aos="fade-up" data-aos-delay="200">
              <div className={styles.serviceCardLeft}>
                <div className={styles.servTop}>
                  <div className={styles.serviceCardHeading}>Temporary Staffing</div>
                  <span>
                    Candidates can work with clients , and after completion get back to us for more work.
                  </span>
                </div>
                <div className={styles.servBottom}>
                  Get the service!
                </div>
              </div>
              <div className={styles.serviceCardRight}>
                <Image src="https://unsplash.com/photos/MYbhN8KaaEc/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjY2ODQwMDE1&force=true&w=2400" alt="" width="400" height="300" />
              </div>
            </div>
            <div className={styles.serviceCard} data-aos="fade-up">
              <div className={styles.serviceCardLeft}>
                <div className={styles.servTop}>
                  <div className={styles.serviceCardHeading}>Permanent Staffing</div>
                  <span>We will provide candidates based on client requirements</span>
                </div>
                <div className={styles.servBottom}>
                  Get the service!
                </div>
              </div>
              <div className={styles.serviceCardRight}>
                <Image src="https://unsplash.com/photos/Y5bvRlcCx8k/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjY2ODQwMDk5&force=true" alt="" width="210" height="300" />
              </div>
            </div>
            <div className={styles.serviceCard} data-aos="fade-up" data-aos-delay="200">
              <div className={styles.serviceCardLeft}>
                <div className={styles.servTop}>
                  <div className={styles.serviceCardHeading}>Application Developement</div>
                  <span>We will make application based on your company requirements,on various platforms that suite your needs</span>
                </div>
                <div className={styles.servBottom}>
                  Get the service!
                </div>
              </div>
              <div className={styles.serviceCardRight}>
                <Image src="/test.jpg" alt="" width="200" height="300" />
              </div>
            </div>
          </div>
        </section>
        <section id={styles.tech}>
          <div id={styles.servicesHead}>
            What tehchnology candidates do we have? <br />
            <span>Explore our major tech here</span>

            <div id={styles.techHomeArea}>
              <div id={styles.techCardsHome}>
                <div className={styles.techCardHome} data-aos="fade-right"><div className={styles.techCardHomeText}>Java FullStack</div>  <Image src='/assets/java.svg' height='30' width='30' /></div>
                <div className={styles.techCardHome} data-aos="fade-right" id={styles.py}><div className={styles.techCardHomeText} >Python</div>  <Image src='/assets/python.svg' height='30' width='30' /></div>
                <div className={styles.techCardHome} data-aos="fade-right" id={styles.data}><div className={styles.techCardHomeText}>Data Scientist</div>  <Image src='/assets/java.svg' height='30' width='30' /></div>
                <div className={styles.techCardHome} data-aos="fade-right" id={styles.net}><div className={styles.techCardHomeText}>.NET developer</div>  <Image src='/assets/net.svg' height='30' width='30' /></div>
                <div className={styles.techCardHome} data-aos="fade-right" id={styles.devOps}><div className={styles.techCardHomeText}>DevOps</div>  <Image src='/assets/devops.svg' height='30' width='30' /></div>
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
                    <div className={styles.recruitCardHead}>Matching</div>
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
            <Image src="/recruit.svg" width={500} height={500} data-aos="fade-left" />

          </div>
        </section>
      </main>
    </div>
  )
}
