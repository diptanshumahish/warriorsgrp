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
                <div id="mobCross">
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
                    <div id="navMob">
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
                        <form action="" id={s.contactForm}>
                            <label htmlFor="Name">
                                <div className={s.forEle}>
                                    Name
                                </div>
                                <input type="text" placeholder="Enter your name" />
                            </label>
                            <label htmlFor="Email" >
                                <div className={s.forEle}>
                                    Email
                                </div>
                                <input type="email" placeholder="Enter your Email" />
                            </label>
                            <label htmlFor="mobileNumber">
                                <div className={s.forEle}>
                                    Mobile Number
                                </div>
                                <input type="tel" placeholder="Enter your Mobile Number" />
                            </label>
                            <label htmlFor="message">
                                <div className={s.forEle}>
                                    Message
                                </div>
                                <textarea name="" id="" cols="20" rows="10" placeholder="Enter your Message here"></textarea>
                            </label>
                            <button type="submit" id={s.submit}>Submit</button>
                        </form>
                    </div>
                    <Image src='/assets/form.svg' width={500} height={400} />

                </div>
            </main>
            <script src="/navv.js"></script>

        </div>

    )
}