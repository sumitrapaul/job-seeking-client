import { Helmet } from "react-helmet-async";

const Blogs = () => {
  return (
    <div className="my-5 space-y-6 p-5 max-w-7xl mx-auto bg-blue-100 h-full">
      <Helmet>
        <title>JobVista | Blogs</title>
      </Helmet>
      <div className="bg-base-100 rounded-xl p-4 space-y-2">
        <h1 className="font-bold text-2xl">
          Question: What is an access token and refresh token? How do they work
          and where should we store them on the client-side?
        </h1>
        <p className="text-lg">
          The access token is re-issued, provided the refresh token is a valid
          one requesting permission to access confidential resources.
        </p>
        <p className="text-lg">
          A refresh token just helps you re-validate a user without them having
          to re-enter their login credentials multiple times.
        </p>
        <p className="text-lg">
          Access token are typically stored in the browser localstorage or
          cookies.But Refresh token are typically stored in the browser
          localstorage or a secure key-value store.
        </p>
        <p className="text-lg">
          Access tokens and refresh tokens should be stored securely to prevent
          unauthorized access to protected resources.
        </p>
      </div>
      <div className="bg-base-100 rounded-xl p-4 space-y-2">
        <h1 className="font-bold text-2xl">
          Question: What is express js? What is Nest JS?
        </h1>
        <p className="text-lg">
          ExpressJS is a minimal and flexible Node.js web application framework
          that provides a robust set of features for web and mobile
          applications. It is an open source framework developed and maintained
          by the Node.js foundation.
        </p>
        <p className="text-lg">
          NestJS is a framework for building efficient, scalable Node.js
          server-side applications.It uses progressive JavaScript, is built with
          and fully supports TypeScript and combines elements of OOP FP and FRP.
        </p>
      </div>
      <div className="bg-base-100 rounded-xl p-4 space-y-2">
        <h1 className="font-bold text-2xl">Front-end</h1>

        <li>Set up react project,tailwind css and daisyui</li>
        <li>Design user interface</li>
        <li>Firebase authentication</li>
        <li>Job show using form</li>
        <li>Modal,toast show</li>
        <li>Responsive</li>

        <h1 className="font-bold text-2xl">Back-end</h1>

        <li>Set up mongodb,expressJs,cors,jwt</li>
        <li>Cross-origin resource sharing</li>
        <li>
          Use jwt for user authentication.When a user logs in,proide them with a
          token.
        </li>
        <li>Vercel deploy</li>
      </div>
    </div>
  );
};

export default Blogs;
