// Living in Korea Guide - Main Application Controller
// Supports 4 Languages: English (en), Chinese (zh), Korean (ko), Japanese (ja)

const SUPPORTED_LANGS = ["en", "zh", "ko", "ja"];

const appState = {
  lang: localStorage.getItem("living_korea_lang") || "ko", // Default to Korean or saved
  currentCategory: "all",
  searchQuery: "",
  activeArticle: null,
  activeFaqIndex: null
};

// FAQ Data with rich 4-language answers
const faqData = [
  {
    q: {
      en: "Can I legally sign a rental contract before receiving my Alien Registration Card (ARC)?",
      zh: "还没有拿到外国人登录证（ARC），可以合法签署韩国租房合同吗？",
      ko: "외국인등록증(ARC)이 아직 발급되지 않은 상태에서도 합법적으로 임대차 계약을 체결할 수 있나요?",
      ja: "外国人登録証（ARC）がまだ手元にない状態でも、合法的に賃貸契約を結べますか？"
    },
    a: {
      en: "<strong>Yes, absolutely.</strong> Under the Korean Civil Act and Housing Lease Protection Act, foreign passport holders can legally enter into real estate contracts using their valid Passport Number. Once your physical ARC arrives (typically 3 to 4 weeks after entry), you simply visit the local Community Center to update your registered residence record.",
      zh: "<strong>完全合法且普遍适用。</strong> 依据韩国《民法》与《住宅租赁保护法》，外国人仅凭本人有效护照即可与房东签署正式的不动产租赁合同。合同中的承租人身份识别码将填写你的护照号。待入境 3~4 周后取得实体外国人登录证，再前往管辖居民中心办理居留地变更登记即可。",
      ko: "<strong>네, 100% 합법적이며 실제로 매우 흔한 방식입니다.</strong> 대한민국 민법과 주택임대차보호법에 따라, 외국인은 유효한 여권 원본과 여권 번호만으로 법적 효력을 갖는 정식 임대차 계약을 체결할 수 있습니다. 입국 후 약 3~4주 뒤 실물 외국인등록증을 수령하면 관할 주민센터를 방문하여 체류지 변경 신고를 완료하시면 됩니다.",
      ja: "<strong>はい、完全に合法であり、実際によく行われる手続きです。</strong> 韓国の民法および住宅賃貸借保護法に基づき、外国人は有効なパスポート原本とその番号だけで、法的効力を持つ正規の賃貸借契約を締結できます。入国後3〜4週間ほどで実物の外国人登録証が届いたら、管轄の住民センターで滞在地変更届を行えば完了です。"
    }
  },
  {
    q: {
      en: "What is the key difference between Jeonse (전세) and Wolse (월세)? Which is better for foreigners?",
      zh: "全租（Jeonse）与月租（Wolse）的核心区别是什么？外国人更推荐哪种？",
      ko: "전세와 월세의 결정적인 차이점은 무엇이며, 외국인에게는 어떤 방식이 더 안전한가요?",
      ja: "チョンセ（伝税）とウォルセ（月税）の決定的な違いは何ですか？外国人にはどちらが安全ですか？"
    },
    a: {
      en: "<strong>Wolse (월세)</strong> is monthly rent with a moderate key money deposit (typically 5M~20M KRW). You pay rent each month, and the deposit is returned when moving out. <br><br><strong>Jeonse (전세)</strong> requires a massive lump-sum deposit (50%~80% of property market value, often 150M~300M+ KRW) with 0 KRW monthly rent. For international students and non-permanent foreign workers, <strong>Wolse is strongly recommended</strong> because Jeonse exposes tenants to severe fraud and liquidity risk (깡통전세).",
      zh: "<strong>月租（Wolse）</strong>为支付基准押金（通常 500万~2000万韩元）并按月交纳租金，退租时全额退回押金。<br><br><strong>全租（Jeonse）</strong>则需一次性给房东支付房屋市值的 50%~80%（常在 1.5亿~3亿韩元以上），租期内月租为 0。<strong>强烈建议留学生和中短期外籍工作者选择月租！</strong>全租若遭遇房东破产或债务爆雷，维权极其耗时漫长。",
      ko: "<strong>월세(보증부 월세)</strong>는 통상 500만~2,000만 원 선의 보증금을 맡기고 매월 고정 월세를 내는 방식으로, 계약 종료 시 보증금을 전액 돌려받습니다.<br><br><strong>전세</strong>는 집값의 50~80%에 달하는 목돈(1억~3억 이상)을 집주인에게 예치하고 월세를 내지 않는 제도입니다. <strong>외국인 유학생과 일반 직장인에게는 월세를 강력히 추천합니다.</strong> 전세는 집주인의 과다 부채나 주택 시세 하락으로 보증금을 돌려받지 못하는 '깡통전세' 위험이 크기 때문입니다.",
      ja: "<strong>ウォルセ（月税）</strong>は通常500万〜2,000万ウォンの保証金を預け、毎月決まった家賃を支払う方式で、退去時に保証金が全額返還されます。<br><br><strong>チョンセ（伝税）</strong>は住宅価格の50〜80%に相当するまとまった大金（1億〜3億ウォン以上）を預けることで月々の家賃がゼロになる制度です。<strong>外国人留学生や一般的な駐在員・社会人には「ウォルセ」を強くおすすめします。</strong>チョンセは家主の債務超過などによる返還拒否（カンチョンセ詐欺）のリスクがあるためです。"
    }
  },
  {
    q: {
      en: "What is 'Fixed Date' (확정일자) and why must I get it on the day of move-in?",
      zh: "什么是‘确定日字（확정일자）’？为什么入住当天必须去办理？",
      ko: "확정일자(確定日字)란 무엇이며, 왜 입주 당일 주민센터에서 반드시 받아야 하나요?",
      ja: "「確定日付（ファクチョンイルチャ）」とは何ですか？なぜ入居当日に住民センターへ行く必要があるのですか？"
    },
    a: {
      en: "The Fixed Date (확정일자) is an official government stamp placed on your lease contract at the local Community Center (주민센터). Together with taking physical possession of the room, it establishes your legal <strong>Preferential Payment Right (우선변제권)</strong>. If the landlord defaults and the building is auctioned, your deposit legally takes precedence over future debts.",
      zh: "‘确定日字（확정일자）’是由韩国社区居民中心（주민센터）在你的租赁合同原件上加盖的官方生效防伪印章。与实际搬入同日完成，它将赋予你法定的<strong>‘优先受偿权（우선변제권）’</strong>。未来即使房东遭遇经济纠纷导致房产被法院强制拍卖，你的押金清偿顺序也将优先于后续设立的银行抵押权！",
      ko: "확정일자는 관할 주민센터나 법원 등기소에서 임대차계약서 원본에 당일의 날짜가 찍힌 공식 공증 도장을 받는 절차입니다. 실제 주택의 인도(열쇠 수령)와 함께 확정일자를 받으면 법적인 <strong>'우선변제권(優先辨濟權)'</strong>을 획득하게 됩니다. 만약 거주 중인 건물이 집주인의 채무로 인해 경매로 넘어가더라도, 후순위 채권자보다 나의 소중한 보증금을 법적으로 먼저 배당받을 수 있는 가장 중요한 안전장치입니다.",
      ja: "確定日付とは、管轄の住民センター（役場）で賃貸借契約書の原本に公式の日付印を押してもらう公証手続きです。実際の部屋の引き渡し（鍵の受取）と同時にこの印を受けることで、法律上の<strong>「優先弁済権」</strong>が付与されます。万が一住んでいる建物が家主の借金で競売にかけられた場合でも、後から設定された金融機関の抵当権より優先して保証金を返還してもらえる最も重要な防御策です。"
    }
  },
  {
    q: {
      en: "What items are typically covered by the monthly maintenance fee (관리비)?",
      zh: "每月的物业管理费（관리비）通常包含哪些项目？",
      ko: "매달 청구되는 관리비(Maintenance Fee)에는 구체적으로 어떤 항목들이 포함되나요?",
      ja: "毎月請求される「管理費」には具体的にどのような項目が含まれますか？"
    },
    a: {
      en: "In traditional student <strong>One-Rooms</strong>, the maintenance fee (30,000~60,000 KRW) usually covers building cleaning, hallway lighting, water, and building internet/Wi-Fi. In <strong>Officetels</strong>, the fee (100,000~200,000 KRW) covers 24/7 security and elevator maintenance, while water, electricity, and city heating gas are billed separately based on your personal meter.",
      zh: "在大学城周边的 <strong>One-room 单间</strong>，管理费（通常 3万~6万韩元）大多已包含公区保洁、水费及楼栋公用宽带 Wi-Fi；而在现代化 <strong>Officetel</strong>，基础管理费（10万~20万韩元）通常仅涵盖保安巡视、电梯维保和公摊电费，个人的水费、电费和地暖燃气费每月按独立水电气表另行缴费。",
      ko: "일반 대학가 <strong>원룸</strong>의 경우, 관리비(약 3만~6만 원)에 복도 청소, 건물 수도세, 건물 공동 인터넷/Wi-Fi가 포함된 경우가 많습니다. 반면 <strong>오피스텔</strong>은 관리비(10만~20만 원 이상)에 24시간 경비 인건비와 엘리베이터 유지비, 공용 전기가 주로 포함되며, 개별 세대의 수도세, 전기세, 난방 도시가스는 사용량 계량기에 따라 매달 별도로 고지됩니다.",
      ja: "一般的な学生向け<strong>ワンルーム</strong>の場合、管理費（月3万〜6万ウォン程度）に共用部の清掃、水道代、インターネット/Wi-Fi代が含まれているケースが多いです。一方、<strong>オフィステル</strong>の管理費（月10万〜20万ウォン以上）は24時間警備員の人件費やエレベーター保守費が主であり、各部屋の水道代・電気代・オンドル用都市ガス代は毎月のメーター検針に応じて別途実費請求されます。"
    }
  },
  {
    q: {
      en: "How do I protect myself from 'Can-Jeonse' (깡통전세) and deposit fraud?",
      zh: "如何防范‘空罐全租’（깡통전세）与押金无法退还的诈骗风险？",
      ko: "깡통전세 사기나 보증금 미반환 사고를 예방하려면 어떤 점을 가장 먼저 확인해야 하나요?",
      ja: "「カンチョンセ（空き缶伝税）詐欺」や保証金未返還トラブルを防ぐには何を一番に確認すべきですか？"
    },
    a: {
      en: "1) Always pull a certified Real Estate Register (등기부등본) on the morning of contract signing. <br>2) Ensure the bank account owner receiving the deposit matches the registered owner in section Gap-gu (갑구) 100%. <br>3) Never accept private unauthorized subleasing (전대차). <br>4) Get your Fixed Date on day 1.",
      zh: "1) 签约与入住当天，必须要求中介当场重新打印最新的《不动产登记簿（등기부등본）》；<br>2) 仔细核实甲区（갑구）产权人姓名与你转账收款的银行账户名 100% 一致；<br>3) 坚决不参与任何未经大房东书面签字的二手转租（전대차）；<br>4) 入住当天立即前往居民中心加盖确定日字。",
      ko: "1) 계약서 작성 당일 및 잔금 입금 직전, 공인중개사에게 당일 열람된 최신 <strong>등기부등본</strong> 출력을 요구하세요.<br>2) 등기부등본 갑구의 소유자 명의와 보증금을 이체하는 은행 통장 예금주가 100% 일치해야 합니다.<br>3) 등기부 을구의 근저당권 채권최고액과 건물 전체 세입자 보증금 합이 시세의 70%를 넘지 않아야 합니다.<br>4) 집주인 동의 없는 개인 간 무단 전대차(지인 양도)를 피하고 입주 당일 확정일자를 받으세요.",
      ja: "1) 契約日および残金振込当日の朝に発行された最新の<strong>登記簿謄本（등기부등본）</strong>の提示を不動産屋に求めましょう。<br>2) 登記簿謄本の甲区（所有者）の名前と、保証金を振り込む受取人口座名義が100%一致しているか照合します。<br>3) 乙区の抵当権融資額＋全入居者の保証金総額が物件価格の70%を超える物件は避けましょう。<br>4) 個人間の無断転貸（サブリース）は避け、入居初日に必ず確定日付を取得してください。"
    }
  },
  {
    q: {
      en: "How much is the standard real estate agent commission in Korea?",
      zh: "在韩国租房，正规房产中介费（복비）的法定收费标准是多少？",
      ko: "한국에서 부동산 공인중개사에게 지불해야 하는 법정 중개수수료(복비) 기준은 어떻게 되나요?",
      ja: "韓国で正規の不動産仲介業者（不動産屋）に支払う法定仲介手数料の基準はいくらですか？"
    },
    a: {
      en: "Brokerage commission in Korea is strictly capped by the Ministry of Land, Infrastructure and Transport. For rentals under 50M KRW in converted value [Deposit + (Rent × 70 or 100)], the maximum cap is 200,000 KRW. For 50M to 100M KRW, the cap is 300,000 KRW. Use our built-in calculator above to see your exact statutory rate!",
      zh: "韩国不动产中介费受国土交通部严格限额管控。住宅租赁按‘换算交易基数’核算：折算额在 5000 万韩元以下最高封顶 20 万韩元；5000万~1亿韩元最高封顶 30 万韩元。你可以直接使用本站上方的费用计算器查看你所租房屋的法定中介费上限！",
      ko: "한국의 주택 임대차 중개보수는 국토교통부 법정 요율 상한이 법적으로 정해져 있습니다. 월세 환산금액[보증금 + (월세 × 100 또는 70)] 기준 5,000만 원 미만은 최대 20만 원, 5,000만~1억 원 미만은 최대 30만 원으로 상한선이 정해져 있습니다. 본 사이트 상단의 계산기를 통해 내 조건의 정확한 법정 중개수수료를 즉시 계산해 볼 수 있습니다.",
      ja: "韓国の住宅賃貸の仲介手数料は、国土交通省の法令により上限が厳格に定められています。家賃の換算取引額［保証金 ＋（家賃 × 100または70）］が5,000万ウォン未満なら上限20万ウォン、5,000万〜1億ウォン未満なら上限30万ウォンと決まっています。当サイト上部の計算機で瞬時に法定手数料をシミュレーションできます。"
    }
  },
  {
    q: {
      en: "Can I negotiate the deposit or monthly rent with the landlord?",
      zh: "可以和韩国房东协商调整押金金额或砍房租吗？",
      ko: "집주인과 보증금을 올리고 월세를 깎거나, 월세 가격 자체를 협상하는 것이 가능한가요?",
      ja: "家主と保証金の金額を増やして家賃を下げたり、家賃の値下げ交渉をすることは可能ですか？"
    },
    a: {
      en: "<strong>Yes!</strong> In Korea, the conversion convention (전월세 전환율) allows you to negotiate: offering an extra 10,000,000 KRW in deposit typically discounts monthly rent by 40,000 to 50,000 KRW/month. If moving in immediately or signing a 2-year lease, landlords are often willing to lower rent by 20,000~50,000 KRW.",
      zh: "<strong>完全可以！</strong> 韩国存在‘全月税换算率’惯例：如果你能多提供 1000 万韩元押金，通常可以换取每月房租减免 4万~5万韩元。此外，如果能够迅速入住或同意签订 2 年长约，房东通常也愿意在月租上让步 2万~5万韩元。",
      ko: "<strong>네, 충분히 가능합니다.</strong> 한국에는 '전월세 전환율'이라는 문화적 관례가 있어, 보증금을 1,000만 원 올리면 매월 내는 월세를 약 4만~5만 원 할인해 주는 협상이 널리 통용됩니다. 또한 공실 기간을 줄여 바로 입주할 수 있거나 2년 장기 계약을 제안하면 월세 2만~5만 원 할인을 수락하는 임대인이 많습니다.",
      ja: "<strong>はい、十分に可能です。</strong> 韓国には「チョンウォルセ転換率」という慣習があり、保証金を1,000万ウォン上乗せして預けることで、毎月の家賃を約4万〜5万ウォン値引きしてもらう交渉が広く行われています。また即時入居や2年契約を条件に家賃自体の値下げに応じてくれる家主も少なくありません。"
    }
  },
  {
    q: {
      en: "What should I do if the landlord delays or refuses to return my deposit upon moving out?",
      zh: "租约到期准备退房时，若房东故意拖延或找借口扣除押金该如何维权？",
      ko: "계약 만기가 다 되었는데 집주인이 다음 세입자가 안 들어왔다며 보증금 반환을 미루면 어떻게 대처해야 하나요?",
      ja: "契約満了で退去する際、家主が「次の入居者が決まらない」などの理由で保証金の返還を引き延ばしたらどう対処すべきですか？"
    },
    a: {
      en: "1) Give written notice at least 2 months prior to lease expiration via KakaoTalk or registered mail. <br>2) If the landlord delays returning the deposit, file an <strong>Imcha-gwon Deung-gi Myeong-ryeong (임차권등기명령 - Leasehold Registration Order)</strong> before moving out. This places a public freeze on the property's title, compelling the landlord to pay interest.",
      zh: "1) 务必在租约期满前至少 2 个月通过 KakaoTalk、短信等可留存凭证的方式书面通知房东到期不续约；<br>2) 若退租时房东拖延付款，千万不要直接迁出户籍！应立即向管辖法院申请<strong>‘租聘权登记命令（임차권등기명령）’</strong>，该登记将被公开记录在房屋登记簿上使其无法出租出售，并依法向房东主张延迟利息。",
      ko: "1) 만기일 최소 2개월 전, 카카오톡이나 문자메시지, 내용증명 등으로 반드시 계약 만료 및 퇴거 의사를 서면 통지해 증거를 남겨야 합니다.<br>2) 만기일이 지났음에도 보증금을 돌려주지 않을 경우 절대로 짐을 다 빼거나 주소를 다른 곳으로 전출하지 마세요. 관할 법원에 <strong>'임차권등기명령(賃借權登記命令)'</strong>을 신청해야 대항력과 우선변제권을 유지하면서 연체이자(법정 연 12%)를 청구할 수 있습니다.",
      ja: "1) 契約満了の少なくとも2ヶ月前までに、カカオトークやSMS、内容証明など証拠が残る形で契約解除と退去の意思を書面通知します。<br>2) 満了日になっても返還されない場合、絶対に住民票を抜いて引っ越してはいけません。管轄裁判所に<strong>「賃借権登記命令（임차권등기명령）」</strong>を申し立てることで、別の場所に転入した後も優先弁済権を維持し、遅延損害金を請求することができます。"
    }
  }
];

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  initLanguage();
  initCalculator();
  initArticleFilters();
  initArticlesGrid();
  initFaqAccordion();
  initMobileMenu();
  lucide.createIcons();
});

