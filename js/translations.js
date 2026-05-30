
const translations={
en:{
company_name:"KingTop Industrial",
company_subtitle:"Hong Kong Limited",
menu_about:"About",menu_products:"Products",menu_equipment:"Equipment",menu_contact:"Contact",
hero_title:"Precision Manufacturing, Global Reach",
hero_desc:"AI-Era Precision Manufacturing Partner specializing in precision metal machining, high-end industrial components and AI product supporting manufacturing. We are committed to providing stable, reliable, high-quality and highly efficient solutions for customers worldwide.",
hero_button:"Get A Quote",
about_title:"About Us",about_desc:"Hong Kong headquarters with manufacturing base in Suzhou, China.",
products_title:"Products",equipment_title:"Equipment",contact_title:"Contact Us"},
zh:{
company_name:"津拓實業（香港）有限公司",
company_subtitle:"精工智造 · 通拓全球",
menu_about:"關於我們",menu_products:"產品展示",menu_equipment:"設備展示",menu_contact:"聯絡我們",
hero_title:"精工智造 · 通拓全球",
hero_desc:"AI時代的精密製造夥伴，專注精密金屬加工、高端工業零部件和人工智能產品配套製造，致力於為全球客戶提供穩定、可靠、高品質與高效率的解決方案。",
hero_button:"立即詢價",
about_title:"關於我們",about_desc:"立足香港，生產基地位於中國蘇州。",
products_title:"產品展示",equipment_title:"設備展示",contact_title:"聯絡我們"},
tr:{
company_name:"KingTop Industrial (Hong Kong) Limited",
company_subtitle:"Hassas Üretim · Küresel Erişim",
menu_about:"Hakkımızda",menu_products:"Ürünler",menu_equipment:"Ekipmanlar",menu_contact:"İletişim",
hero_title:"Hassas Üretim, Küresel Erişim",
hero_desc:"Hassas metal işleme, üst düzey endüstriyel bileşenler ve yapay zeka ürünleri üretiminde uzmanlaşmış olup dünya çapındaki müşterilerimize istikrarlı, güvenilir, yüksek kaliteli ve verimli çözümler sunmaktadır.",
hero_button:"Teklif Al",
about_title:"Hakkımızda",about_desc:"Hong Kong merkezli, Suzhou üretim üssü.",
products_title:"Ürünler",equipment_title:"Ekipmanlar",contact_title:"İletişim"}
};
function changeLanguage(lang){
document.querySelectorAll('[data-key]').forEach(el=>{
el.textContent=translations[lang][el.dataset.key]||'';
});
localStorage.setItem('lang',lang);
}
document.getElementById('languageSwitcher').addEventListener('change',e=>changeLanguage(e.target.value));
changeLanguage(localStorage.getItem('lang')||'en');
