import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";

export const localStorageExtract = () => {
    const accessToken = Cookies.get('accessToken');
    if (accessToken) {
        localStorage.setItem('isAuthenticated', true);
        localStorage.setItem('userInfo', JSON.stringify(jwt_decode(accessToken).data));
        localStorage.setItem('accessToken', accessToken);
    }
}