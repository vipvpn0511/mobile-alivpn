// =========================================================
// موبایل علی — اسکریپت سایت
// لینک‌های دانلود واقعی را همین‌جا جایگزین کنید
// =========================================================
const ANDROID_DOWNLOAD_LINK = "https://github.com/saronetapp/SaroNet/releases/download/2.0.7/SaroNet_2.0.7.2.apk";
const IOS_DOWNLOAD_LINK     = "#";
const WINDOWS_DOWNLOAD_LINK = "#";

document.getElementById("dlAndroid").href = ANDROID_DOWNLOAD_LINK;
document.getElementById("dlIOS").href     = IOS_DOWNLOAD_LINK;
document.getElementById("dlWindows").href = WINDOWS_DOWNLOAD_LINK;

// ---------- منوی موبایل ----------
const burger = document.getElementById("burgerBtn");
const nav = document.getElementById("mainNav");
burger.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  burger.setAttribute("aria-expanded", open);
});
nav.querySelectorAll("a").forEach(link =>
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
  })
);

// ---------- انیمیشن ورود هنگام اسکرول ----------
const revealTargets = document.querySelectorAll(".card, .plan-card, .step");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealTargets.forEach(el => observer.observe(el));

// ---------- دکمه بازگشت به بالا ----------
const toTop = document.getElementById("toTop");
window.addEventListener("scroll", () => {
  toTop.classList.toggle("visible", window.scrollY > 480);
});
toTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ---------- به‌روزرسانی خودکار قیمت‌ها از data-price ----------
document.querySelectorAll(".plan-card").forEach(card => {
  const price = Number(card.dataset.price);
  const months = Number(card.dataset.months) || 1;
  const amountEl = card.querySelector(".price-amount");
  const perMonthEl = card.querySelector(".plan-permonth");
  if (price > 0) {
    amountEl.textContent = price.toLocaleString("fa-IR");
    if (perMonthEl && months > 1) {
      const perMonth = Math.round(price / months);
      perMonthEl.textContent = `معادل ${perMonth.toLocaleString("fa-IR")} هزار تومان در ماه`;
    }
  }
});
