import ContactComp from '../../components/contact/Contact'
import styles from '../../styles/pages/contact/contact.module.css'

const Contact = () => {
  return (
    <div className={styles.contactCover}>
    <div className={styles.contactPage}>
        <div className={styles.contactHead}>
          <h1>Contact Us</h1>
        </div>
        <div className={styles.contact}>
            <ContactComp/>
        </div>
    </div>
    </div>
  )
}

export default Contact