import { AiOutlineMail  } from "react-icons/ai"
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { signinAuth } from '../../api/authApi'
import { useDispatch } from "react-redux"
import { createUser } from "../../global/GlobalState"

const SigIn = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const model = yup.object({
    email: yup.string().required(),
  })
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(model)
  })

  const onHandleSubmit = handleSubmit(async (res) => {
    const { email } = res

    signinAuth({ email }).then((res)=>{
      dispatch(createUser(res))
      navigate("/")
    })
  })
  return (
    <div className='flex items-center justify-center h-[100vh]'>
      <form className='w-[400px] border rounded min-h-[300px] flex flex-col items-center pt-8' onSubmit={ onHandleSubmit }>

        <div className='w-[90%] border h-[40px] flex items-center my-2 relative'>
          <label className='absolute top-[-10px] px-2 bg-white text-[10px] font-bold'> Email</label>
          <AiOutlineMail  className='text-[silver] text-[30px] ml-2'/>
          <input className="flex-1 outline-none pl-4 bg-[transparent]" placeholder="Enter Email" {...register("email")}/>

        </div>

        <button type="submit" className="bg-[purple] w-[90%] text-white h-[40px] rounded mt-6">Sign In</button>

        <h4 className="w-[100%] text-center">Don't have an account?</h4>

        <Link to='/register'>
        <button type="submit" className="bg-[purple] text-white h-[40px] rounded mt-6 w-[200px]">Register</button>
        </Link>

      </form>
    </div>
  )
}

export default SigIn