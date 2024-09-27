import Tree from "./components/Tree/Tree";

function App() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Tree
        root={{
          person: {
            name: "Shubham",
            address: {
              city: "Pune",
              lines: { first: "near baif road", second: "Mulik luxuria" },
            },
            profession: {
              designation: "Software developer",
              experience: 8,
              languages: ["JavaScript", "TypeScript"],
            },
          },
        }}
      />
    </div>
  );
}

export default App;
