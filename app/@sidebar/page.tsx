import { delay } from "@/lib/delay"

export default async function SidebarPage() {
  await delay(8000)

  return (
    <div className="w-full h-full bg-red-900/40">
      <h1 className="text-xl text-white">Sidebar Page Route</h1>
      <p className="text-white">This is a sidebar page.</p>
    </div>
  )
}
