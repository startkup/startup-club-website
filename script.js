/**
 * STARTKUP 淡江新創社 - 官方網頁行為腳本 (script.js)
 * 
 * 專為網頁初學者設計：
 * - 結構、樣式與行為完全分離 (無 HTML 內嵌 script)
 * - 採用極簡、好懂的 Vanilla JS (純原生 JavaScript)
 * - 附有超級詳盡的繁體中文註解，方便您了解每一行程式碼的功用！
 */

// 1. 定義工作職掌與未來出路資料庫
// 使用 JavaScript 的「物件 (Object)」格式，將各部門的詳細資料集中管理，方便未來隨時新增或修改內容。
const departmentDuties = {
    decision: {
        title: "【社長部】 工作職掌 (Department of the President)",
        tag: "決策核心 / 社長 & 副社長 / 願景與傳承",
        icon: "👥",
        list: [
            "幹部凝聚力：主導期初、期末幹部聚餐與交流大會，定期關心核心幹部之心理狀態與留任率。",
            "幹部福利規劃：爭取與發放幹部專屬福利（如：優先對接業界校友資源、商業競賽報名費補助、專屬社服、官方幹部證書等）。",
            "日常會議代理：由副社長站在第一線，全權主持每週的日常幹部籌備會議，並橫向督導、協調其餘四大部門之進度。"
        ],
        career: [
            "企業執行長 / 總經理 (CEO / GM)：提早修煉跨部門協調、百人團隊統籌與年度戰略佈局能力。",
            "創辦人 / 共同創辦人 (Founder / Co-Founder)：具備從零到一打造組織、資金控管與品牌建立的完整創業家思維。"
        ]
    },
    operations: {
        title: "【營運部】 工作職掌 (Department of Operations)",
        tag: "行政樞紐 / 財務與後勤保障",
        icon: "📈",
        list: [
            "行政與簽呈流程：全權負責學校課外活動組之所有行政簽呈提交、核銷與期末社團評鑑資料整理。",
            "財務與金流控管：嚴格控管社團所有經費、編列學期收支預算表、負責日常金流登錄與定期財務公告。",
            "場地與器材借用：負責社團所有社課、活動之場地租借、器材調配與資產盤點保管。"
        ],
        career: [
            "財務經理 / 財務分析師 (CFO / Financial Analyst)：掌握企業級的預算編列、經費核銷與資產配置邏輯。",
            "營運總監 / 行政主管 (COO / Operations Manager)：精通大型組織的後勤調度、危機處理與合規化行政管理。"
        ]
    },
    marketing: {
        title: "【行銷部】 工作職掌 (Department of Marketing)",
        tag: "品牌傳播 / 招生與社群營運",
        icon: "📣",
        list: [
            "STARTKUP 品牌推廣：主導社團整體視覺風格建立、官方 Logo 與文宣的品牌形象維護。",
            "招生行銷活動：策劃每學期招生宣傳活動、線下擺攤流程與招生活動曝光。",
            "官方社群平台經營：負責 STARTKUP 官方社群（如 IG、FB）之貼文規劃、爆款文案撰寫與日常粉絲互動。"
        ],
        career: [
            "品牌行銷經理 / 數位行銷專家 (Brand / Digital Marketing Manager)：具備數據導向的招生策略、社群受眾心理學與爆款文案操盤力。",
            "社群營運總監 / 視覺創意總監 (Community Operations / Creative Director)：精通跨平台社群矩陣佈局、受眾裂變增長與視覺美學統籌。"
        ]
    },
    competition: {
        title: "【專案競賽部】 工作職掌 (Department of Project & Competition)",
        tag: "創新孵化 / 競賽與人才實戰",
        icon: "🏆",
        list: [
            "核心人才招募培育：負責規劃社團核心價值產出，透過「以課招人、以賽育人」模式招募並培育校內創新創業戰隊。",
            "企劃書撰寫：主導舉辦輕鬆、創新的創業競賽招募交流會 (Coffee Chat)，打破傳統說明會框架，精準吸引校內具備新創抱負的跨域人才，並在現場協助社員完成下學期競賽的初步媒合與組隊。",
            "活動籌劃：全權籌備一場大型「校內/跨校創新創業提案競賽」（如黑客松或 Demo Day），包含業界明星講師與評審邀約、關鍵活動場地佈局、專業科技器材租借與調度，實質孵化並直接招募校內優秀的新創戰隊。"
        ],
        career: [
            "產品經理 / 專案經理 (Product Manager / Project Manager, PM)：完美掌握敏捷開發、時程控管、跨部門溝通與產品從零到一的孵化流程。",
            "大型活動策劃師 / 策展人 (Event Planner / Curator)：具備主導百人跨校論壇、新創黑客松、Demo Day 的全案策劃與現場執行力。"
        ]
    },
    hr_ai: {
        title: "【人資與 AI 部】 工作職掌 (Department of HR & AI)",
        tag: "科技賦能 / 人才培訓與自動化",
        icon: "🧠",
        list: [
            "核心人才斷層矛盾解決：建立社員與幹部的「潛力人才庫」，全程追蹤並記錄部員在擔任活動 PM、參與 Coffee Chat 媒合時的實戰表現與留任率。",
            "行政與表單自動化：開發與導入 AI 結合自動化工作流（如自動化簽到、認證證書與自主學習時數自動產出），將社團繁瑣行政庶務降到最低。",
            "幹部考核與意願摸底：負責進行期末幹部滿意度調查、下屆接班意願諮詢，為社長部提供精準、無斷層的接班梯隊評估。"
        ],
        career: [
            "人資經理 / 科技獵頭 (HR Manager / Tech Headhunter)：精通現代企業最看重的「數據化人資管理 (HR Analytics)」、績效考核評估與高效人才招募漏斗。",
            "AI 應用專家 / 數位轉型顧問 (AI Application Specialist / Digital Transformation Consultant)：具備幫組織導入 AI 工具、優化行政效率、建構自動化工作流的頂尖數位轉型實戰經驗。"
        ]
    },
    pm_team: {
        title: "【各活動專案執行小組】 工作職掌 (Project Management Team)",
        tag: "專案經理 PM / 實戰操盤手",
        icon: "🚀",
        list: [
            "PM 實習機制落地：由各部部員輪流出任專案經理（PM），直接操盤社團的 Coffee Chat、聯合課程或大型競賽。",
            "從零到一專案實操：負責專案活動的策劃、預算、時程控管、跨部人力調配與現場落地執行。",
            "跨領域團隊協作：溝通協調各部門資源，領導部員完成專案目標，實戰鍛鍊專案管理與團隊領導力。",
            "專案結案與覆盤：活動結束後主導覆盤會議，產出結構化的結案報告與交接資料，持續累積社團知識庫。"
        ],
        career: [
            "專案經理 / 專案主管 (Project Manager / PM Lead)：在大型活動中擔任 PM 實際歷練，累積時程控管與跨部人力協調能力。",
            "產品運營專家 / 敏捷教練 (Product Operations Specialist / Agile Coach)：精通專案實作覆盤、敏捷協作與高效行政流程優化。"
        ]
    }
};

