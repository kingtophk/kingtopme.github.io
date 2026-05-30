
const translations={
en:{
company_name:"KingTop Industrial",
company_subtitle:"Hong Kong Limited",
menu_about:"About",
menu_products:"Products",
menu_contact:"Contact",
hero_title:"Precision Manufacturing, Global Reach",
hero_desc:"AI-Era Precision Manufacturing Partner. KingTop Industrial specializes in precision metal machining, high-end industrial components and AI product supporting manufacturing, delivering stable, reliable, high-quality and highly efficient solutions worldwide."
},
zh:{
company_name:"津拓實業（香港）有限公司",
company_subtitle:"AI時代的精密製造夥伴",
menu_about:"關於我們",
menu_products:"產品展示",
menu_contact:"聯絡我們",
hero_title:"精工智造 · 通拓全球",
hero_desc:"AI時代的精密製造夥伴，專注精密金屬加工、高端工業零部件和人工智能產品配套製造，致力於為全球客戶提供穩定、可靠、高品質與高效率的解決方案。"
},
tr:{
company_name:"KingTop Endüstri (Hong Kong) Ltd.",
company_subtitle:"Yapay Zeka Çağında Hassas Üretim Ortağı",
menu_about:"Hakkımızda",
menu_products:"Ürünler",
menu_contact:"İletişim",
hero_title:"Hassas Üretim, Küresel Erişim",
hero_desc:"Hassas metal işleme, üst düzey endüstriyel bileşenler ve yapay zeka ürünleri üretiminde uzmanlaşmış olup dünya çapındaki müşterilerimize güvenilir, yüksek kaliteli ve verimli çözümler sunmaktadır."
}
};

function changeLanguage(lang){
document.querySelectorAll('[data-key]').forEach(el=>{
const k=el.dataset.key;
el.textContent=translations[lang][k]||'';
});
localStorage.setItem('lang',lang);
document.getElementById('languageSwitcher').value=lang;
}
document.getElementById('languageSwitcher').addEventListener('change',e=>changeLanguage(e.target.value));
changeLanguage(localStorage.getItem('lang')||'en');
