import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { signInFetch } from '../../api/user';
import { TOKEN } from '../../utils/token';

export const SignUp= () => {
const navigate = useNavigate()
  const [error, setError] = useState(false)

  const initialValues = {
    email: "",
    group: "",
    password: "",
  }

 const onSubmit = async (values) => {
    const res = await signInFetch(values);
  const responce = await res.json();

    if (res.ok) {
    localStorage.setItem(TOKEN, responce.token)
    return navigate('/products')
    }
    return setError(responce.message)
 }
 
  const signInSchema = Yup.object().shape({
    email: Yup.string().email("Некорректный email").required('Обязательное поле'), 
    group: Yup.string().required('Обязательное поле'),
    password: Yup.string().required('Обязательное поле')
  });

  return (
    <>
        <div className='d-flex justify-content-center btn btn-info'>
      <div>
      <h1>Регистрация</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={signInSchema}
        //onSubmit={onSubmit}
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
        <Field id="lastName" name="lastName" placeholder="Doe*"/>
        <ErrorMessage className='error' name="lastName" component='p'/>
          </div>

          <div className='py-2'>
            <div>
          <label htmlFor="firstName">Password</label>
          </div>
            <Field id="password" name="password" placeholder="Пароль*"/>
            <ErrorMessage className='error' name="password" component='p'/>
          </div>

          <button type="submit">Submit</button>

          {error && <p className='error'>{error}</p>}

        </Form>
      </Formik>
      </div>
    </div>
     </> 
  )
  }

  
