import { useForm } from "react-hook-form";

export const Register = () => {

  const {register, handleSubmit, } = useForm();

  const onSubmit = handleSubmit(async(values)=>{


  });

    return (
      <div className="flex h-screen items-center
       justify-center">
        <div className="bg-zinc-900 max-w-md p-8 
        rounded-md">
          <form action="">
               <h1 className="text-3xl text-center font-semibold mb-5">Register</h1>
               <input className="w-full bg-zinc-700 text-white px4 py-2 rounded-md my-2" type="text" placeholder="Username" {...register("username", {required:true})} />
               <input className="w-full bg-zinc-700 text-white px4 py-2 rounded-md my-2"  type="email" placeholder="Email" {...register("email", {required:true})}/>
               <input className="w-full bg-zinc-700 text-white px4 py-2 rounded-md my-2"  type="password" placeholder="Password" {...register("password", {required:true})}/>
               <button onClick={onSubmit} className="h-10 px-6 font-semibold rounded-md bg-blue-500 text-white my-3">Registrarse</button>
          </form>
        </div>
      </div>
    );
};