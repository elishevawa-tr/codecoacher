import { CodeCoacherForm } from "@/components/CodeCoacherForm";
import { Logo } from "@/components/Logo";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex flex-col items-center">
          <Logo className="w-32 h-32 mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">CodeCoacher</h1>
          <p className="text-gray-600 text-center max-w-2xl">
            Get personalized coding recommendations based on your GitHub activity.
            Enter your details below to receive a customized improvement plan.
          </p>
        </div>
        
        <div className="max-w-xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <CodeCoacherForm />
          </div>
        </div>
      </div>
    </div>
  );
}
