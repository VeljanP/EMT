import React from 'react';
import './profile.css';
import userService from "../../service/userService";

class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: null
        }
    }

    componentDidMount() {
        const routeIdKorisnik = this.props.match.params.idKorisnik;
        this.getUser(routeIdKorisnik);
    }



    getUser(idKorisnik) {
        userService.getUser(idKorisnik).then((user) => {
            this.setState((previousState) => {
                return {
                    user: user
                }
            })
        });
    }

    render() {
        return "User Profile"
    }
}

export default Profile;
