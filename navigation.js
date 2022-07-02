function navigateTo(pageName, foldersToTraverse) {
  let navLink = document.getElementById(pageName);
  let siteURL = setSiteURL(foldersToTraverse);

  switch (pageName) {
    case "home":
      navLink.href = siteURL + "index.html";
      break;
    case "about":
      navLink.href = siteURL + "about/about.html";
      break;
    case "design":
      navLink.href = siteURL + "design/designer.html";
      break;
    case "blog":
      navLink.href = siteURL + "blogs/blogs.html";
      break;
    case "photography":
      navLink.href = siteURL + "photography/photography.html";
      break;
    default:
      console.log("Unable to locate page to navigate to");
      break;
  }
}

function setSiteURL(foldersToTraverse) {
  let siteURLPrefix = "";

  if (foldersToTraverse == 0) {
    return siteURLPrefix;
  }

  for (let i = 0; i < foldersToTraverse; ++i) {
    siteURLPrefix += "../";
  }

  return siteURLPrefix;
}
