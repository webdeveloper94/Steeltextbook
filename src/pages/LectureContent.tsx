import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight, FaList } from 'react-icons/fa';

// Ma'ruza matnlari
const lectureContents = {
  '1': {
    title: "Materiallar qarshiligi faniga kirish",
    content: `Materiallar qarshiligi fanining asosiy tushunchalari quyidagilardan iborat:

Kuch - Bu tashqi omillar (masalan, yuk yoki kuchlanish) tomonidan materialga ta'sir qiladigan fizik miqdordir. Kuch materialni deformatsiyalash yoki buzilishiga olib kelishi mumkin.

Deformatsiya - Bu materialning tashqi kuchlar ta'sirida o'zining boshlang'ich shaklini o'zgartirishi jarayonidir. Deformatsiya elastik va plastmassa bo'lishi mumkin:

Elastik deformatsiya - Kuch olib tashlangach, materialning boshlang'ich holatiga qaytishi.
Plastik deformatsiya - Materialning shakli o'zgarganidan so'ng, uning boshlang'ich holatiga qaytmasligi.
Qarshilik - Materialning tashqi kuchlarga qarshi turish qobiliyatidir. Har bir materialning o'ziga xos mexanik xususiyatlari bor, bu esa uning yuklarga nisbatan qarshiligini belgilaydi.

Qattiqlik - Bu materialning shaklini o'zgartirmasdan, unga tushayotgan kuchga qarshilik ko'rsatish qobiliyatidir. Yuqori qattiqlik materiallar kuchli yuklarni ko'tara olishadi.

Mustahkamlik - Materialning o'ziga ta'sir qilayotgan kuchlarga qarshi turish va ularga chidamlilik ko'rsatuvchi xususiyatidir. Bu, odatda, materialning uzilishiga yoki buzilishiga olib keladigan maksimal kuchni anglatadi.

Materiallar qarshiligi fanining ahamiyati
Materiallar qarshiligi fanasi bizga quyidagi sohalarda muhim ahamiyatga ega:

Qurilish sanoati: Inshootlarning barqarorligini ta'minlash uchun materiallarning mexanik xususiyatlarini bilish zarur. Beton, po'lat, temir va boshqa materiallar qaysi sharoitlarda qulab tushishi yoki buzilishi mumkinligini tushunish kerak.
Aviatsiya va kosmonavtika: Samolyotlar va kosmik apparatlar juda katta kuchlarga duch keladi. Shuning uchun, materiallarning qarshiligi va ularning mustahkamligi alohida ahamiyatga ega.
Avtomobilsozlik: Avtomobillarni yaratishda materiallarning xavfsizlik va mustahkamligini ta'minlash muhimdir.
Energetika va elektronika: Elektron qurilmalar va energiya tizimlarida materiallar qarshiligi o'ziga xos ahamiyatga ega, chunki ularda yuqori harorat, bosim va stresslar yuzaga kelishi mumkin.
Xulosa
Materiallar qarshiligi fani insoniyatning turli sohalarida ishlatiladigan materiallarning xavfsizligini, samaradorligini va mustahkamligini ta'minlashda asosiy o'rin tutadi. Bu fan yordamida biz materiallarning tashqi kuchlarga qanday reaksiya berishini bilib olamiz va shu asosda turli inshootlar, transport vositalari, texnologik qurilmalar va boshqa obyektlarning dizaynini yaxshilashga imkoniyat yaratamiz. Materiallar qarshiligi o'rganish orqali, biz materiallarning imkoniyatlarini to'liq anglaymiz va ularni to'g'ri ishlatish imkoniyatini yaratamiz.

    Fanning asosiy maqsadlari:
    • Materiallarning mexanik xossalarini o'rganish
    • Deformatsiya va kuchlanishlarni hisoblash usullarini o'zlashtirish
    • Konstruksiyalarning mustahkamligini ta'minlash

    Fanning vazifalari:
    1. Materiallarning mexanik xossalarini aniqlash
    2. Deformatsiya va kuchlanishlar orasidagi bog'lanishlarni o'rganish
    3. Mustahkamlik hisoblash usullarini ishlab chiqish
    4. Konstruksiyalarning ishonchliligini ta'minlash

    Asosiy tushunchalar:
    • Kuchlanish
    • Deformatsiya
    • Mustahkamlik
    • Bikrlik
    • Plastiklik
    `
  },
  '2': {
    title: "Deformatsiya turlari",
    content: `Deformatsiya – bu materialning tashqi kuchlar ta'sirida o'zining shaklini o'zgartirishi jarayonidir. Har bir material o'ziga xos mexanik xususiyatlarga ega bo'lib, ular unga ta'sir qilayotgan kuchlarga qanday reaksiya berishini belgilaydi. Deformatsiya turli shakllarda bo'lishi mumkin va bu o'zgarishlar materialning tabiati, kuchning o'lchami va turiga bog'liq. Deformatsiya, asosan, ikki asosiy kategoriya bo'yicha tasniflanadi: elastik deformatsiya va plastik deformatsiya. Biroq, ba'zi hollarda, materiallar o'zgarishga uchraganidan keyin qaytib eski holatiga qaytmasligi mumkin, bu esa materiallarning mustahkamligi va ishlov berish jarayonlarida muhim omil hisoblanadi.

1. Elastik deformatsiya
Elastik deformatsiya – bu materialning tashqi kuchlar ta'sirida o'z shaklini o'zgartirishi, ammo kuch olib tashlangach, materialning eski holatiga qaytishi jarayonidir. Bu deformatsiya turida material o'zining original shaklini va o'lchamini saqlaydi, faqat vaqtinchalik o'zgarishlar yuz beradi. Elastik deformatsiya materialning haroratiga, unga ta'sir etayotgan kuchning intensivligiga va uning tabiiy xususiyatlariga bog'liq.

Masalan, elastik materiallar, masalan, kauchuk yoki po'lat, kuchlarga duchor bo'lganda, o'z shaklini o'zgartiradi, ammo kuch olib tashlangach, asl holatiga qaytadi. Elastik deformatsiya materiallar uchun xavfsiz bo'lib, ular uzoq vaqt davomida o'zining mexanik xususiyatlarini saqlab qoladi. Bu turdagi deformatsiya Hooke qonuni bilan tavsiflanadi, unda materialning deformatsiyasi kuch bilan proporsional bo'ladi.

Misol: Temir simni tortganda, u cho'ziladi va shaklini o'zgartiradi, ammo tortish kuchi olib tashlanganda, sim yana dastlabki holatiga qaytadi.

2. Plastik deformatsiya
Plastik deformatsiya – bu materialning tashqi kuchlar ta'sirida o'z shaklini o'zgartirishi va kuch olib tashlangach, uning boshlang'ich holatiga qaytmasligi jarayonidir. Bunday deformatsiyada materialning struktura va shakli o'zgaradi, va u o'zgarishlarni doimiy saqlab qoladi. Plastik deformatsiya ko'pincha materiallarning uzilishiga, shikastlanishiga yoki yorilishiga olib keladi.

Plastik deformatsiya materialning "yuk ko'tarish" qobiliyatiga bog'liq bo'lib, bu turdagi deformatsiya materialning o'ziga xos xususiyatlariga (masalan, qattiqligi va mustahkamligi) asoslanadi. Agar kuch juda katta bo'lsa, material plastik deformatsiyaga uchraydi va uning shakli o'zgara boshlaydi. Plastik deformatsiya energiya saqlanmaydi, balki materialning strukturasiga aylanadi.

Misol: Poyabzalning po'latdan yasalgan tagligi vaqt o'tishi bilan o'z shaklini o'zgartirib, deformatsiyalanadi, bu esa uzoq vaqt davomida chidamliligi va sifatini yo'qotishiga olib keladi.

3. Buzilish (Yorilish)
Buzilish yoki yorilish – bu materialning tashqi kuchlar ta'sirida, uning yuzasida yoki ichki qismlarida sezilarli yoriqlar va uzilishlar paydo bo'lishi jarayonidir. Buzilish odatda materialning plastik deformatsiya bosqichidan keyin sodir bo'ladi. Bu hodisa materialning mustahkamligi va elastik chegarasini oshib ketganida yuzaga keladi. Buzilish kuchi materialning struktura va ulkan kuchlarga qarshiligiga bog'liq.

Buzilish natijasida material to'liq bo'laklarga ajralishi yoki bir joydan uzilishi mumkin. Yorilish materiali uchun oxirgi bosqichdir va bu holatda materialning mexanik xususiyatlari butunlay o'zgaradi.

Misol: Temir yo'llaridagi temir poyezdlar ko'pincha juda katta yuklarga duchor bo'lishadi, bu esa materialning buzilishiga olib kelishi mumkin.

4. Ko'rik (Kompressiya) Deformatsiyasi
Ko'rik deformatsiyasi – bu materialning siqilishiga, ya'ni kuchlarning materialni siqib, o'lchamlarini kichraytirishiga olib keladigan jarayondir. Bu turdagi deformatsiya ko'proq yumshoq va elastik materiallarda uchraydi, lekin ba'zida qattiq materiallarda ham ko'rish mumkin. Masalan, zanglamaydigan po'latdan yasalgan struktura yuzasida kompressiya kuchlari materialning qalinligini o'zgartirishi mumkin.

Misol: Qattiq plastmassa yoki rezina buyumlarni siqib, shaklini o'zgartirish mumkin.

5. Kengayish Deformatsiyasi
Kengayish deformatsiyasi – bu materialning tashqi kuchlar ta'sirida kengayishi yoki cho'zilishidir. Bu turdagi deformatsiya materiallarning uzilish chegarasidan oldin yuz beradi. Material kengayganda uning o'lchamlari o'zgaradi va bu ko'proq cho'zilish kuchlari bilan bog'liq bo'ladi. Ba'zi materiallar, masalan, metall yoki simlar, kengayishdan o'tganidan keyin o'z shaklini tiklashi mumkin, ammo ba'zi hollarda bu doimiy o'zgarishlarga olib keladi.

Misol: Temir simni tortishda, u cho'ziladi va uzunligi ortadi.

Xulosa
Deformatsiya – bu materiallarning tashqi kuchlarga bo'lgan reaktsiyasini o'rganish uchun muhim bir tushuncha. Har bir material o'ziga xos deformatsiya turlarini namoyon qiladi, va bu turdagi o'zgarishlar uning mexanik xususiyatlari, ishlov berish va qo'llanish sohasiga ta'sir ko'rsatadi. Elastik, plastik, buzilish va boshqa deformatsiya turlari har biri o'ziga xos muhandislik va ilmiy masalalarni hal qilishda qo'llaniladi. Deformatsiya jarayonlarini to'g'ri tushunish va hisobga olish, materiallar tanlash va konstruktsiya dizaynini yaratishda muhim ahamiyatga ega.

    Deformatsiya turlari:
    1. Elastik deformatsiya:
       • Tashqi kuch olingandan so'ng jism o'z holatiga qaytadi
       • Guk qonuniga bo'ysunadi
       • Energiya saqlanadi

    2. Plastik deformatsiya:
       • Tashqi kuch olingandan so'ng jism o'z holatiga qaytmaydi
       • Qoldiq deformatsiya hosil bo'ladi
       • Energiya sarflanadi

    Kuchlanish va deformatsiya orasidagi bog'lanish:
    • Guk qonuni
    • Elastiklik moduli
    • Puasson koeffitsienti
    `
  },
  '3': {
    title: "Cho'zilish va siqilish",
    content: `Metallar – bu materiallar, odatda, yuqori mexanik kuchlarga, issiqlikka va korroziyaga qarshi chidamliligi bilan tanilgan. Ularning tashqi kuchlar ta'sirida qanday o'zgarishi va deformatsiyalanishi, ayniqsa, cho'zilish va siqilish kabi jarayonlar metallarning mexanik xususiyatlarini tushunish uchun juda muhimdir. Cho'zilish va siqilish metallar uchun asosiy deformatsiya turlaridan bo'lib, ular materiallarning mustahkamligi, chidamliligi va ishlash muddatini belgilashda katta ahamiyatga ega.

1. Cho'zilish (Tortish) Deformatsiyasi
Cho'zilish – bu materialning tashqi kuchlar ta'sirida uzunligini oshirish jarayonidir. Cho'zilish ko'proq metallarning elastik va plastik deformatsiya bosqichlarida yuzaga keladi. Tortish kuchlari ta'sirida metallning shakli o'zgaradi va uning uzunligi ortadi. Cho'zilish jarayoni ko'pincha metallning kuchli elastik xususiyatlariga ega ekanligini ko'rsatadi. Biroq, kuch bir muncha vaqt davomida davom etsa, metal plastikka o‘tadi va deformatsiya doimiy bo‘lishi mumkin.

Metallar cho'zilganda, ular o'zining ichki strukturasi bo'ylab kuchlarni tarqatadi. Cho'zilish jarayonida metallning kristall tuzilmasida o'zgarishlar yuz beradi, ya'ni kristall panjaralari o'zaro siljiydi. Bu jarayon “dislokatsiya” deb ataladi va metallning sifatiga ta'sir qiladi. Yuqori sifatli metallar, masalan, po'lat yoki alyuminiy, cho'zilish jarayonida kuchli elastiklikni saqlab qoladi, ammo ba'zi metallar, masalan, zanglagan po'lat, kamroq cho'ziluvchan bo'lishi mumkin.

Misol: Po'lat simni tortganda, uning uzunligi ortadi. Agar kuch yetarlicha katta bo'lsa, po'latning o'zi uzilib ketadi, ammo kichik kuchlar ta'sirida sim elastik xususiyatlarini saqlab qoladi va eski holatiga qaytadi.

Cho'zilishning maxsus xususiyati shundaki, u metallning kuchini oshirishga yordam beradi. Ayniqsa, konstruktiv materiallar sifatida ishlatiladigan po'lat simlar va boshqa metallar cho'zilish jarayonida mustahkamlikni saqlaydi.

2. Siqilish (Kompressiya) Deformatsiyasi
Siqilish – bu materialning tashqi kuchlar ta'sirida uzunligini qisqartirish yoki o'lchamini kichraytirish jarayonidir. Bu deformatsiya ko'proq metallarni siqilish kuchi ostida ishlatish paytida yuzaga keladi. Siqilish jarayonida materialning yuzasi yoki ichki strukturasida kuchli o'zgarishlar bo'lishi mumkin. Siqilish kuchlari materialning o'zgarishiga olib keladi, lekin bu ko'proq qattiq va elastik metallar uchun xosdir.

Metallar siqilish jarayonida kristall panjarasida siqilishning o'ziga xos o'zgarishlari yuzaga keladi. Siqilish kuchlari materialning kristall panjarasini siqib, o'zgarishga olib kelishi mumkin. Siqilish jarayonida metallning ichki qismlari qattiq va siqilgan holatga o'tadi, bu esa materialning kuchli qarshiligini oshiradi.

Misol: Zanglamas po'latdan yasalgan elementlar, masalan, qurilish konstruksiyalarida ishlatiladigan qalin po'lat panellar, siqilish kuchlari ta'sirida o'z holatini o'zgartirishi mumkin. Shu bilan birga, siqilish metallar uchun juda muhim ahamiyatga ega, chunki bu ko'pincha materialning barqarorligini ta'minlaydi.

Siqilish jarayoni metallar uchun ko'plab sanoat sohalarida qo'llaniladi. Masalan, avtomobilsozlikda va aviatsiyada, metallar siqilish kuchlariga dosh berish uchun mo'ljallangan. Siqilish va cho'zilishning birgalikdagi ta'siri ko'pincha materiallarning chidamliligini oshirishga yordam beradi, bu esa ularga uzoq muddatli va xavfsiz ishlash imkoniyatini yaratadi.

3. Cho'zilish va Siqilishning Mexanik Xususiyatlarga Ta'siri
Metallar uchun cho'zilish va siqilish jarayonlari materialning mexanik xususiyatlarini belgilashda muhim rol o'ynaydi. Cho'zilish va siqilishning o'zaro ta'siri metallning elastik va plastik xususiyatlariga, shuningdek, materialning uzilish kuchiga ta'sir qiladi. Cho'zilish jarayonida metall uzunligining ortishi uning materialiga qo'shimcha kuch qo'shadi, siqilish jarayonida esa material qisqaradi va uning kuchi oshadi.

Shuningdek, metallarni cho'zish va siqish jarayonida kuzatiladigan deformatsiyalar materiallarning qayta ishlanishi va qayta ishlash uchun juda muhimdir. Metallarni cho'zish yoki siqish orqali ularning xususiyatlarini o'zgartirish mumkin, masalan, metallning qat'iyligi yoki elastikligini oshirish yoki kamaytirish.

Misol: Po'latni cho'zish orqali, uning mustahkamligi va elastikligi oshadi, natijada po'latdan yasalgan materiallar mustahkamroq bo'ladi. Ammo siqilish jarayonida, masalan, po'lat plitalarni siqish orqali, ularning kuchi oshadi, ammo elastiklik darajasi kamayishi mumkin.

Xulosa
Metallar uchun cho'zilish va siqilish – bu materiallarning deformatsiya jarayonlarining asosiy turlari bo'lib, ular metallarning mexanik xususiyatlarini aniqlashda muhim ahamiyatga ega. Cho'zilish jarayoni metallning elastik xususiyatlarini oshirib, uning uzunligini orttirishga olib keladi, siqilish esa materialning kuchini oshiradi va uning o'lchamini kichraytiradi. Har ikkala jarayon metallarni qurilish, avtomobilsozlik, aerokosmik sanoat kabi ko'plab sohalarda ishlatishda ahamiyatli rol o'ynaydi. Metallarni tanlash va ularga ta'sir etadigan kuchlarni hisobga olishda cho'zilish va siqilish jarayonlarini to'g'ri tushunish materiallarning mustahkamligi va xavfsizligini ta'minlashda muhimdir..

    Cho'zilishda:
    • Namuna uzunligi ortadi
    • Ko'ndalang kesim yuzi kichrayadi
    • Hajm deyarli o'zgarmaydi

    Siqilishda:
    • Namuna uzunligi qisqaradi
    • Ko'ndalang kesim yuzi kattalashadi
    • Hajm deyarli o'zgarmaydi

    Guk qonuni:
    σ = E * ε
    Bu yerda:
    σ - kuchlanish
    E - elastiklik moduli
    ε - nisbiy deformatsiya
    `
  },
  '4': {
    title: "Po'latning mexanik xossalari",
    content: `Po'lat — bu metallurgiya sanoatining eng muhim va keng tarqalgan materiallaridan biridir. Uning mexanik xossalari turli sohalarda, jumladan, qurilish, transport, aviatsiya, energetika, va boshqa sanoat tarmoqlarida keng qo'llaniladi. Po'latning mexanik xossalari uning mustahkamligi, elastikligi, plastiklik darajasi va uzilishga chidamliligi kabi xususiyatlarni o'z ichiga oladi. Ushbu xususiyatlar po'latni turli vazifalar uchun moslashtirishga imkon beradi, shuning uchun po'lat metallining o'rganilishi va tushunilishi sanoatning rivojlanishi uchun juda muhimdir.

1. Po'latning Qattiqligi va Mustahkamligi
Po'latning eng asosiy mexanik xossalaridan biri uning qattiqligi va mustahkamligidir. Qattiqlik – bu materialning tashqi kuchlarga qarshi turish qobiliyati, mustahkamlik esa materialning uzilishdan oldin eng katta kuchni qabul qilish qobiliyatini bildiradi. Po'lat qattiqligi va mustahkamligi bo'yicha boshqa ko'plab materiallarga nisbatan yuqori ko'rsatkichlarga ega.

Po'latning mustahkamligi, asosan, uning tarkibidagi uglerod miqdoriga va ishlab chiqarish jarayoniga bog'liq. Yuqori uglerodli po'latlar, masalan, zanglamaydigan po'lat yoki qurilish po'latlari, yuqori mustahkamlikka ega bo'ladi, lekin ular plastiklikni yo'qotishi mumkin. Po'latning mustahkamligi yuqori kuchlarga bardosh bera olish qobiliyatini ta'minlaydi, bu esa uni qurilish sanoati, ko'priklar, yuqori balandlikdagi inshootlar va avtomobillarda ishlatishga imkon beradi.

Misol: Po'latdan yasalgan arqonlar yoki simlar, ular og'ir yuklarni ko'tarishda va uzun muddat davomida ishlatishda mustahkamlik va qattiqlikni ta'minlaydi.

2. Po'latning Elastiklik Xususiyatlari
Po'latning elastikligi — bu materialning tashqi kuchlarga ta'sir qilib, deformatsiyalanishidan so'ng, o'z shaklini qayta tiklash qobiliyatidir. Po'latning elastik xususiyatlari uni ko'plab mexanik tizimlarda, masalan, qurilish konstruktsiyalarida yoki transport vositalarida ishlatish uchun mos qiladi. Elastik xususiyatlar materialning ichki strukturasi va unga ta'sir qilayotgan kuchning kattaligiga qarab o'zgaradi. Po'latda elastik deformatsiya yuz beradi, ya'ni tashqi kuchlar olib tashlanganidan so'ng, material boshlang'ich holatiga qaytadi. Biroq, elastik xususiyatlar faqat kuch ma'lum bir chegarada bo'lsa saqlanadi, agar kuch ortib ketsa, po'lat plastik deformatsiyaga o'tadi.

Misol: Po'latdan yasalgan simni tortganda, u elastik xususiyatlaridan foydalanib, o'z shaklini o'zgartiradi va keyin asl holatiga qaytadi.

3. Po'latning Plastiklik va Deformatsiya Xususiyatlari
Po'latning plastiklik darajasi uning tashqi kuchlarga ta'sirida shaklini o'zgartirishi, ammo kuch olib tashlangach, boshlang'ich holatiga qaytmasligi xususiyatini bildiradi. Po'lat, o'zining plastiklik darajasiga qarab, yuqori siqilish va cho'zilish kuchlarini o'zida saqlab, murakkab shakllarga osonlik bilan o'zgartirishga imkon beradi. Po'latning plastiklik xususiyatlari uning ishlab chiqarilish jarayonida, xususan, isitish va sovutish jarayonlari orqali aniqlanadi.

Yuqori plastiklikka ega bo'lgan po'latlar ko'proq ishlov berish va qayta ishlashda qulay bo'ladi, chunki ular yengil o'zgarishlarga moslashishi mumkin. Po'latni plastiklikka yo'naltirish uning shaklini osongina o'zgartirishni ta'minlaydi, bu esa materialni turli dizayn va konstruktsiyalarda ishlatishga imkon beradi.

Misol: Po'latdan yasalgan qozon yoki idishlarni shakllantirishda po'latning plastiklik xususiyati ishlatiladi, chunki bu materialni osonlik bilan istalgan shaklda presslash yoki kesish mumkin.

4. Po'latning Uzilish Kuchlari
Po'latning uzilish kuchi – bu materialning o'zining tashqi kuchlar ta'sirida to'liq buzilishiga yoki yorilishiga olib keladigan maksimal kuchdir. Po'latda uzilish kuchi materialning tarkibiga, xususan, uglerod va boshqa legirlangan elementlarga bog'liq. Po'latni uzilish nuqtasida o'lchash materialning ishlash imkoniyatlarini va uning uzoq muddat davomida bardosh bera olish qobiliyatini aniqlashda yordam beradi. Po'latning uzilish kuchi, uning ishlash sharoitlariga qarab, yuqori yoki past bo'lishi mumkin. Metallurgik ishlab chiqarishda uzilish kuchi po'latning sifatini aniqlashda muhim rol o'ynaydi.

Misol: Aviatsiya sanoatida po'lat materiallari, masalan, samolyot qismlarida, yuqori uzilish kuchiga ega bo'lishi kerak, chunki ular og'ir yuklarni va kuchlarni ko'tarishi zarur.

5. Po'latning Termik Xususiyatlari
Po'latning termik xususiyatlari uning mexanik xususiyatlariga ta'sir qiladi. Po'lat yuqori haroratda metallning mustahkamligini va elastikligini saqlashda yordam beradigan qobiliyatga ega. Bu xususiyat po'latni yuqori haroratda ishlov berish, isitish yoki quvvatlashtirish uchun qulay qiladi. Po'latning termik xususiyatlarini boshqarish orqali uning ishlash muddatini va mexanik xususiyatlarini optimallashtirish mumkin.

Misol: Po'latni qizdirish va sovutish jarayonlari orqali uning qattiqligi oshiriladi, bu esa materialning mustahkamligini va uzoq muddatli ishlashini ta'minlaydi.

Xulosa
Po'latning mexanik xossalari uning sanoatdagi keng qo'llanilishi uchun juda muhimdir. Po'latning qattiqligi, mustahkamligi, elastikligi, plastiklik darajasi va uzilish kuchlari uning turli sohalarda ishlashini ta'minlaydi. Po'latning sifatini va mexanik xususiyatlarini o'rganish, uning turli tarmoqlarda ishlatilishini samarali boshqarish uchun zarurdir. Po'latning yuqori mustahkamligi va plastiklik xususiyatlari uni qurilish, avtomobilsozlik, aviatsiya va boshqa sanoat sohalarida qo'llashni qulaylashtiradi. Po'latning mexanik xossalarini yaxshilash va moslashtirish orqali, uning ishlash imkoniyatlarini kengaytirish va sifatini oshirish mumkin.:

    1. Mustahkamlik:
       • Cho'zilishga mustahkamlik
       • Siqilishga mustahkamlik
       • Egilishga mustahkamlik
       • Buralishga mustahkamlik

    2. Qattiqlik:
       • Brinel bo'yicha
       • Rokvell bo'yicha
       • Vikkers bo'yicha

    3. Plastiklik:
       • Nisbiy uzayish
       • Nisbiy torayish
       • Plastiklik koeffitsienti

    4. Zarbga chidamlilik:
       • Zarb energiyasi
       • Zarbiy qovushqoqlik
    `
  },
  '5': {
    title: "Po'latning tuzilishi va xossalari",
    content: `Po'lat – bu metallurgiya sanoatining eng muhim materiallaridan biri bo'lib, o'zining ajoyib mexanik va fizikal xossalari bilan mashhurdir. Po'latning tuzilishi va xossalari uning qanday ishlashini va turli sohalarda qo'llanilishini belgilovchi asosiy omillardir. Po'latning tarkibi va strukturasini yaxshilab tushunish, uni qanday ishlatish va qanday xususiyatlarga ega ekanligini bilish, sanoatning har bir sohasida samarali va xavfsiz ishlov berish uchun zarurdir.

1. Po'latning Tuzilishi
Po'lat – bu temir va uglerodning asosiy komponenti bo'lib, unga boshqa elementlar ham qo'shilishi mumkin. Po'latning asosiy tarkibi temirdan tashkil topgan, ammo unga uglerod qo'shilgan. Uglerod miqdori po'latning xossalarini belgilovchi muhim faktor hisoblanadi. Po'latning tarkibi turlicha bo'lishi mumkin, bu esa uning turli xossalarini va ishlatilish sohalarini aniqlaydi.

Po'lat tarkibida quyidagi asosiy komponentlar mavjud:

Temir (Fe) – po'latning asosiy komponenti bo'lib, uning mexanik xossalarini belgilaydi.
Uglerod (C) – uglerod po'latning qattiqligini va mustahkamligini oshiradi. Po'latda uglerod miqdori 0.05% dan 2.0% gacha bo'lishi mumkin. Uglerodning miqdori ortgan sari, po'lat qattiqroq bo'ladi, ammo plastiklik va cho'zilish xususiyatlari kamayadi.
Legirlovchi elementlar – po'latning tuzilishiga qo'shiladigan boshqa elementlar, masalan, xrom (Cr), nikel (Ni), molibden (Mo), vanadiy (V), va boshqa metalldir. Ushbu elementlar po'latning o'ziga xos xususiyatlarini, masalan, korroziyaga qarshilik, mustahkamlik va elastiklikni oshirish uchun qo'shiladi.
Po'latning tuzilishi ko'plab kristall panjalardan iborat bo'lib, bu panjaralar temirning kristall tuzilmasini tashkil etadi. Po'latda metallarning tarkibi va tuzilishi mikroskopik darajada farq qiladi, bu esa uning mexanik va fizik xossalarini bevosita ta'sir qiladi.

2. Po'latning Mexanik Xossalari
Po'latning mexanik xossalari uning qattiqligi, mustahkamligi, plastiklik darajasi, elastikligi va uzilish kuchidan iborat. Ushbu xossalar po'latning qaysi sohada ishlatilishini va uning qanday ishlashini belgilaydi. Po'latning mexanik xossalarini tushunish, uni turli sanoat tarmoqlarida samarali ishlatish imkonini beradi.

a) Qattiqlik
Po'latning qattiqligi – bu materialning tashqi kuchlarga qarshi turish qobiliyatidir. Po'latda qattiqlik yuqori bo'lsa, u yuqori yuklarni ko'tara olish qobiliyatiga ega bo'ladi. Qattiqlik odatda materialning yuqori uglerod miqdori va legirlovchi elementlar bilan bog'liq. Yuqori qattiqlik, ayniqsa, asboblar, kesuvchi asboblar va yengil qurilish materiallarida talab qilinadi.

b) Mustahkamlik
Po'latning mustahkamligi – bu materialning tashqi kuchlarga qarshi qanday reaksiya berishi va uzilishdan oldin qabul qiladigan maksimal kuchdir. Po'latning mustahkamligi yuqori bo'lsa, u uzoq vaqt davomida kuchli yuklarni ko'tara olish imkoniyatiga ega. Mustahkam po'lat ko'pincha qurilish va muhandislik sohalarida ishlatiladi.

c) Plastiklik
Po'latning plastiklik darajasi uning deformatsiya qilish qobiliyatini bildiradi. Plastiklik po'latning tashqi kuchlar ta'sirida shaklini o'zgartirishi, ammo kuch olib tashlangandan keyin materialning asl holatiga qaytmasligi xususiyatini anglatadi. Yuqori plastiklik materiallarni osonlik bilan shakllantirish va ishlov berish imkonini beradi. Po'latning plastiklik darajasi uglerod miqdori va legirlovchi elementlarning ta'siri ostida o'zgaradi.

d) Elastiklik
Po'latning elastikligi – bu materialning tashqi kuchlar ta'sirida o'z shaklini o'zgartirishi va kuch olib tashlangach, asl holatiga qaytishi qobiliyatidir. Po'latda elastik deformatsiya yuz beradi, bu uning yuklarni ko'tara olish qobiliyatini oshiradi. Elastik xususiyatlar po'latni yuqori sifatli va uzoq muddatli ishlashga imkon beradi.

e) Uzilish Kuchlari
Po'latning uzilish kuchi – bu materialning o'ziga ta'sir qilayotgan maksimal kuchni qabul qilish nuqtasidir. Po'latning uzilish kuchi materialning struktura va tarkibiga qarab o'zgaradi. Po'latni ishlab chiqarishda uzilish kuchi ko'plab sinovlardan o'tkaziladi, bu esa materialning ishlash sharoitlarida qanday xatti-harakat qilishini aniqlashga yordam beradi.

3. Po'latning Termik Xossalari
Po'latning termik xossalari ham uning ishlashiga katta ta'sir ko'rsatadi. Po'lat yuqori haroratda o'zining mexanik xossalarini o'zgartirishi mumkin, bu esa materialni ishlab chiqarish jarayonida juda muhim hisoblanadi. Po'latni qizdirish va sovutish jarayonlari uning tuzilishini o'zgartirib, materialning qattiqligini, plastiklik darajasini va elastikligini boshqarishga yordam beradi.

Misol: Po'latni isitish va keyin sovutish orqali uning qattiqligini oshirish mumkin. Po'latning temirga nisbatan yuqori erish harorati materialning yaxshi ishlov berish va uzoq muddat ishlash imkoniyatini beradi.

4. Po'latning Korroziyaga Qarshiligi
Po'latning korroziyaga qarshiligi uning tuzilishi va tarkibiga bog'liq. Ba'zi po'lat turlari, masalan, zanglamaydigan po'lat, korroziyaga qarshi yuqori chidamlilikka ega. Legirlovchi elementlar, masalan, xrom va nikel, po'latni korroziyaga qarshi mustahkamlashga yordam beradi. Korroziyaga chidamli po'latlar ko'pincha kimyo sanoati, neft sanoati va boshqa agressiv muhitalarda ishlatiladi.

Xulosa
Po'latning tuzilishi va xossalari uning sanoatda keng qo'llanilishiga imkon beradi. Po'latning mexanik xossalari, jumladan, qattiqligi, mustahkamligi, elastikligi, plastiklik darajasi va uzilish kuchi materialning turli sohalarda ishlashini ta'minlaydi. Po'latning tuzilishi va tarkibidagi o'zgarishlar uning xossalarini shakllantiradi va bu materialni turli maqsadlar uchun moslashtirish imkonini beradi. Po'latni ishlab chiqarish va uning sifatini boshqarish uchun uning tuzilishini va xossalarini yaxshi tushunish juda muhimdir.:
    • Kubik markazlashgan
    • Kubik qirrali markazlashgan
    • Geksagonal

    Fazaviy o'zgarishlar:
    1. Austenit (γ-temir)
    2. Ferrit (α-temir)
    3. Sementit (Fe3C)
    4. Perlit

    Termik ishlov turlari:
    • Toblash
    • Bo'shatish
    • Normallash
    • Yumshatish
    `
  },
  '6': {
    title: "Mexanik sinovlar",
    content: `Po'lat — qurilish, avtomobilsozlik, energetika, aviatsiya va boshqa ko'plab sanoat tarmoqlarida keng qo'llaniladigan material bo'lib, uning mexanik xossalarini aniqlash va baholash uchun maxsus sinovlar o'tkazish zarur. Po'latning mexanik xossalari, masalan, qattiqligi, mustahkamligi, elastikligi, plastiklik darajasi va uzilish kuchi, uning turli muhandislik ilovalarida qanday ishlashini va qaysi sharoitlarda foydalanishni belgilaydi. Shuning uchun po'latning mexanik xossalarini o'lchash va sinash sanoatning sifatli va xavfsiz materiallar bilan ta'minlanishini kafolatlashda muhim ahamiyatga ega.

Po'latda amalga oshiriladigan mexanik sinovlar uning sifatini tekshirish, ishlab chiqarish jarayonida yuzaga kelgan nuqsonlarni aniqlash va materialning ishlash xususiyatlarini oldindan baholash imkonini beradi. Mexanik sinovlar orqali po'latning qaysi sharoitda ishlashini aniqlash va unga mos dizaynlar yaratish mumkin.

1. Po'latda Sinovlar O’tkazishning Ahamiyati
Po'latni sinash jarayoni uning ishlash sharoitlarini tushunishga va maqsadga muvofiq material tanlashga yordam beradi. Masalan, po'latning qat'iyligi, mustahkamligi va elastikligini bilish, uni noto'g'ri ishlatishdan oldin to'g'ri baholashni ta'minlaydi. Shuningdek, mexanik sinovlar po'lat materialining ishonchliligini va uzoq muddat ishlashini tekshiradi. Bu sinovlar ishlab chiqarish jarayonida yuzaga keladigan kichik nosozliklar va muammolarni aniqlash, material sifatini nazorat qilish va xavfsiz foydalanishni ta'minlashda yordam beradi.

Po'latdagi mexanik sinovlar, shuningdek, quyidagi maqsadlar uchun amalga oshiriladi:

Po'latning sifatini va xususiyatlarini tekshirish.
Po'latning turli muhitlarda qanday ishlashini oldindan bilish.
Po'latni ishlab chiqarish jarayonida yuzaga kelgan nuqsonlarni aniqlash.
Po'latning ishonchliligi va uzoq muddatli ishlashini baholash.
2. Po'latda O'tkaziladigan Mexanik Sinovlar
Po'latning mexanik xossalarini o'lchash va baholash uchun turli xil sinovlar mavjud. Quyida po'latda eng ko'p qo'llaniladigan mexanik sinovlarning ayrimlari keltirilgan:

a) Tortish (Cho'zilish) Sinovi
Tortish sinovi, yoki cho'zilish sinovi, po'latning tashqi kuchlarga qarshi qanday reaksiya berishini tekshiradi. Bu sinovda po'lat namunasi tortiladi va uning uzunligi qanday o'zgarishi, qaysi nuqtada uzilish ro'y berishi o'lchanadi. Tortish sinovi po'latning mustahkamligini, elastikligini va uzilish kuchini aniqlashda muhim rol o'ynaydi. Sinovda po'latning elastik va plastik deformatsiyasi o'rganiladi. Tortish sinovida material uzilib ketadigan joyda qat'iylik va plastiklik o'zgaradi, bu po'latning foydalanish sharoitlariga mos kelishini aniqlashga yordam beradi.

Misol: Po'lat simining cho'zilish sinovi orqali uning necha kilogramm yuk ostida uzilishi mumkinligi aniqlanadi, bu uning sanoatdagi xavfsizligini ta'minlashga yordam beradi.

b) Siqilish (Kompressiya) Sinovi
Siqilish sinovi po'latning siqilish kuchlariga qanday ta'sir qilishini aniqlash uchun o'tkaziladi. Bu sinovda po'lat namunasi siqiladi va uning o'lchamidagi o'zgarishlar o'lchanadi. Po'latni siqish orqali uning elastik va plastik xossalari, siqilish kuchiga qarshi turish qobiliyati va materialning uzilish nuqtasi aniqlanadi. Siqilish sinovi materialning mustahkamligini va deformatsiya qilinishdagi xususiyatlarini tekshiradi.

Misol: Po'latdan yasalgan qurilish materiallari, masalan, po'lat kolonka yoki po'lat plitalarning siqilish sinovlari, ularning ko'tara olish qobiliyatini aniqlashda muhimdir.

c) Bükülüş Sinovi
Bükülüş sinovi po'lat materialining deformatsiya qilish va plastika holatiga o'tish darajasini aniqlash uchun o'tkaziladi. Bu sinovda po'lat namunasi buklanadi va uning shakli o'zgaradi. Po'latning buklanishdagi elastiklik xususiyatlari va plastiklik darajasi aniqlanadi. Bükülüş sinovi orqali materialning qaysi sharoitda ishlashiga mosligini bilish mumkin.

Misol: Po'latdan yasalgan konstruktsiyalar, masalan, ko'priklar yoki binolarni buklanish sinovi yordamida tekshirib, ularning elastik va plastiklik xususiyatlarini baholash mumkin.

d) Suyak Sinovi (Vickers, Rockwell, Brinell)
Po'latning qattiqligini o'lchash uchun suyak sinovlari, masalan, Vickers, Rockwell va Brinell sinovlari o'tkaziladi. Ushbu sinovlar orqali materialning mustahkamligi va uning tashqi kuchlarga qarshi turish qobiliyati aniqlanadi. Suyak sinovlari materialning uzoq muddatli ishlashini va uning yuqori bosim va yuklarga chidamliligini ko'rsatadi.

Misol: Po'latning Vickers sinovi yordamida uning qattiqlik darajasi aniqlanadi va materialning qaysi sohada ishlatilishi mumkinligini baholash mumkin.

e) Chidamlilik Sinovi (Izotermal)
Chidamlilik sinovi po'latning termal ta'sirlarga qanday reaksiya berishini o'rganadi. Bu sinovda materialga yuqori haroratlar ta'sir qiladi va uning mexanik xossalari o'zgarishi o'rganiladi. Po'latning termal sifatlari, masalan, qattiqlik, mustahkamlik va elastiklik, issiqlik bilan qanday o'zgarishini bilish materialni yuqori haroratlarda ishlatish uchun zarur bo'ladi.

Misol: Po'latdan yasalgan qismlar, masalan, aviatsiya motori yoki avtomobil dvigatellarida yuqori haroratlarga chidamliligi tekshiriladi.

3. Po'latda Mexanik Sinovlarning Amaliy Ahamiyati
Po'latda mexanik sinovlar o'tkazish, materialning ishlash imkoniyatlarini va xavfsizligini ta'minlash uchun juda muhimdir. Sinovlar orqali po'latning kuchini, elastikligini, mustahkamligini va boshqa xossalarini bilish, uni turli sanoat sohalarida to'g'ri qo'llashni ta'minlaydi. Po'latda o'tkazilgan sinovlar ishlab chiqarish jarayonida yuzaga kelgan nosozliklarni aniqlash, materialning optimal sifatini nazorat qilish va ishlab chiqarishning samaradorligini oshirishda yordam beradi.

Shuningdek, mexanik sinovlar po'latning mustahkamligini va chidamliligini sinovdan o'tkazish orqali qurilish va transport sohalarida xavfsizlikni ta'minlashda muhim ahamiyatga ega. Po'latning turli sinovlar orqali o'lchangan xossalari, uning qayta ishlash, shakllantirish va ishlatish jarayonlarida qanday xatti-harakat qilishini aniqlashda yordam beradi.

Xulosa
Po'latda mexanik sinovlar o'tkazish materialning sifatini tekshirish va uning xossalarini aniqlashda muhim rol o'ynaydi. Tortish, siqilish, buklanish, suyak va chidamlilik sinovlari po'latning turli mexanik xossalarini o'lchash imkonini beradi, bu esa materialning xavfsizligini va uzoq muddatli ishlashini ta'minlaydi. Po'latning mexanik sinovlari, sanoatning turli sohalarida ishlatilishi uchun eng yaxshi materiallarni tanlashga yordam beradi, va shu bilan birga, yuqori sifatli va ishonchli mahsulotlar ishlab chiqarishga yordam beradi.:

    1. Statik sinovlar:
       • Cho'zilishga sinash
       • Siqilishga sinash
       • Egilishga sinash
       • Buralishga sinash

    2. Dinamik sinovlar:
       • Zarbiy sinash
       • Charchoq sinovlari
       • Tebranish sinovlari

    Standartlar:
    • GOST
    • ISO
    • ASTM
    • DIN
    `
  },
  '7': {
    title: "Qattiqlikni aniqlash",
    content: `Po'lat, metallurgiya sanoatida eng ko‘p ishlatiladigan materiallardan biri bo‘lib, uning mexanik xossalari, jumladan, qattiqligi, materialning ishlash sifatini va xavfsizligini belgilashda muhim rol o'ynaydi. Po'latning qattiqligi — bu uning tashqi kuchlarga qarshi turish qobiliyatini ifodalovchi asosiy mexanik xossadir. Po'lat materialining qattiqligi nafaqat uning uzoq muddatli ishlashini ta'minlash, balki uning ishlov berish jarayonlarini, jumladan, kesish, shakllantirish va qayta ishlashni ham boshqaradi. Shuning uchun po'latda qattiqlikni aniqlash, uning sifatini tekshirish va optimal ishlash imkoniyatlarini baholash uchun juda muhim hisoblanadi.

1. Po'latda Qattiqlik Nima?
Qattiqlik — bu materialning tashqi kuchlarga qarshi bardosh berish, ya'ni materialning deformatsiyasiz o'z shaklini saqlab qolish qobiliyatidir. Po'lat qattiqligi materialning yuzasiga bosim o‘tkazilganda qanday o‘zgarishlar yuz berishini, uning izchil ravishda deformatsiyalanmasdan qanday kuchlarga qarshi turish qobiliyatini ko‘rsatadi. Qattiqlikni o‘lchashda po‘lat materialining turli xususiyatlari, masalan, materialning uzilish kuchi, plastiklik va elastiklik darajasi hisobga olinadi.

Po'latda qattiqlikning yuqori darajasi materialning uzoq muddat ishlashini va yuqori yuklarni ko'tarish qobiliyatini oshiradi. Biroq, qattiqlikning ortishi ko‘pincha po‘latning plastiklik darajasini kamaytirishi va materialning deyarli uzluksiz bo'lishiga olib kelishi mumkin. Shu sababli, po'latda qattiqlikni aniqlashda uning elastiklik va plastiklik xususiyatlarini ham inobatga olish zarur.

2. Qattiqlikni Aniqlash Usullari
Po'latning qattiqligini aniqlash uchun bir nechta sinov usullari mavjud. Bu usullar materialning qattiqlik xususiyatlarini o'lchashda foydalaniladi va turli sinovlar orqali po'latning yukni ko'tarish qobiliyati va deformatsiyaga qarshi chidamliligi o‘lchanadi. Po'latda qattiqlikni aniqlash uchun eng keng tarqalgan usullar quyidagilardir:

a) Brinell Qattiqlik Sinovi
Brinell sinovi — bu po'lat va boshqa materiallarning qattiqligini o‘lchash uchun ishlatiladigan eng keng tarqalgan usullardan biridir. Bu sinovda materialning yuzasiga yuqori bosim ostida, odatda, po'latdan yasalgan qattiq shar (diametri 10 mm bo‘lgan) qo‘llaniladi. Bosim biror bir vaqt davomida materialga ta’sir qilgandan so‘ng, materialning yuzasida qolgan iz o‘lchanadi. Izning diametri orqali materialning qattiqligi aniqlanadi.

Brinell sinovining afzalligi shundaki, u katta va noaniq yuzaga ega materiallarga, jumladan po'lat plitalarga nisbatan qo‘llanilishi mumkin. U yuqori qattiqlikka ega bo‘lgan materiallarda ham o‘lchash imkonini beradi. Brinell ko‘rsatkichi HB bilan o‘lchanadi.

Misol: Po'latdan yasalgan ishlab chiqarish plitalarini sinovdan o‘tkazishda Brinell sinovi qo‘llaniladi, chunki u materialning qattiqlik darajasini aniq aniqlashga yordam beradi.

b) Rockwell Qattiqlik Sinovi
Rockwell sinovi, Brinell sinoviga qaraganda, tezroq va osonroq amalga oshiriladi. Bu sinovda materialning yuzasiga biror bir indenter (yani, kelingan nashr) bosiladi va uning qattiqligini o‘lchash uchun qattiqlikni qiymatini beradi. Rockwell sinovi ko‘plab variantlarga ega, jumladan Rockwell C va Rockwell B sinovlari, ular o‘z navbatida qattiq va yumshoq materiallar uchun turlicha qo‘llaniladi.

Rockwell sinovi osonlik bilan o‘lchanadi va materialning qattiqligini darajada ko‘rsatadi. Bu sinovning afzalligi shundaki, u tez-tez ishlatiladi va po'latning qattiqlik xususiyatlarini bir nechta variantlar orqali o‘lchash imkonini beradi.

Misol: Po'latdan yasalgan avtomobil qismlarini yoki qurilish elementlarini sinovdan o‘tkazishda Rockwell sinovi qo‘llaniladi, chunki u tez va samarali qattiqlikni aniqlash imkonini beradi.

c) Vickers Qattiqlik Sinovi
Vickers sinovi — bu po'lat va boshqa materiallarning qattiqligini o‘lchash uchun eng nozik sinovlardan biridir. Vickers sinovida diamond piramida shaklidagi indenter materialning yuzasiga bosiladi va bosimning orttirilishi bilan materialdagi iz o‘lchanadi. Ushbu sinov yuqori qattiqlikka ega bo‘lgan materiallarga, masalan, qotib qolgan po‘latlarga nisbatan ishlatiladi. Vickers sinovining o‘lchov natijalari HV (Vickers qattiqlik ko‘rsatkichi) bilan ifodalanadi.

Vickers sinovi, shuningdek, kichik qismlar va nozik yuzalar uchun ham mos keladi, chunki u materialning qattiqligini yuqori aniqlik bilan o‘lchash imkoniyatini beradi.

Misol: Po'latdan yasalgan kichik qismlarning qattiqligini tekshirishda, masalan, o‘lchov asboblari yoki mexanik qismlar uchun Vickers sinovi qo‘llaniladi.

3. Po'latda Qattiqlikning Amaliy Ahamiyati
Po'latning qattiqligi uning turli sohalarda ishlatilishini va ishlab chiqarish jarayonidagi samaradorligini belgilaydi. Po'latning qattiqligi materialning to'g'ri ishlov berilishi va yuqori yuklarga chidamliligi uchun zarurdir.

Qattiqlikni aniqlash, shuningdek, po'latning korroziyaga qarshiligini, ishlov berish osonligini va deformatsiyaga chidamliligini tekshirishda yordam beradi. Masalan, qattiq po'lat materiallari ko'pincha qurilish sanoatida, avtomobilsozlikda, aviatsiya va boshqa muhandislik sohalarida ishlatiladi, chunki ular uzoq muddatli ishlash uchun zarur bo'lgan mustahkamlikni ta'minlaydi.

Po'latning qattiqligi, shuningdek, materialni qayta ishlashda ham muhim ahamiyatga ega. Qattiqligi yuqori bo‘lgan po'latlar, ko'pincha, kesish va shakllantirish jarayonlarida qiyinchiliklar tug‘diradi, shuning uchun ishlab chiqarish jarayonini boshqarish uchun materialning qattiqlik darajasini bilish zarur.

4. Xulosa
Po'latda qattiqlikni aniqlash uning sifatini va xavfsizligini ta'minlash uchun juda muhimdir. Qattiqlikni o‘lchash orqali materialning mexanik xossalari haqida aniq ma'lumot olish mumkin, bu esa uning ishlash muddatini, mustahkamligini va deformatsiyaga chidamliligini baholashga yordam beradi. Brinell, Rockwell va Vickers sinovlari po'latda qattiqlikni aniqlashda eng keng qo‘llaniladigan usullardir va ularning har biri o‘zining afzalliklari va xususiyatlariga ega. Po'latda qattiqlikni aniqlash orqali uning qanday ishlashini oldindan bilish va kerakli sifatni ta'minlash mumkin, bu esa sanoatning rivojlanishida va xavfsizlikni ta'minlashda muhim omildir.:

    1. Brinel usuli:
       • Po'lat sharcha botirish
       • HB birlikda o'lchanadi
       • Yumshoq materiallar uchun

    2. Rokvell usuli:
       • Olmosli konus yoki po'lat sharcha
       • HRC va HRB shkalalar
       • Qattiq materiallar uchun

    3. Vikkers usuli:
       • Olmosli piramida
       • HV birlikda o'lchanadi
       • Universal usul
    `
  },
  '8': {
    title: "Charchoq mustahkamligi",
    content: `Charchoq - bu materialning davriy yuklanishlar ta'sirida yemirilishi.

    Charchoq nazariyasi:
    • Davriy kuchlanishlar
    • Kuchlanishlar amplitudasi
    • Charchoq chegarasi
    • Charchoq mustahkamligi

    Charchoq sinovi:
    1. Egilishda charchoq
    2. Buralishda charchoq
    3. Cho'zilish-siqilishda charchoq

    Charchoq mustahkamligiga ta'sir etuvchi omillar:
    • Sirt sifati
    • Detalning o'lchami
    • Kuchlanishlar konsentratsiyasi
    `
  },
  '9': {
    title: "Yuqori haroratdagi xossalar",
    content: `Yuqori haroratda materiallarning xulq-atvori:

    1. Mexanik xossalarning o'zgarishi:
       • Mustahkamlik pasayishi
       • Plastiklik ortishi
       • Elastiklik modulining kamayishi

    2. Creep hodisasi:
       • Doimiy kuchlanish ostida deformatsiyaning ortishi
       • Creep tezligi
       • Creep mustahkamligi
       • Uzoq muddatli mustahkamlik

    Yuqori haroratda ishlash sharoitlari:
    • Harorat chegaralari
    • Yuklanish rejimi
    • Muhit ta'siri
    `
  },
  '10': {
    title: "Kompozit materiallar",
    content: `Kompozit materiallar - ikki yoki undan ortiq materiallarning birikmasidan hosil bo'lgan yangi material.

    Kompozit turlari:
    1. Tolali kompozitlar:
       • Shisha tolali
       • Uglerod tolali
       • Aramid tolali

    2. Qatlamli kompozitlar:
       • Plastiklar
       • Metallokeramika
       • Bimetallar

    Qo'llanilish sohalari:
    • Aviatsiya
    • Avtomobilsozlik
    • Qurilish
    • Sport jihozlari
    `
  }
};

