import { useParams } from "react-router-dom";
import  Details  from "./Details";

export default function ProjectDetails() {
  const { slug } = useParams();

  const project = Details.find(p => p.slug === slug);

  if (!project) {
      return <p>Project not found.</p>;
  }
  console.log(JSON.stringify(project, null, 2));


  return (
    <main className="w-full mx-auto p-6">
      <h1 className="text-3xl font-bold">Project: {slug}</h1>
      <p className="text-red-600 mt-2">Under Development</p>
    </main>
  );
}
