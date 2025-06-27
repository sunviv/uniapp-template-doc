---
sidebar: false
aside: false
---

<style>
  html {
    overflow: hidden;
  }
  .mobile {
    margin: 0 auto;
    border: 1px solid #eee;
    border-radius: 30px;
    overflow: hidden;
    width: 375px; 
    display: flex;
    flex-flow: column nowrap;
    box-shadow: 0 14px 44px rgba(0, 0, 0, .12), 0 3px 9px rgba(0, 0, 0, .12);
  }
  .mobile-header {
    height: 40px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #eeeff2;
  }
  .mobile-header-icon {
    width: 65px;
    height: 10px;
    background: #c8c9cc;
    border-radius: 9px;
  }
  .mobile-main {
    flex: 1;
  }
  .mobile-main iframe {
    width: 375px;
    height: 667px;
    border: none;
  }

  .mobile-footer {
    flex-shrink: 0;
    height: 52px;
    background: #eeeff2;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .mobile-footer-icon { 
    width: 43px;
    height: 43px;
    background: #c8c9cc;
    border-radius: 50%;
  }
  /* .mobile::-webkit-scrollbar {
    display: none;
  } */
</style>

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