// Switch language among en, zh, ko, ja
function setLanguage(lang) {
  if (!SUPPORTED_LANGS.includes(lang)) lang = "ko";
  appState.lang = lang;
  localStorage.setItem("living_korea_lang", lang);
  updateStaticTexts();
  updateCalculatorUI();
  initArticlesGrid();
  initFaqAccordion();
  if (appState.activeArticle) {
    renderArticleModal(appState.activeArticle);
  }
  lucide.createIcons();
}

const LANG_CONFIG = {
  ko: { label: "한국어", flag: "🇰🇷" },
  en: { label: "English", flag: "🇺🇸" },
  zh: { label: "中文", flag: "🇨🇳" },
  ja: { label: "日本語", flag: "🇯🇵" }
};

function initLanguage() {
  const currentLang = appState.lang;
  updateLanguageDropdownLabels(currentLang);

  // Desktop dropdown listener
  document.querySelectorAll(".lang-select-option").forEach(item => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const targetLang = item.getAttribute("data-lang");
      setLanguage(targetLang);
      updateLanguageDropdownLabels(targetLang);
      closeLanguageDropdown();
    });
  });

  // Toggle button click to open/close popover dropdown
  const langDropdownBtn = document.getElementById("langDropdownBtn");
  const langDropdownMenu = document.getElementById("langDropdownMenu");
  if (langDropdownBtn && langDropdownMenu) {
    langDropdownBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      langDropdownMenu.classList.toggle("hidden");
    });
    document.addEventListener("click", () => {
      closeLanguageDropdown();
    });
  }

  // Mobile language select
  const mobileLangSelect = document.getElementById("mobileLangSelect");
  if (mobileLangSelect) {
    mobileLangSelect.value = currentLang;
    mobileLangSelect.addEventListener("change", (e) => {
      setLanguage(e.target.value);
      updateLanguageDropdownLabels(e.target.value);
    });
  }

  updateStaticTexts();
}

