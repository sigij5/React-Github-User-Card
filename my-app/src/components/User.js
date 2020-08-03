import React from 'react'
import axios from 'axios';


class User extends React.Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     following: []
        // }

    }

    // componentDidMount() {
    //     axios.get(`https://api.github.com/users/sigij5/following`)
    //     .then(res => {
    //         this.setState({
    //             following: res.data
    //         })
    //     })
    // }

    render(){
        console.log('rendering')
        return(
            <div className='user-card'>
                <div className='user-img'>
                    <img src={this.props.info.avatar_url} />
                </div>
                <div className='user-info'>
                    <h2>{this.props.info.login}</h2>
                    <p>{this.props.info.bio}</p>
                    <p>{this.props.info.location}</p>
                    <a href={this.props.info.html_url}>Github Profile</a>
                </div>
                {/* <div className='following'>
                    {this.state.following.map(user => 
                        <div><h3>{user.login}</h3></div>)}
                </div> */}
            </div>
        )
    }
}

export default User;