import React, { useState } from "react"
import "./App.css"

export const App = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordDirty, setPasswordDirty] = useState(false)
  const [emailDirty, setEmailDirty] = useState(false)
  const [emailError, setEmailError] = useState("Емейл не может быть пустым")
  const [passwordError, setPasswordError] = useState(
    "Пароль не может быть пустым",
  )

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true)
        break
      case "password":
        setPasswordDirty(true)
        break
    }
  }

  return (
    <div className="App">
      <form>
        <h1>Регистрация</h1>
        {emailDirty && emailError && (<p style={{ color: "red" }}>{emailError}</p>)}
        <input onBlur={e => blurHandler(e)} name="email" type="text" placeholder="Enter your email..." />

        {passwordDirty && passwordError && (<p style={{ color: "red" }}>{passwordError}</p>)}
        <input onBlur={e => blurHandler(e)} name="password" type="password" placeholder="Enter your password..." />

        <button type="submit">Registration</button>
      </form>
    </div>
  )
}

export default App;
