import { Button } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input";

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Message } from "@/shared/ui/Message";
import CenterLayout from "@/shared/components/CenterLayout";
import Card from "@/shared/ui/Card/Card";


interface ILoginForm {
    email: string;
    password: string;
}

const loginSchema = yup.object().shape({
    email: yup.string().required("Email is required").email("Please enter valid email"),
    password: yup.string().required("Password is required").min(4, "Min 4 word needed")
})

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<ILoginForm>({
        resolver: yupResolver(loginSchema),
        mode: "onBlur"
    })

    const submitData = (data: ILoginForm) => {
        console.log(data);

    }

    return (
        <CenterLayout>
            <Card>
                <div>
                    <form onSubmit={handleSubmit(submitData)}>
                        <div className=" my-4">
                            <label htmlFor="email" className="flex justify-around items-center">
                                <span className="text-slate-400 font-semibold w-1/6">Email</span>
                                <div className="w-5/6">
                                    <Input name="email" placeholder="email" register={register} />
                                    <Message errorType="form" errorData={errors['email']} msgType='error' />
                                </div>
                            </label>

                        </div>


                        <div className="my-4">
                            <label htmlFor="email" className="flex justify-around items-center">
                                <span className="text-slate-400 font-semibold w-1/6">Password</span>
                                <div className="w-5/6">
                                    <Input placeholder="password" type="password" register={register} name="password" />
                                    <Message errorType="form" errorData={errors['password']} msgType='error' />

                                </div>
                            </label>

                        </div>

                        <div className="flex justify-between">
                            <Button text="Login" type="submit" btnType="primary" />
                            <a href="">Signup</a>
                        </div>
                    </form>


                </div>
            </Card>
        </CenterLayout>

    )
}

export default Login