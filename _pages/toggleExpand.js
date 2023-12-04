// JavaScript函数，用于切换展开内容的显示与隐藏
function toggleExpand() {
    var content = document.querySelector('.expand-content');
    var toggleBtn = document.querySelector('.expand-toggle');
    if (content.style.display === 'none') {
        content.style.display = 'block';
        toggleBtn.textContent = '收起';
    } else {
        content.style.display = 'none';
        toggleBtn.textContent = '展开';
    }
}