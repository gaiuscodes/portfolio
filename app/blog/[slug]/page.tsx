import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getBlogPost, getAllBlogPosts } from '@/data/blog';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  if (!post) return { title: 'Post Not Found' };
  return {
    title: `${post.title} | Timothy Gaius`,
    description: post.excerpt,
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <ThemeProvider>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16">
        <article className="max-w-3xl mx-auto px-6">
          <Link
            href="/#blog"
            className="inline-flex items-center gap-2 text-accent hover:text-accent-2 transition-colors mb-8"
          >
            ← Back to Articles
          </Link>

          <header className="mb-12">
            <span className="text-accent-2 text-sm font-semibold">{post.date}</span>
            <h1 className="text-4xl md:text-5xl font-bold text-text mt-3 mb-4">{post.title}</h1>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-semibold text-accent bg-accent/10 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>

          <div
            className="prose prose-invert max-w-none text-text-dim leading-relaxed space-y-6"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </main>
      <Footer />
    </ThemeProvider>
  );
}
