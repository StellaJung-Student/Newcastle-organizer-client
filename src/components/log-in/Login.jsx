import React, {useEffect, useState} from "react"
import "./Login.scss"
import Button from "../html/button/primary"
import SocialButton from "../html/button/social"
import {Link, useHistory} from "react-router-dom"
import {colors} from "../../styles/color";
import Google from "../html/SVG/Google";
import Facebook from "../html/SVG/Facebook";
import Invisibility from "../html/SVG/Invisibility";
import Visibility from "../html/SVG/Visibility";
import axios, {BASE_SERVER_URL} from "../../api/server";
import {localStorageExtract} from "../../utils/LocalStorage";

const initialUser = {
    email: '',
    password: ''
}

const LogIn = () => {

    const BASE_LINK = BASE_SERVER_URL;

    const history = useHistory();

    const [user, setUser] = useState(initialUser)

    // show loader or not
    const [loader, setLoader] = useState(false);

    //Show password or not
    const [passwordVisible, setPasswordVisible] = useState(false);


    const clickToTogglePasswordStatus = (event) => {
        event.preventDefault();
        setPasswordVisible(prevState => !prevState)
    }

    useEffect(() => {
        localStorageExtract()
        if (localStorage.getItem('userInfo') && localStorage.getItem('isAuthenticated') && localStorage.getItem('accessToken')) {
            history.push("/projects");
        }
    }, [])

    const onSignInFormSubmit = async (e) => {
        e.preventDefault();
        setLoader(true);
        try {
            const res = await axios.post('/api/auth/login', user)
            if (res.status === 200) {
                if(res.data.user && res.data.accessToken){
                    localStorage.setItem('userInfo', JSON.stringify(res.data.user))
                    localStorage.setItem('isAuthenticated', 'true')
                    localStorage.setItem('accessToken', res.data.accessToken)
                }
                history.push("/projects");
            }
        } catch
            (e) {
            setLoader(false);
            console.log(e)
        }
    }

    /**
     * Display loader or button
     * @returns {JSX.Element}
     */
    const displayBtn = () => {
        if(loader){
            return(
                <div className="loader"/>
            ) 
        }
        return (
            <Button type={"submit"} title={"Continue"}/>
        )

    }

    return (
        <section className="section__login">
            <div className="section__login__content__wrapper">
                <div className="section__login__title__wrapper">
                    <h1 className="section__login__title">Sign in</h1>
                    <p className="section__login__link">New user? <Link to="/signup">Create an account</Link></p>
                </div>
                <form className="section__login__form" autoComplete="new-password" onSubmit={onSignInFormSubmit}>
                    <div className={"form-group"}>
                        <label className="section__login__form__label" htmlFor="email">Email</label>
                        <input required type="email" name="email" id="email" value={user.email} onChange={(e) => {
                            setUser({...user, email: e.target.value})
                        }}/>
                    </div>
                    <div className={"form-group"}>
                        <label className="section__signup__form__label" htmlFor="password">Password</label>
                        <div className={"form-input-icon"}>
                            <input required type={passwordVisible ? "text" : "password"}
                                   name="password"
                                   id="password"
                                   value={user.password} onChange={(e) => {
                                setUser({...user, password: e.target.value})
                            }}/>
                            <button
                                type={"button"}
                                onClick={clickToTogglePasswordStatus}
                                style={{display: `${passwordVisible ? "none" : "block"}`}}
                                className={"bg-color-transparent"}>
                                <Invisibility size={"1"}/>
                            </button>
                            <button
                                type={"button"}
                                onClick={clickToTogglePasswordStatus}
                                style={{display: `${passwordVisible ? "block" : "none"}`}}
                                className={"bg-color-transparent"}>
                                <Visibility size={"1"}/>
                            </button>
                        </div>
                    </div>

                    <div className={"form-button"}>
                            {displayBtn()}
                    </div>
                </form>
                <div className={"divide"}>
                    <p>Or</p>
                </div>
                <SocialButton link={`${BASE_LINK}/auth/google`} title={"Continue with Google"} type={"button"}
                              backgroundColor={"#ffffff"}
                              borderColor={"#eaeaea"}>
                    <Google size={"1"}/>
                </SocialButton>
                <SocialButton link={`${BASE_LINK}/auth/facebook`} title={"Continue with Facebook"} type={"button"}
                              backgroundColor={colors.facebookColor}
                              color={"#ffffff"}>
                    <Facebook size={"1"} fillB={"#ffffff"} fillF={colors.facebookColor}/>
                </SocialButton>
            </div>
        </section>
    )
}


export default LogIn;