const LectureContent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const currentLecture = lectureContents[id as keyof typeof lectureContents];
  
  const currentId = parseInt(id || '1');
  const prevId = currentId > 1 ? currentId - 1 : null;
  const nextId = currentId < Object.keys(lectureContents).length ? currentId + 1 : null;

  if (!currentLecture) {
    return (
      <div className="min-h-screen pt-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Ma'ruza topilmadi</h1>
          <Link to="/lecture" className="text-accent hover:text-accent/80">
            Barcha ma'ruzalarga qaytish
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-secondary/50 backdrop-blur-sm rounded-lg p-8 mb-8"
        >
          <h1 className="text-3xl font-bold text-white mb-6">{currentLecture.title}</h1>
          <div className="prose prose-invert max-w-none">
            {currentLecture.content.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-300">
                {paragraph.trim()}
              </p>
            ))}
          </div>
        </motion.div>

        <div className="flex justify-between items-center mb-8">
          {prevId ? (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate(`/lecture/${prevId}`)}
              className="bg-accent px-6 py-3 rounded-lg text-white flex items-center hover:bg-accent/80 transition-colors"
            >
              <FaArrowLeft className="mr-2" />
              Oldingi mavzu
            </motion.button>
          ) : (
            <div></div>
          )}

          <Link to="/lecture">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-secondary px-6 py-3 rounded-lg text-white flex items-center hover:bg-secondary/80 transition-colors"
            >
              <FaList className="mr-2" />
              Barcha mavzular
            </motion.button>
          </Link>

          {nextId ? (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate(`/lecture/${nextId}`)}
              className="bg-accent px-6 py-3 rounded-lg text-white flex items-center hover:bg-accent/80 transition-colors"
            >
              Keyingi mavzu
              <FaArrowRight className="ml-2" />
            </motion.button>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LectureContent;
