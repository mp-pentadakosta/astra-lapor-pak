"use client";

import { LoginViewModel } from "@/view/before_login/login/view_model/LoginViewModel";


export const LoginView = () => {
    const { setLogin, doLogin, loading } = LoginViewModel();

    return <div className = "container h-p100">
        <div className = "row align-items-center justify-content-md-center h-p100">

            <div className = "col-12">
                <div className = "row justify-content-center g-0">
                    <div className = "col-lg-5 col-md-5 col-12">
                        <div className = "bg-white rounded10 shadow-lg">
                            <div className = "content-top-agile p-20 pb-0">
                                <img src = "/img/img/logo-astra-full.png"
                                     alt = { "Logo" }
                                     style = { {
                                         margin : "20px",
                                         width : "70%",
                                         height : "auto"
                                     } }/>
                            </div>
                            <div className = "p-40">
                                <div className = "form-group">
                                    <div className = "input-group mb-3">
                                            <span className = "input-group-text bg-transparent">
                                                <i className = "text-fade ti-user"></i>
                                            </span>
                                        <input type = "email"
                                               className = "form-control ps-15 bg-transparent"
                                               onChange = { ( e ) => setLogin( ( prevState ) => {
                                                   return {
                                                       ...prevState,
                                                       email : e.target.value
                                                   }
                                               } ) }
                                               placeholder = "Email"/>
                                    </div>
                                </div>
                                <div className = "form-group">
                                    <div className = "input-group mb-3">
                                            <span className = "input-group-text  bg-transparent">
                                                <i className = "text-fade ti-lock"></i>
                                            </span>
                                        <input type = "password"
                                               onChange = { ( e ) => setLogin( ( prevState ) => {
                                                   return {
                                                       ...prevState,
                                                       password : e.target.value
                                                   }
                                               } ) }
                                               className = "form-control ps-15 bg-transparent"
                                               placeholder = "Password"/>
                                    </div>
                                </div>
                                <div className = "row">
                                    <div className = "col-12 text-center">
                                        <button type = "submit"
                                                onClick = {
                                                    loading ? () => {
                                                    } : doLogin
                                                }
                                                className = "btn btn-primary w-p100 mt-10">
                                            {
                                                loading ?
                                                    "Tunggu Sebentar..." :
                                                    "SIGN IN"
                                            }
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
