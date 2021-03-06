const editPost = async (event) => {
    try { event.preventDefault();
  
        const title = document.querySelector('input[name="post-title"]').value.trim();
        const content = document.querySelector('input[name="post-title"]').value.trim();
        const id = window.location.toString().split('/')[
          window.location.toString().split('/').length - 1
        ];
        const response = await fetch(`/api/posts/${id}`, {
          method: 'PUT',
          body: JSON.stringify({
            title
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
      
        if (response.ok) {
          document.location.replace('/dashboard/');
        } else {
          alert(response.statusText);
        }
        
    } catch (error) {
        console.log(error)
    }
}

document.querySelector('.edit-post-form').addEventListener('submit', editPost);