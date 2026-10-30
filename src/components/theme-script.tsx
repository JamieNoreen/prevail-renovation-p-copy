// Inline script that sets the theme class on <html> before paint to avoid FOUC.
// Reads from localStorage; defaults to dark.
export function ThemeScript() {
  const code = `(function(){try{var t=localStorage.getItem('prevail-theme');if(t==='light'||t==='dark'){document.documentElement.classList.remove('dark','light');document.documentElement.classList.add(t);}else{document.documentElement.classList.add('dark');}}catch(e){document.documentElement.classList.add('dark');}})();`;
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
