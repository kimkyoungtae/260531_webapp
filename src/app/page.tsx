import Image from "next/image";

export default function Home() {
  return (
    <main className="toss-container py-12 pb-24 min-h-screen">
      {/* Header Section */}
      <section className="mb-12">
        <div className="w-16 h-16 rounded-full bg-[var(--color-grey-200)] overflow-hidden mb-6 flex items-center justify-center">
          <span className="text-[var(--color-grey-500)] text-sm font-medium">프로필</span>
        </div>
        <h1 className="text-3xl font-bold mb-3 tracking-tight text-[var(--color-grey-900)] leading-snug">
          안녕하세요,<br />
          프론트엔드 개발자<br />
          <span className="text-[var(--color-toss-blue)]">김토스</span>입니다.
        </h1>
        <p className="text-[17px] leading-relaxed text-[var(--color-grey-600)] mb-6">
          사용자 경험을 최우선으로 생각하며,<br />
          직관적이고 매끄러운 인터페이스를 만듭니다.
        </p>
        
        <div className="flex gap-3">
          <button className="toss-btn toss-btn-xlarge toss-btn-primary">
            이력서 보기
          </button>
          <button className="toss-btn toss-btn-xlarge toss-btn-weak">
            이메일 보내기
          </button>
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-[var(--color-grey-800)]">경력</h2>
          <span className="toss-badge toss-badge-elephant-weak">Total 3 yrs</span>
        </div>
        
        <div className="flex flex-col gap-4">
          <div className="toss-card-standard">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-[17px] text-[var(--color-grey-900)]">토스 (비바리퍼블리카)</h3>
              <span className="text-sm text-[var(--color-grey-500)] tabular-nums">2023.03 - 현재</span>
            </div>
            <p className="text-[15px] text-[var(--color-grey-600)] mb-3">프론트엔드 코어 파트</p>
            <div className="flex flex-wrap gap-2">
              <span className="toss-badge toss-badge-blue-weak">React</span>
              <span className="toss-badge toss-badge-blue-weak">Next.js</span>
              <span className="toss-badge toss-badge-blue-weak">TypeScript</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-[var(--color-grey-800)] mb-4">프로젝트</h2>
        
        <div className="flex flex-col gap-4">
          <div className="toss-card-standard">
            <div className="w-full h-36 bg-[var(--color-grey-100)] rounded-lg mb-4 flex items-center justify-center">
              <span className="text-[var(--color-grey-400)] text-sm font-medium">프로젝트 썸네일</span>
            </div>
            <h3 className="font-bold text-[17px] text-[var(--color-grey-900)] mb-1">디자인 시스템 (TDS) 구축</h3>
            <p className="text-[15px] text-[var(--color-grey-600)] mb-4 leading-relaxed">
              사내 개발자들이 일관된 UI를 빠르게 구축할 수 있도록 컴포넌트 라이브러리를 개발했습니다.
            </p>
            <button className="toss-btn toss-btn-light border border-[var(--color-grey-200)] py-3 text-[15px]">
              자세히 보기
            </button>
          </div>
          
          <div className="toss-card-standard">
            <div className="w-full h-36 bg-[var(--color-grey-100)] rounded-lg mb-4 flex items-center justify-center">
              <span className="text-[var(--color-grey-400)] text-sm font-medium">프로젝트 썸네일</span>
            </div>
            <h3 className="font-bold text-[17px] text-[var(--color-grey-900)] mb-1">사용자 온보딩 흐름 개선</h3>
            <p className="text-[15px] text-[var(--color-grey-600)] mb-4 leading-relaxed">
              신규 유저의 가입 완수율을 15% 향상시킨 새로운 온보딩 UI/UX를 설계하고 구현했습니다.
            </p>
            <button className="toss-btn toss-btn-light border border-[var(--color-grey-200)] py-3 text-[15px]">
              자세히 보기
            </button>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="mt-16 text-center pb-8 border-t border-[var(--color-grey-100)] pt-8">
        <p className="text-[13px] text-[var(--color-grey-500)]">
          © 2026 Developer Portfolio. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
