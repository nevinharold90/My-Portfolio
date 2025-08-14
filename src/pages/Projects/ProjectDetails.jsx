// src/pages/Projects/ProjectDetails.jsx
import { useParams } from "react-router-dom";

export default function ProjectDetails() {
  const { slug } = useParams();
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold">Project: {slug}</h1>
      <p className="mt-2 text-gray-600">
        Intro page content for <b>{slug}</b> goes here.
      </p>
    </main>
  );
}
