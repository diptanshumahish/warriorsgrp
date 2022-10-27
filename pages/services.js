import s from '../styles/services.module.css'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
export default function () {
    return (
        <div id={s.container}>
            <Head>
                <title>Services @WG</title>
            </Head>
            <main>
                <nav>
                    <div id={s.navLeft}>
                        <Link href='/'>
                            <div id={s.logo}>Warriors&apos; Group</div>
                        </Link>
                        <Link href='/'>
                            <div className={s.navEle}>Home</div>
                        </Link>
                        <Link href='/services'>
                            <div className={s.navEle}>Services</div>
                        </Link>

                        <Link href="/tech">
                            <div className={s.navEle}>Technologies</div>
                        </Link>
                        <Link href='#'>
                            <div className={s.navEle}>About Us</div></Link>
                    </div>
                    <Link href='/contact'>
                        <div id={s.navRight}>
                            Contact Us
                        </div></Link>
                </nav>
                <section id={s.services}>
                    <div id={s.servicesHead} >
                        What services do we offer? <br />
                        <span>Explore our services below</span>
                    </div>
                    <div id={s.serviceCards}>



                        <div className={s.serviceCard} data-aos="fade-up">
                            <div className={s.serviceCardLeft}>
                                <div className={s.servTop}>
                                    <div className={s.serviceCardHeading}>IT Consulting</div>
                                    <span>We offer IT Consulting services that  help you improve your software architecture.
                                        Create
                                        a
                                        software driven strategy, improve opertaions ...</span>
                                </div>
                                <div className={s.servBottom}>
                                    Get the service!
                                </div>
                            </div>
                            <div className={s.serviceCardRight}>
                                <Image src="https://unsplash.com/photos/wzVQp_NRIHg/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MjR8fGNvbXB1dGVyfGVufDB8fHx8MTY2NjgyOTQ3Mw&force=true" alt="" width="210" height="600" />
                            </div>
                        </div>
                        <div className={s.serviceCard} data-aos="fade-up" data-aos-delay="200">
                            <div className={s.serviceCardLeft}>
                                <div className={s.servTop}>
                                    <div className={s.serviceCardHeading}>Temporary Staffing</div>
                                    <span>
                                        Candidates can work with clients , and after completion get back to us for more work.
                                    </span>
                                </div>
                                <div className={s.servBottom}>
                                    Get the service!
                                </div>
                            </div>
                            <div className={s.serviceCardRight}>
                                <Image src="https://unsplash.com/photos/MYbhN8KaaEc/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjY2ODQwMDE1&force=true&w=2400" alt="" width="400" height="300" />
                            </div>
                        </div>
                        <div className={s.serviceCard} data-aos="fade-up">
                            <div className={s.serviceCardLeft}>
                                <div className={s.servTop}>
                                    <div className={s.serviceCardHeading}>Permanent Staffing</div>
                                    <span>We will provide candidates based on client requirements</span>
                                </div>
                                <div className={s.servBottom}>
                                    Get the service!
                                </div>
                            </div>
                            <div className={s.serviceCardRight}>
                                <Image src="https://unsplash.com/photos/Y5bvRlcCx8k/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjY2ODQwMDk5&force=true" alt="" width="210" height="300" />
                            </div>
                        </div>
                        <div className={s.serviceCard} data-aos="fade-up" data-aos-delay="200">
                            <div className={s.serviceCardLeft}>
                                <div className={s.servTop}>
                                    <div className={s.serviceCardHeading}>Application Developement</div>
                                    <span>We will make application based on your company requirements,that suite your needs</span>
                                </div>
                                <div className={s.servBottom}>
                                    Get the service!
                                </div>
                            </div>
                            <div className={s.serviceCardRight}>
                                <Image src="/test.jpg" alt="" width="200" height="300" />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}