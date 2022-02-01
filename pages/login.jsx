import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { userService } from 'services';

export default Login;

function Login() {
    const router = useRouter();

    useEffect(() => {
        // redirect to home if already logged in
        if (userService.userValue) {
            router.push('/');
        }
    }, []);

    // form validation rules 
    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required')
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, setError, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit({ username, password }) {
        return userService.login(username, password)
            .then(() => {
                // get return url from query parameters or default to '/'
                const returnUrl = router.query.returnUrl || '/';
                router.push(returnUrl);
            })
            .catch(error => {
                setError('apiError', { message: error });
            });
    }

    return (
        
        
        
        <div className="col-md-6 offset-md-3 mt-5">
            <div class="bg-white border-slate-100 dark:bg-slate-800 dark:border-slate-500 border-b rounded-t-xl p-4 pb-6 sm:p-10 sm:pb-8 lg:p-6 xl:p-10 xl:pb-8 space-y-6 sm:space-y-8 lg:space-y-6 xl:space-y-8">
  <div class="flex items-center space-x-4">
    <img src="/full-stack-radio.png" alt="" width="88" height="88" class="flex-none rounded-lg bg-slate-100" />
    
    <div class="min-w-0 flex-auto space-y-1 font-semibold">

    <div class="space-y-2">
    
  </div>




  <section>
  <header class="bg-white space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6">
    <div class="flex items-center justify-between">
      <h2 class="font-semibold text-slate-900">Acesso</h2>
      
    </div>
    <form class="group relative" onSubmit={handleSubmit(onSubmit)}>
      
      <div className="form-group">
                            <label>Username</label>
                            <input class="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm" type="text" aria-label="Filter projects" placeholder="" name="username" type="text"  {...register('username')} className={`form-control ${errors.username ? 'is-invalid' : ''}`} />
                           
                            <div className="invalid-feedback">{errors.username?.message}</div>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input class="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm" type="text" aria-label="Filter projects" placeholder="" name="password" type="password" {...register('password')} className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.password?.message}</div>
                        </div>
                        <button disabled={formState.isSubmitting} class="hover:bg-blue-400 group flex items-center rounded-md bg-blue-500 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm">
                            {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                            Login
                        </button>
                        {errors.apiError &&
                            <div className="alert alert-danger mt-3 mb-0">{errors.apiError?.message}</div>
                        }

      
    </form>
  </header>
  </section>
                </div>
            </div>
            
  </div>
  
  </div>
  
            
            
        
    );
}
