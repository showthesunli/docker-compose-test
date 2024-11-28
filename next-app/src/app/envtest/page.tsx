export default function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  console.log("searchParams.a :>> ", searchParams.a);
  console.log("searchParams.b :>> ", searchParams.b);
  console.log("process.env.LEEORZ in app dir :>> ", process.env.LEEORZ);
  console.log(
    "process.env.NEXT_PUBLIC_ENV_VARIABLE :>> ",
    process.env.NEXT_PUBLIC_ENV_VARIABLE
  );
  console.log(process.env.CLOUDFLARE_API_KEY);
  return <div>page</div>;
}
