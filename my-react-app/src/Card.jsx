import profilePic from './assets/Busola_Ogunbayo.jpeg';


function Card(){
    return(
        <div className='card'>
            <img className='profilePic' src={profilePic} alt="Profile Picture"></img>
            <h1 className='card-title'>Busola Ogunbayo</h1>
            <p className='card-text'>Founder of the Teen and I website for parents
                to share experiences on raising teenagers.
            </p>
        </div>
    );

}

export default Card