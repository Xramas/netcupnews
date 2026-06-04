// js/data.js

const siteTranslations = {
    en: {
        disclaimerLabel: "Disclaimer:",
        disclaimerText: "This is an independent fan & deal website. We are NOT affiliated with netcup GmbH.",
        latestDeals: "Latest Deals",
        vpsOffers: "VPS Offers",
        coupons2026: "Coupons 2026",
        officialSite: "Official Site",
        updatedDaily: "Updated Daily",
        heroTitle: "Permanently Affordable <br> <span class='text-netcup-cyan'>VPS & Server Deals</span>",
        heroDesc: "Discover the best discount codes, hidden offers, and independent reviews for Netcup hosting products. Get up to 30% off your next server.",
        viewDeals: "View VPS Deals",
        getPromoCodes: "Get Promo Codes",
        categoryTitle: "Our Server Categories",
        vouchersTitle: "Active Discount Codes",
        voucher1Title: "€ 5 Voucher (New Customers)",
        voucher1Desc: "Valid for all Webhosting, VPS, and Root Servers.",
        monthlyOnly: "monthly only",
        inclVat: "(incl. VAT)",
        detailsBtn: "Details",
        footerDesc: "Your independent source for Netcup hosting news, performance reviews, and exclusive discount codes. Save money on high-quality German engineering.",
        quickLinks: "Quick Links",
        submitCoupon: "Submit a Coupon",
        benchmarks: "Benchmarking Results",
        contactUs: "Contact Us",
        affiliateDisclaimerTitle: "Disclaimer",
        affiliateDisclaimerDesc: "We are a third-party affiliate site. Some links on this website may be affiliate links, meaning we may earn a commission if you make a purchase, at no additional cost to you.",
        rightsReserved: "© 2026 netcupnews.com. All rights reserved.",
        imprint: "Imprint",
        privacyPolicy: "Privacy Policy",
        tabLite: "vServer Lite",
        tabVps: "vServer (VPS)",
        tabArm: "vServer (ARM64)",
        tabRoot: "Root Server",
        
        imprintTitle: "Imprint / Legal Notice",
        imprintContent: `
            <h3 class="text-xl font-bold mt-6 mb-3 text-netcup-dark">Information according to § 5 TMG</h3>
            <p class="mb-4">Zhang Yunlong<br>No. 20 Wenjing Road, Weiyang District<br>Xi'an, Shaanxi<br>China</p>
            <h3 class="text-xl font-bold mt-6 mb-3 text-netcup-dark">Contact</h3>
            <p class="mb-4">Email: contact@netcupnews.com<br>Website: www.netcupnews.com</p>
            <h3 class="text-xl font-bold mt-6 mb-3 text-netcup-dark">Disclaimer regarding Affiliation</h3>
            <p class="mb-4 text-netcup-cyan font-bold">This website is an independent project and is NOT officially affiliated with, endorsed by, or sponsored by netcup GmbH.</p>
            <p class="mb-4">All product names, logos, and brands are property of their respective owners. All company, product and service names used in this website are for identification purposes only. Use of these names, logos, and brands does not imply endorsement.</p>
            <h3 class="text-xl font-bold mt-6 mb-3 text-netcup-dark">Liability for Contents</h3>
            <p class="mb-4">As service providers, we are liable for own contents of these websites according to Sec. 7, paragraph 1 German Telemedia Act (TMG). However, according to Sec. 8 to 10 German Telemedia Act (TMG), service providers are not obligated to permanently monitor submitted or stored information.</p>
        `,
        privacyTitle: "Privacy Policy",
        privacyContent: `
            <h3 class="text-xl font-bold mt-6 mb-3 text-netcup-dark">1. An overview of data protection</h3>
            <p class="mb-4">The operators of this website take the protection of your personal data very seriously. We treat your personal data as confidential and in accordance with the statutory data protection regulations and this privacy policy.</p>
            <h3 class="text-xl font-bold mt-6 mb-3 text-netcup-dark">2. Data collection on our website</h3>
            <p class="mb-4"><strong>Cookies:</strong> Our website uses so-called "cookies" or local storage to save your language preference. These are small text files that do not cause any damage to your device. They are stored temporarily for the duration of a session or permanently on your device.</p>
            <p class="mb-4"><strong>Server log files:</strong> The provider of the pages automatically collects and stores information in so-called server log files, which your browser automatically transmits to us. These are: Browser type and browser version, Operating system used, Referrer URL, Hostname of the accessing computer, Time of the server request, IP address.</p>
            <h3 class="text-xl font-bold mt-6 mb-3 text-netcup-dark">3. Affiliate Links</h3>
            <p class="mb-4">This website contains affiliate links. If you click on an affiliate link and make a purchase, we may receive a commission. This does not change the price for you. We do not track your personal data through these links; tracking is handled by the affiliate partner's platform (e.g., netcup GmbH).</p>
        `,
        benchmarksTitle: "Benchmarking Results",
        benchmarksContent: `
            <div class="text-center py-16">
                <i class="ph-fill ph-hammer text-6xl text-netcup-cyan mb-4 inline-block animate-bounce"></i>
                <h3 class="text-2xl font-bold text-netcup-dark mb-3">Under Construction</h3>
                <p class="text-gray-500 max-w-md mx-auto">We are currently running extensive performance and network routing tests on the latest servers. Check back soon for detailed benchmark data!</p>
            </div>
        `,
        contactTitle: "Contact Us",
        contactContent: `
            <div class="text-center py-16">
                <i class="ph-fill ph-envelope text-6xl text-netcup-cyan mb-4 inline-block"></i>
                <h3 class="text-2xl font-bold text-netcup-dark mb-3">Get in Touch</h3>
                <p class="text-gray-500 mb-8 max-w-md mx-auto">If you have any questions, suggestions, or want to submit a new discount code, feel free to drop us an email.</p>
                <a href="mailto:contact@netcupnews.com" class="inline-flex items-center gap-2 text-xl font-bold text-netcup-dark hover:text-netcup-cyan transition-colors border-b-2 border-netcup-cyan pb-1">
                    <i class="ph-fill ph-paper-plane-tilt"></i> contact@netcupnews.com
                </a>
            </div>
        `,
        
        compareBtn: "Compare",
        compareTitle: "Compare Servers",
        compareDesc: "Select up to 8 servers across all categories to compare their specifications and pricing.",
        addServer: "+ Add Server",
        remove: "Remove",
        selectServerTitle: "Select a Server",
        specCPU: "Processor (CPU)",
        specRAM: "Memory (RAM)",
        specDisk: "Storage",
        specTraffic: "Network",
        specSpeed: "Interface Speed", // 新增
        specBackup: "Backup & Snapshots",
        specConsole: "Management",
        emptyCompare: "Add a server to start comparing.",
    },
    zh: {
        disclaimerLabel: "声明：",
        disclaimerText: "这是一个独立的粉丝优惠促销网站。本站与 netcup GmbH 没有任何官方隶属或代运营关系。",
        latestDeals: "最新优惠",
        vpsOffers: "VPS 主机",
        coupons2026: "2026 优惠券",
        officialSite: "Netcup 官网",
        updatedDaily: "每日更新",
        heroTitle: "高性价比、低延迟 <br> <span class='text-netcup-cyan'>VPS 与服务器特惠</span>",
        heroDesc: "为您搜罗最超值的专属折扣码、隐藏活动款，并提供客观的主机测评方案，让您购买优质的德国工匠级服务器立省最高 30%。",
        viewDeals: "查看 VPS 产品",
        getPromoCodes: "获取优惠折扣码",
        categoryTitle: "我们推荐的服务器分类",
        vouchersTitle: "长期有效优惠码券",
        voucher1Title: "新用户 5 欧元无门槛券",
        voucher1Desc: "适用于所有注册的新用户，可购买 Webhosting 虚拟主机、VPS 以及物理核心 Root Server。",
        monthlyOnly: "每月仅需",
        inclVat: "(已含税)",
        detailsBtn: "查看详情",
        footerDesc: "专注于分享高性价比 Netcup 托管资讯、网络及 CPU 跑分基准，以及专属省钱优惠券的第三方独立综合社区。",
        quickLinks: "快捷导航",
        submitCoupon: "提报新优惠码",
        benchmarks: "基准测试数据",
        contactUs: "联系我们",
        affiliateDisclaimerTitle: "免责声明",
        affiliateDisclaimerDesc: "本站包含部分推广链接。如果您通过推广链接购买对应产品，我们可能会获得一定的推广佣金，您无需为此支付任何额外费用。",
        rightsReserved: "© 2026 netcupnews.com. 保留所有版权。",
        imprint: "法律信息",
        privacyPolicy: "隐私权政策",
        tabLite: "轻量款 (Lite)",
        tabVps: "常规款 (VPS)",
        tabArm: "高能版 (ARM64)",
        tabRoot: "独享款 (Root)",
        
        imprintTitle: "法律信息 (Imprint)",
        imprintContent: `
            <h3 class="text-xl font-bold mt-6 mb-3 text-netcup-dark">根据德国 TMG 第 5 条的规定</h3>
            <p class="mb-4">张云龙<br>中国陕西省西安市未央区<br>文景路20号</p>
            <h3 class="text-xl font-bold mt-6 mb-3 text-netcup-dark">联系方式</h3>
            <p class="mb-4">电子邮件: contact@netcupnews.com<br>网站: www.netcupnews.com</p>
            <h3 class="text-xl font-bold mt-6 mb-3 text-netcup-dark">非官方从属声明</h3>
            <p class="mb-4 text-netcup-cyan font-bold">本网站是一个独立的粉丝项目，与 netcup GmbH 没有任何官方合作、赞助或代运营关系。</p>
            <p class="mb-4">所有产品名称、徽标和品牌均为其各自所有者的财产。本网站中使用的所有公司、产品和服务名称仅用于识别目的。使用这些名称、徽标和品牌并不意味着认可。</p>
            <h3 class="text-xl font-bold mt-6 mb-3 text-netcup-dark">内容责任</h3>
            <p class="mb-4">作为服务提供商，根据德国电信媒体法 (TMG) 第 7 条第 1 款，我们对这些网页上的自有内容负责。然而，根据 TMG 第 8 至 10 条，我们没有义务持续监控提交或存储的第三方信息。</p>
        `,
        privacyTitle: "隐私权政策",
        privacyContent: `
            <h3 class="text-xl font-bold mt-6 mb-3 text-netcup-dark">1. 数据保护概览</h3>
            <p class="mb-4">本网站的运营商非常重视保护您的个人数据。我们对您的个人数据保密，并遵守法定的数据保护规定以及本隐私政策。</p>
            <h3 class="text-xl font-bold mt-6 mb-3 text-netcup-dark">2. 网站数据收集</h3>
            <p class="mb-4"><strong>Cookies 与本地存储：</strong> 本网站使用本地存储 (Local Storage) 来保存您的语言偏好。这些数据仅保存在您的浏览器中，不会对您的设备造成损害，我们也不会将其上传至服务器。</p>
            <p class="mb-4"><strong>服务器日志文件：</strong> 网页提供商会自动收集并存储信息到所谓的服务器日志文件中，您的浏览器会自动将这些信息传输给我们。这些信息包括：浏览器类型和版本、使用的操作系统、引用 URL、访问计算机的主机名、服务器请求的时间、IP 地址。</p>
            <h3 class="text-xl font-bold mt-6 mb-3 text-netcup-dark">3. 推广联盟链接 (Affiliate Links)</h3>
            <p class="mb-4">本网站包含推广联盟链接。如果您点击推广链接并进行购买，我们可能会获得佣金。这不会改变您的购买价格。我们不会通过这些链接追踪您的个人身份数据；相关的点击追踪由联盟合作伙伴（例如 netcup GmbH）的平台处理。</p>
        `,
        benchmarksTitle: "基准性能测试",
        benchmarksContent: `
            <div class="text-center py-16">
                <i class="ph-fill ph-hammer text-6xl text-netcup-cyan mb-4 inline-block animate-bounce"></i>
                <h3 class="text-2xl font-bold text-netcup-dark mb-3">页面正在装修中</h3>
                <p class="text-gray-500 max-w-md mx-auto">我们正在对最新款服务器的 CPU 算力、磁盘 I/O 及全球网络路由进行详尽的跑分测试，详细数据即将上线，敬请期待！</p>
            </div>
        `,
        contactTitle: "联系我们",
        contactContent: `
            <div class="text-center py-16">
                <i class="ph-fill ph-envelope text-6xl text-netcup-cyan mb-4 inline-block"></i>
                <h3 class="text-2xl font-bold text-netcup-dark mb-3">与我们取得联系</h3>
                <p class="text-gray-500 mb-8 max-w-md mx-auto">如果您有任何使用问题、改进建议，或者想要提报最新发现的可用优惠码，欢迎随时发送邮件！</p>
                <a href="mailto:contact@netcupnews.com" class="inline-flex items-center gap-2 text-xl font-bold text-netcup-dark hover:text-netcup-cyan transition-colors border-b-2 border-netcup-cyan pb-1">
                    <i class="ph-fill ph-paper-plane-tilt"></i> contact@netcupnews.com
                </a>
            </div>
        `,
        
        compareBtn: "参数对比",
        compareTitle: "服务器参数对比",
        compareDesc: "您可以跨系列最多选择 8 款服务器，进行详细的横向参数与价格对比。",
        addServer: "+ 添加服务器",
        remove: "移除",
        selectServerTitle: "请选择要对比的服务器",
        specCPU: "处理器 (CPU)",
        specRAM: "内存 (RAM)",
        specDisk: "存储空间",
        specTraffic: "网络与流量",
        specSpeed: "接口带宽", // 新增
        specBackup: "备份与快照",
        specConsole: "控制台管理",
        emptyCompare: "请点击上方添加服务器以开始对比。",
    },
    de: {
        disclaimerLabel: "Haftungsausschluss:",
        disclaimerText: "Dies ist eine unabhängige Fan- und Angebotsseite. Wir stehen in keiner Verbindung zur netcup GmbH.",
        latestDeals: "Aktuelle Deals",
        vpsOffers: "VPS-Angebote",
        coupons2026: "Gutscheine 2026",
        officialSite: "Offizielle Seite",
        updatedDaily: "Täglich aktualisiert",
        heroTitle: "Dauerhaft günstige <br> <span class='text-netcup-cyan'>VPS & Server Angebote</span>",
        heroDesc: "Entdecken Sie die besten Rabattcodes, versteckten Angebote und unabhängigen Bewertungen für Netcup-Hosting-Produkte. Sparen Sie bis zu 30 % auf Ihren nächsten Server.",
        viewDeals: "VPS-Angebote anzeigen",
        getPromoCodes: "Promo-Codes holen",
        categoryTitle: "Unsere Server-Kategorien",
        vouchersTitle: "Aktive Gutscheincodes",
        voucher1Title: "5 € Gutschein (Neukunden)",
        voucher1Desc: "Gültig für alle Webhosting-, VPS- und Root-Server-Produkte.",
        monthlyOnly: "monatlich nur",
        inclVat: "(inkl. MwSt.)",
        detailsBtn: "Details",
        footerDesc: "Ihre unabhängige Anlaufstelle für Netcup-Hosting-News, Performance-Berichte und exklusive Gutscheincodes. Sparen Sie bares Geld bei deutscher Ingenieurskunst.",
        quickLinks: "Quick-Links",
        submitCoupon: "Gutschein einreichen",
        benchmarks: "Benchmark-Ergebnisse",
        contactUs: "Kontakt",
        affiliateDisclaimerTitle: "Haftungsausschluss",
        affiliateDisclaimerDesc: "Wir betreiben eine Affiliate-Website von Drittanbietern. Einige Links können Werbe-Links sein, wodurch wir eine Provision erhalten können, ohne dass Ihnen Mehrkosten entstehen.",
        rightsReserved: "© 2026 netcupnews.com. Alle Rechte vorbehalten.",
        imprint: "Impressum",
        privacyPolicy: "Datenschutzerklärung",
        tabLite: "vServer Lite",
        tabVps: "vServer (VPS)",
        tabArm: "vServer (ARM64)",
        tabRoot: "Root-Server",
        
        imprintTitle: "Impressum",
        imprintContent: `
            <h3 class="text-xl font-bold mt-6 mb-3 text-netcup-dark">Angaben gemäß § 5 TMG</h3>
            <p class="mb-4">Zhang Yunlong<br>Wenjing Road 20, Weiyang District<br>Xi'an, Shaanxi<br>China</p>
            <h3 class="text-xl font-bold mt-6 mb-3 text-netcup-dark">Kontakt</h3>
            <p class="mb-4">E-Mail: contact@netcupnews.com<br>Website: www.netcupnews.com</p>
            <h3 class="text-xl font-bold mt-6 mb-3 text-netcup-dark">Haftungsausschluss & Zugehörigkeit</h3>
            <p class="mb-4 text-netcup-cyan font-bold">Diese Website ist ein unabhängiges Fan-Projekt und steht in keiner offiziellen Verbindung, Partnerschaft oder Sponsorenschaft zur netcup GmbH.</p>
            <p class="mb-4">Alle Produktnamen, Logos und Marken sind Eigentum ihrer jeweiligen Inhaber. Alle auf dieser Website verwendeten Firmen-, Produkt- und Dienstleistungsnamen dienen nur Identifikationszwecken.</p>
            <h3 class="text-xl font-bold mt-6 mb-3 text-netcup-dark">Haftung für Inhalte</h3>
            <p class="mb-4">Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.</p>
        `,
        privacyTitle: "Datenschutzerklärung",
        privacyContent: `
            <h3 class="text-xl font-bold mt-6 mb-3 text-netcup-dark">1. Datenschutz auf einen Blick</h3>
            <p class="mb-4">Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
            <h3 class="text-xl font-bold mt-6 mb-3 text-netcup-dark">2. Datenerfassung auf unserer Website</h3>
            <p class="mb-4"><strong>Cookies:</strong> Unsere Website verwendet sogenannten lokalen Speicher (Local Storage), um Ihre Spracheinstellung zu speichern. Dies verursacht keine Schäden auf Ihrem Endgerät und wird nicht auf unsere Server hochgeladen.</p>
            <p class="mb-4"><strong>Server-Log-Dateien:</strong> Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind: Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage, IP-Adresse.</p>
            <h3 class="text-xl font-bold mt-6 mb-3 text-netcup-dark">3. Affiliate-Links</h3>
            <p class="mb-4">Diese Website enthält Affiliate-Links. Wenn Sie auf einen Affiliate-Link klicken und einen Kauf tätigen, erhalten wir möglicherweise eine Provision. Für Sie ändert sich der Preis dadurch nicht. Wir verfolgen Sie nicht persönlich über diese Links; das Tracking wird von der Plattform des Affiliate-Partners (z. B. netcup GmbH) abgewickelt.</p>
        `,
        benchmarksTitle: "Benchmark-Ergebnisse",
        benchmarksContent: `
            <div class="text-center py-16">
                <i class="ph-fill ph-hammer text-6xl text-netcup-cyan mb-4 inline-block animate-bounce"></i>
                <h3 class="text-2xl font-bold text-netcup-dark mb-3">Im Aufbau</h3>
                <p class="text-gray-500 max-w-md mx-auto">Wir führen derzeit umfangreiche Leistungs- und Netzwerktests auf den neuesten Servern durch. Schauen Sie bald wieder vorbei für detaillierte Daten!</p>
            </div>
        `,
        contactTitle: "Kontakt",
        contactContent: `
            <div class="text-center py-16">
                <i class="ph-fill ph-envelope text-6xl text-netcup-cyan mb-4 inline-block"></i>
                <h3 class="text-2xl font-bold text-netcup-dark mb-3">Nehmen Sie Kontakt auf</h3>
                <p class="text-gray-500 mb-8 max-w-md mx-auto">Haben Sie Fragen, Vorschläge oder möchten Sie einen neuen Gutscheincode einreichen? Schreiben Sie uns eine E-Mail.</p>
                <a href="mailto:contact@netcupnews.com" class="inline-flex items-center gap-2 text-xl font-bold text-netcup-dark hover:text-netcup-cyan transition-colors border-b-2 border-netcup-cyan pb-1">
                    <i class="ph-fill ph-paper-plane-tilt"></i> contact@netcupnews.com
                </a>
            </div>
        `,
        
        compareBtn: "Vergleichen",
        compareTitle: "Server Vergleichen",
        compareDesc: "Wählen Sie bis zu 8 Server aus allen Kategorien aus, um Spezifikationen und Preise zu vergleichen.",
        addServer: "+ Server hinzufügen",
        remove: "Entfernen",
        selectServerTitle: "Server auswählen",
        specCPU: "Prozessor (CPU)",
        specRAM: "Arbeitsspeicher",
        specDisk: "Speicherplatz",
        specTraffic: "Netzwerk",
        specSpeed: "Netzwerkanbindung", // 新增
        specBackup: "Backup & Snapshots",
        specConsole: "Verwaltung",
        emptyCompare: "Fügen Sie einen Server hinzu, um zu vergleichen.",
    }
};

