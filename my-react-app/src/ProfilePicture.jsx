
function ProfilePicture() {
    const imageUrl = './src/assets/Busola_Ogunbayo.jpeg';

    const clickHandler = () => console.log("My Teen and I owner!");

    return(
        <img className="imgurl" src={imageUrl} onClick={clickHandler}></img>
    )
}

export default ProfilePicture;