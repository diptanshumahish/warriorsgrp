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
            <div id="mobMenuFull">
                <div id="mobCross" onClick={
                    () => {
                        document.getElementById("mobMenuFull").style.display = "none";
                    }
                }>
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
                            <div id="logo">Warriors Group</div>
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
                <div className={t.techBack}>
                    <div id={t.techdetailst} data-aos="fade-up">
                        <div id={t.mainTextContent}>
                            <div id={t.mainTextHeading}>
                                Our Staffing Solutions
                            </div>
                            <div id={t.mainTextSub}>The workforce is an <span>asset</span> for every organization. <span>Warriors Group</span> understands it and pay great heed to the clients staffing needs. Our team <span>works efficiently</span> in providing talented and qualified workforce for our clients, which fully meets the staffing criteria. We have created a comprehensive platform to meet the varied project and client&apos;s needs. Our dedicated staffing platform enable our clients to choose from a various range of staffing options i.e. contract to hire to permanent staffing; this helps in choosing the best for both short term and long term projects. This also empowers to choose a reliable work force within a budget. We strive to provide workforce to our clients in all fields.

                                We work all times to employ the qualified individuals who match your corporate culture and also ensure that it is not just hiring but about providing a skilled individual, who in turn develops a <span>mutual relationship</span> with the organization. At <span>Warriors Group</span> every candidate is tested on his abilities, strength, and weakness, retaining and referring <span>the best</span> aspirant for the job, thus ensure an optimistic and successful future for both the client and the candidate.</div>
                        </div>
                        <div id={t.mainTextImage}>
                            <Image src='/assets/solution.svg' width={500} height={500} alt="solution" />
                        </div>
                    </div>
                    <div id={t.explore}>
                        Explore what we offfer:
                    </div>

                    <div id={t.techCards} data-aos="fade-right" >
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
                            <div id={t.remove}></div>
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

                    <div className={t.footerContact}>16192 Coastal Highway
                        Lewes, DE 19958 USA</div>
                    <div className={t.footerContact}>Fax: 302-645-1280</div>
                    <div className={t.footerContact}> ☎+1 (302)-476-2579</div>
                    <div className={t.footerContact} id={t.socials}>
                        <div className={t.socialIco}><Image src='/assets/whatsapp.png' width={30} height={30} /></div>
                        <div className={t.socialIco}><Image src='/assets/insta.png' width={30} height={30} /></div>
                        <div className={t.socialIco}><Image src='/assets/fb.png' width={30} height={30} /></div>
                    </div>

                </div>

            </footer>


        </div>
    )
}