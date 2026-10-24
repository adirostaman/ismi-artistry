// ====== PENGATURAN (ubah di sini) ======
const WHATSAPP_NUMBER = "6281234567890"; // format: 62 + nomor tanpa 0

// Menu mobile
const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
burger.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  burger.setAttribute("aria-expanded", open);
});
menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => menu.classList.remove("open")));

// Animasi muncul saat scroll
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("show"); io.unobserve(e.target); } });
}, { threshold: 0.15 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

// Filter galeri
const chips = document.querySelectorAll(".chip");
const items = document.querySelectorAll(".gallery figure");
chips.forEach(chip => chip.addEventListener("click", () => {
  chips.forEach(c => c.classList.remove("active"));
  chip.classList.add("active");
  const f = chip.dataset.filter;
  items.forEach(it => it.classList.toggle("hide", f !== "all" && it.dataset.cat !== f));
}));

// Lightbox
const lb = document.getElementById("lightbox");
const lbImg = lb.querySelector("img");
items.forEach(it => it.addEventListener("click", () => {
  const img = it.querySelector("img");
  lbImg.src = img.src; lbImg.alt = img.alt; lb.classList.add("open");
}));
lb.addEventListener("click", () => lb.classList.remove("open"));
document.addEventListener("keydown", e => { if (e.key === "Escape") lb.classList.remove("open"); });

// Formulir → WhatsApp
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  const nama = document.getElementById("nama").value.trim();
  const acara = document.getElementById("acara").value.trim();
  const pesan = document.getElementById("pesan").value.trim();
  const text = `Halo Ismi, saya ${nama}.%0AAcara: ${encodeURIComponent(acara)}%0A${encodeURIComponent(pesan)}`;
  window.open(`https://wa.me/${081573534686}?text=${text}`, "_blank");
});

// Tahun otomatis di footer
document.getElementById("year").textContent = new Date().getFullYear();