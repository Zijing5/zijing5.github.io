---
permalink: /
title: "💬Hello there, Zoe here!"

excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<div style="display: flex; flex-direction: row; align-items: center;">
  <div style="flex: 2;">
    👋 Greetings! I am a final-year graduate student at Harbin Institution of Technology, poised to embark on a new academic journey as a postgraduate student at Southeast University in the coming year.
    <br>
    ✍ Currently, I am diligently engaged in my Undergraduate Thesis, delving into the intricacies of 3D human motion generation within the realm of [specify your field or department]
    <br>
    ✨  My scholarly pursuits are deeply rooted in the expansive domain of Artificial Intelligence, where my profound interest thrives, and I continually seek opportunities for exploration and contribution.
  </div>
  <div style="flex: 1; text-align: center;">
    <img src="https://raw.githubusercontent.com/Zijing5/zijing5.github.io/master/images/home1.png" alt="home1" width="300">
  </div>
</div>




Experience
======
- **2020-2024**   Harbin Institute of Technology
- **2024-2027**   Southeast University




Publications
======
<!-- <!DOCTYPE html> -->
<html>
<head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <style>
        /* 定义展开内容的样式 */
        .expand-content {
            display: none; /* 默认隐藏 */
            padding: 10px;
            background-color: #f0f0f0;
        }
        /* 统一超链接样式 */
        a {
            color: blue;
            text-decoration: underline;
        }
    </style>
    <script>
        // JavaScript函数，用于切换展开内容的显示与隐藏
        function toggleExpand(){
            var content = document.querySelector('.expand-content');
            var toggleBtn = document.querySelector('.fa-ellipsis-v');
            if (content.style.display === 'none') {
                content.style.display = 'block';
                toggleBtn.textContent = '收起';
            } else {
                content.style.display = 'none';
                toggleBtn.textContent = '展开';
            }
        }
    </script>
</head>
<body>
    <!-- 这里是你的内容 -->
    <div class="publication" style="display: flex; align-items: center; margin-bottom: 20px;">
        <div class="publication-image" style="flex: 0 0 auto; margin-right: 20px;">
            <img src="https://raw.githubusercontent.com/Zijing5/zijing5.github.io/master/images/home2.png" style="max-width: 180px; height: auto;">
        </div>
        <div class="publication-text" style="flex: 1 1 auto;">
            <h2 style="margin-top: 0;">Imaging my paper lying here</h2>
            <p>This is my paper, yet it is not written in China. Actually it is from another nation ——— imagination.</p>
            <p>More details about my paper." <i>Journal 1</i>. 1(1).</p>
            <!-- <p><a href="http://academicpages.github.io/files/paper1.pdf">Download paper here</a></p> -->
            <p>
                <a href="http://academicpages.github.io/files/paper1.pdf">
                    <i class="fas fa-file-pdf"></i> Paper
                </a>
                <!-- 第一个额外的图标 -->
                <a href="第一个额外图标的链接" style="margin-left: 10px;">
                    <i class="fas fa-globe"></i> Webpage
                </a>
                <!-- 第二个额外的图标 -->
                <a href="第二个额外图标的链接" style="margin-left: 10px;">
                    <i class="fas fa-file-code"></i> Code
                </a>
                <a href="第二个额外图标的链接" style="margin-left: 10px;">
                    <i class="fas fa-book"></i> BibTex
                </a>
                <!-- 展开和收起内容的按钮 -->
                <a href="javascript:void(0);" onclick="toggleExpand()" style="margin-left: 10px;">
                    <i class="fas fa-ellipsis-v"></i> Abstract
                </a>
                <!-- 展开的内容 -->
                <div class="expand-content">
                    <p>Here is my abstract.</p>
                </div>
            </p>
        </div>
    </div>
</body>
</html>