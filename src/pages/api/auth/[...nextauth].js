import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


export default NextAuth({

  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",

      id: "credentials",

      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied

        const res = await fetch('http://13.53.95.48:3000/api/user/login', {
          method: 'POST',
          headers: {
            "Content-Type": 'application/json'
          },
          body: JSON.stringify({
            email_id: credentials?.email_id,
            password: credentials?.password
          })
        })
        const user = await res.json();

        console.log(user.result.list.user_type)


        if (user && !user.error) {
          if (user.result.list.user_type === 1) {
            // Redirect to Admin/ShopList
            return {
              email_id: user.email_id,
              password: user.password
            };
          } else if (user.result.list.user_type === 2) {
            // Redirect to Signup/Signup Page
            return {
              email_id: user.email_id,
              password: user.password, // Include user_type in the returned object
            };
          }
        }

        return null;
      }
    })
  ],
  callbacks: {

  }


})