# Korea Rent Wiki (코리아 렌트 위키)

한국 부동산 실무 지식을 바탕으로 외국인 거주자에게 정확한 임대차 정보와 정착 가이드를 제공하는 **비영리 정보 아카이브** 웹 애플리케이션입니다.  
모든 콘텐츠는 대한민국 주택임대차보호법 및 공식 행정 절차를 기준으로 검증하여 작성됩니다.

---

## 🌟 주요 구성

1. **4개 국어 실시간 전환 (`js/i18n.js`)**: 한국어(KO) · English(EN) · 中文(ZH) · 日本語(JA)
2. **초기 정착 자금 & 실제 월 주거비 계산기 (`js/calculator.js`)**:
   - 대한민국 법정 중개보수 상한 요율 + 부가세 10% 자동 산정
   - 원룸 / 오피스텔 / 투룸 프리셋 및 다중 통화(USD, CNY, JPY) 환산 참고
3. **10개 핵심 임대차·정착 가이드 아티클 (`guides/*.html` + `js/articles.js`)**:
   - 필수 특약사항, 주거 형태 비교, 서울 권역별 분석, 전세 vs 월세, 여권 계약 요령, 전세 사기 예방, 확정일자/전입신고, 공과금·쓰레기 배출, 유학생 전대차 예방, 중개보수 가이드
   - 검색엔진 및 애드센스 크롤링에 최적화된 개별 정적 HTML 페이지(`guides/*.html`) + 공식 법령·기관 출처 + 4개 국어 실시간 전환 지원
4. **자주 묻는 질문 (FAQ) & 소개 (`#about`)**
5. **운영 정책 및 SEO 파일**:
   - `privacy.html`: 개인정보처리방침 및 Google AdSense 쿠키 안내
   - `terms.html`: 이용약관, 검증 기준 및 면책조항
   - `404.html`, `robots.txt`, `sitemap.xml`

---

## 🚀 GitHub 자동 저장 & 자동 배포 구조

- **GitHub Actions (`.github/workflows/deploy.yml`)**: `main` 브랜치에 push되면 자동으로:
  1. `js/*.js` 구문 검사 (`node --check`)
  2. 비활성화된 데모/플레이스홀더 코드 유입 여부 점검 및 10개 가이드 페이지 확인
  3. 배포에 필요한 정적 파일(`index.html`, `guides/*.html`, `sitemap.xml` 등)만 `_site/`로 패키징(`_archive/`, `scripts/` 제외)
  4. CSS/JS 자산에 커밋 해시(`?v=<sha>`) 자동 부착으로 브라우저 캐시 무효화
  5. **GitHub Pages** 자동 배포
- **보관 파일 (`_archive/`)**: 애드센스 심사 전 임시 비활성화한 상담·매물 매칭 섹션 백업(`consultation-backup.html`, `inquiry.js`)은 `.gitignore` 처리되어 공개 저장소 및 배포 사이트에 포함되지 않습니다.

---

## 💻 로컬 실행 방법

```powershell
cd C:\Users\imkat\.gemini\antigravity\scratch\korea-rent-wiki
python -m http.server 3000
```
