function handleKey(e) {
  const key = (typeof e.key === 'string' && e.key.length > 0)
    ? e.key
    : String.fromCharCode(e.which || e.keyCode || 0);

  console.log(encodeURIComponent(key));
}

if (document.addEventListener) {
  document.addEventListener('keypress', handleKey, false);
} else if (document.attachEvent) { 
  document.attachEvent('onkeypress', handleKey);
}