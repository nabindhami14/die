import { Button } from "@/components/ui/button";
import { Check, Cross, Crosshair } from "lucide-react";
import Link from "next/link";

export interface Provider {
  name: string;
  base_url: string;
  description: string;
  is_active: boolean;
}

async function getData() {
  const res = await fetch(
    "http://localhost:5000/api/v1/integrations/providers",
    { cache: "no-store" }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const Providers = async () => {
  const res = await getData();

  return (
    <main className="flex min-w-screen p-4 flex-col items-center justify-between w-full">
      <div className="flex mb-[1.5rem] w-full justify-between items-center">
        <h1 className=" text-3xl font-semibold tracking-tight">Providers</h1>
        <Link href="/providers/new">
          <Button variant="ghost">Create Provider</Button>
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-4 w-full">
        {res.providers.length > 0 ? (
          res.providers.map((provider: Provider) => (
            <Link
              key={provider.name}
              href={`/providers/${provider.name.toLowerCase()}`}
              prefetch={true}
              className="flex flex-col border dark:border-zinc-800 border-zinc-200 rounded-md hover:cursor-pointer hover:shadow-2xl hover:shadow-purple-500/50 transition-shadow duration-300"
            >
              <div className="flex flex-col px-[1rem] justify-between h-full py-[1rem]">
                <div className="flex flex-col w-full justify-center items-start">
                  <div className="w-full flex items-center justify-between">
                    <h2 className="text-lg font-bold">{provider.name}</h2>
                    {provider.is_active ? (
                      <Check className="text-green-600" />
                    ) : (
                      <Cross className="text-red-600" />
                    )}
                  </div>
                  <p className="text-gray-400 pt-1 text-xs">
                    {provider.description.slice(0, 100)}
                  </p>
                </div>
                <div className="flex justify-between mt-2 items-center w-full">
                  <p className="text-xs px-2 py-1 rounded-full border bg-zinc-900 text-gray-300">
                    {provider.base_url}
                  </p>
                  <p className="text-xs text-muted-foreground ">
                    {new Date().toLocaleDateString()}
                  </p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div>NO PROVIDERS EXISTS YET!</div>
        )}
      </div>
    </main>
  );
};

export default Providers;