// 服务器套餐分类与数据
const serverCategories = {
    lite: {
        description: {
            en: "vServer Lite features shared x86 processor cores at a stunningly low entry price. Ideal for minor automation scripts, lightweight web proxies, web staging, and lightweight personal services that don't need sustained peak CPU performance.",
            zh: "vServer Lite 轻量版搭载共享的 x86 处理器核心，主打极致超低性价比。非常适合跑日常自动化爬虫脚本、测试、小型个人博客或不要求持续占用 100% CPU 算力的非密集型服务。",
            de: "vServer Lite bietet gemeinsam genutzte x86-Prozessorkerne zu einem erstaunlich niedrigen Einstiegspreis. Ideal für kleinere Automatisierungen, leichtgewichtige Web-Proxys, Testumgebungen und persönliche Dienste ohne dauerhafte CPU-Last."
        },
        cards: [
            { name: "VPS piko G11s", specs: { en: ["1 vCore (x86)", "1 GB RAM", "30 GB SSD", "Traffic included", "1 GBit/s Port", "Snapshots (Copy-On-Write)", "Remote console"], zh: ["1 vCore 共享核心 (x86)", "1 GB 运存内存", "30 GB SSD 固态硬盘", "不限速基础流量保障", "1 GBit/s 端口带宽", "快照备份 (写时复制)", "远程控制面板 (VNC)"], de: ["1 vCore (x86)", "1 GB RAM", "30 GB SSD", "Traffic inklusive", "1 GBit/s Anbindung", "Snapshots (Copy-On-Write)", "Remote-Konsole"] }, price: "1.54", url: "https://www.netcup.com/en/server/vps/vps-pico-g11s-iv-12m-nue?ref=266218" },
            { name: "VPS nano G11s", specs: { en: ["2 vCore (x86)", "2 GB RAM", "60 GB SSD", "Traffic included", "1 GBit/s Port", "Snapshots (Copy-On-Write)", "Remote console"], zh: ["2 vCore 共享核心 (x86)", "2 GB 运存内存", "60 GB SSD 固态硬盘", "不限速基础流量保障", "1 GBit/s 端口带宽", "快照备份 (写时复制)", "远程控制面板 (VNC)"], de: ["2 vCore (x86)", "2 GB RAM", "60 GB SSD", "Traffic inklusive", "1 GBit/s Anbindung", "Snapshots (Copy-On-Write)", "Remote-Konsole"] }, price: "1.94", url: "https://www.netcup.com/en/server/vps/vps-nano-g11s-iv-6m-nue?ref=266218" },
            { name: "VPS Lite 1 G12s", specs: { en: ["2 vCore (x86)", "4 GB RAM", "80 GB SSD", "Traffic included", "500 MBit/s Port", "Snapshots (Copy-On-Write)", "Remote console"], zh: ["2 vCore 共享核心 (x86)", "4 GB 运存内存", "80 GB SSD 固态硬盘", "不限速基础流量保障", "500 Mbps 端口带宽", "快照备份 (写时复制)", "远程控制面板 (VNC)"], de: ["2 vCore (x86)", "4 GB RAM", "80 GB SSD", "Traffic inklusive", "500 MBit/s Anbindung", "Snapshots (Copy-On-Write)", "Remote-Konsole"] }, price: "4.10", url: "https://www.netcup.com/en/server/vps/vps-lite-1-g12s-iv-6m?ref=266218" },
            { name: "VPS Lite 2 G12s", specs: { en: ["4 vCore (x86)", "8 GB RAM", "160 GB SSD", "Traffic included", "750 MBit/s Port", "Snapshots (Copy-On-Write)", "Remote console"], zh: ["4 vCore 共享核心 (x86)", "8 GB 运存内存", "160 GB SSD 固态硬盘", "不限速基础流量保障", "750 Mbps 端口带宽", "快照备份 (写时复制)", "远程控制面板 (VNC)"], de: ["4 vCore (x86)", "8 GB RAM", "160 GB SSD", "Traffic inklusive", "750 MBit/s Anbindung", "Snapshots (Copy-On-Write)", "Remote-Konsole"] }, price: "6.65", url: "https://www.netcup.com/en/server/vps/vps-lite-2-g12s-iv-3m?ref=266218" },
            { name: "VPS Lite 3 G12s", specs: { en: ["8 vCore (x86)", "16 GB RAM", "320 GB SSD", "Traffic included", "1 GBit/s Port", "Snapshots (Copy-On-Write)", "Remote console"], zh: ["8 vCore 共享核心 (x86)", "16 GB 运存内存", "320 GB SSD 固态硬盘", "不限速基础流量保障", "1 GBit/s 端口带宽", "快照备份 (写时复制)", "远程控制面板 (VNC)"], de: ["8 vCore (x86)", "16 GB RAM", "320 GB SSD", "Traffic inklusive", "1 GBit/s Anbindung", "Snapshots (Copy-On-Write)", "Remote-Konsole"] }, price: "11.67", url: "https://www.netcup.com/en/server/vps/vps-lite-3-g12s-iv-2m?ref=266218" },
            { name: "VPS Lite 4 G12s", specs: { en: ["16 vCore (x86)", "32 GB RAM", "640 GB SSD", "Traffic included", "2.5 GBit/s Port", "Snapshots (Copy-On-Write)", "Remote console"], zh: ["16 vCore 共享核心 (x86)", "32 GB 运存内存", "640 GB SSD 固态硬盘", "不限速基础流量保障", "2.5 GBit/s 端口带宽", "快照备份 (写时复制)", "远程控制面板 (VNC)"], de: ["16 vCore (x86)", "32 GB RAM", "640 GB SSD", "Traffic inklusive", "2.5 GBit/s Anbindung", "Snapshots (Copy-On-Write)", "Remote-Konsole"] }, price: "21.61", url: "https://www.netcup.com/en/server/vps/vps-lite-4-g12s-iv-1m?ref=266218" }
        ]
    },
    vps: {
        description: {
            en: "Standard vServer (VPS) offers premium configurations using high-speed DDR5 ECC system RAM and hardware-level NVMe disk arrays. Excellent for productive databases, staging, production APIs, and active web properties.",
            zh: "标准 vServer (VPS) 进阶款采用速度更快的 DDR5 ECC 系统纠错内存与 NVMe 企业级固态。性能均衡优异，适用于生产数据库、网站运营、中大型应用以及稳定的 API 微服务。",
            de: "Die Standard vServer (VPS) überzeugen mit schnellem DDR5 ECC RAM und leistungsstarken NVMe-Laufwerken. Hervorragend geeignet für Datenbanken, Web-Apps und geschäftliche Produktivsysteme."
        },
        cards: [
            { name: "VPS 500 G12", specs: { en: ["2 vCore (x86)", "4 GB DDR5 RAM (ECC)", "128 GB NVMe SSD", "Traffic included", "1 GBit/s Port", "Snapshots (Copy-On-Write)", "Remote console"], zh: ["2 vCore 强能核心 (x86)", "4 GB DDR5 ECC 纠错内存", "128 GB NVMe 极速闪存", "包含高带网口流量保障", "1 GBit/s 端口带宽", "快照备份 (写时复制)", "远程控制面板 (VNC)"], de: ["2 vCore (x86)", "4 GB DDR5 RAM (ECC)", "128 GB NVMe SSD", "Traffic inklusive", "1 GBit/s Anbindung", "Snapshots (Copy-On-Write)", "Remote-Konsole"] }, price: "4.96", url: "https://www.netcup.com/en/server/vps/vps-500-g12-iv-12m?ref=266218#vps-500-g12-iv-12m-nue" },
            { name: "VPS 1000 G12", specs: { en: ["4 vCore (x86)", "8 GB DDR5 RAM (ECC)", "256 GB NVMe SSD", "Traffic included", "1 GBit/s Port", "Snapshots (Copy-On-Write)", "Remote console"], zh: ["4 vCore 强能核心 (x86)", "8 GB DDR5 ECC 纠错内存", "256 GB NVMe 极速闪存", "包含高带网口流量保障", "1 GBit/s 端口带宽", "快照备份 (写时复制)", "远程控制面板 (VNC)"], de: ["4 vCore (x86)", "8 GB DDR5 RAM (ECC)", "256 GB NVMe SSD", "Traffic inklusive", "1 GBit/s Anbindung", "Snapshots (Copy-On-Write)", "Remote-Konsole"] }, price: "8.71", url: "https://www.netcup.com/en/server/vps/vps-1000-g12-iv-12m?ref=266218#vps-1000-g12-iv-12m-nue" },
            { name: "VPS 2000 G12", specs: { en: ["8 vCore (x86)", "16 GB DDR5 RAM (ECC)", "512 GB NVMe SSD", "Traffic included", "2.5 GBit/s Port", "Snapshots (Copy-On-Write)", "Remote console"], zh: ["8 vCore 强能核心 (x86)", "16 GB DDR5 ECC 纠错内存", "512 GB NVMe 极速闪存", "包含高带网口流量保障", "2.5 GBit/s 端口带宽", "快照备份 (写时复制)", "远程控制面板 (VNC)"], de: ["8 vCore (x86)", "16 GB DDR5 RAM (ECC)", "512 GB NVMe SSD", "Traffic inklusive", "2.5 GBit/s Anbindung", "Snapshots (Copy-On-Write)", "Remote-Konsole"] }, price: "16.17", url: "https://www.netcup.com/en/server/vps/vps-2000-g12-iv-12m?ref=266218#vps-2000-g12-iv-12m-nue" },
            { name: "VPS 4000 G12", specs: { en: ["12 vCore (x86)", "32 GB DDR5 RAM (ECC)", "1024 GB NVMe SSD", "Traffic included", "2.5 GBit/s Port", "Snapshots (Copy-On-Write)", "Remote console"], zh: ["12 vCore 强能核心 (x86)", "32 GB DDR5 ECC 纠错内存", "1024 GB NVMe 极速闪存", "包含高带网口流量保障", "2.5 GBit/s 端口带宽", "快照备份 (写时复制)", "远程控制面板 (VNC)"], de: ["12 vCore (x86)", "32 GB DDR5 RAM (ECC)", "1024 GB NVMe SSD", "Traffic inklusive", "2.5 GBit/s Anbindung", "Snapshots (Copy-On-Write)", "Remote-Konsole"] }, price: "27.23", url: "https://www.netcup.com/en/server/vps/vps-4000-g12-iv-12m?ref=266218#vps-4000-g12-iv-12m-nue" },
            { name: "VPS 8000 G12", specs: { en: ["16 vCore (x86)", "64 GB DDR5 RAM (ECC)", "2048 GB NVMe SSD", "Traffic included", "2.5 GBit/s Port", "Snapshots (Copy-On-Write)", "Remote console"], zh: ["16 vCore 强能核心 (x86)", "64 GB DDR5 ECC 纠错内存", "2048 GB NVMe 极速闪存", "包含高带网口流量保障", "2.5 GBit/s 端口带宽", "快照备份 (写时复制)", "远程控制面板 (VNC)"], de: ["16 vCore (x86)", "64 GB DDR5 RAM (ECC)", "2048 GB NVMe SSD", "Traffic inklusive", "2.5 GBit/s Anbindung", "Snapshots (Copy-On-Write)", "Remote-Konsole"] }, price: "40.29", url: "https://www.netcup.com/en/server/vps/vps-8000-g12-iv-12m?ref=266218#vps-8000-g12-iv-12m-nue" }
        ]
    },
    arm: {
        description: {
            en: "vServer (ARM64) utilizes top-tier Ampere® Altra® physical architectures. Designed to provide unmatched parallel core processing capability and fantastic green efficiency. Highly recommended for ARM development clusters and modern applications.",
            zh: "高效能 vServer (ARM64) 采用企业级 Ampere® Altra® 物理核心。具备卓越的多线程并发计算能力及超低发热能效。十分适合编译 ARM 原生程序、构建 K8s 微服务容器和多负载并发计算。",
            de: "vServer (ARM64) nutzt modernste Ampere® Altra®-Technologie für höchste Multithread-Leistung und bemerkenswerte Energieeffizienz. Optimal für native ARM64-Entwicklung und moderne Applikationen."
        },
        cards: [
            { name: "VPS 1000 ARM G11", specs: { en: ["6 vCore (ARM64)", "8 GB RAM", "256 GB NVMe SSD", "Traffic included", "2.5 GBit/s Port", "Console for remote maintenance", "Full backup system"], zh: ["6 vCore 物理核心 (ARM64)", "8 GB 高速内存", "256 GB NVMe 固态存储", "不限速网络流量保障", "2.5 GBit/s 端口带宽", "远程管理维护控制台", "自带完备主机备份系统"], de: ["6 vCore (ARM64)", "8 GB RAM", "256 GB NVMe SSD", "Traffic inklusive", "2.5 GBit/s Anbindung", "Konsole für Remotewartung", "Backup-System"] }, price: "6.53", url: "https://www.netcup.com/en/server/arm-server/vps-1000-arm-g11-iv-mnz?ref=266218#vps-1000-arm-g11-nue-iv" },
            { name: "VPS 2000 ARM G11", specs: { en: ["10 vCore (ARM64)", "16 GB RAM", "512 GB NVMe SSD", "Traffic included", "2.5 GBit/s Port", "Console for remote maintenance", "Full backup system"], zh: ["10 vCore 物理核心 (ARM64)", "16 GB 高速内存", "512 GB NVMe 固态存储", "不限速网络流量保障", "2.5 GBit/s 端口带宽", "远程管理维护控制台", "自带完备主机备份系统"], de: ["10 vCore (ARM64)", "16 GB RAM", "512 GB NVMe SSD", "Traffic inklusive", "2.5 GBit/s Anbindung", "Konsole für Remotewartung", "Backup-System"] }, price: "11.27", url: "https://www.netcup.com/en/server/arm-server/vps-2000-arm-g11-iv-mnz?ref=266218#vps-2000-arm-g11-nue-iv" },
            { name: "VPS 3000 ARM G11", specs: { en: ["12 vCore (ARM64)", "24 GB RAM", "768 GB NVMe SSD", "Traffic included", "2.5 GBit/s Port", "Console for remote maintenance", "Full backup system"], zh: ["12 vCore 物理核心 (ARM64)", "24 GB 高速内存", "768 GB NVMe 固态存储", "不限速网络流量保障", "2.5 GBit/s 端口带宽", "远程管理维护控制台", "自带完备主机备份系统"], de: ["12 vCore (ARM64)", "24 GB RAM", "768 GB NVMe SSD", "Traffic inklusive", "2.5 GBit/s Anbindung", "Konsole für Remotewartung", "Backup-System"] }, price: "15.93", url: "https://www.netcup.com/en/server/arm-server/vps-3000-arm-g11-mnz-iv?ref=266218#vps-3000-arm-g11-nue-iv" },
            { name: "VPS 4000 ARM G11", specs: { en: ["14 vCore (ARM64)", "32 GB RAM", "1024 GB NVMe SSD", "Traffic included", "2.5 GBit/s Port", "Console for remote maintenance", "Full backup system"], zh: ["14 vCore 物理核心 (ARM64)", "32 GB 高速内存", "1024 GB NVMe 固态存储", "不限速网络流量保障", "2.5 GBit/s 端口带宽", "远程管理维护控制台", "自带完备主机备份系统"], de: ["14 vCore (ARM64)", "32 GB RAM", "1024 GB NVMe SSD", "Traffic inklusive", "2.5 GBit/s Anbindung", "Konsole für Remotewartung", "Backup-System"] }, price: "21.06", url: "https://www.netcup.com/en/server/arm-server/vps-4000-arm-g11-iv-mnz?ref=266218#vps-4000-arm-g11-nue-iv" },
            { name: "VPS 6000 ARM G11", specs: { en: ["16 vCore (ARM64)", "48 GB RAM", "1536 GB NVMe SSD", "Traffic included", "2.5 GBit/s Port", "Console for remote maintenance", "Full backup system"], zh: ["16 vCore 物理核心 (ARM64)", "48 GB 高速内存", "1536 GB NVMe 固态存储", "不限速网络流量保障", "2.5 GBit/s 端口带宽", "远程管理维护控制台", "自带完备主机备份系统"], de: ["16 vCore (ARM64)", "48 GB RAM", "1536 GB NVMe SSD", "Traffic inklusive", "2.5 GBit/s Anbindung", "Konsole für Remotewartung", "Backup-System"] }, price: "27.07", url: "https://www.netcup.com/en/server/arm-server/vps-6000-arm-g11-iv-mnz?ref=266218#vps-6000-arm-g11-nue-iv" },
            { name: "VPS 8000 ARM G11", specs: { en: ["18 vCore (ARM64)", "64 GB RAM", "2048 GB NVMe SSD", "Traffic included", "2.5 GBit/s Port", "Console for remote maintenance", "Full backup system"], zh: ["18 vCore 物理核心 (ARM64)", "64 GB 高速内存", "2048 GB NVMe 固态存储", "不限速网络流量保障", "2.5 GBit/s 端口带宽", "远程管理维护控制台", "自带完备主机备份系统"], de: ["18 vCore (ARM64)", "64 GB RAM", "2048 GB NVMe SSD", "Traffic inklusive", "2.5 GBit/s Anbindung", "Konsole für Remotewartung", "Backup-System"] }, price: "33.60", url: "https://www.netcup.com/en/server/arm-server/vps-8000-arm-g11-iv-mnz?ref=266218#vps-8000-arm-g11-nue-iv" }
        ]
    },
    root: {
        description: {
            en: "Root Servers feature fully dedicated physical CPU cores (AMD EPYC™ 9645) with guarantees of 100% constant power, dedicated high-speed ECC RAM, and fully isolated hypervisor features. Built for mission-critical enterprise hosting workloads.",
            zh: "独享 Root Server 提供完全独立的物理 CPU 核心 (采用高频 AMD EPYC™ 9645)。享有 100% 独立占满算力，配合专用高速企业 ECC 内存并全面支持硬件级虚拟化，无忧承载最繁重的企业主力部署负载。",
            de: "Root-Server bieten vollständig dedizierte physikalische AMD EPYC™ 9645-Kerne mit 100 % garantierter Leistung, dediziertem ECC-RAM und voll isolierten Virtualisierungseigenschaften. Perfekt für geschäftskritische Workloads."
        },
        cards: [
            { name: "RS 1000 G12", specs: { en: ["AMD EPYC™ 9645", "8 GB DDR5 RAM (ECC)", "4 Dedicated Physical Cores", "256 GB NVMe SSD", "2.5 GBit/s Port", "Snapshots (Copy-On-Write)", "Remote maintenance console"], zh: ["高端 AMD EPYC™ 9645 核心", "8 GB DDR5 ECC 纠错物理内存", "4 物理独享独立核心", "256 GB NVMe 闪存级存储", "2.5 GBit/s 端口带宽", "快照备份 (写时复制 COW)", "远程独立 VNC 控制面板"], de: ["AMD EPYC™ 9645", "8 GB DDR5 RAM (ECC)", "4 dedizierte physikalische Kerne", "256 GB NVMe SSD", "2.5 GBit/s Anbindung", "Snapshots (Copy-On-Write)", "Remote-Konsole"] }, price: "10.74", url: "https://www.netcup.com/en/server/root-server/rs-1000-g12-ip-iv-12m?ref=266218#rs-1000-g12-ip-iv-12m-nue" },
            { name: "RS 2000 G12", specs: { en: ["AMD EPYC™ 9645", "16 GB DDR5 RAM (ECC)", "8 Dedicated Physical Cores", "512 GB NVMe SSD", "2.5 GBit/s Port", "Snapshots (Copy-On-Write)", "Remote maintenance console"], zh: ["高端 AMD EPYC™ 9645 核心", "16 GB DDR5 ECC 纠错物理内存", "8 物理独享独立核心", "512 GB NVMe 闪存级存储", "2.5 GBit/s 端口带宽", "快照备份 (写时复制 COW)", "远程独立 VNC 控制面板"], de: ["AMD EPYC™ 9645", "16 GB DDR5 RAM (ECC)", "8 dedizierte physikalische Kerne", "512 GB NVMe SSD", "2.5 GBit/s Anbindung", "Snapshots (Copy-On-Write)", "Remote-Konsole"] }, price: "18.00", url: "https://www.netcup.com/en/server/root-server/rs-2000-g12-ip-iv-12m?ref=266218#rs-2000-g12-ip-iv-12m-nue" },
            { name: "RS 4000 G12", specs: { en: ["AMD EPYC™ 9645", "32 GB DDR5 RAM (ECC)", "12 Dedicated Physical Cores", "1 TB NVMe SSD", "2.5 GBit/s Port", "Snapshots (Copy-On-Write)", "Remote maintenance console"], zh: ["高端 AMD EPYC™ 9645 核心", "32 GB DDR5 ECC 纠错物理内存", "12 物理独享独立核心", "1 TB NVMe 闪存级存储", "2.5 GBit/s 端口带宽", "快照备份 (写时复制 COW)", "远程独立 VNC 控制面板"], de: ["AMD EPYC™ 9645", "32 GB DDR5 RAM (ECC)", "12 dedizierte physikalische Kerne", "1 TB NVMe SSD", "2.5 GBit/s Anbindung", "Snapshots (Copy-On-Write)", "Remote-Konsole"] }, price: "33.54", url: "https://www.netcup.com/en/server/root-server/rs-4000-g12-ip-iv-12m?ref=266218#rs-4000-g12-ip-iv-12m-nue" },
            { name: "RS 8000 G12", specs: { en: ["AMD EPYC™ 9645", "64 GB DDR5 RAM (ECC)", "16 Dedicated Physical Cores", "2 TB NVMe SSD", "2.5 GBit/s Port", "Snapshots (Copy-On-Write)", "Remote maintenance console"], zh: ["高端 AMD EPYC™ 9645 核心", "64 GB DDR5 ECC 纠错物理内存", "16 物理独享独立核心", "2 TB NVMe 闪存级存储", "2.5 GBit/s 端口带宽", "快照备份 (写时复制 COW)", "远程独立 VNC 控制面板"], de: ["AMD EPYC™ 9645", "64 GB DDR5 RAM (ECC)", "16 dedizierte physikalische Kerne", "2 TB NVMe SSD", "2.5 GBit/s Anbindung", "Snapshots (Copy-On-Write)", "Remote-Konsole"] }, price: "59.96", url: "https://www.netcup.com/en/server/root-server/rs-8000-g12-ip-iv-12m?ref=266218#rs-8000-g12-ip-iv-12m-nue" },
            { name: "RS 12000 G12", specs: { en: ["AMD EPYC™ 9645", "96 GB DDR5 RAM (ECC)", "20 Dedicated Physical Cores", "3 TB NVMe SSD", "2.5 GBit/s Port", "Snapshots (Copy-On-Write)", "Remote maintenance console"], zh: ["高端 AMD EPYC™ 9645 核心", "96 GB DDR5 ECC 纠错物理内存", "20 物理独享独立核心", "3 TB NVMe 闪存级存储", "2.5 GBit/s 端口带宽", "快照备份 (写时复制 COW)", "远程独立 VNC 控制面板"], de: ["AMD EPYC™ 9645", "96 GB DDR5 RAM (ECC)", "20 dedizierte physikalische Kerne", "3 TB NVMe SSD", "2.5 GBit/s Anbindung", "Snapshots (Copy-On-Write)", "Remote-Konsole"] }, price: "86.38", url: "https://www.netcup.com/en/server/root-server/rs-12000-g12-ip-iv-12m?ref=266218#rs-12000-g12-ip-iv-12m-nue" },
            { name: "RS 16000 G12", specs: { en: ["AMD EPYC™ 9645", "128 GB DDR5 RAM (ECC)", "24 Dedicated Physical Cores", "4 TB NVMe SSD", "2.5 GBit/s Port", "Snapshots (Copy-On-Write)", "Remote maintenance console"], zh: ["高端 AMD EPYC™ 9645 核心", "128 GB DDR5 ECC 纠错物理内存", "24 物理独享独立核心", "4 TB NVMe 闪存级存储", "2.5 GBit/s 端口带宽", "快照备份 (写时复制 COW)", "远程独立 VNC 控制面板"], de: ["AMD EPYC™ 9645", "128 GB DDR5 RAM (ECC)", "24 dedizierte physikalische Kerne", "4 TB NVMe SSD", "2.5 GBit/s Anbindung", "Snapshots (Copy-On-Write)", "Remote-Konsole"] }, price: "121.62", url: "https://www.netcup.com/en/server/root-server/rs-16000-g12-ip-iv-12m?ref=266218#rs-16000-g12-ip-iv-12m-nue" }
        ]
    }
};