import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
        <main>
            <form >
                <div>
                    <label>Your Name</label>
                    <input type="text" required placeholder='John Doe'/>
                </div>
                <div>
                    <label>Your Email</label>
                    <input type="email" required placeholder='abc@xyz.com'/>
                </div>
                <div>
                    <label>Your Message</label>
                    <input type="text" required placeholder='Enter your query... '/>
                </div>
                <button type='submit'>Send</button>
            </form>
        </main>
    </div>
  )
}

export default Contact