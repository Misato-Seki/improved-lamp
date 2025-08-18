'use client'

export default function Home() {
  return (
    <div className="transition-colors duration-300">
      {/* Main Content */}
      <div className="flex min-h-[calc(100vh-200px)] flex-col items-center justify-center px-8">
        <div className="mx-auto max-w-2xl text-left">
          {/* Hero Text */}
          <div className="mb-8">
            <h1 className="font-figtree mb-8 text-5xl font-normal text-[#E2A0A0]">
              Hello, I&apos;m Misato Seki.
            </h1>
            <p className="font-abeezee mx-auto max-w-lg text-base leading-relaxed tracking-wide">
              Hi, I&apos;m a Japanese Full-Stack Developer based in Finland and
              passionate about front-end development and currently studying
              software development. I&apos;m looking for opportunities to grow
              and contribute in Finland&apos;s tech scene.
            </p>
          </div>

          {/* Action Links */}
          <div className="flex flex-col gap-8 sm:flex-row">
            <a
              href="/projects"
              className="font-abeezee flex items-center gap-2 transition-opacity hover:opacity-80"
            >
              <span>See My Project</span>
              <span>→</span>
            </a>
            <a
              href="/experience"
              className="font-abeezee flex items-center gap-2 transition-opacity hover:opacity-80"
            >
              <span>More About Me</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
