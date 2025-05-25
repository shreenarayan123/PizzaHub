
import { signIn } from "@/auth"
import { Button } from "./ui/button"
 
export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
      <button 
              type='submit'
                className="border-2 border-orange-300 text-orange-700 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-orange-50 transform hover:scale-105 transition-all duration-300"
              >
                Login
              </button>
    </form>
  )
} 