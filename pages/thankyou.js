import Link from "next/link"
import t from '../styles/thankyou.module.css'
export default function Thank() {
    return (
        <div id={t.container}>
            <div id={t.center}>
                Thank you, we have recieved your mail and we will get back to you asap. <br />
                <div id={t.back}>
                    <Link href='/'>
                        Back To home
                    </Link>
                </div>
            </div>
        </div>
    )
}