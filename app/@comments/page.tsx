import { delay } from "@/lib/delay"

export default async function CommentsRoute() {
  await delay(3000)

  return (
    <div className="w-full h-full bg-yellow-800">
      <h1 className="text-xl text-white">Comments Parallel Route</h1>
      <p className="text-white">This is a comments page.</p>
    </div>
  )
}
