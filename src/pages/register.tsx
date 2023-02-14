import { NextPage } from "next";
import { HeaderMegaMenu } from "../utils/components/Header";
import { AuthenticationForm } from "../utils/components/RegisterForm";

const Register: NextPage = () => {
    return (
        <>
            <HeaderMegaMenu />
            <AuthenticationForm />
        </>
    )
}

export default Register;