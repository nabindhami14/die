import { Button } from "@/components/ui/button";
import Link from "next/link";

export interface Provider {
  id: string;
  name: string;
  base_url: string;
  description: string;
  created_at: string;
}

const response: Provider[] = [
  {
    id: "1",
    name: "Esewa",
    description: "This is the first example provider.",
    base_url: "https://example.com",
    created_at: "2023-01-01T12:00:00Z",
  },
  {
    id: "2",
    name: "Khalti",
    description: "This is the second example provider.",
    base_url: "https://example.com",
    created_at: "2023-02-01T12:00:00Z",
  },
  {
    id: "3",
    name: "Imepay",
    description: "This is the third example provider.",
    base_url: "https://example.com",
    created_at: "2023-03-01T12:00:00Z",
  },
];

const Providers = () => {
  return (
    <main className="flex min-w-screen p-4 flex-col items-center justify-between w-full">
      <div className="flex mb-[1.5rem] w-full justify-between items-center">
        <h1 className=" text-3xl font-semibold tracking-tight">Providers</h1>
        <Link href="/providers/new">
          <Button variant="ghost">Create Provider</Button>
        </Link>
      </div>

      <div className="flex flex-wrap gap-4 w-full">
        {response.map((provider: Provider) => (
          <Link
            key={provider.id}
            href={`/providers/${provider.name.toLowerCase()}`}
            prefetch={true}
            className="flex flex-col border dark:border-zinc-800 border-zinc-200 rounded-md w-[300px] hover:cursor-pointer hover:shadow-2xl hover:shadow-purple-500/50 transition-shadow duration-300"
          >
            <div className="flex flex-col px-[1rem] justify-between h-full py-[1rem]">
              <div className="flex flex-col w-full justify-center items-start">
                <h2 className="text-lg font-bold">{provider.name}</h2>
                <p className="text-gray-400 pt-1 text-sm">
                  {provider.description}
                </p>
              </div>
              <div className="flex justify-between mt-2 items-center w-full">
                <p className="text-xs px-2 py-1 rounded-full border bg-zinc-900 text-gray-300">
                  {provider.base_url}
                </p>
                <p className="text-xs text-muted-foreground ">
                  {new Date(provider.created_at).toLocaleDateString()}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Providers;
