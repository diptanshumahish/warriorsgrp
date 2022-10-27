import Head from "next/head";
import Image from "next/image";
import t from "../styles/tech.module.css"
import Link from "next/link";
import { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css";



export default function Tech() {
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);
    return (
        <div id={t.container}>
            <Head>
                <title>Technologies @WG</title>
            </Head>
            <main>
                <nav>
                    <div id={t.navLeft}>
                        <Link href='/'>
                            <div id={t.logo}>Warriors Group</div>
                        </Link>
                        <Link href='/'>
                            <div className={t.navEle}>Home</div>
                        </Link>
                        <Link href='/services'>
                            <div className={t.navEle}>Services</div>
                        </Link>

                        <Link href="/tech">
                            <div className={t.navEle}>Technologies</div>
                        </Link>
                        <Link href='/about'>
                            <div className={t.navEle}>About Us</div></Link>
                    </div>
                    <Link href='/contact'>
                        <div id={t.navRight}>
                            Contact Us
                        </div></Link>
                </nav>
                <div className={t.techBack}>

                    <div id={t.techCards} data-aos="fade-up">
                        {/* 1 */}
                        <Link href='/contact'>

                            <div className={t.techCard}>
                                <div className={t.techCardHead}>
                                    Java
                                </div>
                                <Image src='/assets/java.svg' height={50} width={50} />

                            </div>
                        </Link>
                        {/* 2 */}
                        <Link href='/contact'>

                            <div className={t.techCard}>
                                <div className={t.techCardHead}>
                                    Python
                                </div>
                                <Image src='/assets/python.svg' height={50} width={50} />
                            </div>
                        </Link>
                        {/* 3 */}
                        <Link href='/contact'>

                            <div className={t.techCard}>
                                <div className={t.techCardHead}>
                                    .NET Developer
                                </div>
                                <Image src='/assets/net.svg' height={50} width={50} />
                            </div>
                        </Link>
                        {/* 4 */}
                        <Link href='/contact'>

                            <div className={t.techCard}>
                                <div className={t.techCardHead}>
                                    iOS Developer
                                </div>
                                <Image src='/assets/ios.svg' height={50} width={50} />
                            </div>
                        </Link>
                        {/* 5 */}
                        <Link href='/contact'>

                            <div className={t.techCard}>
                                <div className={t.techCardHead}>
                                    Azure
                                </div>
                                <Image src='/assets/azure.svg' height={50} width={50} />
                            </div>
                        </Link>
                        {/* 6 */}
                        <Link href='/contact'>

                            <div className={t.techCard}>
                                <div className={t.techCardHead}>
                                    AWS
                                </div>
                                <Image src='/assets/aws.svg' height={50} width={50} />
                            </div>
                        </Link>
                        {/* 7 */}
                        <Link href='/contact'>

                            <div className={t.techCard}>
                                <div className={t.techCardHead}>
                                    React JS
                                </div>
                                <Image src='/assets/react.svg' height={50} width={50} />
                            </div>
                        </Link>
                        {/* 8 */}
                        <Link href='/contact'>

                            <div className={t.techCard}>
                                <div className={t.techCardHead}>
                                    UI/UX
                                </div>
                                <Image src='/assets/ui.svg' height={50} width={50} />
                            </div>
                        </Link>
                        {/* 9 */}
                        <Link href='/contact'>

                            <div className={t.techCard}>
                                <div className={t.techCardHead}>
                                    Cyber Security
                                </div>
                                <Image src='/assets/cyber.svg' height={50} width={50} />
                            </div>
                        </Link>

                    </div>
                    <div id={t.extra}>
                        <div id={t.extraHeading}>
                            We offer these services as well
                        </div>
                        <div id={t.extraArea}>
                            <div id={t.extraContent}>
                                <Link href='/contact'>
                                    <div className={t.extraCard}>
                                        Salesforce Developer
                                    </div>
                                </Link>
                                <Link href='/contact'>
                                    <div className={t.extraCard}>
                                        Scrum Master
                                    </div>
                                </Link>
                                <Link href='/contact'>
                                    <div className={t.extraCard}>
                                        Oracle Fassion
                                    </div>
                                </Link>
                                <Link href='/contact'>
                                    <div className={t.extraCard}>
                                        DevOps
                                    </div>
                                </Link>
                                <Link href='/contact'>
                                    <div className={t.extraCard}>
                                        Data Scientist
                                    </div>
                                </Link>
                                <Link href='/contact'>
                                    <div className={t.extraCard}>
                                        Business Intelligence
                                    </div>
                                </Link>
                                <Link href='/contact'>
                                    <div className={t.extraCard}>
                                        ETL developer
                                    </div>
                                </Link>
                                <Link href='/contact'>
                                    <div className={t.extraCard}>
                                        Mulesoft
                                    </div>
                                </Link>
                                <Link href='/contact'>
                                    <div className={t.extraCard}>
                                        Frontend Developer
                                    </div>
                                </Link>
                                <Link href='/contact'>
                                    <div className={t.extraCard}>
                                        Data Engineering
                                    </div>
                                </Link>
                                <Link href='/contact'>
                                    <div className={t.extraCard}>
                                        IAM developer
                                    </div>
                                </Link>
                                <Link href='/contact'>
                                    <div className={t.extraCard}>
                                        Business Analyst
                                    </div>
                                </Link>
                                <Link href='/contact'>
                                    <div className={t.extraCard}>
                                        DBA
                                    </div>
                                </Link>
                                <Link href='/contact'>
                                    <div className={t.extraCard}>
                                        Sharepoint
                                    </div>
                                </Link>
                                <Link href='/contact'>
                                    <div className={t.extraCard}>
                                        Oracle Apex Developer
                                    </div>
                                </Link>
                                <Link href='/contact'>
                                    <div className={t.extraCard}>
                                        Service Now
                                    </div>
                                </Link>
                                <Link href='/contact'>
                                    <div className={t.extraCard}>
                                        Data Analyst
                                    </div>
                                </Link>
                                <Link href='/contact'>
                                    <div className={t.extraCard}>
                                        SAP SuccessFactor
                                    </div>
                                </Link>

                            </div>
                            <Image src='/assets/services.svg' height={500} width={500}></Image>
                        </div>
                    </div>
                </div>
            </main>
            <footer id={t.footer}>
                <div id={t.footerLeft}>
                    <div id={t.footerLogo}>
                        <Image src='/assets/war.png' height={100} width={100} />
                    </div>
                    <div id={t.logoText}>Warrior&apos;s Group</div>
                    <div id={t.footeradress}>Lewes,USA</div>
                </div>
                <div id={t.footerRight}>
                    <div className={t.footerContact}>Fax: 302-645-1280</div>
                    <div className={t.footerContact}>16192 Coastal Highway
                        Lewes, DE 19958 USA</div>
                    <div className={t.footerContact}>Instagram</div>
                    <div className={t.footerContact}>Facebook</div>
                    <div className={t.footerContact}>Contact Form</div>
                </div>

            </footer>
        </div>
    )
}