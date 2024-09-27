import Tree from "./components/Tree/Tree";

function App() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Tree
        root={{
          person: {
            name: "Shubham",
            address: { city: "Pune" },
          },
        }}
      />
    </div>
  );
}

export default App;
