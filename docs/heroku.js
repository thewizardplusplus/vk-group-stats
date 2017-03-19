function replace_emails(old_email, new_email = 'thewizardplusplus@yandex.ru') {
  Array.prototype.slice.call(document.querySelectorAll('*'))
    .filter(node => node.childNodes.length > 0)
    .forEach(node => {
      Array.prototype.slice.call(node.childNodes)
        .filter(node => node.nodeType === 3)
        .forEach(node => {
          node.nodeValue = node.nodeValue.replace(old_email, new_email)
        })
    })
}
