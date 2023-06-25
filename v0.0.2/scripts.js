const shinobu = {

  onError: (err) => console.error(err),

  purifyHTML: async (HTML) => HTML,
  
};

const ShinobuApp = async ({ 

  o = null, 
  lazy = null, 
  html = null,
  dynamicHtml = null, 
  props = {}, 
  dynamicProps = async () => {}, 
  funcs = {},
  
  }) => {

  if (!o) {
    shinobu.onError('No o given >~<');
    return;
  }

  if (lazy) {
    o.innerHTML = lazy;
  }

  if (!html || !dynamicHtml) {
    shinobu.onError('No html or dynamicHtml  given >~<');
    return;
  }
  
  if (dynamicProps) {
    dynamicProps = await dynamicProps();
  }

  if (dynamicHtml) {
    html = await dynamicHtml(props, dynamicProps);
  }
  
  const pureHTML = await shinobu.purifyHTML(html);
  o.innerHTML = pureHTML;

  if (!funcs) {
    return;
  }

  if (funcs.onload) {
    funcs.onload();
  }
  
};

const o = (q) => donut.querySelector(q);