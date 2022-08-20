import React from 'react';
import Picture from '../../Image/web-image.png';
const Admin = () => {

    const url ='https://www.linkedin.com/in/swapnil-ahmed-901575213/';
    const URL = 'https://github.com/swapnilahmedshishir';
    return (
        <div style={{textAlign:'center' , margin:"20px"}}>
           
            <img style={{width:"200px"}} src={Picture} alt=""/>
            <h1>Swapnil ahmed shishir</h1>
            <a href={url} target='_blank'>Linkdin</a><br/><br/>
            <a href={URL} target='_blank'>GitHub</a>
           
        </div>
    );
};

export default Admin;