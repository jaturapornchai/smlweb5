import rss from '@astrojs/rss';

export async function GET(context) {
    return rss({
        title: 'SML Soft - โซลูชั่นซอฟต์แวร์สำหรับธุรกิจไทย',
        description: 'ข่าวสารและบทความเกี่ยวกับซอฟต์แวร์บัญชี ระบบ POS และ AI สำหรับธุรกิจ SME ไทย',
        site: context.site,
        items: [
            {
                title: 'ระบบบัญชีสำหรับ SME ไทย',
                description: 'เทคนิคการใช้งานระบบบัญชีเพื่อเพิ่มประสิทธิภาพธุรกิจ',
                link: '/blog/accounting-basics/',
                pubDate: new Date('2024-01-15'),
            },
            {
                title: 'AI สำหรับธุรกิจยุคใหม่',
                description: 'การนำปัญญาประดิษฐ์มาใช้ในการบริหารธุรกิจ SME',
                link: '/blog/ai-business/',
                pubDate: new Date('2024-01-20'),
            },
            {
                title: 'ระบบ POS ที่เหมาะกับธุรกิจไทย',
                description: 'คู่มือการเลือกและใช้งานระบบ Point of Sale',
                link: '/blog/pos-guide/',
                pubDate: new Date('2024-01-25'),
            },
            {
                title: 'เพิ่มประสิทธิภาพธุรกิจด้วยเทคโนโลยี',
                description: 'แนวทางการดิจิทัลทรานส์ฟอร์เมชั่นสำหรับ SME',
                link: '/blog/business-efficiency/',
                pubDate: new Date('2024-02-01'),
            },
            {
                title: 'การจัดการสินค้าคงคลังยุคดิจิทัล',
                description: 'เทคนิคการบริหารสต็อกและสินค้าด้วยระบบอัตโนมัติ',
                link: '/blog/inventory-management/',
                pubDate: new Date('2024-02-05'),
            },
            {
                title: 'เทคนิคการคำนวณภาษีสำหรับธุรกิจ',
                description: 'คำแนะนำการจัดการภาษีและการบัญชีให้ถูกต้อง',
                link: '/blog/tax-tips/',
                pubDate: new Date('2024-02-10'),
            },
            {
                title: 'Digital Transformation สำหรับ SME',
                description: 'ขั้นตอนการเปลี่ยนผ่านสู่ธุรกิจดิจิทัล',
                link: '/blog/digital-transformation/',
                pubDate: new Date('2024-02-15'),
            }
        ],
        customData: `<language>th-TH</language>`,
        trailingSlash: false,
    });
}
