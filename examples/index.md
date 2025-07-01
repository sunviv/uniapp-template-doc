---
sidebar: false
aside: false
---

<style>
  .mobile {
    margin: 0 auto;
    width: 430px;
    height: 820px;
    background-image: url(../assets/phone.png);
    background-size: 100% 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
  }
  .mobile-header {
    height: 94px;
  }
 
  .mobile-main {
    flex: 1;
  }
  .mobile-main iframe {
    width: 375px;
    height: 100%;
    border: none;
  }

  .mobile-footer {
    flex-shrink: 0;
    height: 94px;
  }
  .flex {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  }
</style>

<div class="flex">
  <div class="mobile">
    <div class="mobile-header">
      <div class="mobile-header-icon"></div>
    </div>
    <div class="mobile-main">
      <iframe src="https://sunviv.github.io/uniapp-template" />
    </div>
    <div class="mobile-footer">
      <div class="mobile-footer-icon"></div>
    </div>
  </div>
  <img src="../assets/doc-code.png" style="width: 200px; height: 200px;" />
</div>
