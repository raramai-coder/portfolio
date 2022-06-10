function navigateTo(pageName) {
  let navLink = document.getElementById(pageName);

  switch (pageName) {
    case "home":
      navLink.href = "../index.html";
      break;
    case "about":
      navLink.href = "../about.html";
      break;
    case "design":
      navLink.href = "../designer.html";
      break;
    case "blog":
      navLink.href = "../blogs/blogs.html";
      break;
    case "photography":
      navLink.href = "../photography/photography.html";
      break;
    case "develop":
      navLink.href = "../developer.html";
      break;
    default:
      console.log("Unable to locate page to navigate to");
      break;
  }
}
