interface Repo {
  name: string;
  stargazers_count: number;
}

const Client = ({ repo }: { repo: Repo }) => {
  console.log(repo);
  return (
    <section>
      <h1>{repo.name}</h1>
      <h2>{repo.stargazers_count}</h2>
    </section>
  );
};
export default Client;
