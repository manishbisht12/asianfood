await axios.post(
  `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
  {
    email: form.email,
    password: form.password,
  },
  {
    withCredentials: true,
  }
);
