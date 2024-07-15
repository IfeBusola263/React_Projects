
import PropTypes from 'prop-types'

function UserGreeting(props) {
    const welcomeMsg = <h1 className='welcomeprompt'>
                        Welcome {props.username}
                        </h1>

    const loginPrompt = <h1 className='loginprompt'>
                        Please log in to continue
                        </h1>
    
    return(props.isLoggedin ? welcomeMsg : loginPrompt);
}

UserGreeting.proptypes = {
    isLoggedin: PropTypes.bool,
    username: PropTypes.string,
}

UserGreeting.defaultProps = {
    isLoggedin: false,
    username: "Guest",
}

export default UserGreeting