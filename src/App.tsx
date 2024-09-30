import Tree from "./components/Tree/Tree";

function App() {
  const m = new Map();
  m.set("likes", 24);
  const s = new Set();
  s.add("ssk");

  const root_ = {
    person: {
      name: "Shubham",
      address: {
        city: "Pune",
        lines: { first: "near baif road", second: "Mulik luxuria" },
      },
      profession: {
        designation: "Software developer",
        experience: 8,
        languages: [
          "JavaScript",
          "TypeScript",
          {
            type: "Frontend",
            skils: ["html", "css", "JavaScript"],
          },
        ],
        stats: m,
      },
    },
  };

  return (
    <div className="flex items-start justify-start h-screen">
      <Tree root={root_} />
    </div>
  );
}

export default App;
