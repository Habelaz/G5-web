// import React from 'react'
import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'

let renderCount = 0
interface form{
  username:string,
  email:string,
  userMessage:string
}
const YoutubeForm = () => {
  const form = useForm<form>();
  const { register,control,handleSubmit,formState } = form
  const { errors } = formState
  const onSubmit = (data:form) => {
    console.log('form submitted',data)
  }
  renderCount ++;
  return (
    <div className="container-wrap">
      <div className='container'>
        <h1>Contact Form</h1>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>

          <div className="forms">
            <label htmlFor="username">Full Name <span>*</span></label>
            <input type="text" id="username" {...register("username",{required:{value:true,message:'* user name required'}})} />
            <p>{errors.username?.message}</p>
          </div>

          <div className="forms">
            <label htmlFor="email">Your E-mail <span>*</span></label>
            <input type="text" id="email" {...register("email",{
                required: '* This field is required',
                pattern:{
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message:'* insert a valid format'
                }
              })
            } />
            <p>{errors.email?.message}</p>
          </div>
          
          <div className="forms">
            <label htmlFor="userMessage">Message <span>*</span></label>
            <input type="textarea" placeholder="Enter your message here..." id="userMessage" {...register("userMessage",{required:{value:true,message:'* Message required'}})} />
            <p>{errors.userMessage?.message}</p>
            
          </div>
          <button>submit form</button>
          
        </form>
        <DevTool control={control}/>
      </div>
    </div>
  )
}

export default YoutubeForm
