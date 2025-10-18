# راهنمای سیستم چندزبانه (i18n) - موسسه بهمند

## 📋 خلاصه تغییرات

این پروژه حالا از **دو زبان فارسی و انگلیسی** پشتیبانی می‌کنه! کاربران می‌تونن با یک کلیک ساده بین زبان‌ها جابجا بشن.

---

## 🎯 ویژگی‌های اضافه شده

### ✅ چه چیزهایی اضافه شده؟

1. **دکمه سویچ زبان در هدر** - کاربران می‌تونن با کلیک روی دکمه EN/FA زبان رو عوض کنن
2. **پشتیبانی کامل از RTL/LTR** - وقتی زبان عوض میشه، جهت صفحه هم عوض میشه
3. **ذخیره‌سازی انتخاب زبان** - زبان انتخابی در localStorage ذخیره میشه
4. **تم پویا** - فونت و استایل‌ها بر اساس زبان تنظیم میشن
5. **ترجمه‌های کامل** - تمام متن‌های صفحه اصلی و هدر ترجمه شدن

---

## 📁 ساختار فایل‌های جدید

```
src/
├── i18n/
│   ├── config.js              # تنظیمات i18next
│   └── locales/
│       ├── fa.json            # ترجمه‌های فارسی
│       └── en.json            # ترجمه‌های انگلیسی
├── contexts/
│   └── LanguageContext.jsx    # مدیریت state زبان
├── components/
│   ├── LanguageSwitcher.jsx   # دکمه تغییر زبان
│   └── AppThemeProvider.jsx   # مدیریت تم بر اساس زبان
└── mui/
    └── theme.js               # تم به‌روز شده با پشتیبانی LTR/RTL
```

---

## 🚀 نحوه استفاده

### 1️⃣ استفاده از ترجمه در کامپوننت‌ها

```jsx
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t('nav.home')}</h1>
      <p>{t('hero.subtitle')}</p>
    </div>
  );
}
```

### 2️⃣ اضافه کردن ترجمه جدید

برای اضافه کردن متن جدید:

1. به فایل `src/i18n/locales/fa.json` برو
2. کلید و مقدار فارسی رو اضافه کن:
```json
{
  "mySection": {
    "title": "عنوان بخش من",
    "description": "توضیحات بخش"
  }
}
```

3. همین کار رو در `src/i18n/locales/en.json` با ترجمه انگلیسی انجام بده:
```json
{
  "mySection": {
    "title": "My Section Title",
    "description": "Section description"
  }
}
```

4. در کامپوننت استفاده کن:
```jsx
<h1>{t('mySection.title')}</h1>
```

### 3️⃣ تغییر زبان به صورت دستی (اگر نیاز داشتی)

```jsx
import { useLanguage } from '../contexts/LanguageContext';

function MyComponent() {
  const { language, changeLanguage } = useLanguage();
  
  const handleSwitch = () => {
    changeLanguage(language === 'fa' ? 'en' : 'fa');
  };
  
  return <button onClick={handleSwitch}>Switch Language</button>;
}
```

---

## 🔧 کامپوننت‌های به‌روز شده

### ✅ کامپوننت‌هایی که ترجمه شدن:

- ✅ **Header** - منوی ناوبری
- ✅ **Home** - صفحه اصلی (تمام بخش‌ها)
  - Hero Section
  - Services Section  
  - Features Section
  - Stats Section
  - Customers Section
  - CTA Section

### 📝 کامپوننت‌هایی که باید ترجمه بشن (در صورت نیاز):

- ⏳ About Page
- ⏳ Services Page
- ⏳ Contact Page
- ⏳ Footer
- ⏳ Blog Pages
- ⏳ Admin Panel (در صورت نیاز)

---

## 📖 ساختار ترجمه‌ها

فایل‌های ترجمه به صورت دسته‌بندی شده هستن:

```json
{
  "nav": { ... },           // منوی ناوبری
  "hero": { ... },          // بخش اول صفحه
  "services": { ... },      // خدمات
  "features": { ... },      // ویژگی‌ها
  "stats": { ... },         // آمار
  "customers": { ... },     // مشتریان
  "cta": { ... },          // دعوت به اقدام
  "footer": { ... },        // فوتر
  "common": { ... },        // کلمات رایج
  "language": { ... }       // زبان‌ها
}
```

---

## 🎨 تغییرات تم

