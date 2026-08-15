import Image from "next/image"
import Link from "next/link"
import { getAllArticles } from "./data"
import { ArrowRight, Clock } from "lucide-react"

export default function ArticlesPage() {
  const articles = getAllArticles()
  const featured = articles[0]
  const rest = articles.slice(1)

  return (
    <div className="min-h-screen">
      {/* Hero / Featured Article */}
      <section className="relative pt-8 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="mb-12 md:mb-16">
            <span className="text-[#C8A960] text-xs tracking-[0.3em] uppercase">
              Our Journal
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-4 font-playfair">
              Travel <span className="text-gradient-gold">Chronicles</span>
            </h1>
            <div className="w-16 h-0.5 bg-[#C8A960] mt-6" />
            <p className="text-[#FAF6EE]/50 mt-6 max-w-2xl text-lg">
              Stories from our adventures around the world. Discover
              destinations, gain insights, and get inspired for your next
              journey.
            </p>
          </div>

          {/* Featured Article */}
          <Link
            href={`/articles/${featured.id}`}
            className="group block"
          >
            <div className="card-lift grid grid-cols-1 lg:grid-cols-2 gap-0 bg-[#111827] border border-[#C8A960]/10 overflow-hidden hover:border-[#C8A960]/30">
              <div className="aspect-[16/10] lg:aspect-auto lg:min-h-[400px] relative overflow-hidden">
                <Image
                  src={featured.coverImage}
                  alt={featured.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <span className="absolute top-4 left-4 text-[10px] tracking-widest uppercase text-[#C8A960] bg-[#0B0F19]/80 px-3 py-1">
                  Featured
                </span>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="text-[#C8A960] text-xs tracking-widest uppercase">
                  {featured.category}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-white mt-3 mb-4 font-playfair group-hover:text-[#C8A960] transition-colors">
                  {featured.title}
                </h2>
                <p className="text-[#FAF6EE]/50 mb-6 leading-relaxed">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-[#FAF6EE]/30">
                  <span>{featured.author}</span>
                  <span>·</span>
                  <span>{featured.date}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} /> {featured.readTime}
                  </span>
                </div>
                <span className="inline-flex items-center gap-2 text-[#C8A960] text-sm tracking-wider uppercase mt-6 group-hover:gap-3 transition-all">
                  Read Full Story <ArrowRight size={14} />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Article Grid */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-2xl font-bold text-white font-playfair mb-8">
            All <span className="text-gradient-gold">Stories</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {rest.map((article) => (
              <Link
                key={article.id}
                href={`/articles/${article.id}`}
                className="card-lift group block bg-[#111827] border border-[#C8A960]/10 overflow-hidden hover:border-[#C8A960]/30"
              >
                <div className="aspect-[16/10] relative overflow-hidden">
                  <Image
                    src={article.coverImage}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111827] to-transparent" />
                  <span className="absolute top-4 left-4 text-[10px] tracking-widest uppercase text-[#C8A960] bg-[#0B0F19]/80 px-3 py-1">
                    {article.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white group-hover:text-[#C8A960] transition-colors font-playfair mb-2">
                    {article.title}
                  </h3>
                  <p className="text-[#FAF6EE]/40 text-sm line-clamp-2 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-[#FAF6EE]/30">
                    <span>{article.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {article.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
