import Link from "next/link";

import { Button } from "@/components/ui/button";

interface ProviderParams {
  params: {
    provider: string;
  };
}

export interface Endpoint {
  name: string;
  description: string;
  path: string;
  method: string;
}

async function getData(provider: string) {
  const res = await fetch(
    `http://localhost:5000/api/v1/integrations/${provider}/endpoints`,
    { cache: "no-store" }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
const Provider = async ({ params: { provider } }: ProviderParams) => {
  const res = await getData(provider);

  return (
    <main className="flex min-w-screen p-4 flex-col items-center justify-between w-full">
      <div className="flex mb-[1.5rem] w-full justify-between items-center">
        <h1 className=" text-3xl font-semibold tracking-tight capitalize">
          {provider}
        </h1>
        <Link href={`/providers/${provider}/newendpoint`}>
          <Button variant="ghost">Create Endpoint</Button>
        </Link>
      </div>
      {res.endpoints.length > 0 ? (
        <div className="grid grid-cols-2 gap-4 w-full">
          {res.endpoints.map((endpoint: Endpoint) => (
            <div
              key={endpoint.name}
              className="flex flex-col border dark:border-zinc-800 border-zinc-200 rounded-md hover:cursor-pointer hover:shadow-2xl hover:shadow-purple-500/50 transition-shadow duration-300"
            >
              <div className="flex flex-col px-[1rem] justify-between h-full py-[1rem]">
                <div className="flex flex-col w-full justify-center items-start">
                  <h2 className="text-lg font-bold">{endpoint.name}</h2>
                  <p className="text-gray-400 pt-1 text-xs">
                    {endpoint.description.slice(0, 100)}
                  </p>
                </div>
                <div className="flex justify-between mt-2 items-center w-full">
                  <p className="text-xs px-2 py-1 rounded-full border bg-zinc-900 text-gray-300">
                    {endpoint.path}
                  </p>
                  <p className="text-xs text-purple-100 ">{endpoint.method}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center w-full h-96">
          No endpoints registred yet!!
        </div>
      )}
    </main>
  );
};

export default Provider;
