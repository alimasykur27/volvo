import Head from "next/head";

export default function Login() {
  return (
    <>
      <Head>
        <title>Login | Volvo Monitoring ADT A40G</title>
        <meta name="description" content="Deskripsi halaman" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="/css/output.css" rel="stylesheet" />
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <div className="bg-white flex w-4/5 max-w-6xl">
          <div className="w-2/5 flex flex-col items-center justify-center shadow-2xl rounded-2xl">
            <div className="w-4/5 text-3xl text-center items-center justify-center">
              <h1>MONITORING PROGRAM CUSTOMER SUPPORT AGREEMENT</h1>
            </div>
            <div className="flex flex-col items-center justify-center py-5">
              <div className="flex flex-col items-center justify-center p-5">
                <input
                  className="text-center"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="border-2 w-full bg-gray-200 -mt-3"></div>
              <div className="flex flex-col items-center justify-center py-5 mt-4">
                <input
                  className="text-center"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </div>
              <div className="border-2 w-full bg-gray-200 -mt-3"></div>
              <div className="flex flex-col items-center justify-center py-5 mt-2">
                <button className="border-2 text-white bg-gray-700 rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-gray-700">
                  Login
                </button>
              </div>
            </div>
          </div>
          <div className="w-3/5">
            <img src="login.png" alt="Login" />
          </div>
        </div>
      </div>
    </>
  );
}