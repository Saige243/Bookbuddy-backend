import { useState, useEffect } from 'react'
import { FaUser } from 'react-icons/fa'

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: '',
    password2: ''
  })

  const { name, email, password, password2 } = formData

  return (
    <>
      <section>
        <h1>
          <FaUser /> Register
      </h1>
        <p>Please create an account</p>
      </section>
      <section>
        <form>
          <input type="text" className="form-control" id="name" name="name" value={name} />
        </form>
      </section>
    </>
  )
}

export default Register
