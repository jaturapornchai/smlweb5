# SML Soft Website

เว็บไซต์บริษัท เอสเอ็มแอล ซอฟต์ จำกัด - บริษัทพัฒนาโปรแกรมบัญชีและ POS ครบวงจร

## 🏢 เกี่ยวกับ SML Soft

SML Soft เป็นบริษัทที่รับจ้างพัฒนาโปรแกรมทุกรูปแบบ ทุกภาษา และมีโปรแกรมสำเร็จรูปจำหน่าย ได้แก่:

- **SML Account** - โปรแกรมบัญชีสำเร็จรูป
- **SML POS** - ระบบขายหน้าร้าน
- **AI Connect** - โซลูชั่น AI สำหรับธุรกิจ
- โปรแกรมสำนักงานบัญชี
- รับจ้างพัฒนาโปรแกรมตามความต้องการ

**พัฒนาต่อเนื่องกว่า 20 ปี | ลูกค้ามากกว่า 2,000 ราย**

## 🛠️ เทคโนโลยีที่ใช้

- **Astro.js** - Static Site Generator
- **Tailwind CSS** - CSS Framework
- **TypeScript** - Type Safety
- **Responsive Design** - รองรับทุกขนาดหน้าจอ

## 🚀 โครงสร้างโปรเจ็ค

```text
/
├── public/             # ไฟล์ static (รูปภาพ, ไอคอน)
├── src/
│   ├── components/     # Component ต่างๆ
│   │   ├── Header.astro      # Header navigation
│   │   ├── Footer.astro      # Footer 
│   │   ├── Hero.astro        # Hero section
│   │   ├── Features.astro    # คุณสมบัติเด่น
│   │   ├── Products.astro    # ผลิตภัณฑ์และบริการ
│   │   ├── Stats.astro       # สถิติและข้อมูล
│   │   └── CTA.astro         # Call to Action
│   ├── layouts/        # Layout templates
│   │   └── Layout.astro      # Layout หลัก
│   ├── pages/          # หน้าเว็บไซต์
│   │   ├── index.astro       # หน้าแรก
│   │   ├── contact.astro     # หน้าติดต่อเรา
│   │   └── pricing.astro     # หน้าราคา
│   └── styles/         # CSS และ styling
│       └── global.css        # Global styles + Tailwind
├── astro.config.mjs    # การตั้งค่า Astro
├── tailwind.config.mjs # การตั้งค่า Tailwind CSS
└── package.json        # Dependencies และ scripts
```

## 🎯 ฟีเจอร์หลัก

### หน้าเว็บไซต์
- **หน้าแรก** - Hero, สถิติ, คุณสมบัติเด่น, ผลิตภัณฑ์
- **ติดต่อเรา** - ข้อมูลติดต่อ, แบบฟอร์ม, แผนที่
- **ราคา** - ตารางราคาและแพ็คเกจทั้งหมด

### คุณสมบัติเด่น
- 📱 **Responsive Design** - รองรับมือถือและ tablet
- 🚀 **Performance** - โหลดเร็วด้วย Astro
- 🎨 **Modern UI** - ดีไซน์สวยงามด้วย Tailwind CSS
- 📞 **Click to Call** - กดโทรออกได้ทันที (มือถือ)
- 🌐 **SEO Ready** - พร้อม meta tags และ structured data

## 🛠️ การติดตั้งและรัน

### ติดตั้ง dependencies
```bash
npm install
```

### รันเซิร์ฟเวอร์ development
```bash
npm run dev
```

### Build สำหรับ production
```bash
npm run build
```

### Preview build
```bash
npm run preview
```

## 📝 การพัฒนา

### เพิ่ม Component ใหม่
1. สร้างไฟล์ `.astro` ใน `src/components/`
2. Import และใช้งานใน layout หรือ page ที่ต้องการ

### เพิ่มหน้าใหม่
1. สร้างไฟล์ `.astro` ใน `src/pages/`
2. Astro จะสร้าง route อัตโนมัติ

### Styling
- ใช้ Tailwind CSS classes
- Global styles อยู่ใน `src/styles/global.css`
- ฟอนต์ภาษาไทย: Noto Sans Thai

## 📞 ข้อมูลติดต่อ

**บริษัท เอสเอ็มแอล ซอฟต์ จำกัด**  
เลขประจำตัวผู้เสียภาษี: 0135549000236

### สำนักงาน กรุงเทพมหานคร
อาคารซอฟท์แวร์พาร์ค ชั้น 7 ถ.แจ้งวัฒนะ ต.คลองเกลือ อ.ปากเกร็ด จ.นนทบุรี 11120

### สำนักงาน เชียงใหม่  
141/469 หมู่ที่ 2 ตำบลต้นเปา อำเภอสันกำแพง จ.เชียงใหม่ 50130

### ฝ่ายขาย
- **วิรุณ**: 081-434-5533
- **จตุ**: 089-922-3131

---

พัฒนาโดยทีมงาน SML Soft 🚀
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
