import React from 'react'

export const Footer = () => {
    let footerStyle = {
         position:"absoleut",
         top:"100vh",
         width:"100%"

    }
    return (
      

        <footer className="bg-dark text-light" style={footerStyle}>
            {/* footer works */}
        
            <p className="text-center">

                Copyright &copy; MyTodosList.com
            </p>
        </footer>
    )
}
