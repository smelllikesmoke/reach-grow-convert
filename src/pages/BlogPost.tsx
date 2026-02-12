import { useParams, Link, Navigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, User } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-navy py-12 sm:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link to="/blog">
            <Button variant="ghost" className="text-primary-foreground/70 hover:text-gold mb-6 -ml-2">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
            </Button>
          </Link>
          <Badge className="bg-gold/20 text-gold border-gold/30 mb-4">{post.category}</Badge>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-4 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-primary-foreground/60 text-sm">
            <span className="flex items-center gap-1"><User className="w-4 h-4" /> {post.author}</span>
            <span>{post.date}</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="container mx-auto px-4 max-w-3xl -mt-2">
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img src={post.image} alt={post.title} className="w-full aspect-video object-cover" />
        </div>
      </div>

      {/* Content */}
      <article className="py-12 sm:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-lg max-w-none text-foreground/80 leading-relaxed whitespace-pre-line">
            {post.content}
          </div>

          {/* CTA */}
          <div className="mt-12 p-6 sm:p-8 bg-navy rounded-xl text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-primary-foreground mb-2">
              Want to Master Digital Marketing?
            </h3>
            <p className="text-primary-foreground/70 mb-6">
              Join our 12-week course and learn these strategies hands-on.
            </p>
            <Link to="/pricing">
              <Button variant="gold" size="lg">Enroll Now</Button>
            </Link>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
