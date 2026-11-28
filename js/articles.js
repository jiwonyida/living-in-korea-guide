// Living in Korea Guide - Curated Rental Articles
// High-value articles across 5 categories in English (en), Chinese (zh), Korean (ko), and Japanese (ja)

const articlesData = [
  {
    id: "essential-lease-special-clauses",
    category: "lease",
    tags: ["Special Clauses", "Contract", "Deposit Protection", "특약사항"],
    readTime: 5,
    publishDate: "2026-11-26",
    author: {
      name: "Min-jun Kim",
      role: "Licensed Real Estate & Expat Housing Advisor"
    },
    accentColor: "from-emerald-600 to-cyan-800",
    title: {
      en: "5 Must-Have Special Clauses (특약사항) in Your Korean Lease Contract",
      zh: "韩国租房合同必加的5条“特约条款（특약사항）”：守护押金与免除修缮纠纷",
      ko: "외국인 임대차 계약 시 꼭 넣어야 할 필수 특약사항 5가지: 보증금과 수리비 지키는 법",
      ja: "韓国の賃貸契約書に必ず入れるべき特約事項（특약사항）5選：敷金と修繕トラブルを防ぐ"
    },
    excerpt: {
      en: "Standard Korean lease forms don't automatically protect you from surprise repair bills or deposit delays. Add these 5 special clauses before signing.",
      zh: "韩国标准租房合同并不能自动保护租客免受高额维修费或押金延迟退还的风险。签约前务必让中介加上这5条核心特约条款。",
      ko: "표준 임대차계약서만 믿고 서명했다가 퇴실 시 도배비·수리비 분쟁이나 보증금 반환 지연을 겪는 경우가 많습니다. 계약 전 꼭 확인해야 할 핵심 특약 5가지를 정리했습니다.",
      ja: "標準賃貸契約書だけでは退去時の原状回復費用や保証金返還の遅延を防げません。契約前に仲介士へ必ず確認・追加すべき5つの特約事項を紹介します。"
    },
    content: {
      en: `
        <div class="prose max-w-none">
          <p class="lead text-lg font-medium text-slate-700">In Korea, the "Special Terms" (특약사항) box at the bottom of a standard lease contract carries strong legal weight. Taking five minutes to request clear wording before signing can save millions of KRW at move-out.</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">1. Ban New Mortgages Until Move-In &amp; Fixed Date</h3>
          <p>Ensure the landlord agrees not to take out any loans or register new collateral on the property until the day after your balance payment and <em>Jeonip-singo</em> (address registration) take effect. If violated, the contract can be voided with full deposit refund.</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">2. Pre-Move-In Repair &amp; Cleaning Commitment</h3>
          <p>List every defect spotted during the viewing—such as mold, broken air-conditioner remote, or peeling wallpaper—and state that the landlord will repair them prior to your move-in date.</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">3. Normal Wear and Tear Exemption</h3>
          <p>Clarify that natural discoloration of wallpaper, minor floor scuffs from everyday living, and sunlight fading are excluded from tenant restoration charges.</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">4. Clear Appliance Repair Responsibility</h3>
          <p>For furnished ("Full-Option") studios, specify that breakdowns of built-in appliances (boiler, AC, washing machine, fridge) due to aging or normal use are repaired at the landlord's expense.</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">5. Tax &amp; Utility Arrears Confirmation</h3>
          <p>State that the landlord confirms there are no unpaid national/local taxes or prior utility bills on the property, and any outstanding balance before move-in is settled by the landlord.</p>
        </div>
      `,
      zh: `
        <div class="prose max-w-none">
          <p class="lead text-lg font-medium text-slate-700">在韩国签约时，合同底部的“特约事项（특약사항）”往往比标准正文更具决定性。签约前花五分钟要求加入以下5条特约，可大幅降低退房扣押金与维修纠纷风险。</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">1. 入住登记次日前禁止新增抵押贷款</h3>
          <p>写明房东在租客付清尾款并完成外国人滞留地变更/转入申报（전입신고）及确定日期（확정일자）的次日之前，不得以该房产设定新的抵押权或贷款；若违反，租客有权解除合同并全额退还押金。</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">2. 入住前瑕疵修复约定</h3>
          <p>看房时发现的墙纸破损、空调故障、漏水或霉斑，务必拍照并写入特约，明确由房东在入住日前完成维修与清洁。</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">3. 自然老化与正常磨损免赔</h3>
          <p>明确因正常居住引起的墙纸轻微变色、日照褪色及地板轻微使用痕迹属于自然磨损，退房时不扣除押金。</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">4. 房东负责家电自然故障维修</h3>
          <p>针对精装带家电（풀옵션）房屋，约定锅炉、洗衣机、空调、冰箱等因设备老化而非人为损坏导致的故障由房东承担维修费。</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">5. 结清入住前税费与公用事业欠费</h3>
          <p>注明入住日前产生的水电燃气、管理费及房东国税·地方税欠费均由房东负责结清。</p>
        </div>
      `,
      ko: `
        <div class="prose max-w-none">
          <p class="lead text-lg font-medium text-slate-700">한국 임대차계약서에서 가장 중요한 영역은 본문 하단의 <strong>특약사항</strong>입니다. 표준 조항만으로는 보증금 보호나 퇴실 시 수리비 분쟁을 막기 어렵기 때문에, 계약서에 도장을 찍기 전 아래 5가지 특약을 꼭 요청해 두는 것이 안전합니다.</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">1. 대항력 발생 익일까지 추가 근저당 설정 금지</h3>
          <p>잔금 지급 및 전입신고(외국인은 체류지 변경신고)·확정일자 효력이 발생하는 다음 날까지 임대인이 해당 주택에 새로운 근저당이나 담보권을 설정하지 않으며, 위반 시 계약을 해지하고 계약금·보증금 전액을 반환한다는 문구를 넣어야 합니다.</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">2. 입주 전 하자 수리 및 기본 청소 이행</h3>
          <p>방문을 둘러볼 때 발견한 곰팡이, 도배 훼손, 문고리 고장, 누수 흔적 등을 사진으로 찍어두고 입주일 전까지 임대인 부담으로 수리해 준다는 내용을 명시하세요.</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">3. 통상적 사용에 의한 자연 마모 면책</h3>
          <p>고의나 중대한 과실이 아닌 일상생활 중 자연스럽게 생기는 벽지 변색, 햇빛 바램, 가구 자국 등에 대해서는 퇴거 시 원상복구 비용을 청구하지 않는다는 특약이 있으면 도배비 분쟁을 줄일 수 있습니다.</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">4. 풀옵션 가전·보일러 노후 고장 수리 책임</h3>
          <p>원룸이나 오피스텔의 기본 옵션(세탁기, 냉장고, 에어컨, 보일러)이 임차인의 과실 없이 노후로 고장 난 경우 임대인이 수리·교체 비용을 부담한다는 점을 분명히 적어두세요.</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">5. 입주 전 미납 공과금 및 세금 정산</h3>
          <p>입주 기준일 이전의 관리비·공과금 체납분과 임대인의 국세·지방세 체납이 없음을 확인하고, 미납금이 발견될 경우 임대인이 즉시 정산한다는 문구를 포함하세요.</p>
        </div>
      `,
      ja: `
        <div class="prose max-w-none">
          <p class="lead text-lg font-medium text-slate-700">韓国の賃貸契約書で最も重要なのが、契約書下部にある<strong>特約事項（특약사항）</strong>です。標準条項だけでは保証金保護や退去時の修繕トラブルを防ぎにくいため、署名・捺印の前に以下の5項目を入れてもらうのが安心です。</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">1. 対抗力発生の翌日まで新規抵当権設定を禁止</h3>
          <p>残金支払いおよび転入届（外国人は滞留地変更届）・確定日付の効力が発生する翌日までは、家主が物件に新たな抵当権を設定しないことを明記します。</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">2. 入居前の不具合修繕・クリーニング約束</h3>
          <p>内見時に確認した壁紙の剥がれ、カビ、設備の不具合は写真で記録し、入居日前までに家主負担で修繕する旨を記載しましょう。</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">3. 通常使用による自然損耗の免責</h3>
          <p>故意・重過失ではなく日常生活で生じる壁紙の変色や日焼けなどの自然消耗は、退去時の原状回復費用の対象外とすることを明記します。</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">4. 備え付け家電・ボイラーの経年故障対応</h3>
          <p>フルオプション物件の洗濯機・冷蔵庫・エアコン・ボイラーが経年劣化で故障した場合は、家主が修理費を負担する旨を確認しておきます。</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">5. 入居前の未払い管理費・税金の精算</h3>
          <p>入居日以前の公共料金・管理費の未納や家主の税金滞納がないこと、発生時は家主が負担することを明記してください。</p>
        </div>
      `
    }
  },
  {
    id: "finding-housing-types",
    category: "finding",
    tags: ["Housing Types", "One-Room", "Officetel", "Cost Comparison"],
    readTime: 6,
    publishDate: "2026-03-15",
    author: {
      name: "Min-jun Kim & Sarah Jenkins",
      role: "Seoul Housing Relocation Specialist"
    },
    accentColor: "from-blue-600 to-indigo-800",
    title: {
      en: "One-Room vs. Officetel vs. Villa: Which Korean Housing Type Fits You Best?",
      zh: "One-room、Officetel、Villa：哪种韩国房型最适合你？",
      ko: "원룸 vs 오피스텔 vs 빌라: 나에게 가장 잘 맞는 한국 주거 형태는?",
      ja: "ワンルーム vs オフィステル vs ヴィラ：あなたに最適な韓国の部屋タイプは？"
    },
    excerpt: {
      en: "From compact student studios to high-rise officetels with commercial facilities, here is an honest breakdown of space, maintenance fees, and soundproofing.",
      zh: "从大学城周边的经济型单间（One-room），到带电梯安保的商务公寓（Officetel），全面对比各房型的押金、管理费、隔音与生活便利度。",
      ko: "대학가 가성비 분리형 원룸부터 24시간 보안과 역세권 인프라를 갖춘 오피스텔, 넓은 면적의 빌라까지 보증금·관리비·방음을 솔직하게 비교 분석합니다.",
      ja: "大学街のコスパ重視ワンルームから、駅近オートロック完備のオフィステル、広々としたヴィラまで、保証金・管理費・防音性を徹底比較。"
    },
    content: {
      en: `
        <div class="prose max-w-none">
          <p class="lead text-lg font-medium text-slate-700">Moving to Korea for university or work? Before browsing listings, you must understand Korea’s distinct residential categories. What Koreans call a "One-Room" is not the same as an "Officetel," and picking the wrong one can double your monthly maintenance fees.</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">1. One-Room (원룸) - The Student Standard</h3>
          <p>A One-Room is a studio apartment where bedroom and kitchen are combined. Look for <em>Bunri-hyeong (분리형)</em> with a sliding glass door separating the kitchen to block cooking smells and save heating costs.</p>
          <ul class="list-disc pl-6 space-y-1 text-slate-600">
            <li><strong>Typical Deposit:</strong> 3,000,000 ~ 10,000,000 KRW</li>
            <li><strong>Typical Monthly Rent:</strong> 400,000 ~ 650,000 KRW</li>
            <li><strong>Maintenance Fee:</strong> Low (usually 30k ~ 60k KRW, often covers water & Wi-Fi).</li>
          </ul>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">2. Officetel (오피스텔) - Modern Urban Living</h3>
          <p>Modern high-rise commercial-residential complexes near subway stations with 24/7 security, elevators, and parcel lockers.</p>
          <ul class="list-disc pl-6 space-y-1 text-slate-600">
            <li><strong>Typical Deposit:</strong> 10,000,000 ~ 30,000,000 KRW</li>
            <li><strong>Typical Monthly Rent:</strong> 750,000 ~ 1,300,000 KRW</li>
            <li><strong>Maintenance Fee:</strong> High (100k ~ 200k KRW + electricity/heating).</li>
          </ul>
        </div>
      `,
      zh: `
        <div class="prose max-w-none">
          <p class="lead text-lg font-medium text-slate-700">无论你是赴韩留学的学生还是在首尔工作的职场人，开始找房前的第一课就是彻底厘清韩国独有的房型分类。韩国人所说的“One-room”和“Officetel”有着天壤之别，选错可能导致你的每月固定支出多出数十万韩元！</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">1. One-Room (원룸) - 留学生高性价比单间</h3>
          <p>卧室与厨房在同一空间。重点寻找带推拉门的“分离型（분리형）”，能有效阻隔油烟并大幅提升冬季地暖保温效率。</p>
          <ul class="list-disc pl-6 space-y-1 text-slate-600">
            <li><strong>参考押金：</strong> 300万 ~ 1000万 韩元</li>
            <li><strong>参考月租：</strong> 40万 ~ 65万 韩元</li>
            <li><strong>管理费：</strong> 极低（3万 ~ 6万 韩元，大多包水网）</li>
          </ul>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">2. Officetel (오피스텔) - 现代白领品质公寓</h3>
          <p>地铁站口高层电梯楼，24小时保安、快递柜、CCTV安保齐全，独居女性首选。</p>
        </div>
      `,
      ko: `
        <div class="prose max-w-none">
          <p class="lead text-lg font-medium text-slate-700">한국에 유학이나 취업으로 처음 입국하는 외국인들이 가장 먼저 맞닥뜨리는 질문은 "어떤 주거 형태를 골라야 하는가?"입니다. 원룸과 오피스텔은 외관뿐만 아니라 매달 청구되는 관리비와 보증금 체계가 완전히 다릅니다.</p>
          
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">1. 원룸 (One-Room) - 가성비 중심의 표준 주거</h3>
          <p>방 하나에 주방과 욕실이 딸려 있는 원룸은 학생들에게 가장 인기가 높습니다. 주방과 침실 사이에 중문이 있는 <strong>분리형 원룸</strong>을 선택하면 요리 냄새를 차단하고 겨울철 난방비를 크게 아낄 수 있습니다.</p>
          <ul class="list-disc pl-6 space-y-1 text-slate-600">
            <li><strong>평균 보증금:</strong> 300만 ~ 1,000만 원</li>
            <li><strong>평균 월세:</strong> 40만 ~ 65만 원</li>
            <li><strong>관리비:</strong> 3만 ~ 6만 원 수준 (수도세 및 인터넷이 포함된 경우가 많음)</li>
            <li><strong>장점:</strong> 대학가 인접, 낮은 보증금 부담, 상대적으로 쉬운 외국인 계약</li>
            <li><strong>단점:</strong> 연식이 오래된 건물의 경우 방음 취약, 엘리베이터 및 주차 공간 부족</li>
          </ul>

          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">2. 오피스텔 (Officetel) - 보안과 생활 인프라 중심</h3>
          <p>지하철역 도보 1~3분 초역세권에 위치한 고층 주상복합 건물입니다. 24시간 경비실, 무인 택배함, CCTV, 상가 편의시설이 완비되어 있어 치안과 청결을 중시하는 직장인 및 여학생에게 적합합니다.</p>
          <ul class="list-disc pl-6 space-y-1 text-slate-600">
            <li><strong>평균 보증금:</strong> 1,000만 ~ 3,000만 원</li>
            <li><strong>평균 월세:</strong> 75만 ~ 130만 원</li>
            <li><strong>관리비:</strong> 10만 ~ 20만 원 + 개별 수도/전기/도시가스 별도 청구</li>
          </ul>
        </div>
      `,
      ja: `
        <div class="prose max-w-none">
          <p class="lead text-lg font-medium text-slate-700">韓国へ留学やワーキングホリデー、就職で来られた方が最初に直面するのが「どの部屋タイプを選ぶべきか」という問題です。ワンルームとオフィステルでは、家賃だけでなく毎月の管理費や光熱費の仕組みが大きく異なります。</p>

          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">1. ワンルーム (원룸) - 留学生定番の高コスパ物件</h3>
          <p>1つの部屋の中にベッドスペースとキッチン、バスルームが収まったタイプです。キッチンと寝室の間に引き戸がある<strong>分離型ワンルーム (분리형)</strong>を選ぶと、料理の匂いを遮断し、冬場のオンドル暖房効率も高まります。</p>
          <ul class="list-disc pl-6 space-y-1 text-slate-600">
            <li><strong>平均保証金：</strong> 300万〜1,000万ウォン（約33万〜110万円）</li>
            <li><strong>平均家賃：</strong> 40万〜65万ウォン（約4.4万〜7.1万円）</li>
            <li><strong>管理費：</strong> 安い（月3万〜6万ウォン、水道代やネット代込みが多い）</li>
          </ul>

          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">2. オフィステル (오피스텔) - 駅近・安心セキュリティ</h3>
          <p>駅の真上や徒歩数分に位置する高層マンションタイプです。24時間管理人常駐、オートロック、防犯カメラ、宅配ボックス完備で、女性の一人暮らしや駐在員に大人気です。</p>
          <ul class="list-disc pl-6 space-y-1 text-slate-600">
            <li><strong>平均保証金：</strong> 1,000万〜3,000万ウォン</li>
            <li><strong>平均家賃：</strong> 75万〜130万ウォン</li>
            <li><strong>管理費：</strong> 高め（10万〜20万ウォン、光熱費別）</li>
          </ul>
        </div>
      `
    }
  },
  {
    id: "finding-neighborhoods-seoul",
    category: "finding",
    tags: ["Seoul Districts", "Student Areas", "Subway Line 2"],
    readTime: 7,
    publishDate: "2026-03-10",
    author: {
      name: "Eun-ji Park",
      role: "Urban Geographer & Rental Consultant"
    },
    accentColor: "from-emerald-600 to-teal-800",
    title: {
      en: "Where Foreigners Live in Seoul: A District Guide for Students and Expats",
      zh: "首尔外国人居住地图：留学生与职场人热门租房区域深度解析",
      ko: "서울 외국인 거주 지도: 유학생과 직장인을 위한 주요 권역별 분석",
      ja: "ソウルの外国人居住マップ：留学生＆社会人に人気の賃貸エリア徹底解説"
    },
    excerpt: {
      en: "From vibrant Sinchon and Hongdae near Yonsei and Ewha, to Anam near Korea University and high-paced Gangnam, find your ideal neighborhood.",
      zh: "延世/梨大/西江圈的新村弘大、高丽大周边的安岩、成均馆周边的惠化，以及上班族云集的江南，全面盘点各区租金均价与交通生活圈。",
      ko: "연세·이화·서강의 신촌/홍대부터 고려대의 안암, 성균관대의 혜화, 직장인 중심 강남까지 권역별 평균 시세와 생활 인프라를 정리했습니다.",
      ja: "延世大・梨花女子大の新村・弘大、高麗大周辺の安岩、成均館大の恵化、そしてビジネス街の江南まで、家賃相場と住みやすさを比較。"
    },
    content: {
      en: `
        <div class="prose max-w-none">
          <p class="lead text-lg font-medium text-slate-700">Seoul is a sprawling metropolis of 25 autonomous districts. Each neighborhood has a vastly different personality, rental price floor, and foreigner-friendliness level.</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">1. Sinchon & Hongdae (Line 2)</h3>
          <p>Seoul's primary student hub (Yonsei, Ewha, Sogang). Agents here have deep experience with international students. Rent: 550k~750k KRW / Deposit: 5M~10M KRW.</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">2. Anam (Seongbuk-gu)</h3>
          <p>Centered around Korea University. Rents are 15-20% lower than Sinchon, with very affordable student eateries.</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">3. Gangnam & Yeoksam</h3>
          <p>IT and corporate center. High-end modern officetels with top amenities (Rent: 900k~1.6M KRW).</p>
        </div>
      `,
      zh: `
        <div class="prose max-w-none">
          <p class="lead text-lg font-medium text-slate-700">首尔由 25 个自治区组成。不同区域不仅生活节奏和人文氛围不同，租金中位数和对外国人的接纳度也有很大差异。</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">1. 新村 / 弘大（延世、梨大、西江）</h3>
          <p>首尔最繁华的国际化大学圈。月租约 55万 ~ 75万 韩元，中介接待留学生经验丰富。</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">2. 安岩（高丽大学周边）</h3>
          <p>高丽大学根据地，租金比新村便宜 15% 左右，性价比极高。</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">3. 江南 / 驿三（上班族集聚）</h3>
          <p>现代商务公寓为主，安保严密、交通便利，适合企业职场人士。</p>
        </div>
      `,
      ko: `
        <div class="prose max-w-none">
          <p class="lead text-lg font-medium text-slate-700">서울은 25개 자치구마다 주거 분위기, 평균 임대료, 외국인 친화도가 매우 다릅니다. 본인의 학교나 직장 통근 경로에 맞춰 현명하게 지역을 선택해야 합니다.</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">1. 신촌 / 홍대 / 마포 (2호선 서북권)</h3>
          <p>연세대, 이화여대, 서강대, 홍익대가 밀집한 서울 최대의 대학생 거리입니다. 인근 공인중개사들의 외국인 계약 경험이 매우 풍부합니다. (월세 55만~75만 원 / 보증금 500만~1,000만 원 선)</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">2. 안암 / 성북 (고려대학교 인근)</h3>
          <p>고려대 중심의 주거지로 신촌권 대비 시세가 15~20%가량 저렴하여 가성비가 가장 뛰어난 유학생 거주지입니다.</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">3. 강남 / 역삼 / 서초 (동남권 업무지구)</h3>
          <p>IT 스타트업 및 외국계 기업 주재원들이 많이 선호하는 지역으로, 인프라와 보안이 뛰어난 역세권 오피스텔이 주를 이룹니다.</p>
        </div>
      `,
      ja: `
        <div class="prose max-w-none">
          <p class="lead text-lg font-medium text-slate-700">ソウル市内はエリアごとに家賃相場、街の雰囲気、外国人受け入れ度が大きく異なります。通学・通勤路線を考慮したエリア選びが肝心です。</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">1. 新村・弘大エリア（地下鉄2号線）</h3>
          <p>延世大、梨花女子大、西江大が集まる学生の街。外国人契約に慣れた不動産屋が多く、日本人留学生にも最も人気です。（家賃目安：55万〜75万ウォン）</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">2. 安岩（高麗大学周辺）</h3>
          <p>新村エリアより家賃が約15〜20%安く、食堂やカフェもリーズナブルで生活費を抑えたい学生に最適です。</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">3. 江南・駅三エリア</h3>
          <p>企業駐在員やIT系ワーカーが多く住むビジネス中心地。設備が新しく防犯性の高いオフィステルが主流です。</p>
        </div>
      `
    }
  },
  {
    id: "jeonse-vs-wolse-guide",
    category: "lease",
    tags: ["Jeonse", "Wolse", "Key Money", "Korean Lease"],
    readTime: 8,
    publishDate: "2026-03-08",
    author: {
      name: "Daniel Cho, Esq.",
      role: "Certified Real Estate Broker & Legal Advisor"
    },
    accentColor: "from-amber-600 to-rose-700",
    title: {
      en: "Jeonse vs. Wolse: Demystifying Korea's Unique Key-Money Rental System",
      zh: "全租（Jeonse）与月租（Wolse）：揭开韩国独特高额押金租赁制度的秘密",
      ko: "전세 vs 월세: 한국 고유의 고액 보증금 임대차 제도 완벽 이해",
      ja: "チョンセ vs ウォルセ：韓国独自の超高額保証金賃貸システムを完全解剖"
    },
    excerpt: {
      en: "Why do Korean landlords ask for $50,000+ as a deposit for zero monthly rent? Understand how Jeonse works, the conversion rate, and whether you should do it.",
      zh: "为什么房东会要求支付数千万甚至上亿韩元的大额押金而免除每月租金？全面解析全租与月租的运行底层逻辑与风险收益比。",
      ko: "수천만 원 이상의 목돈을 맡기고 월세를 내지 않는 전세(Jeonse)와 보증부 월세의 원리, 전월세 전환율 협상법과 외국인의 위험 관리법을 설명합니다.",
      ja: "家賃ゼロで数千万円の保証金を預ける「チョンセ」とは何か？外国人にウォルセ（月払い）を強くおすすめする理由とリスク管理を解説。"
    },
    content: {
      en: `
        <div class="prose max-w-none">
          <p class="lead text-lg font-medium text-slate-700">Korea operates with two major systems: <strong>Wolse (월세)</strong> and <strong>Jeonse (전세)</strong>. For most foreign students and expats, Wolse is strongly advised due to fraud risks in Jeonse.</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">What is Wolse?</h3>
          <p>Monthly rent paired with a 5M~20M KRW deposit. The full deposit is refunded when moving out.</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">What is Jeonse?</h3>
          <p>You deposit 50%~80% of the property value (often 150M+ KRW) with 0 KRW monthly rent. However, if the landlord has excessive debt, deposit retrieval can be severely delayed.</p>
        </div>
      `,
      zh: `
        <div class="prose max-w-none">
          <p class="lead text-lg font-medium text-slate-700">韩国有两套并行的租赁制度：<strong>月租（Wolse）</strong> 与 <strong>全租（Jeonse）</strong>。强烈建议留学生以月租为主！</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">月租（Wolse）：</h3>
          <p>支付基准押金（通常 500万 ~ 1000万 韩元），每月按时付房租，退租时房东全额退还押金。</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">全租（Jeonse）：</h3>
          <p>押上数亿韩元免月租，但存在房东破产导致押金难以追回的“空罐全租”风险。</p>
        </div>
      `,
      ko: `
        <div class="prose max-w-none">
          <p class="lead text-lg font-medium text-slate-700">외국인에게 가장 낯선 한국의 임대차 제도는 바로 <strong>전세(Jeonse)</strong>와 <strong>보증부 월세(Wolse)</strong>의 공존입니다.</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">1. 보증부 월세 (Wolse)</h3>
          <p>500만~2,000만 원 안팎의 보증금을 맡기고 매달 월세를 납부하는 방식으로, 계약 만료 시 보증금 전액을 돌려받습니다. 외국인에게 가장 안전하고 보편적인 방식입니다.</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">2. 전세 (Jeonse)</h3>
          <p>매매가의 50~80%에 달하는 고액 목돈(1억~3억 이상)을 집주인에게 맡기고 매월 월세를 내지 않는 독특한 제도입니다. 하지만 집주인의 과다 채무로 인해 보증금을 제때 돌려받지 못하는 '깡통전세' 위험이 있으므로 외국인에게는 추천하지 않습니다.</p>
        </div>
      `,
      ja: `
        <div class="prose max-w-none">
          <p class="lead text-lg font-medium text-slate-700">韓国の住まい探しで日本人が最も驚くのが、<strong>ウォルセ（月払い）</strong>と<strong>チョンセ（全額保証金預託）</strong>という2つの制度です。</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">1. ウォルセ (Wolse / 月税)</h3>
          <p>500万〜1,500万ウォン程度の保証金を預け、毎月家賃を支払う仕組みです。退去時に保証金は原則全額返還されます。留学生や短期滞在者にはこのウォルセを強く推奨します。</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">2. チョンセ (Jeonse / 伝税)</h3>
          <p>数千万円規模のまとまった保証金を預ける代わりに月々の家賃が無料になる制度ですが、家主の債務超過による返還トラブル（カンチョンセ詐欺）のリスクがあるため注意が必要です。</p>
        </div>
      `
    }
  },
  {
    id: "essential-documents-arc-timing",
    category: "lease",
    tags: ["ARC", "Passport Signing", "Immigration", "Lease Contract"],
    readTime: 5,
    publishDate: "2026-03-05",
    author: {
      name: "Living in Korea Guide Team",
      role: "Immigration & Legal Documentation Desk"
    },
    accentColor: "from-cyan-600 to-blue-800",
    title: {
      en: "Signing a Lease as a Foreigner: Required Documents and ARC Timing",
      zh: "外国人签租房合同全攻略：必备材料与外国人登录证（ARC）办理时间点",
      ko: "외국인 임대차 계약 필수 가이드: 외국인등록증(ARC) 발급 전 여권 계약 요령",
      ja: "外国人向け賃貸契約完全ガイド：外国人登録証（ARC）受け取り前のパスポート契約法"
    },
    excerpt: {
      en: "Can you sign a lease before your Alien Registration Card arrives? Yes, with your passport! Here is the exact timeline and checklist.",
      zh: "还没拿到外国人登录证能签正式租房合同吗？答案是可以！使用护照即可签署，但后续转入申报需按步骤补登。",
      ko: "외국인등록증이 나오기 전에도 여권만으로 합법적인 임대차 계약이 가능할까요? 정답은 '가능하다'입니다. 계약 타임라인과 준비 서류를 안내합니다.",
      ja: "外国人登録証がまだ手元になくてもパスポートだけで正式契約できるのか？答えは「完全に合法」です。具体的な手順とタイムライン。"
    },
    content: {
      en: `
        <div class="prose max-w-none">
          <p class="lead text-lg font-medium text-slate-700">Many newcomers ask whether they can sign an official lease before receiving their Alien Registration Card (ARC). Under the Korean Civil Act and Housing Lease Protection Act, <strong>signing a valid contract with your passport number alone is 100% legal</strong>.</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">Documents Needed at Contract Signing</h3>
          <ul class="list-disc pl-6 space-y-1 text-slate-600">
            <li>Original valid passport and visa issuance confirmation</li>
            <li>Funds for the contract down payment (typically 10% of the security deposit)</li>
            <li>Handwritten signature or personal seal (signatures carry full legal weight in Korea)</li>
          </ul>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">After Your ARC Arrives</h3>
          <p>Once you receive your physical ARC (usually 3–4 weeks after entry), visit your local Community Center (주민센터) or Immigration Office within 14 days to report your change of residence (체류지 변경신고) and obtain your Fixed Date stamp (확정일자).</p>
        </div>
      `,
      zh: `
        <div class="prose max-w-none">
          <p class="lead text-lg font-medium text-slate-700">很多刚入境韩国的留学生或职场人会担心“还没拿到外国人登录证（ARC）能不能正式签租房合同”。依据韩国《民法》与《住宅租赁保护法》，<strong>仅凭有效护照号即可签署完全合法有效的正式租赁合同</strong>。</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">签约必备基础材料</h3>
          <ul class="list-disc pl-6 space-y-1 text-slate-600">
            <li>本人有效护照原件及签证确认文件</li>
            <li>签约定金（通常为房屋押金的 10%）转账资金</li>
            <li>本人亲笔签名或印章（在韩国，外籍人士亲笔签名与印章具有同等法律效力）</li>
          </ul>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">领取登录证后的补登流程</h3>
          <p>入境约 3~4 周拿到实体外国人登录证后，请在 14 天内携带合同原件与登录证前往辖区居民中心或出入境管理局办理滞留地变更申报，并同步加盖“确定日期（확정일자）”。</p>
        </div>
      `,
      ko: `
        <div class="prose max-w-none">
          <p class="lead text-lg font-medium text-slate-700">많은 외국인들이 "외국인등록증(ARC)이 아직 안 나왔는데 집을 계약할 수 있나요?"라고 묻습니다. 대한민국 주택임대차보호법과 민법상, <strong>유효한 여권 번호만으로도 100% 합법적이고 완전한 계약 체결이 가능</strong>합니다.</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">계약 진행 필수 서류</h3>
          <ul class="list-disc pl-6 space-y-1 text-slate-600">
            <li>유효한 여권 원본 및 비자 사본</li>
            <li>계약금 (통상 보증금의 10%) 송금 계좌</li>
            <li>서명(Signature) 또는 도장 (한국 법상 외국인의 자필 서명도 인감과 동일한 효력)</li>
          </ul>
        </div>
      `,
      ja: `
        <div class="prose max-w-none">
          <p class="lead text-lg font-medium text-slate-700">「外国人登録証（ARC）がまだ届いていないのですが契約できますか？」という疑問に対し、韓国の民法および住宅賃貸借保護法上、<strong>有効なパスポート番号だけで100%合法的に本契約が可能</strong>です。</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">契約時の必要書類</h3>
          <ul class="list-disc pl-6 space-y-1 text-slate-600">
            <li>有効なパスポート原本およびビザ発給確認書</li>
            <li>手付金（契約金：通常保証金の10%）送金手段</li>
            <li>本人の直筆サインまたは印鑑（サインも完全な法的効力あり）</li>
          </ul>
        </div>
      `
    }
  },
  {
    id: "preventing-jeonse-scams",
    category: "safety",
    tags: ["Scam Prevention", "Registry Check", "Due Diligence"],
    readTime: 9,
    publishDate: "2026-03-01",
    author: {
      name: "SafeRent Korea Taskforce",
      role: "Legal & Consumer Defense"
    },
    accentColor: "from-red-600 to-rose-800",
    title: {
      en: "Jeonse Fraud (깡통전세) and Lease Scams: 5 Must-Check Steps Before Paying Any Deposit",
      zh: "警惕‘空罐全租’与租房诈骗：支付任何押金前必须核查的5大步骤",
      ko: "깡통전세 및 임대차 사기 예방: 보증금 송금 전 반드시 확인해야 할 5단계",
      ja: "「カンチョンセ詐欺」を防ぐ：保証金を送金する前に必ず確認すべき5つの防衛策"
    },
    excerpt: {
      en: "Protect your hard-earned savings. Learn how to verify the certified real estate register (등기부등본) and spot unauthorized subleases.",
      zh: "手把手教你读懂韩国不动产登记簿（등기부등본），排查房屋最高抵押负债额，严查防范二房东私自转租卷款跑路。",
      ko: "등기부등본 갑구의 실소유자 일치 여부와 을구의 근저당 채무비율 계산법, 불법 전대차 방지법을 정리했습니다.",
      ja: "不動産登記簿謄本（カプク・ウルク）の確認方法、建物の担保負債比率の計算式、無断転貸トラブルを防ぐ手順を徹底解説。"
    },
    content: {
      en: `
        <div class="prose max-w-none">
          <p class="lead text-lg font-medium text-slate-700">Protecting your rental deposit starts before you transfer a single won. Always verify a fresh <strong>Certified Real Estate Register (등기부등본)</strong> issued on the exact day of signing and balance payment.</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">Step 1: Verify Gap-gu (갑구 - Ownership Section)</h3>
          <p>Check that the legal owner's name and partial resident number in Gap-gu match the landlord's ID and the bank account receiving your deposit 100%. Never wire a deposit to an unverified third party.</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">Step 2: Check Eul-gu (을구 - Mortgage &amp; Debt Ratio)</h3>
          <p>Add the maximum mortgage claim amount in Eul-gu plus all existing tenant deposits in the building. If that combined figure exceeds 70% of the building's market value, treat it as high-risk and walk away.</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">Step 3: Avoid Unauthorized Subleases</h3>
          <p>Never sign an informal room takeover without the actual building owner's written consent and official contract verification.</p>
        </div>
      `,
      zh: `
        <div class="prose max-w-none">
          <p class="lead text-lg font-medium text-slate-700">守护韩国租房押金的第一步，是在转账前查验签约及尾款当日最新打印的<strong>《不动产登记簿（등기부등본）》</strong>。</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">第一步：核实甲区（갑구 - 房屋所有权）</h3>
          <p>确认甲区登记的产权人姓名与身份证信息，与接收押金的银行账户名 100% 一致。切勿将押金转入未经核实的第三方个人账户。</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">第二步：排查乙区（을구 - 抵押权与负债率）</h3>
          <p>将乙区登记的最高抵押债权额与整栋楼现有租户押金总额相加，若超过房屋市场价的 70%，则存在“空罐全租”暴雷风险，建议果断避开。</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">第三步：拒绝无权转租</h3>
          <p>切勿轻信未取得大房东书面同意的口头或私下二手转租，务必核验原始产权文件。</p>
        </div>
      `,
      ko: `
        <div class="prose max-w-none">
          <p class="lead text-lg font-medium text-slate-700">소중한 보증금을 지키기 위해서는 계약 당일 아침 발급된 <strong>등기부등본</strong>을 반드시 확인해야 합니다.</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">1단계: 갑구(소유권) 확인</h3>
          <p>등기부등본 갑구에 적힌 실소유자의 성명 및 주민등록번호 앞자리가 보증금을 입금받는 은행 계좌 예금주와 100% 일치해야 합니다.</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">2단계: 을구(근저당권) 부채 비율</h3>
          <p>근저당권 채권최고액과 건물 내 모든 세입자 보증금의 합이 매매 시세의 70%를 초과하는 건물은 위험하므로 피해야 합니다.</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">3단계: 선순위 임차인 보증금 합계 확인 (다가구주택 주의)</h3>
          <p>원룸 건물이 통째로 한 집주인 소유인 다가구주택은 나보다 먼저 들어온 세입자들의 보증금 합계를 반드시 공인중개사의 '중개대상물 확인·설명서'로 확인해야 합니다.</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">4단계: 임대인 국세·지방세 체납 여부</h3>
          <p>계약 전 임대인의 동의를 받아 미납 국세·지방세 열람을 요청하거나 계약서 특약으로 세금 체납이 없음을 확인하세요. 미납 세금은 보증금보다 우선 징수될 수 있습니다.</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">5단계: 불법 전대차 및 대리계약 검증</h3>
          <p>집주인이 아닌 제3자나 기존 세입자와 계약할 때는 임대인의 인감도장이 날인된 위임장과 인감증명서, 집주인 직접 통화·동의서를 반드시 확인하세요.</p>
        </div>
      `,
      ja: `
        <div class="prose max-w-none">
          <p class="lead text-lg font-medium text-slate-700">大切な保証金を失わないために、契約当日の朝に発行された最新の<strong>登記簿謄本（등기부등본）</strong>を必ず確認しましょう。</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">1. 甲区（所有権）の確認</h3>
          <p>登記簿の甲区（カプク）に記載された所有者名と、保証金を振り込む銀行口座の名義人が100%一致しているか確認します。</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">2. 乙区（抵当権）の負債比率</h3>
          <p>銀行融資などの抵当権設定額と入居者の保証金の合計が、物件相場の70%を超えている場合は危険物件として契約を避けるべきです。</p>
        </div>
      `
    }
  },
  {
    id: "fixed-date-and-address-registration",
    category: "safety",
    tags: ["Fixed Date", "Jeonip Singo", "Deposit Priority", "Community Center"],
    readTime: 6,
    publishDate: "2026-02-25",
    author: {
      name: "Min-jun Kim",
      role: "Housing Rights Advocate"
    },
    accentColor: "from-teal-600 to-emerald-800",
    title: {
      en: "Step-by-Step Guide: How to Get 확정일자 (Fixed Date) and Complete 전입신고",
      zh: "保卫押金的法定护盾：手把手教你办理‘确定日字（확정일자）’与‘转入申报’",
      ko: "보증금 보호의 핵심: 입주 당일 확정일자 받는 법과 체류지 변경신고(전입신고)",
      ja: "保証金を守る鉄則：入居当日の「確定日付（ファクチョンイルチャ）」取得と転入届の手順"
    },
    excerpt: {
      en: "The two most crucial administrative steps you must take on move-in day. Why this grants you legal preferential repayment rights if the building is auctioned.",
      zh: "入住当天务必完成的两项法定手续！为何这直接决定了房屋面临拍卖时，你是否享有全额追回押金的优先受偿权。",
      ko: "입주 당일 주민센터에서 받는 확정일자가 왜 외국인의 보증금 우선변제권에 결정적인지, 방문 절차와 필요 서류를 안내합니다.",
      ja: "鍵を受け取った当日に住民センターへ行くべき理由。競売時にも保証金を最優先で回収できる「優先弁済権」の取得方法。"
    },
    content: {
      en: `
        <div class="prose max-w-none">
          <p class="lead text-lg font-medium text-slate-700">Paying your deposit and signing a lease alone does not automatically grant you legal <strong>Opposing Power (대항력)</strong> or <strong>Preferential Repayment Rights (우선변제권)</strong> against third-party creditors.</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">What is the Fixed Date (확정일자)?</h3>
          <p>An official date stamp issued by your local Community Center (주민센터) or court registry office on your original lease contract. Combined with moving in and registering your address, it places your deposit ahead of later mortgages if the property is auctioned.</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">Move-In Day Checklist</h3>
          <ul class="list-disc pl-6 space-y-1 text-slate-600">
            <li>Bring your original signed lease contract, passport/ARC, and a small stamp fee (approx. 600 KRW).</li>
            <li>Complete your residence registration (전입신고 / 체류지 변경신고) on the same day you receive your keys.</li>
          </ul>
        </div>
      `,
      zh: `
        <div class="prose max-w-none">
          <p class="lead text-lg font-medium text-slate-700">即使签署了租房合同并付清押金，若未完成法定登记手续，仍无法对抗第三方债权人，也无法获得法律赋予的<strong>对抗力（대항력）</strong>与<strong>优先受偿权（우선변제권）</strong>。</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">什么是“确定日期（확정일자）”？</h3>
          <p>由辖区居民中心或法院登记所在租赁合同原件上加盖的官方日期印章，用以公证合同存在的准确日期。配合实际入住与住址申报，万一房屋日后被司法拍卖，你的押金将优先于后顺位抵押权获得清偿。</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">入住当天办理要点</h3>
          <ul class="list-disc pl-6 space-y-1 text-slate-600">
            <li>携带租赁合同原件、护照或外国人登录证，以及约 600 韩元手续费前往居民中心。</li>
            <li>领取钥匙入住当日即刻同步完成住址变更/转入申报与确定日期加盖。</li>
          </ul>
        </div>
      `,
      ko: `
        <div class="prose max-w-none">
          <p class="lead text-lg font-medium text-slate-700">임대차 계약을 맺고 잔금을 치렀더라도 법적인 <strong>대항력</strong>과 <strong>우선변제권</strong>을 취득하지 않으면 제3자 채권자에게 대항할 수 없습니다.</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">확정일자(確定日字)란?</h3>
          <p>주민센터에서 임대차계약서 원본에 날짜 도장을 찍어주는 것으로, 해당 날짜에 계약이 존재했음을 공적으로 증명합니다. 훗날 건물이 경매로 넘어가더라도 후순위 근저당권자보다 보증금을 먼저 배당받을 수 있는 법적 방패가 됩니다.</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">외국인 체류지 변경신고(전입신고) 절차</h3>
          <ul class="list-disc pl-6 space-y-1 text-slate-600">
            <li><strong>신고 기한:</strong> 이사한 날로부터 <strong>14일 이내</strong> (기한 초과 시 출입국관리법상 과태료 부과 가능)</li>
            <li><strong>방문 장소:</strong> 새로운 주소지 관할 시·군·구청 또는 읍·면·동 주민센터(행정복지센터), 또는 하이코리아(HiKorea) 온라인 신고</li>
            <li><strong>준비 서류:</strong> 여권, 외국인등록증(ARC), 임대차계약서 원본, 수수료(확정일자 약 600원)</li>
          </ul>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">대항력 발생 시점 주의사항</h3>
          <p>주택 인도(실제 입주)와 전입신고를 마친 <strong>다음 날 0시</strong>부터 대항력이 생깁니다. 따라서 계약 특약에 '잔금 지급 다음 날까지 집주인이 추가 근저당을 설정하지 않는다'는 조항을 함께 넣어야 안전합니다.</p>
        </div>
      `,
      ja: `
        <div class="prose max-w-none">
          <p class="lead text-lg font-medium text-slate-700">契約を結び残金を支払っただけでは、法律上の<strong>対抗力</strong>と<strong>優先弁済権</strong>は発生しません。</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">「確定日付（ファクチョンイルチャ）」とは？</h3>
          <p>管轄の住民センター（주민센터）で契約書原本に公印を押してもらう公証手続きです。手数料約600ウォンで即日発行され、万が一物件が差し押さえられても保証金を最優先で保護できます。</p>
        </div>
      `
    }
  },
  {
    id: "living-bills-trash-wifi",
    category: "living",
    tags: ["Trash Separation", "Utility Bills", "Internet", "Move-in Hacks"],
    readTime: 7,
    publishDate: "2026-02-18",
    author: {
      name: "Hannah Lee",
      role: "Expat Life & Logistics Specialist"
    },
    accentColor: "from-sky-600 to-indigo-800",
    title: {
      en: "Living in Korea 101: Trash Separation, Utility Bills, and Wi-Fi Installation",
      zh: "韩国独居生活指南：垃圾分类（标准袋）、水电燃气缴费及宽带报装",
      ko: "한국 생활 정착 101: 종량제 쓰레기 배출법, 공과금 납부 및 인터넷 설치 팁",
      ja: "韓国一人暮らし完全攻略：ゴミ分別（指定ゴミ袋）・光熱費の支払い・Wi-Fi開通"
    },
    excerpt: {
      en: "Fines for throwing garbage in regular bags can exceed 100,000 KRW. Master Korea's volume-rate waste system, paying gas bills via mobile banking, and fast internet setup.",
      zh: "用错垃圾袋可能面临高达 10~30 万韩元的巨额罚款！详解韩国计量垃圾袋购买使用、便利店缴纳公课金与家庭宽带开通全套攻略。",
      ko: "일반 비닐봉투 무단투기 시 최대 10만 원 이상의 과태료 부과! 종량제 봉투 구매법, 공과금 가상계좌·편의점 납부법, 인터넷 설치 팁을 정리했습니다.",
      ja: "指定袋を使わないと10万ウォン以上の過料も！従量制ゴミ袋の買い方、コンビニ・アプリでの公共料金支払い、ネット開通のコツ。"
    },
    content: {
      en: `
        <div class="prose max-w-none">
          <p class="lead text-lg font-medium text-slate-700">South Korea enforces strict waste sorting rules while offering very convenient utility bill payment options once you know the system.</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">1. Official Volume-Rate Trash Bags (종량제 봉투)</h3>
          <p>Buy your district's designated general waste bags (typically white) and food waste bags (often yellow) at nearby convenience stores or supermarkets. Chicken bones, shells, and onion skins go into <strong>general waste</strong>, not food waste.</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">2. Paying Gas, Power, and Water Bills</h3>
          <p>Each paper bill prints a personal virtual bank account number for mobile transfers, or you can scan the barcode at any 24-hour convenience store counter to pay by card or cash.</p>
        </div>
      `,
      zh: `
        <div class="prose max-w-none">
          <p class="lead text-lg font-medium text-slate-700">韩国拥有非常严格的垃圾分类制度，但掌握方法后，日常水电燃气缴费与宽带开通其实十分便捷。</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">1. 计量垃圾袋制度（一般垃圾 vs 食物垃圾）</h3>
          <p>需在便利店或超市购买所在行政区指定的专用垃圾袋。请注意：鸡骨头、贝壳、洋葱皮等硬质或纤维厨余不属于食物垃圾，应投放到<strong>一般垃圾袋</strong>中。</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">2. 公共事业账单便捷缴费</h3>
          <p>水电与燃气账单上印有专属虚拟银行账号，可直接用手机银行转账；也可直接携带纸质账单前往 24 小时便利店收银台扫码支付。</p>
        </div>
      `,
      ko: `
        <div class="prose max-w-none">
          <p class="lead text-lg font-medium text-slate-700">한국은 전 세계에서 가장 철저한 쓰레기 분리배출 시스템과 편리한 공과금 납부 체계를 가지고 있습니다.</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">1. 종량제 봉투 제도 (일반 쓰레기 vs 음식물 쓰레기)</h3>
          <p>편의점이나 마트에서 해당 자치구의 규격 봉투를 구매해 배출해야 합니다. 닭뼈, 조개껍데기, 양파껍질 등은 음식물이 아닌 <strong>일반 쓰레기</strong>로 분류됩니다.</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">2. 공과금(공공요금) 간편 납부</h3>
          <p>고지서에 인쇄된 개인 전용 가상계좌로 폰뱅킹 이체하거나, 종이 고지서를 들고 가까운 24시간 편의점에서 현금이나 카드로 납부할 수 있습니다.</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">3. 입주 전 계량기 확인 &amp; 인터넷 개통</h3>
          <p>이사 당일 가스·전기·수도 계량기 숫자를 사진으로 찍어두고 도시가스 고객센터에 전입(명의변경) 및 전출 정산 확인을 요청하면 이전 세입자 요금이 합산되는 일을 막을 수 있습니다. 인터넷이 건물 공용이 아닌 경우 KT/SKB/LG U+ 중 약정 기간(보통 1~3년)과 외국인등록증 필요 여부를 미리 확인하세요.</p>
        </div>
      `,
      ja: `
        <div class="prose max-w-none">
          <p class="lead text-lg font-medium text-slate-700">韓国はゴミの分別排出が非常に厳格な反面、公共料金の納付は驚くほど簡単です。</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">1. 従量制ゴミ袋（チョンニャンジェ）のルール</h3>
          <p>近所のコンビニで区指定のゴミ袋（一般ゴミ用白袋、生ゴミ用黄袋）を購入して捨てます。骨や貝殻、玉ねぎの皮などは「一般ゴミ」として処理します。</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">2. 公共料金の支払い方法</h3>
          <p>請求書に記載された専用仮想口座への銀行振込か、請求書を持って24時間営業のコンビニのレジでバーコード決済が可能です。</p>
        </div>
      `
    }
  },
  {
    id: "chinese-student-rental-survival-guide",
    category: "chinese",
    tags: ["留学生专区", "避坑指南", "二房东防骗", "退租扣费", "中文服务"],
    readTime: 10,
    publishDate: "2026-03-12",
    author: {
      name: "在韩留学生法律互助组",
      role: "华人学生生活权益守护"
    },
    accentColor: "from-rose-600 to-amber-700",
    title: {
      en: "The Ultimate Survival Guide for Chinese Students Renting in Korea",
      zh: "留学生韩国租房终极避坑手册：防二房东转租、签约陷阱与退租押金追讨",
      ko: "중화권 유학생 맞춤형 임대차 가이드: 불법 전대차(이중계약) 방지와 보증금 반환 특약",
      ja: "外国人留学生のための賃貸サバイバルガイド：無断転貸詐欺・退去時の敷金トラブル防止策"
    },
    excerpt: {
      en: "A comprehensive guide created for international students: avoiding illegal subleases, verifying property registration, and ensuring full deposit return.",
      zh: "专门为在韩中国留学生和语学堂新生打造的避坑指南：手把手揭露二房东套路、合同特约条款撰写规范，以及退租时防止房东恶意扣押金的实战方案。",
      ko: "외국인 커뮤니티에서 빈번하게 일어나는 무단 전대차 사기 수법과, 퇴거 시 원상복구 분쟁을 방지하는 필수 특약사항 작성법을 정리했습니다.",
      ja: "学生コミュニティで多発する個人間サブリース詐欺の手口や、退去時に不当な原状回復費用を請求されないための契約書特約条項。"
    },
    content: {
      en: `
        <div class="prose max-w-none">
          <p class="lead text-lg font-medium text-slate-700">One of the most frequent housing disputes in student communities involves <strong>unauthorized subleasing (불법 전대차)</strong>—paying a deposit to an acquaintance or graduating senior without the building owner's written consent. Without owner approval, subleases carry no legal deposit protection.</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">Essential Steps to Protect Your Deposit at Move-Out</h3>
          <ul class="list-disc pl-6 space-y-1 text-slate-600">
            <li>Photograph and film the entire room, wallpaper, flooring scratches, and built-in appliances on move-in day, and send the evidence to the landlord/agent.</li>
            <li>Send written non-renewal notice at least 2 months before lease expiration via SMS or messenger to avoid automatic renewal (묵시적 갱신).</li>
          </ul>
        </div>
      `,
      zh: `
        <div class="prose max-w-none">
          <p class="lead text-lg font-medium text-slate-700">在留学生群体中最常发生的租房损失，是向即将回国的学长或熟人支付押金入住<strong>未获大房东书面同意的非法转租房（불법 전대차）</strong>。此类私下转租不受法律保护，极易导致押金无法追回。</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">退租时避免押金纠纷的关键技巧</h3>
          <ul class="list-disc pl-6 space-y-1 text-slate-600">
            <li>入住第一天用高清照片和视频记录墙纸、地板划痕及家电现状，并及时发送给房东或中介留存。</li>
            <li>租约到期前至少提前 2 个月通过短信或聊天工具书面通知不再续约，避免触发自动默示续约（묵시적 갱신）。</li>
          </ul>
        </div>
      `,
      ko: `
        <div class="prose max-w-none">
          <p class="lead text-lg font-medium text-slate-700">유학생 커뮤니티에서 가장 빈번하게 발생하는 피해는 귀국하는 선배나 지인에게 보증금을 건네고 거주하는 <strong>불법 전대차(전전세)</strong>입니다. 집주인의 서면 동의가 없는 전대차는 법적 효력이 없어 보증금을 전액 잃을 위험이 큽니다.</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">퇴거 시 보증금 분쟁 방지 필수 팁</h3>
          <ul class="list-disc pl-6 space-y-1 text-slate-600">
            <li>입주 첫날 방 전체 및 벽지, 바닥 스크래치, 옵션 가전 상태를 고화질 사진 및 영상으로 촬영해 공인중개사와 임대인에게 전송해 둡니다.</li>
            <li>만기 최소 2개월 전 해지 통보를 문자나 메신저 등 기록이 남는 방식으로 집주인에게 전달해야 묵시적 갱신을 방지할 수 있습니다.</li>
          </ul>
        </div>
      `,
      ja: `
        <div class="prose max-w-none">
          <p class="lead text-lg font-medium text-slate-700">留学生コミュニティで最も多い被害が、帰国する先輩からの「個人的な転貸（サブリース）」による敷金持ち逃げトラブルです。家主の同意書がない転貸は違法であり、保証金は法律で保護されません。</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">退去トラブルを防ぐ防衛策</h3>
          <ul class="list-disc pl-6 space-y-1 text-slate-600">
            <li>入居初日に部屋中の傷や壁紙の状態を動画・写真で撮影し、仲介士と家主に送ってクラウドに保存しておく。</li>
            <li>契約満了の2〜3ヶ月前には退去の意思を書面（カカオトークやSMS）で通知し、自動更新（黙示的更新）を防ぐ。</li>
          </ul>
        </div>
      `
    }
  },
  {
    id: "realtor-fees-and-commission-guide",
    category: "lease",
    tags: ["Realtor Commission", "Legal Cap", "VAT", "Brokerage Law"],
    readTime: 6,
    publishDate: "2026-02-10",
    author: {
      name: "Daniel Cho, Esq.",
      role: "Certified Real Estate Broker & Legal Advisor"
    },
    accentColor: "from-purple-600 to-indigo-800",
    title: {
      en: "Realtor Commission in Korea: Legal Caps, VAT, and How Not to Overpay",
      zh: "韩国不动产中介费详解：法定上限比例、增值税（VAT）与防多收费技巧",
      ko: "부동산 중개보수 완벽 가이드: 법정 요율 상한선과 부가세(VAT), 과다 청구 예방법",
      ja: "韓国の不動産仲介手数料ガイド：法定上限料率・付加価値税（VAT）と過剰請求防止法"
    },
    excerpt: {
      en: "Korean real estate fees are regulated by statutory caps. Learn how the converted transaction value is computed and ensure you never get overcharged.",
      zh: "韩国中介费受政府法定费率严格管控！教你通过‘换算交易额’精准推算自己应当缴纳的法定中介费上限，理直气壮拒绝乱收费。",
      ko: "환산보증금 계산 공식[보증금 + (월세 × 100)]과 금액대별 법정 한도액, 현금영수증 발행 의무 등 외국인이 알아야 할 중개보수 룰을 정리했습니다.",
      ja: "月税の換算取引額の計算式、区間ごとの法定上限額、領収書発行など、外国人が知っておくべき仲介手数料の公式ルール。"
    },
    content: {
      en: `
        <div class="prose max-w-none">
          <p class="lead text-lg font-medium text-slate-700">Under Korea's Licensed Real Estate Agents Act, brokerage commissions are strictly capped by statutory rate tables—charging above the legal ceiling is illegal.</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">Converted Transaction Value Formula</h3>
          <div class="my-3 p-3 bg-slate-100 rounded-lg font-mono text-sm text-slate-800">
            Converted Value = Deposit + (Monthly Rent × 100)
          </div>
          <p class="text-sm text-slate-600">* If that total is under 50,000,000 KRW, it is recalculated using <code>Deposit + (Monthly Rent × 70)</code>.</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">Statutory Rate &amp; Cap Tiers</h3>
          <ul class="list-disc pl-6 space-y-1 text-slate-600">
            <li><strong>Under 50M KRW:</strong> 0.5% max rate (200,000 KRW cap)</li>
            <li><strong>50M ~ 100M KRW:</strong> 0.4% max rate (300,000 KRW cap)</li>
            <li><strong>100M ~ 600M KRW:</strong> 0.3% max rate (no fixed cap)</li>
          </ul>
        </div>
      `,
      zh: `
        <div class="prose max-w-none">
          <p class="lead text-lg font-medium text-slate-700">韩国《公认中介士法》对房屋租赁中介手续费（복비）设有严格的法定上限，任何超出法定费率标准的收费均属违法。</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">月租换算交易额计算公式</h3>
          <div class="my-3 p-3 bg-slate-100 rounded-lg font-mono text-sm text-slate-800">
            换算交易额 = 押金 + (月租 × 100)
          </div>
          <p class="text-sm text-slate-600">※ 若计算结果低于 5,000 万韩元，则按 <code>押金 + (月租 × 70)</code> 重新核算。</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">各区间法定费率与封顶上限</h3>
          <ul class="list-disc pl-6 space-y-1 text-slate-600">
            <li><strong>5,000 万韩元以下：</strong> 上限费率 0.5%（最高封顶 20 万韩元）</li>
            <li><strong>5,000 万 ~ 1 亿韩元以下：</strong> 上限费率 0.4%（最高封顶 30 万韩元）</li>
            <li><strong>1 亿 ~ 6 亿韩元以下：</strong> 上限费率 0.3%（无单独封顶）</li>
          </ul>
        </div>
      `,
      ko: `
        <div class="prose max-w-none">
          <p class="lead text-lg font-medium text-slate-700">대한민국 공인중개사법은 중개보수의 상한선을 법으로 엄격히 규정하고 있으며, 이를 초과하여 수수료를 수수하는 것은 불법입니다.</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">월세 환산보증금 계산 공식</h3>
          <div class="my-3 p-3 bg-slate-100 rounded-lg font-mono text-sm text-slate-800">
            환산거래금액 = 보증금 + (월세 × 100)
          </div>
          <p class="text-sm text-slate-600">※ 단, 계산된 금액이 5,000만 원 미만일 경우: 보증금 + (월세 × 70)으로 재계산합니다.</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">법정 요율 및 한도액 기준</h3>
          <ul class="list-disc pl-6 space-y-1 text-slate-600">
            <li><strong>5,000만 원 미만:</strong> 상한 요율 0.5% (한도액 20만 원)</li>
            <li><strong>5,000만 ~ 1억 원 미만:</strong> 상한 요율 0.4% (한도액 30만 원)</li>
            <li><strong>1억 ~ 6억 원 미만:</strong> 상한 요율 0.3% (별도 한도액 없음)</li>
          </ul>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">부가세(VAT) 10%와 현금영수증 확인</h3>
          <p>일반과세자 공인중개사는 법정 중개보수에 부가가치세 10%를 별도 청구할 수 있으나, 간이과세자는 부가세 10% 전체를 청구할 수 없습니다(사업자등록증 확인 가능). 중개보수를 계좌이체할 때는 반드시 <strong>현금영수증</strong> 또는 영수증을 요청해 두세요.</p>
        </div>
      `,
      ja: `
        <div class="prose max-w-none">
          <p class="lead text-lg font-medium text-slate-700">韓国の公認仲介士法では、仲介手数料の上限が法律で厳格に定められており、上限を超える請求は違法です。</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">月税の換算取引額の計算式</h3>
          <div class="my-3 p-3 bg-slate-100 rounded-lg font-mono text-sm text-slate-800">
            換算額 = 保証金 + (月額家賃 × 100)
          </div>
          <p class="text-sm text-slate-600">※ 換算額が5,000万ウォン未満の場合は「保証金 + (月額家賃 × 70)」で再計算。</p>
          <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">法定料率と上限金額</h3>
          <ul class="list-disc pl-6 space-y-1 text-slate-600">
            <li><strong>5,000万ウォン未満：</strong> 上限0.5%（限度額20万ウォン）</li>
            <li><strong>5,000万〜1億ウォン未満：</strong> 上限0.4%（限度額30万ウォン）</li>
            <li><strong>1億〜6億ウォン未満：</strong> 上限0.3%</li>
          </ul>
        </div>
      `
    }
  }
];

window.articlesData = articlesData;