function closeLanguageDropdown() {
  const langDropdownMenu = document.getElementById("langDropdownMenu");
  if (langDropdownMenu) langDropdownMenu.classList.add("hidden");
}

function updateLanguageDropdownLabels(lang) {
  const cfg = LANG_CONFIG[lang] || LANG_CONFIG.ko;
  const desktopLabel = document.getElementById("currentLangLabel");
  const desktopFlag = document.getElementById("currentLangFlag");
  if (desktopLabel) desktopLabel.textContent = cfg.label;
  if (desktopFlag) desktopFlag.textContent = cfg.flag;

  const mobileLangSelect = document.getElementById("mobileLangSelect");
  if (mobileLangSelect) mobileLangSelect.value = lang;
}

function updateStaticTexts() {
  const t = window.translations[appState.lang];
  if (!t) return;

  // Update elements with data-i18n
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t[key]) {
      el.innerHTML = t[key];
    }
  });

  // Update placeholder attributes
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (t[key]) {
      el.setAttribute("placeholder", t[key]);
    }
  });
}

// ----------------------------------------------------
// Rental Cost Calculator Integration
// ----------------------------------------------------
function initCalculator() {
  const depositRange = document.getElementById("calcDepositRange");
  const depositNumber = document.getElementById("calcDepositNumber");
  const rentRange = document.getElementById("calcRentRange");
  const rentNumber = document.getElementById("calcRentNumber");
  const maintRange = document.getElementById("calcMaintRange");
  const maintNumber = document.getElementById("calcMaintNumber");

  syncInputAndSlider(depositRange, depositNumber, val => {
    window.calculator.state.deposit = val;
    updateCalculatorUI();
  });

  syncInputAndSlider(rentRange, rentNumber, val => {
    window.calculator.state.rent = val;
    updateCalculatorUI();
  });

  syncInputAndSlider(maintRange, maintNumber, val => {
    window.calculator.state.maintenance = val;
    updateCalculatorUI();
  });

  // Presets
  document.querySelectorAll(".calc-preset-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const presetType = btn.getAttribute("data-preset");
      window.calculator.applyPreset(presetType);
      
      if (depositRange) depositRange.value = window.calculator.state.deposit;
      if (depositNumber) depositNumber.value = window.calculator.state.deposit;
      if (rentRange) rentRange.value = window.calculator.state.rent;
      if (rentNumber) rentNumber.value = window.calculator.state.rent;
      if (maintRange) maintRange.value = window.calculator.state.maintenance;
      if (maintNumber) maintNumber.value = window.calculator.state.maintenance;

      document.querySelectorAll(".util-checkbox").forEach(cb => {
        const utilKey = cb.getAttribute("data-util");
        cb.checked = !!window.calculator.state.utilities[utilKey];
      });

      document.querySelectorAll(".calc-preset-btn").forEach(b => {
        b.classList.remove("ring-2", "ring-emerald-600", "bg-emerald-50", "border-emerald-500", "text-emerald-900");
      });
      btn.classList.add("ring-2", "ring-emerald-600", "bg-emerald-50", "border-emerald-500", "text-emerald-900");

      updateCalculatorUI();
    });
  });

  // Utilities checkboxes
  document.querySelectorAll(".util-checkbox").forEach(cb => {
    cb.addEventListener("change", () => {
      const utilKey = cb.getAttribute("data-util");
      window.calculator.state.utilities[utilKey] = cb.checked;
      updateCalculatorUI();
    });
  });

  // Realtor Fee toggle
  const realtorModeAuto = document.getElementById("realtorModeAuto");
  const realtorModeManual = document.getElementById("realtorModeManual");
  const manualRealtorFeeInput = document.getElementById("manualRealtorFeeInput");

  if (realtorModeAuto && realtorModeManual) {
    realtorModeAuto.addEventListener("change", () => {
      window.calculator.state.realtorFeeMode = "auto";
      if (manualRealtorFeeInput) manualRealtorFeeInput.disabled = true;
      updateCalculatorUI();
    });
    realtorModeManual.addEventListener("change", () => {
      window.calculator.state.realtorFeeMode = "manual";
      if (manualRealtorFeeInput) {
        manualRealtorFeeInput.disabled = false;
        window.calculator.state.manualRealtorFee = Number(manualRealtorFeeInput.value) || 0;
      }
      updateCalculatorUI();
    });
  }

  if (manualRealtorFeeInput) {
    manualRealtorFeeInput.addEventListener("input", (e) => {
      window.calculator.state.manualRealtorFee = Number(e.target.value) || 0;
      updateCalculatorUI();
    });
  }

  updateCalculatorUI();
}

