import { delay } from "@/lib/delay"

export default async function CommentsRoute() {
  await delay(3000)

  return (
    <div className="w-full h-full bg-yellow-800 flex justify-between">
      <div>
        <h1 className="text-xl text-white">Comments Page Route: "/comments"</h1>
        <p className="text-white">This is a comments page.</p>
      </div>
      <a className="h-10 bg-red-500 text-white rounded-md px-4 py-2" href="/comments">Hard Refresh</a>

    </div>
  )
}
