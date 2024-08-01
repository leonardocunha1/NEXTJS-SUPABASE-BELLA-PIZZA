import { signInAction } from "@/app/_lib/actions";
import Image from "next/image";

export const metadata = {
  title: "Login",
};

function Page() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="flex w-full max-w-[400px] flex-col items-center rounded-xl border px-4 py-3 shadow-md">
        <p className="text-base text-orange-500">Olá!</p>
        <h1 className="mb-5 text-center text-lg text-stone-400">
          Bem vindo novamente
        </h1>
        <form action={signInAction} className="mt-auto">
          <button className="border-primary-300 text-md flex items-center gap-6 rounded-lg border px-10 py-4 font-medium duration-300 hover:bg-stone-300">
            <Image
              src="https://authjs.dev/img/providers/google.svg"
              alt="Google logo"
              height="24"
              width="24"
            />
            <span>Continue com o Google</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Page;
