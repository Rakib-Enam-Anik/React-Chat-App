import { useState } from 'react';
import axios from 'axios';

const LoginForm = () =>{
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = () =>{
        e.preventDefault();

        const authObject = {'Project-ID' : "0051b89a-4c93-45f6-8aa9-55b733c33fbb", 'User-Name': username, 'User-Secret': password}
        try{
            //username | password => chatengine -> give messages
            await axios.get('https://api.chatengine.io/chats',{headers: authObject});
            //works out -> logged in

            localStorage.setItem('username', username);
            localStorage.setItem('password',password);

            window.location.reload();

        }catch(error){
            //error -> try with new username...
            setError('Oops, incorrect credentials.')


        }

        
        
        
    }

    return(
        <div className='wrapper'>
            <div className='form'>
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="username" required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="password" required />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start chatting</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    );
}

export default Login