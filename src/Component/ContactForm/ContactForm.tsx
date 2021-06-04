import { useEffect, useState } from "react"

const ContactForm = () => {

    const[username, setUsername] = useState('');
    const[email, setEmail] = useState('');

    const HandlerChangeUser = (event: any) => {
        setUsername(event.target.value);

    }

    const HandlerChangeEmail = (event: any) => {
        setEmail(event.target.value);

    }

    return (
        <form id="contact-form">
            <div className="form-group">
                <label htmlFor="name">Username</label>
                <input type="text" className="form-control" value = {username} onChange = {HandlerChangeUser} />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email</label>
                <input type="email" className="form-control" aria-describedby="emailHelp" value = {email} onChange = {HandlerChangeEmail} />
            </div>
            <br></br>
            <button type="submit" className="btn btn-primary">Aceptar</button>
    </form>
    )
}

export default ContactForm
