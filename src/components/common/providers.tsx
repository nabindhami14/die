import Link from "next/link";

export interface Site {
  id: string;
  created_at: string;
  user_id: string;
  site_id: string;
  site_name: string;
  site_description: string;
  site_subdomain: string;
  site_logo: string | null;
  site_cover_image: string | null;
  site_custom_domain: string | null;
  updated_at: string | null;
}

const response: Site[] = [
  {
    id: "1",
    created_at: "2023-01-01T12:00:00Z",
    user_id: "user123",
    site_id: "site001",
    site_name: "Example Site One",
    site_description: "This is the first example site.",
    site_subdomain: "https://example.com",
    site_logo: "https://example.com/logo1.png",
    site_cover_image: "https://example.com/cover1.jpg",
    site_custom_domain: "www.exampleone.com",
    updated_at: "2023-05-01T12:00:00Z",
  },
  {
    id: "2",
    created_at: "2023-02-01T12:00:00Z",
    user_id: "user456",
    site_id: "site002",
    site_name: "Example Site Two",
    site_description: "This is the second example site.",
    site_subdomain: "https://example.com",
    site_logo: null,
    site_cover_image: null,
    site_custom_domain: null,
    updated_at: "2023-06-01T12:00:00Z",
  },
  {
    id: "3",
    created_at: "2023-03-01T12:00:00Z",
    user_id: "user789",
    site_id: "site003",
    site_name: "Example Site Three",
    site_description: "This is the third example site.",
    site_subdomain: "https://example.com",
    site_logo: "https://example.com/logo3.png",
    site_cover_image: "https://example.com/cover3.jpg",
    site_custom_domain: "www.examplethree.com",
    updated_at: null,
  },
];

const Providers = () => {
  return (
    <div className="flex flex-wrap gap-2 w-full">
      {response?.map((site: Site) => (
        <Link
          key={site?.id}
          href={`/cms/sites/${site?.site_id}`}
          prefetch={true}
          className="flex flex-col border dark:border-zinc-800 border-zinc-200 rounded-md w-[350px] hover:cursor-pointer hover:shadow-2xl hover:shadow-purple-500/50 transition-shadow duration-300"
        >
          <div className="flex flex-col px-[1rem] justify-between h-full py-[1rem]">
            <div className="flex flex-col w-full justify-center items-start">
              <h2 className="text-lg font-bold">{site?.site_name}</h2>
              <p className="text-gray-400 pt-1 text-sm">
                {site?.site_description}
              </p>
            </div>
            <div className="flex justify-between mt-2 items-center w-full">
              <p className="text-xs px-2 py-1 rounded-full border bg-zinc-900 text-gray-300">
                {site?.site_subdomain}.{process.env.BASE_DOMAIN}
              </p>
              <p className="text-xs text-muted-foreground ">
                {new Date(site?.created_at)?.toLocaleDateString()}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Providers;
