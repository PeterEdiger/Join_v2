function headerTemplate(){
  return `
    <span id="header-text">Kanban Project Management Tool</span>
  <div id="help-icon-box">
    <img src="./assets/img/header_sidebar/logo_join_header.png" id="logo-join-header" alt="">
    <div class="help-icon-wrapper">
      <img src="./assets/img/header_sidebar/icon_help_grey.png" id="icon-help" alt="">
      <div id="circle" onclick="showLegalNoticeBubble()">
        <div class="legal-notice-bubble display-none">
          <a href="./legal_notice.html"class="legal-notice__bubble">Legal Notice</a>
          <a href="./privacy_policy.html"class="privacy-policy__bubble">Privacy Policy</a>
          <a class="log-out__bubble" onclick="logOutUser()">Log out</a>
        </div>
        <span class="user-initials"></span></div>
    </div>
    </div>
  </div>
  `
}