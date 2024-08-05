import PostForm from './components/PostForm';

export default function HomePage() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold my-4">Create a New Blog Post</h1>
      <PostForm />
    </div>
  );
}