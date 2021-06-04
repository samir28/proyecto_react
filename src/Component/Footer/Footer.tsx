import React from 'react'

interface TitleProps {
    children: React.ReactChild
}

const Footer = ({ children }: TitleProps) => {
    return (
       <h5>{ children }</h5>
    )
}
export default Footer;