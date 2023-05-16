  import { Formik, Field, Form, ErrorMessage } from 'formik';
  import * as Yup from 'yup';
  import { Link, useNavigate } from 'react-router-dom';
  import { fetchAuth, fetchReg } from '../../api/user';
  import { toast } from 'react-toastify';
  import { useNoAuth } from '../../hooks/useNoAuth';
  import { useDispatch } from 'react-redux';
  import { setNewUser } from '../../redux/slices/userSlice';
  
  export const SignUp = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useNoAuth()
  
    const signUpSchema = Yup.object().shape({
      password: Yup.string()
        .min(4, 'Пароль cлишком короткий!')
        .max(10, 'Пароль cлишком длинный!')
        .required('Обязательное поле'),
      email: Yup.string().email('Некорректный email').required('Обязательное поле'),
      group: Yup.string()
        .min(4, 'min 4')
        .max(8, 'max 8 ')
        .required('Обязательное поле'),
    });
  
    const initialValues = {
      email: '',
      password: '',
      group: ''
    }
  
    const onSubmit = async (values) => {
      const resReg = await fetchReg(values)
      const responceReg = await resReg.json()
  
      if (resReg.ok) {
        const resAuth = await fetchAuth({ email: values.email, password: values.password })
        const responceAuth = await resAuth.json()
  
        if (resAuth.ok) {
          dispatch(setNewUser({
            ...responceAuth.data,
            token: responceAuth.token
          }))
          toast.success("Ваша регистрация прошла успешно")
  
          return navigate('/products')
        }
  
        return toast.error(responceAuth.message)
      }
  
      return toast.error(responceReg.message)
    }

  return (
    <>
        <div className='d-flex justify-content-center btn btn-info'>
      <div>
      <h1>Регистрация</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={signUpSchema}
        onSubmit={(values) => onSubmit(values)}
      >
        <Form>

          <div className='py-2'>
          <div>
        <label htmlFor="email">Email</label>
        </div> 
            <Field id='email' name="email" placeholder="jane@acme.com*"/> 
            <ErrorMessage className='error' name="email" component='p'/>
          </div>

          <div className='py-2'>
            <div>
        <label htmlFor="lastName">Group</label>
        </div>
        <Field id="lastName" name="group" placeholder="Doe*"/>
        <ErrorMessage className='error' name="group" component='p'/>
          </div>

          <div className='py-2'>
            <div>
          <label htmlFor="firstName">Password</label>
          </div>
            <Field id="password" name="password" placeholder="Пароль*"/>
            <ErrorMessage className='error' name="password" component='p'/>
          </div>
          
          <div className='py-2'>
          <button type="submit">Зарегистрироваться</button>
          </div>

          <div className='py-2'>
          <p>У Вас есть аккаунт? Перейдите на страницу <Link to={'/signin'}>Авторизации</Link></p>
           </div>
        </Form>
      </Formik>
      </div>
    </div>
     </> 
  )
  }

  
