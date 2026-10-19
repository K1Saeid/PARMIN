export const adminMenu=[
["داشبورد","/admin"],
["محصولات","/admin/products"],
["دسته‌بندی‌ها و ویژگی‌ها","/admin/categories"],
["سفارش‌ها","/admin/orders"],
["مشتریان","/admin/customers"],
["موجودی و تنوع‌ها","/admin/inventory"],
["تخفیف‌ها و کمپین‌ها","/admin/promotions"],
["محتوا و بنرها","/admin/content"],
["ارسال و پست","/admin/shipping"],
["پرداخت و تسویه","/admin/payments"],
["مرجوعی و خدمات پس از فروش","/admin/returns"],
["تنظیمات","/admin/settings"]
] as const;
export const shopMenu=[["خانه","/"],["زنانه","/women"],["مردانه","/men"],["یونیسکس","/unisex"],["انگشتر","/rings"],["گردنبند","/necklaces"],["دستبند","/bracelets"],["گوشواره","/earrings"],["ست هدیه","/gifts"],["مجله","/journal"]] as const;
export const money=(rial:bigint)=>new Intl.NumberFormat("fa-IR").format(rial/10n)+" تومان";
