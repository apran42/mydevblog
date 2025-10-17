document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("pre > code").forEach((codeBlock) => {
    const button = document.createElement("button");
    button.className = "copy-button";
    button.type = "button";
    button.innerText = "Copy";

    codeBlock.parentNode.style.position = "relative";
    codeBlock.parentNode.appendChild(button);

    button.addEventListener("click", () => {
      const text = codeBlock.innerText;
      navigator.clipboard.writeText(text).then(() => {
        button.innerText = "Copied!";
        setTimeout(() => {
          button.innerText = "Copy";
        }, 1500);
      });
    });
  });
});
