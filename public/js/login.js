const createNewAccount = async (event) => {
    try { event.preventDefault();
    
        const username = document.querySelector('#username-signup').value.trim();
        const email = document.querySelector('#email-signup').value.trim();
        const password = document.querySelector('#password-signup').value.trim();
    
        if(username && password && email) {
            const response = await fetch('/api/users', {
                method: 'post',
                body: JSON.stringify({
                    username,
                    email,
                    password
                }),
                headers: { 'Content-Type': 'application/json' }
            })

            if(response.ok) {
                document.location.replace('/dashboard');
            } else {
                alert(response.statusText)
            }
        }        
    } catch (error) {
        console.log(error);

    }
}

const login = async (event) => {
    try { event.preventDefault();

        const email = document.querySelector('#email-login').value.trim();
        const password = document.querySelector('#password-login').value.trim();
      
        if (email && password) {
          const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
              email,
              password
            }),
            headers: { 'Content-Type': 'application/json' }
          });
      
          if (response.ok) {
            document.location.replace('/dashboard');
          } else {
            alert(response.statusText);
          }
        }
    } catch (error) {
        console.log(error)
    }
}

document.querySelector('.signup-form').addEventListener('submit', createNewAccount);
document.querySelector('.login-form').addEventListener('submit', login);