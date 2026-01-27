// الموقع بالعربية فقط
// Arabic only site

// تثبيت اتجاه الصفحة RTL
(function() {
    document.documentElement.dir = 'rtl';
    document.documentElement.lang = 'ar';
})();

// تهيئة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    // التأكد من أن الاتجاه RTL
    document.documentElement.dir = 'rtl';
    document.documentElement.lang = 'ar';
});
