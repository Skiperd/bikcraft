const links = document.querySelectorAll(".header-menu a ");

function ativarLink(link) {
  const url = location.href;

  const href = link.href;

  console.log(url)
}


links.forEach(ativarLink);