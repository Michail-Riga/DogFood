import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';

export const SignUp = () => {

        return (
  <div className='d-flex justify-content-center btn btn-info'>
    <div>
    <h1>Регистрация</h1>
    
    <Formik
      initialValues={{
        password: '',
        group: '',
        email: '',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
        
      <Form>
        <div className='py-2'>
            <div>
        <label htmlFor="lastName">Password</label>
        </div>
        <Field id="firstName" name="firstName" placeholder="Jane" />
         </div>
         <div className='py-2'>
            <div>
        <label htmlFor="lastName">Group</label>
        </div>
        <Field id="lastName" name="lastName" placeholder="Doe" />
          </div>
          <div className='py-2'>
            <div>
        <label htmlFor="email">Email</label>
        </div>
        
        <Field
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        />
        </div>
        <div className='py-2'>
        <button type="submit">Submit</button>
        </div>
        
      </Form>
    </Formik>
    </div>
  </div>
);
    }

ReactDOM.render(<SignUp />, document.getElementById('root'));
