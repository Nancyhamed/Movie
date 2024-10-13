import { useFormik } from 'formik'
import React from 'react'

export default function Register() {

    function validate(values){
        let errors={};

        if(!values.name){
            errors.name='Name is required';
        }
        else if(values.name.length<2)
        {
            errors.name='minimin length is 3';
        }

        if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
            errors.email='E-mail is not valid';
        }
        else if(!values.email)
        {
            errors.email='email is required';
        }

        // if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(values.password))
        // {
        //     errors.password='invalid password'
        // }

        return errors ;
    }

    function handleSubmit(values){
        console.log(values)
    }

    let formik =useFormik({
        initialValues:{
            name:'',
            email:'',
            password:'',
            phone:''
        },
        validate,
        onSubmit:handleSubmit
    })

    return (
        <div className='w-75 mx-auto'>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="">Name:</label>
                <input value={formik.values.name} onChange={formik.handleChange} type="text" name="name" id="name" onBlur={formik.handleBlur}  className='form-control mb-3'/>
                {formik.errors.name && formik.touched.name? <p style={{color:'red'}}>{formik.errors.name}</p>:null}

                <label htmlFor="">Email:</label>
                <input type="email" name="email" id="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} className='form-control mb-3'/>
                {formik.errors.email && formik.touched.email?<p style={{color:'red'}}>{formik.errors.email}</p>:null}

                <label htmlFor="">Password:</label>
                <input type="password" name="password" id="password" onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur}  className='form-control mb-3'/>
                {formik.errors.password && formik.touched.password?<p style={{color:'red'}}>{formik.errors.password}</p>:null}
                
                <label htmlFor="">Phone :</label>
                <input type="tel" name="phone" id="phone" value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} className='form-control mb-3'/>

                <button className='btn btn-success' type='submit'>Register</button>

            </form>
        </div>
    )
}
