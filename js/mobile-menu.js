(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-mobile-menu]");
  const mobileLogo = document.querySelector("[data-mobile-logo]");
  const mobileLinkSocial = document.querySelector("[data-mobile-social]");

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);
    mobileMenuRef.classList.toggle("is-open");
    mobileLogo.classList.toggle("is-open");
    mobileLinkSocial.classList.toggle("is-open");
    /*document.body.classList.toggle("is-open");*/
  });
})();
