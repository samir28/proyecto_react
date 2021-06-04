import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

interface TitleProps {
    children: React.ReactChild
}

const  Header = ({ children }: TitleProps) => {
    return (
        <h2> {children} </h2>
    )
}
export default Header;
