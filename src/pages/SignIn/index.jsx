import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { signInFetch } from '../../api/user';
import { useDispatch } from 'react-redux';
import { setUpUser } from '../../redux/slices/userSlice';
import { useNoAuth } from '../../hooks/useNoAuth';
import { useMutation } from 'react-query';
import { TOKEN } from '../../utils/token';

export const SignIn = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useNoAuth()

  const initialValues = {
    password: "",
    email: "",
  }

  const { mutateAsync, isError} = useMutation({
    mutationFn: async (values) => {
      const res = await signInFetch(values)
      if (res.ok) {
        const responce = await res.json()
        return responce
      }
  return false
    }
  })

  const signInSchema = Yup.object().shape({
    password: Yup.string().required('Обязательное поле'),
    email: Yup.string().email('Некорректный email').required('Обязательное поле'),
  });

  const onSubmit = async (values) => {
    const responce = await mutateAsync(values)
    dispatch(setUpUser({ ...responce.data, token: responce.token }))            
     localStorage.setItem(TOKEN, responce.token)
    return navigate('/products')
  }

  return (
    <div className='d-flex justify-content-center btn btn-info'>
      <div>
      <h1>Авторизация</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={signInSchema}                    
        onSubmit={(values) => onSubmit(values)}
      >
        <Form>
          <div className='py-2'>
          <div>
        <label htmlFor="email">Email</label>
        </div>
            <Field name="email" placeholder="jane@acme.com*" type="email"/>
            <ErrorMessage className='error' name="email" component='p'/>
          </div>

          <div>
        <label htmlFor="firstName">Password</label>
        </div>

          <div>
            <Field name="password" placeholder="Пароль*" type="password"/>
            <ErrorMessage className='error' name="password" component='p'/>
          </div>

           <div className='py-3'>
          <button type="submit">Submit</button>
          </div>

          <div className='py-2'>
          <p>Если вы не зарегистрированы, перейдите на страницу <Link to={'/signup'}>Регистрации</Link></p>
           </div>

         {isError && <p className='error'>{isError}</p>}

        </Form>
      </Formik>
    </div>
    </div>
  )
  }
