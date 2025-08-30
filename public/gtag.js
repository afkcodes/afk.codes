// Initialize Google Analytics gtag
window.dataLayer = window.dataLayer || [];
function gtag(){
  dataLayer.push(arguments);
}
window.gtag = gtag;
gtag('js', new Date());
gtag('config', 'G-00ZDLV4JQ0', {
  page_title: document.title,
  page_location: window.location.href
});
