import Head from "next/head";
import s from '../styles/contact.module.css'
import Link from "next/link";
import Image from "next/image";


export default function Contact() {
    return (
        <div id={s.container}>
            <Head>
                <title>Contact@wg</title>
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
                <div id={s.back}>
                    <Link href='/'>
                        <div id={s.backBtn}>Back To home</div>
                    </Link>
                </div>
                <div id={s.formArea}>
                    <div id={s.mainForm}>
                        <div id={s.formHeading}>
                            Contact Form
                        </div>
                        <div id={s.formsubHeading}>
                            Fill up this form and we will get back to you as soon as possible
                        </div>
                        <form action="https://formsubmit.co/diptanshumahish2016@gmail.com" id={s.contactForm} method="POST">
                            <label htmlFor="Name">
                                <div className={s.forEle}>
                                    Name
                                </div>
                                <input type="text" placeholder="Enter your name" name="name" />
                            </label>
                            <label htmlFor="Email" >
                                <div className={s.forEle}>
                                    Email
                                </div>
                                <input type="email" placeholder="Enter your Email" name="email" />
                            </label>
                            <label htmlFor="mobileNumber">
                                <div className={s.forEle}>
                                    Mobile Number
                                </div>
                                <input type="tel" placeholder="Enter your Mobile Number" name="mobile Number" />
                            </label>
                            <label htmlFor="message">
                                <div className={s.forEle}>
                                    Message
                                </div>
                                <textarea name="message" id="" cols="20" rows="10" placeholder="Enter your Message here" ></textarea>
                            </label>
                            <input type="hidden" name="_next" value="https://warriorsgrp.com/thankyou"></input>
                            <input type="hidden" name="_template" value="box"></input>
                            <input type="hidden" name="_captcha" value="false"></input>
                            <button type="submit" id={s.submit}>Submit</button>
                        </form>
                    </div>
                    <Image src='/assets/form.svg' width={500} height={400} />

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