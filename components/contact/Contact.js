import React from 'react'

const ContactComp = () => {
  return (
    <div>
        <form>
            <input type='text' className={styles.name}/>
            <div>
                <input type='text' className={styles.phone}/>
                <input type='tel' className={styles.email}/>
            </div>
            <select name="cars" id="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </select>
            <textarea row='3' col='8'/>
        </form>
    </div>
  )
}

export default ContactComp