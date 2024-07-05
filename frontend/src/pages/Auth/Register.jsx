import { useAuth } from '../../Context/authContext';
import React , {useState} from 'react';
import Layout from '../../components/Layout/Layout.jsx';


const Register = () => {
  const {register} = useAuth();
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const handleChange = (e)=>
    {
        const {name,value}=e.target;
        if(name==='name')
          setName(value);
        else if(name==='email')
          setEmail(value);
        else if(name==='password')
          setPassword(value);
    }
  const handleSubmit = async (e)=>
    {
      e.preventDefault();
      try{
      await register(name,email,password)
      }
      catch(error)
      {
        console.log(error);
      }
      
      
    }
  return (
  <Layout>
    <div>
      <form onSubmit={handleSubmit}>

        <label>Name:</label>
        <input type="text"
        name="name"
        value={name}
        onChange={handleChange}/>
        <label>Email:</label>
        <input type="email"
        name="email"
        value={email}
        onChange={handleChange}/>
        <label>Password:</label>
        <input type="password"
        name="password"
        value={password}
        onChange={handleChange}/>
        <button type='submit'>Register</button>
      </form>
    </div>
    </Layout>
  )
}

export default Register
