// js/app.js

document.addEventListener('alpine:init', () => {
    Alpine.data('appData', () => ({
        currentLang: 'en',
        currentPage: 'home', // 控制显示的页面: 'home', 'imprint', 'privacy'
        activeCategory: 'lite',
        isFading: false,
        // --- 对比功能状态与方法 ---
        selectedServers: [],
        showCompareModal: false,
        mobileMenuOpen: false,

        addToCompare(server) {
            // 最多对比 8 台，且不能重复添加
            if (this.selectedServers.length < 8 && !this.selectedServers.includes(server)) {
                this.selectedServers.push(server);
            }
            this.showCompareModal = false; // 添加后关闭弹窗
        },

        removeFromCompare(index) {
            this.selectedServers.splice(index, 1);
        },
        
        // 引用外部 data.js 中的变量
        translations: siteTranslations,
        categories: serverCategories,

        init() {
            this.currentLang = this.detectUserLanguage();
            
            // 新增：默认勾选每个系列的第一款进行对比
            if (this.selectedServers.length === 0) {
                this.selectedServers = [
                    this.categories.lite.cards[0],
                    this.categories.vps.cards[0],
                    this.categories.arm.cards[0]
                ];
            }
        },

        // --- SPA 路由与跳转 ---
        goToPage(page, hash = null) {
            this.currentPage = page;
            
            // 如果是在主页且带有哈希(如 #deals)，则平滑滚动过去
            if (page === 'home' && hash) {
                setTimeout(() => {
                    const el = document.querySelector(hash);
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 50); // 稍微等待 DOM 切换完成
            } else {
                // 如果是切换到法律/隐私页，直接回到顶部
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        },

        switchCategory(newCategory) {
            // 如果点击的是当前分类，或者正在播放动画，则不执行
            if (this.activeCategory === newCategory || this.isFading) return;
            
            this.isFading = true; // 触发淡出
            
            // 等待淡出动画完成 (250ms) 后，替换数据并触发淡入
            setTimeout(() => {
                this.activeCategory = newCategory;
                this.isFading = false;
            }, 250); 
        },

        detectUserLanguage() {
            const savedSetting = localStorage.getItem('netcupnews-preferred-lang');
            if (savedSetting && ['en', 'zh', 'de'].includes(savedSetting)) {
                return savedSetting;
            }
            
            const sysLocales = navigator.languages || [navigator.language || navigator.userLanguage];
            for (const locale of sysLocales) {
                const norm = locale.toLowerCase();
                if (norm.startsWith('zh')) return 'zh';
                if (norm.startsWith('de')) return 'de';
                if (norm.startsWith('en')) return 'en';
            }
            return 'en'; // 默认回退到英文
        },

        changeLanguage(langCode) {
            this.currentLang = langCode;
            localStorage.setItem('netcupnews-preferred-lang', langCode);
        },

        // 从字典获取文本，如果没有则直接返回 key
        t(key) {
            return this.translations[this.currentLang][key] || key;
        },

        // 现代剪贴板 API 复制内容
        copyCode(codeToCopy, event) {
            navigator.clipboard.writeText(codeToCopy).then(() => {
                const targetButton = event.currentTarget;
                const originalContent = targetButton.innerHTML;
                
                targetButton.innerHTML = '<i class="ph-bold ph-check text-netcup-green text-lg"></i>';
                targetButton.classList.add('border', 'border-netcup-green');
                
                setTimeout(() => {
                    targetButton.innerHTML = originalContent;
                    targetButton.classList.remove('border', 'border-netcup-green');
                }, 2000);
            }).catch(err => {
                console.error('复制失败: ', err);
            });
        }
    }));
});