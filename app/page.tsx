'use client'

export default function Home() {
  return (
    <div className="min-h-screen transition-colors duration-300">
      {/* Main Content */}
      <main className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] px-8">
        <div className="max-w-2xl mx-auto text-left">
          {/* Hero Text */}
          <div className="mb-8">
            <h1 className="text-5xl font-normal mb-8 font-figtree text-[#E2A0A0]">
              Hello, I&apos;m Misato Seki.
            </h1>
            <p className="text-base leading-relaxed tracking-wide max-w-lg mx-auto font-abeezee">
              Hi, I&apos;m a Japanese Full-Stack Developer based in Finland and
              passionate about front-end development and currently studying
              software development. I&apos;m looking for opportunities to grow
              and contribute in Finland&apos;s tech scene.
            </p>
          </div>

          {/* Action Links */}
          <div className="flex flex-col sm:flex-row gap-8">
            <a
              href="/projects"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity font-abeezee"
            >
              <span>See My Project</span>
              <span>→</span>
            </a>
            <a
              href="/experience"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity font-abeezee"
            >
              <span>More About Me</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}
