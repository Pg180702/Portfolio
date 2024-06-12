"use client";
function page({ params }: { params: { projectId: Number } }) {
  const projects = [
    { id: 1, name: "Project 1", description: "Description for project 1" },
    { id: 2, name: "Project 2", description: "Description for project 2" },
    { id: 3, name: "Project 3", description: "Description for project 3" },
  ];
  const projectId = params.projectId;
  // Filter projects array to find the project with matching id
  const project = projects.find(
    (project) => project.id === parseInt(projectId.toString())
  );

  console.log(project);
  return (
    <>
      <div className="m-6 mb-2 grid sm:grid-cols-2 gap-4 sm:m-40">
        <div>
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29vZHN8ZW58MHx8MHx8fDA%3D"
            height="100%"
            width="100%"
            style={{ background: "cover" }}
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29vZHN8ZW58MHx8MHx8fDA%3D"
            height="100%"
            width="100%"
            style={{ background: "cover" }}
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29vZHN8ZW58MHx8MHx8fDA%3D"
            height="100%"
            width="100%"
            style={{ background: "cover" }}
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29vZHN8ZW58MHx8MHx8fDA%3D"
            height="100%"
            width="100%"
            style={{ background: "cover" }}
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29vZHN8ZW58MHx8MHx8fDA%3D"
            height="100%"
            width="100%"
            style={{ background: "cover" }}
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29vZHN8ZW58MHx8MHx8fDA%3D"
            height="100%"
            width="100%"
            style={{ background: "cover" }}
          />
        </div>
      </div>
      <div className="sm:m-40 mt-2 m-6 flex items-center">
        {project && (
          <>
            <h1 style={{ color: "white" }}>{project.name}</h1>
            <p>{project.description}</p>
          </>
        )}
        {/* Adding a break tag */}
        <h1>break</h1>
      </div>
    </>
  );
}

export default page;
