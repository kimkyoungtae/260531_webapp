import { portfolioData } from "@/lib/data";

export default function Home() {
  const { profile, experience, projects } = portfolioData;

  return (
    <main className="toss-container py-12 pb-24 min-h-screen">
      {/* Header Section */}
      <section className="mb-12">
        <div className="w-16 h-16 rounded-full bg-[var(--color-grey-200)] overflow-hidden mb-6 flex items-center justify-center">
          <span className="text-[var(--color-grey-500)] text-sm font-medium">프로필</span>
        </div>
        <h1 className="text-3xl font-bold mb-3 tracking-tight text-[var(--color-grey-900)] leading-snug">
          안녕하세요,<br />
          {profile.role}<br />
          <span className="text-[var(--color-toss-blue)]">{profile.name}</span>입니다.
        </h1>
        <p className="text-[17px] leading-relaxed text-[var(--color-grey-600)] mb-6 whitespace-pre-line">
          {profile.description}
        </p>
        
        <div className="flex gap-3">
          <a href={profile.resumeLink} className="toss-btn toss-btn-xlarge toss-btn-primary flex-1">
            이력서 보기
          </a>
          <a href={`mailto:${profile.email}`} className="toss-btn toss-btn-xlarge toss-btn-weak flex-1">
            이메일 보내기
          </a>
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-[var(--color-grey-800)]">경력</h2>
          <span className="toss-badge toss-badge-elephant-weak">Total {experience.length}</span>
        </div>
        
        <div className="flex flex-col gap-4">
          {experience.map((exp) => (
            <div key={exp.id} className="toss-card-standard">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-[17px] text-[var(--color-grey-900)]">{exp.company}</h3>
                <span className="text-sm text-[var(--color-grey-500)] tabular-nums">{exp.period}</span>
              </div>
              <p className="text-[15px] text-[var(--color-grey-600)] mb-3">{exp.role}</p>
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag, idx) => (
                  <span key={idx} className="toss-badge toss-badge-blue-weak">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-[var(--color-grey-800)] mb-4">프로젝트</h2>
        
        <div className="flex flex-col gap-4">
          {projects.map((project) => (
            <div key={project.id} className="toss-card-standard">
              <div className="w-full h-36 bg-[var(--color-grey-100)] rounded-lg mb-4 flex items-center justify-center">
                <span className="text-[var(--color-grey-400)] text-sm font-medium">프로젝트 썸네일</span>
              </div>
              <h3 className="font-bold text-[17px] text-[var(--color-grey-900)] mb-1">{project.title}</h3>
              <p className="text-[15px] text-[var(--color-grey-600)] mb-4 leading-relaxed">
                {project.description}
              </p>
              <a href={project.link} className="toss-btn toss-btn-light border border-[var(--color-grey-200)] py-3 text-[15px] w-full text-center">
                자세히 보기
              </a>
            </div>
          ))}
        </div>
      </section>
      
      {/* Footer */}
      <footer className="mt-16 text-center pb-8 border-t border-[var(--color-grey-100)] pt-8">
        <p className="text-[13px] text-[var(--color-grey-500)]">
          © {new Date().getFullYear()} {profile.name} Portfolio. All rights reserved.
        </p>
      </footer>
    </main>
  );
}

