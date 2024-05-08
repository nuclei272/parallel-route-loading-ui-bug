import { delay } from "@/lib/delay"

export default async function Default() {
  await delay(5000)

  return (
    <div className="flex w-full h-12 items-center justify-center bg-zinc-700">
      <h1 className="text-xl text-white">Header Default Route</h1>
    </div>
  )
}