function syncInputAndSlider(slider, numberInput, onChange) {
  if (!slider || !numberInput) return;
  slider.addEventListener("input", (e) => {
    const val = Number(e.target.value);
    numberInput.value = val;
    onChange(val);
  });
  numberInput.addEventListener("input", (e) => {
    const val = Number(e.target.value);
    slider.value = val;
    onChange(val);
  });
}

function updateCalculatorUI() {
  const result = window.calculator.computeRentalCosts();

  // Primary numbers
  const outMoveIn = document.getElementById("outTotalMoveIn");
  const outMonthly = document.getElementById("outTrueMonthly");
  if (outMoveIn) outMoveIn.textContent = window.calculator.formatKRW(result.totalMoveIn);
  if (outMonthly) outMonthly.textContent = window.calculator.formatKRW(result.trueMonthly);

  // Sub-currency tags (USD, CNY, JPY)
  const outMoveInCurrencies = document.getElementById("outMoveInCurrencies");
  const outMonthlyCurrencies = document.getElementById("outMonthlyCurrencies");
  if (outMoveInCurrencies) {
    outMoveInCurrencies.textContent = `≈ ${window.calculator.formatUSD(result.currencyEstimates.moveInUSD)} · ≈ ${window.calculator.formatCNY(result.currencyEstimates.moveInCNY)} · ≈ ${window.calculator.formatJPY(result.currencyEstimates.moveInJPY)}`;
  }
  if (outMonthlyCurrencies) {
    outMonthlyCurrencies.textContent = `≈ ${window.calculator.formatUSD(result.currencyEstimates.monthlyUSD)} · ≈ ${window.calculator.formatCNY(result.currencyEstimates.monthlyCNY)} · ≈ ${window.calculator.formatJPY(result.currencyEstimates.monthlyJPY)}`;
  }

  // Breakdown values
  setElementText("outDepositItem", window.calculator.formatKRW(result.deposit));
  setElementText("outDepositCurrency", `(≈ ${window.calculator.formatUSD(result.currencyEstimates.depositUSD)} / ${window.calculator.formatCNY(result.currencyEstimates.depositCNY)} / ${window.calculator.formatJPY(result.currencyEstimates.depositJPY)})`);
  setElementText("outFirstRentItem", window.calculator.formatKRW(result.rent));
  setElementText("outFirstMaintItem", window.calculator.formatKRW(result.maintenance));
  setElementText("outRealtorFeeItem", window.calculator.formatKRW(result.effectiveRealtorFee));
  setElementText("outRealtorDetails", `${result.statutory.ratePercent} rate, converted value ${window.calculator.formatKRW(result.statutory.convertedAmount)}`);
  setElementText("outSetupBufferItem", window.calculator.formatKRW(result.setupBuffer));

  // Monthly breakdown values
  setElementText("outBaseRentItem", window.calculator.formatKRW(result.rent));
  setElementText("outBaseMaintItem", window.calculator.formatKRW(result.maintenance));
  setElementText("outExtraUtilsItem", window.calculator.formatKRW(result.estimatedExtraUtilities));

  // Update visual progress proportions
  const total = result.totalMoveIn || 1;
  const depPct = Math.round((result.deposit / total) * 100);
  const rentPct = Math.round((result.rent / total) * 100);
  const otherPct = 100 - depPct - rentPct;

  const barDeposit = document.getElementById("barDeposit");
  const barRent = document.getElementById("barRent");
  const barOther = document.getElementById("barOther");
  if (barDeposit) barDeposit.style.width = `${depPct}%`;
  if (barRent) barRent.style.width = `${rentPct}%`;
  if (barOther) barOther.style.width = `${Math.max(0, otherPct)}%`;
}