تم حالا بر اساس زبان تنظیم میشه:

- **فارسی**: فونت YekanBakh + RTL
- **انگلیسی**: فونت Roboto + LTR

این تغییرات به صورت خودکار اعمال میشن و نیازی به کد اضافی نیست.

---

## 💾 ذخیره‌سازی زبان

زبان انتخابی در `localStorage` با کلید `language` ذخیره میشه:

```javascript
localStorage.getItem('language') // 'fa' یا 'en'
```

وقتی کاربر دوباره سایت رو باز کنه، زبان قبلی‌ش بارگذاری میشه.

---

## 🧪 تست کردن

برای تست سیستم چندزبانه:

1. سرور رو اجرا کن:
```bash
npm run dev
```

2. صفحه رو باز کن: `http://localhost:5173`

3. روی دکمه EN/FA در هدر کلیک کن

4. باید این تغییرات رو ببینی:
   - ✅ متن‌ها به زبان دیگه تغییر کنن
   - ✅ جهت صفحه عوض بشه (RTL ↔ LTR)
   - ✅ فونت عوض بشه
   - ✅ زبان بعد از refresh حفظ بشه

---

## 🐛 عیب‌یابی

### مشکل: ترجمه‌ها نشون داده نمیشن

**راه‌حل**: 
- چک کن که فایل‌های JSON درست import شدن
- مطمئن شو که کلیدها در هر دو فایل `fa.json` و `en.json` وجود دارن
- Console رو چک کن برای خطاهای i18next

### مشکل: جهت صفحه درست عوض نمیشه

**راه‌حل**:
- مطمئن شو که `LanguageProvider` در بالای component tree هست
- `AppThemeProvider` باید inside `LanguageProvider` باشه

### مشکل: فونت‌ها درست نمایش داده نمیشن

**راه‌حل**:
- چک کن که فایل‌های فونت در `src/fonts/` موجود هستن
- مطمئن شو که `fonts.css` import شده

---

## 📦 پکیج‌های نصب شده

این پکیج‌ها اضافه شدن:

```json
{
  "i18next": "برای مدیریت ترجمه‌ها",
  "react-i18next": "برای استفاده i18next در React",
  "i18next-browser-languagedetector": "برای تشخیص زبان مرورگر",
  "i18next-http-backend": "برای بارگذاری فایل‌های ترجمه"
}
```

---

## 📝 نکات مهم برای توسعه

### ✅ بهترین روش‌ها:

1. **همیشه از `t()` استفاده کن**: هیچ متنی رو hardcode نکن
2. **کلیدهای واضح**: از نام‌های معنادار استفاده کن (مثل `services.audit.title`)
3. **دسته‌بندی منطقی**: ترجمه‌های مرتبط رو در یک بخش قرار بده
4. **همزمان‌سازی**: هر چی در `fa.json` اضافه می‌کنی، در `en.json` هم باید باشه
5. **تست کن**: بعد از هر تغییر، هر دو زبان رو تست کن

### ❌ اشتباهات رایج:

1. ❌ Hardcode کردن متن‌ها
2. ❌ فراموش کردن ترجمه انگلیسی
3. ❌ استفاده از کلیدهای نامشخص
4. ❌ قرار دادن HTML در ترجمه‌ها

---

## 🔄 به‌روزرسانی‌های بعدی (پیشنهادی)

1. ⏳ اضافه کردن زبان‌های بیشتر (آلمانی، عربی، ...)
2. ⏳ ترجمه صفحات باقی‌مانده (About, Services, Contact, ...)
3. ⏳ پیاده‌سازی lazy loading برای فایل‌های ترجمه
4. ⏳ اضافه کردن unit test برای ترجمه‌ها
5. ⏳ پیاده‌سازی fallback برای کلیدهای موجود نیست

---

## 🤝 مشارکت

برای اضافه کردن ترجمه یا بهبود سیستم:

1. Fork کن
2. یک branch جدید بساز: `git checkout -b feature/add-german`
3. تغییرات رو commit کن: `git commit -m 'Add German translations'`
4. Push کن: `git push origin feature/add-german`
5. Pull Request بساز

---

## 📞 پشتیبانی

در صورت مشکل یا سوال:

- Issue باز کن در GitHub
- یا با تیم توسعه تماس بگیر

---

**ساخته شده با ❤️ برای موسسه حسابرسی بهمند**
