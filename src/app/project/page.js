const projects = [
    { title: 'Crop2x', description: 'A satellite monitoring system for farmers' },
    { title: 'Employee Management App', description: 'Built with ASP.NET Core MVC' },
  ];
  
  export default function Projects() {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center p-6">
        <h1 className="text-3xl font-bold mb-6">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="border p-4 rounded-lg">
              <h2 className="text-2xl font-bold">{project.title}</h2>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  