function setElementText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

// ----------------------------------------------------
// Rental Guides Filter & Grid
// ----------------------------------------------------
function initArticleFilters() {
  document.querySelectorAll(".guide-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".guide-tab-btn").forEach(b => {
        b.classList.remove("bg-slate-900", "text-white");
        b.classList.add("bg-white", "text-slate-600", "hover:bg-slate-100");
      });
      btn.classList.add("bg-slate-900", "text-white");
      btn.classList.remove("bg-white", "text-slate-600", "hover:bg-slate-100");

      appState.currentCategory = btn.getAttribute("data-category");
      initArticlesGrid();
    });
  });

  const searchInput = document.getElementById("guideSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      appState.searchQuery = e.target.value.toLowerCase().trim();
      initArticlesGrid();
    });
  }
}

function initArticlesGrid() {
  const grid = document.getElementById("articlesGrid");
  if (!grid) return;

  const currentLang = appState.lang;
  const filtered = window.articlesData.filter(article => {
    const matchesCategory = appState.currentCategory === "all" || article.category === appState.currentCategory;
    if (!matchesCategory) return false;

    if (!appState.searchQuery) return true;
    const q = appState.searchQuery;
    const title = (article.title[currentLang] || article.title.ko || article.title.en).toLowerCase();
    const excerpt = (article.excerpt[currentLang] || article.excerpt.ko || article.excerpt.en).toLowerCase();
    const tags = article.tags.join(" ").toLowerCase();
    return title.includes(q) || excerpt.includes(q) || tags.includes(q);
  });

  if (filtered.length === 0) {
    const noResultsText = {
      en: "No rental guides found matching your search.",
      zh: "未找到匹配该关键词的租房攻略。",
      ko: "검색 조건에 맞는 가이드 아티클이 없습니다.",
      ja: "検索条件に一致する賃貸ガイドが見つかりませんでした。"
    }[currentLang] || "No guides found.";

    grid.innerHTML = `
      <div class="col-span-full py-16 text-center text-slate-500">
        <i data-lucide="search-x" class="w-12 h-12 mx-auto text-slate-300 mb-3"></i>
        <p class="text-lg font-medium">${noResultsText}</p>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  grid.innerHTML = filtered.map(article => {
    const title = article.title[currentLang] || article.title.ko || article.title.en;
    const excerpt = article.excerpt[currentLang] || article.excerpt.ko || article.excerpt.en;
    const readTimeText = `${article.readTime} ${window.translations[currentLang].readTime}`;

    return `
      <div class="group relative flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-slate-300 transition-all duration-300">
        <div class="h-44 bg-gradient-to-br ${article.accentColor} p-6 flex flex-col justify-between text-white relative overflow-hidden">
          <div class="absolute -right-6 -bottom-6 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none"></div>
          <div class="flex items-center justify-between z-10">
            <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md uppercase tracking-wide">
              ${article.category}
            </span>
            <span class="text-xs flex items-center space-x-1 opacity-90">
              <i data-lucide="clock" class="w-3.5 h-3.5 inline"></i>
              <span>${readTimeText}</span>
            </span>
          </div>
          <div class="z-10">
            <p class="text-xs text-white/80 font-medium">${article.publishDate} · ${article.author.name}</p>
          </div>
        </div>

        <div class="p-6 flex-1 flex flex-col justify-between">
          <div>
            <div class="flex flex-wrap gap-1.5 mb-3">
              ${article.tags.slice(0, 3).map(tag => `
                <span class="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                  #${tag}
                </span>
              `).join("")}
            </div>
            <h3 class="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-2 mb-2">
              ${title}
            </h3>
            <p class="text-sm text-slate-600 line-clamp-3 mb-4 leading-relaxed">
              ${excerpt}
            </p>
          </div>

          <button 
            onclick="openArticleModal('${article.id}')"
            class="inline-flex items-center justify-between w-full pt-4 border-t border-slate-100 text-sm font-semibold text-emerald-800 hover:text-emerald-950 transition-colors">
            <span>${window.translations[currentLang].btnReadArticle}</span>
            <i data-lucide="arrow-right" class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"></i>
          </button>
        </div>
      </div>
    `;
  }).join("");

  lucide.createIcons();
}

// ----------------------------------------------------
// Article Reader Modal
// ----------------------------------------------------
function openArticleModal(articleId) {
  const article = window.articlesData.find(a => a.id === articleId);
  if (!article) return;

  appState.activeArticle = article;
  renderArticleModal(article);

  const modal = document.getElementById("articleModal");
  if (modal) {
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }
  lucide.createIcons();
}

function closeArticleModal() {
  appState.activeArticle = null;
  const modal = document.getElementById("articleModal");
  if (modal) {
    modal.classList.add("hidden");
    document.body.style.overflow = "";
  }
}

function renderArticleModal(article) {
  const modalContent = document.getElementById("articleModalBody");
  if (!modalContent) return;

  const currentLang = appState.lang;
  const title = article.title[currentLang] || article.title.ko || article.title.en;
  const content = article.content[currentLang] || article.content.ko || article.content.en;
  const t = window.translations[currentLang];

  modalContent.innerHTML = `
    <div class="sticky top-0 z-20 flex items-center justify-between bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-200">
      <div class="flex items-center space-x-2 text-sm text-slate-500">
        <span class="uppercase font-semibold tracking-wider text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-700">${article.category}</span>
        <span>·</span>
        <span>${article.publishDate}</span>
      </div>
      <button 
        onclick="closeArticleModal()"
        class="p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors"
        aria-label="Close modal">
        <i data-lucide="x" class="w-5 h-5"></i>
      </button>
    </div>

    <div class="p-6 md:p-10 max-w-4xl mx-auto">
      <h1 class="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
        ${title}
      </h1>

      <div class="flex items-center space-x-4 pb-6 border-b border-slate-200 text-sm text-slate-600">
        <div class="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
          ${article.author.name.charAt(0)}
        </div>
        <div>
          <p class="font-semibold text-slate-800">${article.author.name}</p>
          <p class="text-xs text-slate-500">${article.author.role}</p>
        </div>
      </div>

      <!-- Article Rich Body Content -->
      <div class="article-body-content text-slate-700 leading-relaxed space-y-6">
        ${content}
      </div>

      <!-- Next Action CTA -->
      <div class="mt-10 p-6 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 class="text-lg font-bold">${t.calcTitle}</h4>
          <p class="text-sm text-slate-300 mt-1">${t.calcSubtitle}</p>
        </div>
        <div class="flex items-center space-x-3">
          <button 
            onclick="closeArticleModal(); document.getElementById('calculator').scrollIntoView({behavior: 'smooth'})"
            class="whitespace-nowrap px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-colors shadow-lg">
            ${t.btnHeroCalculator}
          </button>
          <button 
            onclick="closeArticleModal()"
            class="whitespace-nowrap px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm transition-colors">
            ${t.btnBackToGuides}
          </button>
        </div>
      </div>
    </div>
  `;
}

// ----------------------------------------------------
// FAQ Accordion
// ----------------------------------------------------
function initFaqAccordion() {
  const container = document.getElementById("faqContainer");
  if (!container) return;

  const currentLang = appState.lang;

  container.innerHTML = faqData.map((item, idx) => {
    const q = item.q[currentLang] || item.q.ko || item.q.en;
    const a = item.a[currentLang] || item.a.ko || item.a.en;
    const isOpen = appState.activeFaqIndex === idx;

    return `
      <div class="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200 ${isOpen ? 'ring-2 ring-emerald-600 bg-white shadow-md' : 'bg-white hover:border-slate-300'}">
        <button 
          onclick="toggleFaq(${idx})"
          class="w-full px-6 py-5 text-left flex items-center justify-between space-x-4 focus:outline-none">
          <span class="font-bold text-slate-900 text-base md:text-lg flex-1">
            ${q}
          </span>
          <span class="p-2 rounded-full ${isOpen ? 'bg-emerald-100 text-emerald-800 rotate-180' : 'bg-slate-100 text-slate-500'} transition-transform duration-200">
            <i data-lucide="chevron-down" class="w-5 h-5"></i>
          </span>
        </button>
        <div class="px-6 pb-6 text-slate-600 text-sm md:text-base leading-relaxed ${isOpen ? 'block' : 'hidden'}">
          <div class="pt-2 border-t border-slate-100">
            ${a}
          </div>
        </div>
      </div>
    `;
  }).join("");

  lucide.createIcons();
}

function toggleFaq(index) {
  if (appState.activeFaqIndex === index) {
    appState.activeFaqIndex = null;
  } else {
    appState.activeFaqIndex = index;
  }
  initFaqAccordion();
}

// ----------------------------------------------------
// Mobile Menu Drawer
// ----------------------------------------------------
function initMobileMenu() {
  const openBtn = document.getElementById("mobileMenuOpenBtn");
  const closeBtn = document.getElementById("mobileMenuCloseBtn");
  const drawer = document.getElementById("mobileMenuDrawer");

  if (openBtn && drawer) {
    openBtn.addEventListener("click", () => {
      drawer.classList.remove("hidden");
    });
  }
  if (closeBtn && drawer) {
    closeBtn.addEventListener("click", () => {
      drawer.classList.add("hidden");
    });
  }

  document.querySelectorAll(".mobile-nav-link").forEach(link => {
    link.addEventListener("click", () => {
      if (drawer) drawer.classList.add("hidden");
    });
  });
}

// Expose functions globally
window.setLanguage = setLanguage;
window.openArticleModal = openArticleModal;
window.closeArticleModal = closeArticleModal;
window.toggleFaq = toggleFaq;
