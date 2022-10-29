import Head from "next/head"
import a from "../styles/about.module.css"
import Link from "next/link"
import Image from "next/image"
import { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css";
export default function About() {
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);
    return (

        <div id={a.container}>
            <Head>
                <title>About Us </title>
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
            <nav>
                <div id="navLeft">
                    <Link href='/'>
                        <div id="logo"> <Image src='/light2trans.png' height={50} width={50} /> Warriors Group LLC</div>
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
            <main>
                <div id={a.who} data-aos="fade-up">
                    <div id={a.whoText}>
                        <div id={a.whoHead}>Our Mission</div>
                        <div id={a.whoSub}>
                            Our mission is to build centres of excellence that foster a high-quality experience for our clients and partners through the highest standards of ethics, quality, and mutual respect.

                            Our seasoned team of recruiters uses cutting-edge technology and subject-matter experience to offer outstanding talent to our clients. When it comes to finding the best personnel, whether you are an established firm or an experienced professional, we can be your go-to source.
                        </div>
                        <div id={a.whoHead}>Our Vision</div>
                        <div id={a.whoSub}>
                            We strive to provide our customers with the best possible service that meets all of their requirements. We are working to redefine the employment and consulting sector dynamics as a strong, service-first, trusted globally.
                        </div>
                    </div>
                    <div id={a.whoImage}>
                        <Image src='/assets/war.png' width={400} height={400} />
                    </div>
                </div>
                <div id={a.port} data-aos="fade-up">
                    <div id={a.img}>
                        <Image src='/assets/ser.svg' width={400} height={400} />
                    </div>
                    <div id={a.portText}>
                        <div id={a.serHead}> Some key features of our oraganization:</div>
                        <div className={a.portSer}>✦ Hassle-free business solutions that you can rely on.</div>
                        <div className={a.portSer}>✦ We believe in &ldquo;Clients success is our success&rdquo;.</div>
                        <div className={a.portSer}>✦ At Warriors Group Talent meets appreciation and wonders occur</div>
                        <div className={a.portSer}>✦ Our promises are not vague ones, we actually fulfil them</div>


                    </div>
                </div>
                <div id={a.insp}>
                    <div id={a.inspText} data-aos="fade-right">
                        <div id={a.inspHead}>Feeling inspired or having questions?</div>
                        <div id={a.inspSub}>Do not hesitate to contact us !</div>
                        <Link href='/contact'> <div id={a.contactBtn}>Contact Us</div></Link>

                    </div>
                    <div id={a.inspImage}>
                        <Image src='/assets/happy.svg' height={500} width={500} data-aos="fade-left" />
                    </div>
                </div>

            </main>
            <footer >
                <div id="footerLeft">
                    <div id="footerLogo">
                        <Image src='/assets/war.png' height={100} width={100} />
                    </div>
                    <div id="logoText">Warriors Group LLC</div>
                    <div id="footeradress">Lewes,USA</div>
                </div>
                <div id="footerRight">
                    <div className="footerContact" id="mobInc">Warriors Group LLC</div>
                    <Link href='tel:+1 (302)-476-2579'><div className="footerContact"> ☎+1 (302)-476-2579</div></Link>
                    <Link href='mailto:Contact@warriorsgrp.com'><div className="footerContact"> Contact@warriorsgrp.com</div></Link>
                    <div className="footerContact">16192 Coastal Highway
                        Lewes, DE 19958 USA</div>
                    <div className="footerContact">Fax: 302-645-1280</div>

                    <div className="footerContact" id="socials">
                        <Link href='https://wa.me/3024762579'>
                            <div className="socialIco"><Image src='/assets/whatsapp.png' width={30} height={30} /></div>

                        </Link>
                        <Link href='http://facebook.com/WarriorsGroupLLC'>
                            <div className="socialIco"><Image src='/assets/linkedin.png' width={30} height={30} /></div>
                        </Link>
                        <Link href='https://www.instagram.com/invites/contact/?i=ocmsbs0g3tfx&utm_content=prace9n'>
                            <div className="socialIco"><Image src='/assets/insta.png' width={30} height={30} /></div>
                        </Link>
                        <Link href='http://facebook.com/WarriorsGroupLLC'>
                            <div className="socialIco"><Image src='/assets/fb.png' width={30} height={30} /></div>
                        </Link>
                    </div>

                </div>

            </footer>


        </div>
    )
}