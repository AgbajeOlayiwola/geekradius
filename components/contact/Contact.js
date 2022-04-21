import React, {useState} from 'react'
import styles from '../../styles/pages/contact/contact.module.css'

const ContactComp = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [message, setMessage] = useState('')
  const [reason, setReason] = useState()


  const [submitted, setSubmitted] = useState(false)
  // console.log(reason)

  const handleSubmit = (e) => { 
      e.preventDefault()
      console.log('Sending')

      let data = {
        name,
        email,
        number,
        reason,
        message
      }
  
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      console.log('Response received')
      if (res.status === 200) {
        console.log('Response succeeded!')
        setSubmitted(true)
        setName('')
        setEmail('')
        setNumber('')
        setMessage('')
        setReason('')
      }
  }) .catch(error => {
      res.json(error);
      res.status(405).end();
      return resolve(); //in case something goes wrong in the catch block 
    });
}
  return (
    <div className={styles.contactform}>
        <form>
            <input type='text' 
            className={styles.name}
            placeholder='Name'
            onChange={(e)=>{setName(e.target.value)}} /><br/><br/>

            <div className={styles.phonem}>
                <input type='text' 
                className={styles.phone}
                placeholder='Phone'
                onChange={(e)=>{setNumber(e.target.value)}} />

                <input type='tel' 
                className={styles.email}
                placeholder='Email'
                onChange={(e)=>{setEmail(e.target.value)}} />

            </div><br/>
            <select name="cars" id="cars" className={styles.options}
            onChange={(e)=>{setReason(e.target.value)}} >
                <option value="volvo">Reason</option>
                <option value="New Project">New Project</option>
                <option value="ExistingProject">Existing Project</option>
                <option value="Branding">Branding</option>
                <option value="WebsiteDesign">Website Design</option>
                <option value="UserExperience">User Experience</option>
            </select><br/>
            <textarea row='8' col='18'
            placeholder='Your Message'
            className={styles.textare}
            onChange={(e)=>{setMessage(e.target.value)}} ></textarea>
            <div className={styles.sndMsg}>



            <button
            onClick={(e)=>{handleSubmit(e)}}>SEND MESSAGE</button>
            </div>
        </form>
    </div>
  )
}

export default ContactComp