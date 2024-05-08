import { delay } from "@/lib/delay"

export default async function Default() {
  await delay(8000)

  return (
    <div className="w-full h-full bg-red-900/40">
      <h1 className="text-xl text-white">Sidebar Default Route</h1>
      <p className="text-white">This is a sidebar default route.</p>
    </div>
  )
}