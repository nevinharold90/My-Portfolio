import { useParams } from "react-router-dom";

export default function ProjectDetails() {
  const { slug } = useParams();
  console.log(slug)
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold">Project: {slug}</h1>
      <p className="text-gray-600 mt-2">Intro page content goes here.</p>
    </main>
  );
}
