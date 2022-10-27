import Head from "next/head";
import Image from "next/image";
import t from "../styles/tech.module.css"
import Link from "next/link";



export default function Tech() {
    return (
        <div id={t.container}>
            <Head>
                <title>Technologies @WG</title>
            </Head>
            <main>
                <nav>
                    <div id={t.navLeft}>
                        <Link href='/'>
                            <div id={t.logo}>Warriors&apos; Group</div>
                        </Link>
                        <Link href='/'>
                            <div className={t.navEle}>Home</div>
                        </Link>

                        <Link href="/tech">
                            <div className={t.navEle}>Technologies</div>
                        </Link>
                        <Link href='#'>
                            <div className={t.navEle}>About Us</div></Link>
                    </div>
                    <Link href='/contact'>
                        <div id={t.navRight}>
                            Contact Us
                        </div></Link>
                </nav>
                <div className={t.techBack}>
                    <div id={t.techIntro}>
                        <div id={t.techHead}>Explore what technology  candidates we have here</div>
                        <div id={t.subHead}>Check out your desired requirements</div>
                    </div>
                    <div id={t.techCards}>
                        {/* 1 */}
                        <Link href='/contact'>

                            <div className={t.techCard}>
                                <div className={t.techCardHead}>
                                    Java
                                </div>
                                <div className={t.techCardSub}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, omnis velit aliquid enim obcaecati harum aperiam impedit non saepe pariatur perferendis placeat fugit nisi aspernatur? Cum voluptate consequatur asperiores maiores.
                                </div>
                            </div>
                        </Link>
                        {/* 2 */}
                        <Link href='/contact'>

                            <div className={t.techCard}>
                                <div className={t.techCardHead}>
                                    Python
                                </div>
                                <div className={t.techCardSub}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, omnis velit aliquid enim obcaecati harum aperiam impedit non saepe pariatur perferendis placeat fugit nisi aspernatur? Cum voluptate consequatur asperiores maiores.
                                </div>
                            </div>
                        </Link>
                        {/* 3 */}
                        <Link href='/contact'>

                            <div className={t.techCard}>
                                <div className={t.techCardHead}>
                                    Data scientist
                                </div>
                                <div className={t.techCardSub}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, omnis velit aliquid enim obcaecati harum aperiam impedit non saepe pariatur perferendis placeat fugit nisi aspernatur? Cum voluptate consequatur asperiores maiores.
                                </div>
                            </div>
                        </Link>
                        {/* 4 */}
                        <Link href='/contact'>

                            <div className={t.techCard}>
                                <div className={t.techCardHead}>
                                    .NET Developer
                                </div>
                                <div className={t.techCardSub}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, omnis velit aliquid enim obcaecati harum aperiam impedit non saepe pariatur perferendis placeat fugit nisi aspernatur? Cum voluptate consequatur asperiores maiores.
                                </div>
                            </div>
                        </Link>
                        {/* 5 */}
                        <Link href='/contact'>

                            <div className={t.techCard}>
                                <div className={t.techCardHead}>
                                    Mulesoft
                                </div>
                                <div className={t.techCardSub}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, omnis velit aliquid enim obcaecati harum aperiam impedit non saepe pariatur perferendis placeat fugit nisi aspernatur? Cum voluptate consequatur asperiores maiores.
                                </div>
                            </div>
                        </Link>
                        {/* 6 */}
                        <Link href='/contact'>

                            <div className={t.techCard}>
                                <div className={t.techCardHead}>
                                    Data Engineering
                                </div>
                                <div className={t.techCardSub}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, omnis velit aliquid enim obcaecati harum aperiam impedit non saepe pariatur perferendis placeat fugit nisi aspernatur? Cum voluptate consequatur asperiores maiores.
                                </div>
                            </div>
                        </Link>
                        {/* 7 */}
                        <Link href='/contact'>

                            <div className={t.techCard}>
                                <div className={t.techCardHead}>
                                    Service Now
                                </div>
                                <div className={t.techCardSub}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, omnis velit aliquid enim obcaecati harum aperiam impedit non saepe pariatur perferendis placeat fugit nisi aspernatur? Cum voluptate consequatur asperiores maiores.
                                </div>
                            </div>
                        </Link>
                        {/* 8 */}
                        <Link href='/contact'>

                            <div className={t.techCard}>
                                <div className={t.techCardHead}>
                                    DevOps
                                </div>
                                <div className={t.techCardSub}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, omnis velit aliquid enim obcaecati harum aperiam impedit non saepe pariatur perferendis placeat fugit nisi aspernatur? Cum voluptate consequatur asperiores maiores.
                                </div>
                            </div>
                        </Link>
                        {/* 9 */}
                        <Link href='/contact'>

                            <div className={t.techCard}>
                                <div className={t.techCardHead}>
                                    Business Analyst
                                </div>
                                <div className={t.techCardSub}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, omnis velit aliquid enim obcaecati harum aperiam impedit non saepe pariatur perferendis placeat fugit nisi aspernatur? Cum voluptate consequatur asperiores maiores.
                                </div>
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
                                        UI Developer
                                    </div>
                                </Link>
                                <Link href='/contact'>
                                    <div className={t.extraCard}>
                                        iOS Developer
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
                                        Azure
                                    </div>
                                </Link>
                                <Link href='/contact'>
                                    <div className={t.extraCard}>
                                        Frontend Developer
                                    </div>
                                </Link>
                                <Link href='/contact'>
                                    <div className={t.extraCard}>
                                        AWS
                                    </div>
                                </Link>
                                <Link href='/contact'>
                                    <div className={t.extraCard}>
                                        IAM developer
                                    </div>
                                </Link>
                                <Link href='/contact'>
                                    <div className={t.extraCard}>
                                        Cyber Security
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
                                        React JS
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
                    <div id={t.footeradress}>Some adress,India</div>
                </div>
                <div id={t.footerRight}>
                    <div className={t.footerContact}>+1234567890</div>
                    <div className={t.footerContact}>some exact Adress here</div>
                    <div className={t.footerContact}>Instagram</div>
                    <div className={t.footerContact}>Facebook</div>
                    <div className={t.footerContact}>Contact Form</div>
                </div>

            </footer>
        </div>
    )
}