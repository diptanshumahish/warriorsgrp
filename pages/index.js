import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Warrior's Group</title>
        <meta name="Warriors' Group" content="The official site for the Warriors' Group Organization" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <nav>
          <div id={styles.navLeft}>
            <Link href='#'>
              <div id={styles.logo}>Warriors' Group</div>
            </Link>
            <Link href='#'>
              <div className={styles.navEle}>Home</div>
            </Link>
            <Link href='#'>
              <div className={styles.navEle}>Services</div>
            </Link>
            <Link href="#">
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
          <div id={styles.servicesHead}>
            What services do we offer? <br />
            <span>Explore our services below</span>
          </div>
          <div id={styles.serviceCards}>



            <div className={styles.serviceCard}>
              <div className={styles.serviceCardLeft}>
                <div className={styles.servTop}>
                  <div className={styles.serviceCardHeading}>IT Consulting</div>
                  <span>We offer IT Consulting services that will help you improve your software architecture.
                    Create
                    a
                    software driven strategy, improve opertaions by optimisig your portfolio...</span>
                </div>
                <div className={styles.servBottom}>
                  Get the service!
                </div>
              </div>
              <div className={styles.serviceCardRight}>
                <Image src="https://unsplash.com/photos/wzVQp_NRIHg/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MjR8fGNvbXB1dGVyfGVufDB8fHx8MTY2NjgyOTQ3Mw&force=true" alt="" width="210" height="600" />
              </div>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceCardLeft}>
                <div className={styles.servTop}>
                  <div className={styles.serviceCardHeading}>Temporary Staffing</div>
                  <span>We offer IT Consulting services that will help you improve your software architecture.
                    Create
                    a
                    software driven strategy, improve opertaions by optimisig your portfolio...</span>
                </div>
                <div className={styles.servBottom}>
                  Get the service!
                </div>
              </div>
              <div className={styles.serviceCardRight}>
                <Image src="https://unsplash.com/photos/MYbhN8KaaEc/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjY2ODQwMDE1&force=true&w=2400" alt="" width="400" height="300" />
              </div>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceCardLeft}>
                <div className={styles.servTop}>
                  <div className={styles.serviceCardHeading}>Permanent Staffing</div>
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
                <Image src="https://unsplash.com/photos/Y5bvRlcCx8k/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjY2ODQwMDk5&force=true" alt="" width="210" height="300" />
              </div>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceCardLeft}>
                <div className={styles.servTop}>
                  <div className={styles.serviceCardHeading}>IT Consulting</div>
                  <span>We offer IT Consulting services that will help you improve your software architecture.
                    Create
                    a
                    software driven strategy, improve opertaions by optimisig your portfolio...</span>
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
      </main>


    </div>
  )
}