// 2. 當網頁完全載入後，才開始執行 JavaScript 邏輯
// 'DOMContentLoaded' 是瀏覽器的標準事件，意思是「HTML 結構已經解析完畢，可以安全操作網頁元素了！」
document.addEventListener("DOMContentLoaded", () => {
    
    // 取得 HTML 中需要被動態修改的網頁元素 (DOM 節點)
    const deptCards = document.querySelectorAll(".dept-card");          // 所有部門卡片
    const dutiesSection = document.getElementById("duties");             // 工作職掌彈出視窗 (Modal 外層遮罩)
    const dutiesPanel = document.getElementById("duties-panel");         // 工作職掌的整張展示看板
    const detailIcon = document.getElementById("dept-detail-icon");      // 看板中的大圖示
    const detailTitle = document.getElementById("dept-detail-title");    // 看板中的主標題
    const detailTag = document.getElementById("dept-detail-tag");        // 看板中的副標題/標籤
    const detailList = document.getElementById("dept-detail-list");      // 看板中的工作職掌列表 ul 容器
    const detailCareer = document.getElementById("dept-detail-career");  // 新增：看板中的未來出路列表 ul 容器
    const modalCloseBtn = document.getElementById("modal-close-btn");    // 彈出視窗關閉按鈕

    // 3. 為每一個部門卡片綁定「點擊事件 (Click Event)」
    // 點擊後會將該部門的資料塞入彈出視窗，並以精美的淡入與縮放動畫展示
    deptCards.forEach(card => {
        card.addEventListener("click", () => {
            
            // A. 取出被點擊卡片所對應的部門 data-dept 屬性值
            const deptKey = card.getAttribute("data-dept");
            const deptData = departmentDuties[deptKey];
            if (!deptData) return;

            // B. 移除其他卡片的 active 狀態，並將「被點擊的卡片」設為 active
            deptCards.forEach(c => c.classList.remove("active"));
            card.classList.add("active");

            // C. 立即更新彈出視窗內的內容，確保彈出時顯示的是正確的資料，毫無延遲與閃爍！
            detailIcon.textContent = deptData.icon;
            detailTitle.textContent = deptData.title;
            detailTag.textContent = deptData.tag;
            
            // 更新主要職責列表
            detailList.innerHTML = "";
            deptData.list.forEach(dutyText => {
                const li = document.createElement("li");
                li.textContent = dutyText;
                detailList.appendChild(li);
            });

            // 更新未來黃金出路列表
            detailCareer.innerHTML = "";
            deptData.career.forEach(careerText => {
                const li = document.createElement("li");
                li.textContent = careerText;
                detailCareer.appendChild(li);
            });

            // D. 顯示彈出視窗！加上「show」類別，觸發 CSS 寫好的磨砂玻璃與卡片縮放淡入動畫
            dutiesSection.classList.add("show");
            
            // 為了防止底層背景頁面在彈出視窗開啟時還能捲動，優化無障礙體驗
            document.body.style.overflow = "hidden";
        });
    });

    // E. 綁定關閉彈出視窗的事件 (點擊 X 號按鈕)
    if (modalCloseBtn) {
        modalCloseBtn.addEventListener("click", () => {
            closeDutiesModal();
        });
    }

    // F. 點選彈出視窗外層遮罩背景 (Modal Overlay) 時，也能自動關閉
    if (dutiesSection) {
        dutiesSection.addEventListener("click", (e) => {
            // 只有當使用者真正點擊到最外層遮罩 (e.target === dutiesSection)，而非卡片內部時才關閉
            if (e.target === dutiesSection) {
                closeDutiesModal();
            }
        });
    }

    // G. 按下鍵盤的 Escape (ESC) 鍵時，同樣可以平滑關閉彈出視窗
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && dutiesSection.classList.contains("show")) {
            closeDutiesModal();
        }
    });

    // 封裝一個關閉 Modal 的輔助函式，維持程式碼乾淨好讀
    function closeDutiesModal() {
        dutiesSection.classList.remove("show");
        document.body.style.overflow = ""; // 還原底層頁面捲動功能
    }

    // 4. 無障礙字體大小縮放控制 (仿台大醫院 A-, A, A+ 模式)
    // 當我們改變網頁根元素 <html> 的 font-size，整個網頁所有以 rem 為單位的字體都會等比例放大或縮小！
    const resizerBtns = document.querySelectorAll(".resizer-btn");
    resizerBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            // A. 清除其他縮放按鈕的 active 狀態，並將當前點擊 the 按鈕設為 active
            resizerBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            // B. 根據點擊按鈕的 id，動態調整網頁根元素 (html) 的 font-size 樣式
            if (btn.id === "btn-font-dec") {
                document.documentElement.style.fontSize = "14px"; // A- 縮小字體為 14px
            } else if (btn.id === "btn-font-normal") {
                document.documentElement.style.fontSize = "16px"; // A 預設字體為 16px
            } else if (btn.id === "btn-font-inc") {
                document.documentElement.style.fontSize = "18px"; // A+ 放大字體為 18px
            }
        });
    });

    // 6. Q&A 常見問題手風琴折疊展開控制
    // 點擊問題時動態計算 scrollHeight 展開，並自動收合其他已展開的問答項目
    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");

        question.addEventListener("click", () => {
            const isActive = item.classList.contains("active");

            // A. 收合其他所有已經開啟的 Q&A 項目
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove("active");
                    otherItem.querySelector(".faq-answer").style.maxHeight = null;
                }
            });

            // B. 切換當前點選項目的開闔狀態
            if (isActive) {
                item.classList.remove("active");
                answer.style.maxHeight = null; // 設定為 null 即套用 CSS 中的 max-height: 0
            } else {
                item.classList.add("active");
                // 動態取得子元素內容的實際像素高度，這能提供不受文字字數限制、100% 精準流暢的 CSS 高度動畫！
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });

    // 6. 常見問題導覽列按鈕平滑滾動
    const faqNavBtn = document.getElementById("nav-faq-btn");
    const faqSection = document.getElementById("faq");
    if (faqNavBtn && faqSection) {
        faqNavBtn.addEventListener("click", (e) => {
            e.preventDefault();
            faqSection.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    }

    // 7. 社團學分導覽列按鈕平滑滾動
    const creditsNavBtn = document.getElementById("nav-credits-btn");
    const creditsSection = document.getElementById("credits");
    if (creditsNavBtn && creditsSection) {
        creditsNavBtn.addEventListener("click", (e) => {
            e.preventDefault();
            creditsSection.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    }

    // 8. 社員定位導覽列按鈕平滑滾動
    const rolesNavBtn = document.getElementById("nav-roles-btn");
    const rolesSection = document.getElementById("roles");
    if (rolesNavBtn && rolesSection) {
        rolesNavBtn.addEventListener("click", (e) => {
            e.preventDefault();
            rolesSection.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    }

    // 9. 社團宗旨與組織架構導覽列按鈕平滑滾動 (補充，使導覽列滾動行為完全一致)
    const aboutNavBtn = document.getElementById("nav-about-btn");
    const aboutSection = document.getElementById("about");
    if (aboutNavBtn && aboutSection) {
        aboutNavBtn.addEventListener("click", (e) => {
            e.preventDefault();
            aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    }

    const structNavBtn = document.getElementById("nav-struct-btn");
    const structSection = document.getElementById("structure");
    if (structNavBtn && structSection) {
        structNavBtn.addEventListener("click", (e) => {
            e.preventDefault();
            structSection.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    }

    // 10. 航空飛機滾動視差穿梭特效
    const airplane = document.getElementById("parallax-airplane");
    let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let planeRotateTimeout = null;

    if (airplane) {
        window.addEventListener("scroll", () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            
            // 計算目前滾動百分比 (0 到 1)
            const scrollPercent = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
            
            // 飛機基礎高度從 20% 漸進到 75%，並搭配 Sin 波形產生氣流起伏波浪感
            const wave = Math.sin(scrollPercent * Math.PI * 4) * 8; // 產生 2 個完整的起伏波浪
            const finalTop = 20 + (scrollPercent * 55) + wave;
            
            // 依據滾動方向，計算飛機的飛行仰角 (Pitch)
            let pitchAngle = 0;
            if (scrollTop > lastScrollTop) {
                pitchAngle = 12; // 向下滾動 (往下飛)
            } else if (scrollTop < lastScrollTop) {
                pitchAngle = -12; // 向上滾動 (往上爬升)
            }
            
            // 更新飛機的位置與傾角
            airplane.style.top = finalTop + "%";
            airplane.style.transform = `rotate(${pitchAngle}deg)`;
            
            // 滾動停止 150ms 後，將飛機仰角平滑復位為 0 度 (水平飛行)
            clearTimeout(planeRotateTimeout);
            planeRotateTimeout = setTimeout(() => {
                airplane.style.transform = "rotate(0deg)";
            }, 150);
            
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // 防止 iOS 橡皮彈簧負值
        });
    }
});
