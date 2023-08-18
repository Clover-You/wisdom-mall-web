import Auth from '#/components/Security/Login'

export default Auth(
  {
    login: true,
  },
  function Home() {
    return <main>Hello Worlds</main>
  },
)
