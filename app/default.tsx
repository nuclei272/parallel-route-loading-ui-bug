import { delay } from "@/lib/delay";
import Link from "next/link";

export default async function Default() {
  await delay(6000)

  return (
    <main className="flex min-h-[500px] flex-col items-center justify-between p-24 gap-24 bg-blue-800/40">
      <h1 className="w-full max-w-5xl items-center justify-between text-xl flex text-white">
        Children Default Route
      </h1>
      <a className="h-10 bg-red-500 text-white rounded-md px-4 py-2" href="/comments">Hard Refresh</a>
    </main>
  );
}
