import styled from 'styled-components'
import ProfileImage from '../../assets/images/profile-mobile.png';
const Profile = styled.a`
    position: relative;
    display: block;
    background-image: url(${ProfileImage});
    background-size: 100%;
    width: 48px;
    height: 48px;
    margin: 17px;
`;

export default Profile;