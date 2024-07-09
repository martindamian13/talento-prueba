export default function ({ $axios, redirect }) {
    const token = localStorage.getItem('token');
    if (!token) {
      return redirect('/');
    }
  
    $axios.setToken(token, 'Bearer');
  }
  