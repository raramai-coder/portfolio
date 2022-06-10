function navigateTo(pageName) {
  let navLink = document.getElementById(pageName);
  let siteURL = "portfolio";
  //let siteURL = "";

  switch (pageName) {
    case "home":
      navLink.href = siteURL + "/index.html";
      break;
    case "about":
      navLink.href = siteURL + "/about.html";
      break;
    case "design":
      navLink.href = siteURL + "/designer.html";
      break;
    case "blog":
      navLink.href = siteURL + "/blogs/blogs.html";
      break;
    case "photography":
      navLink.href = siteURL + "/photography/photography.html";
      break;
    case "develop":
      navLink.href = siteURL + "/developer.html";
      break;
    default:
      console.log("Unable to locate page to navigate to");
      break;
  }
}
