import { useRef } from 'react';
import styles from './Contact.module.css'
const Contact = (props)=>{

    const nameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();

    const onSubmitHandler = (event) => {
        event.preventDefault();

        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const phone = phoneRef.current.value;

        const contact = {
            name: name,
            email: email,
            phone: phone,
        }

        props.putRequest(contact)
    }


    return (
        <div className={styles.contactBody}>
            <h2>Any Issues? Contact us directly</h2>
            <form className={styles.contactForm} onSubmit={onSubmitHandler}>
                <label htmlFor="name">Name:</label>
                <input id="name" type="text" ref={nameRef} className={styles.contactName}></input>
                <label htmlFor="email">Email ID:</label>
                <input id="email" type="text" ref={emailRef} className={styles.contactEmail}></input>
                <label htmlFor="mobile">Phone Number:</label>
                <input id="mobile" type="number" ref={phoneRef} className={styles.contactPhone}></input>
                <button className={styles.contactBtn}>Submit</button>
            </form>
        </div>
    )
}

export default Contact;