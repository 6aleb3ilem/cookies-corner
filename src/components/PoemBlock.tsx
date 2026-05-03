export default function PoemBlock() {
  return (
    <section className="px-5 pb-10">
      <div className="relative rounded-3xl bg-gradient-to-br from-lavenderSoft via-cream to-blushSoft p-6 sm:p-10 shadow-soft border border-beige/40 text-center overflow-hidden">
        <span className="absolute top-3 left-5 text-5xl text-lavender/40 font-serif leading-none">“</span>
        <span className="absolute bottom-3 right-5 text-5xl text-lavender/40 font-serif leading-none rotate-180">“</span>
        <p
          dir="rtl"
          lang="ar"
          className="font-arabic text-cocoa text-xl sm:text-2xl leading-loose tracking-wide"
        >
          كان افكَعتك يلّي يحظيك ★ راني ساعي فللّي يرضيك
          <br />
          يسو شنهُو باش أنسكَريك ★ يعز ألشافو عينّي راني ريتو عند كوكيز الزاوية
        </p>
      </div>
    </section>
  );
}
