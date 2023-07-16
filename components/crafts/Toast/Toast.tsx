import React from "react"
import CreateToast from "./CreateToast"
import { Toaster } from "sonner"

export default function Toast() {

  const Toast = () => {
    CreateToast({
      heading: 'Account created',
      message: (
        <p>
          Account created successfully. Visit developer's website for more info 👉<a href="/" target="_blank" className="underline">here</a>
        </p>
      ),
      duration: 6
    })
  }

  return (
    <main className="text-white justify-center flex items-center gap-4">
      <button onClick={() => Toast()} className='bg-orange-500 select-none text-white px-4 py-2 rounded-full hover:bg-orange-500/80 duration-150 flex items-center gap-2'>
        Create toast
      </button>

      <Toaster />
    </main>
  )
}
