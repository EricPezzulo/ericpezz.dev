import Counter from "./counter";

function MyServerComponent() {
  return (
    <p className="text-gray-700">This component was rendered by the server.</p>
  );
}

export default function Page() {
  return (
    <section>
      <h1 className="text-2xl">My client page</h1>
      <Counter>
        <MyServerComponent />
      </Counter>
    </section>
  );
}
