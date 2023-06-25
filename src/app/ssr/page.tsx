import Client from "./client";

type Repo = {
  name: string;
  stargazers_count: number;
};

async function getStaticProps(): Promise<Repo> {
  const res = await fetch("https://api.github.com/repos/vercel/next.js", {
    cache: "no-store",
  });
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return res.json();
}

export default async function Page() {
  const repo = await getStaticProps();
  // const repo = {
  //   name: "test",
  //   stargazers_count: 1222,
  // };
  return <Client repo={repo} />;
}
