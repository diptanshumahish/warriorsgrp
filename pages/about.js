import Head from "next/head"
import a from "../styles/about.module.css"
import Link from "next/link"
import Image from "next/image"
export default function About() {
    return (

        <div id={a.container}>
            <Head>
                <title>About Us </title>
            </Head>
            <nav>
                <div id={a.navLeft}>
                    <Link href='/'>
                        <div id={a.logo}>Warriors Group</div>
                    </Link>
                    <Link href='/'>
                        <div className={a.navEle}>Home</div>
                    </Link>
                    <Link href='/services'>
                        <div className={a.navEle}>Services</div>
                    </Link>

                    <Link href="/tech">
                        <div className={a.navEle}>Technologies</div>
                    </Link>
                    <Link href='/about'>
                        <div className={a.navEle}>About Us</div></Link>
                </div>
                <Link href='/contact'>
                    <div id={a.navRight}>
                        Contact Us
                    </div></Link>
            </nav>
            <main>
                <div id={a.who}>
                    <div id={a.whoText}>
                        <div id={a.whoHead}>About Warriors Group</div>
                        <div id={a.whoSub}>Warriors Group is a premier global consulting hub providing a <span>gamut of technology</span> services with superior capabilities in cutting edge digital offerings around
                            <span> Blockchain, Analytics, Industrial IoT,</span>
                            Big Data and Mobile Applications development.
                            <br />
                            Our team of thinkers, engineers and specialists are backed by extensive <span> Blockchain, Analytics, Industrial IoT,</span> in some of the most advanced technology solutions for Fortune 500 companies across industries and in different geographies.
                            <br />
                            With our capabilities and experience, we offer clients <span> Blockchain, Analytics, Industrial IoT,</span> that merge the triad of purposeful concepts, modern development practices, and subject matter expertise. Our clients are our cornerstone, and with them we’ve grown and expanded to design customized hiring solutions that fulfil specific big and small needs.
                            <br />
                            Our company is built upon transparency,<span> ethical</span> business practices, diligence and a constant endeavor to deliver the best. Towards this end, we provide <span> ethical</span> results, underlined by quality and commitment, and match the right talent with the right customer.</div>
                    </div>
                    <div id={a.whoImage}>
                        <Image src='/assets/war.png' width={400} height={400} />
                    </div>
                </div>
                <div id={a.port}>
                    <div id={a.img}>
                        <Image src='/assets/ser.svg' width={400} height={400} />
                    </div>
                    <div id={a.portText}>
                        <div id={a.serHead}> Our Services include:</div>
                        <div className={a.portSer}>1.Digital Consulting</div>
                        <div className={a.portSer}>2.Application Development and Maintenance</div>
                        <div className={a.portSer}>3.Enterprise Applications Platforms</div>
                        <div className={a.portSer}>4.Leading-Edge Product Development</div>
                        <div className={a.portSer}>5.Software Services</div>

                    </div>
                </div>
            </main>
        </div>
    )
}