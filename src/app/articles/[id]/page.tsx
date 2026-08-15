import { getArticle, getAllArticles } from "../data"
import Image from "next/image"
import Link from "next/link"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"
import { Clock, ArrowRight, ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const article = getArticle(parseInt(id))
  if (!article) return { title: "Article Not Found" }
  return {
    title: `${article.title} | BLAZE UNIVERSAL TOURS Journal`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.coverImage],
    },
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const article = getArticle(parseInt(id))

  if (!article) notFound()

  const allArticles = getAllArticles()
  const relatedArticles = allArticles
    .filter((a) => a.id !== article.id)
    .slice(0, 3)

  return (
    <article className="min-h-screen">
      {/* Hero */}
      <div className="relative h-[50vh] md:h-[60vh]">
        <Image
          src={article.coverImage}
          alt={article.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/50 to-[#0B0F19]/30" />

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="max-w-4xl mx-auto">
            <span className="text-[#C8A960] text-xs tracking-widest uppercase">
              {article.category}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 font-playfair leading-tight">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 mt-6 text-sm text-[#FAF6EE]/50">
              <span>By {article.author}</span>
              <span className="hidden sm:inline">·</span>
              <span>{article.date}</span>
              <span className="hidden sm:inline">·</span>
              <span className="flex items-center gap-1">
                <Clock size={14} /> {article.readTime}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 md:px-8 py-12 md:py-16">
        <div
          className="prose prose-invert prose-lg max-w-none
          prose-headings:font-playfair prose-headings:text-white
          prose-h2:text-[#C8A960] prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-12 prose-h2:mb-6
          prose-h3:text-white prose-h3:text-xl
          prose-p:text-[#FAF6EE]/70 prose-p:leading-relaxed
          prose-strong:text-[#C8A960]
          prose-em:text-[#FAF6EE]/80
          prose-a:text-[#C8A960] prose-a:no-underline hover:prose-a:underline
          prose-blockquote:border-l-[#C8A960] prose-blockquote:text-[#FAF6EE]/60 prose-blockquote:italic
          prose-ul:text-[#FAF6EE]/70 prose-ol:text-[#FAF6EE]/70
          prose-li:marker:text-[#C8A960]
          prose-hr:border-[#C8A960]/20"
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
          >
            {article.content}
          </ReactMarkdown>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#C8A960]/30 to-transparent my-16" />

        {/* Related Articles */}
        <div>
          <h2 className="text-2xl font-bold text-white font-playfair mb-8">
            More <span className="text-gradient-gold">Stories</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedArticles.map((related) => (
              <Link
                key={related.id}
                href={`/articles/${related.id}`}
                className="group block bg-[#111827] border border-[#C8A960]/10 overflow-hidden hover:border-[#C8A960]/30 transition-all duration-500"
              >
                <div className="aspect-[16/10] relative overflow-hidden">
                  <Image
                    src={related.coverImage}
                    alt={related.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111827] to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-semibold text-white group-hover:text-[#C8A960] transition-colors font-playfair">
                    {related.title}
                  </h3>
                  <span className="inline-flex items-center gap-2 text-[#C8A960] text-xs tracking-wider uppercase mt-3 group-hover:gap-3 transition-all">
                    Read <ArrowRight size={10} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Back to Journal */}
        <div className="mt-12 text-center">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-[#C8A960] text-sm tracking-wider uppercase hover:gap-3 transition-all"
          >
            <ArrowLeft size={14} /> Back to Journal
          </Link>
        </div>
      </div>
    </article>
  )
}
