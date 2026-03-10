/* =========================================
   Angie's Portfolio - Main JavaScript
========================================= */

// 等待整个网页的 HTML 加载完毕后再执行 JS（非常重要，防止找不到元素）
document.addEventListener("DOMContentLoaded", function() {
    
    // =========================================
    // 1. 图片点击放大功能 (Lightbox)
    // =========================================
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("modal-img");
    const images = document.querySelectorAll(".app-screen");

    // 如果页面上有这些元素，才执行绑定（防止在没有图片的页面报错）
    if (modal && modalImg) {
        // 给所有带有 app-screen 类的图片绑定点击事件
        images.forEach(img => {
            img.addEventListener("click", function() {
                modal.style.display = "flex"; // 显示黑底遮罩
                modalImg.src = this.src;      // 将被点击的图片路径放进放大框里
            });
        });

        // 点击遮罩层任何地方即可关闭
        modal.addEventListener("click", function() {
            modal.style.display = "none";
        });
    }

    // 以后你可以继续在这里添加新的功能逻辑...
    
});