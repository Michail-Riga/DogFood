import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { SingInFetch } from '../../api/user';
import { Link } from 'react-router-dom';
export const SignIn = () => {
  const navigate = useNavigate()
  const [error, setError] = useState(false)

  const initialValues = {
    password: "",
    email: "",
  }

  const onSubmit = async (values, actions) => {
    console.log(actions);
    const res = await SingInFetch(values);
    const responce = await res.json();

    if (res.ok) {
      localStorage.setItem('token_auth', responce.token)
      return navigate('/products')
    }

    return setError(responce.message)
  }

  const signInSchema = Yup.object().shape({
    password: Yup.string().required('Обязательное поле'),
    email: Yup.string().email('Некорректный email').required('Обязательное поле'),
  });

  return (
    <div className='d-flex justify-content-center btn btn-info'>
      <div>
      <h1>Авторизация</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={signInSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className='py-2'>
          <div>
        <label htmlFor="email">Email</label>
        </div>
            <Field
              name="email"
              placeholder="jane@acme.com*"
              type="email"
            />
            <ErrorMessage className='error' name="email" component='p' />
          </div>
          <div>
        <label htmlFor="firstName">Password</label>
        </div>

          <div>
            <Field name="password" placeholder="Пароль*" type="password" />
            <ErrorMessage className='error' name="password" component='p' />
          </div>
           <div className='py-3'>
          <button type="submit">Submit</button>
          </div>
          <div className='py-2'>
          <p>Если вы не зарегистрированы, <Link to={'/signup'}>Регистрация</Link></p>
           </div>

          {error && <p className='error'>{error}</p>}

        </Form>
      </Formik>
    </div>
    </div>
  )
}
