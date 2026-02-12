import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Clock } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-navy py-16 sm:py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-gold/20 text-gold border-gold/30 mb-4">Our Blog</Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Digital Marketing <span className="text-gold">Insights</span>
          </h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-base sm:text-lg">
            Actionable tips, strategies, and industry insights from our team of marketing experts.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.id} to={`/blog/${post.slug}`} className="group">
                <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 h-full flex flex-col">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-5 sm:p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge variant="secondary" className="bg-navy/10 text-navy text-xs">
                        {post.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-lg font-bold text-navy mb-2 group-hover:text-gold transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground mt-auto pt-3 border-t">
                      <span>{post.author} · {post.date}</span>
                      <span className="text-gold flex items-center gap-1 font-semibold group-hover:gap-2 transition-all">
                        Read <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
