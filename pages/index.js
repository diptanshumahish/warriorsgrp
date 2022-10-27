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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <nav>
          <div id={styles.navLeft}>
            <Link href='/'>
              <div id={styles.logo}>Warriors Group</div>
            </Link>
            <Link href='/'>
              <div className={styles.navEle}>Home</div>
            </Link>
            <Link href='/services'>
              <div className={styles.navEle}>Services</div>
            </Link>

            <Link href="/tech">
              <div className={styles.navEle}>Technologies</div>
            </Link>
            <Link href='/about'>
              <div className={styles.navEle}>About Us</div></Link>
          </div>
          <Link href='/contact'>
            <div id={styles.navRight}>
              Contact Us
            </div></Link>
        </nav>
        <div id={styles.topStyle}></div>
        <header data-aos="fade-up">
          <div id={styles.headerLeft}>
            The Best <span>Staffing</span> and <span>Hiring</span> solutions rightaway! <br />
            <div id={styles.headerCta}>Exlpore more!</div>

          </div>
          <div id={styles.headerRight}>
            <Image src="/test.jpg" alt="" srcset="" width="348" height="500" />
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
                Warriors Group is a premier global consulting hub providing a gamut of technology services with superior capabilities in cutting edge digital offerings around Blockchain, Analytics, Industrial IoT, Big Data and Mobile Applications development.
              </div>
            </div>

          </div>
          <div id={styles.abtUsArea}>
            <Image src='/assets/design.svg' width={500} height={500} data-aos="fade-right" />

            <div id={styles.abtusText} data-aos="fade-left">
              <div id={styles.abtUsHead}>
                Why us? <br />

              </div>
              <div id={styles.whoContent}>
                When you partner with <span>Warriors Group</span>, we provide you with the talent, tools and services you need to innovate <span>faster</span>, keep ahead of the competition, and demonstrate the <span>true value of IT</span>. You get the experts you need, when you need them, freeing you to focus on innovation.

                Let Warriors Tech dedicated monitoring and administration professionals help you build an <span>A-team</span> to manage your critical systems, so you can focus on your business.              </div>
            </div>

          </div>
          <div id={styles.what}>
            <div className={styles.whatCard} data-aos="fade-up">
              <Image src='/assets/permanent.png' width={80} height={80}></Image>
              <div className={styles.whatHeading}>Permanent Staffing</div>
              <div className={styles.whatContent}>Hiring permanent staffing is a critical decision.
                It requires careful under standing of your..</div>
            </div>
            <div className={styles.whatCard} data-aos="fade-up">
              <Image src='/assets/tempstaff.png' width={80} height={80}></Image>
              <div className={styles.whatHeading}>Temporary Staffing</div>
              <div className={styles.whatContent}>Temporary or contact staffing is crucial in today’s times.
                Accessing the right resource purposefully..</div>
            </div>
            <div className={styles.whatCard} data-aos="fade-up">
              <Image src='/assets/hire.png' width={80} height={80}></Image>
              <div className={styles.whatHeading}>Contract to Hire</div>
              <div className={styles.whatContent}>Contract-to-hire Staffing solutions are an effective
                business strategy for enterprises who wish..</div>
            </div>
            <div className={styles.whatCard} data-aos="fade-up">
              <Image src='/assets/tehcnical.png' width={80} height={80}></Image>
              <div className={styles.whatHeading}>Technical Staff</div>
              <div className={styles.whatContent}>Technical staffing solutions require specialised skillsets
                and experienced resources, to handle..</div>
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
            <Image src="/recruit.svg" width={500} height={500} data-aos="fade-left" />

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
    </div>
  )
}
