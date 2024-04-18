import{o as A,i as t,t as M,p as e,b as N}from"./index-BvNjziax.js";var B=M('<div><h2 class="fw-bold mb-4">Install</h2><h5>Install from npm:</h5><ol><li><p>Run the following command in the terminal:</p><pre><code class=language-bash></code></pre></li><li><p>After installation, you can import the library into your project as follows:</p><pre><code class=language-javascript></code></pre></li><li><p>Or, since it also comes with an IIFE bundle, you can insert it directly into your HTML:</p><pre><code class=language-html></code></pre></li></ol><h5>Install from cdn:</h5><ol><li><p>Add the following script in the <code>&lt;head&gt;</code> tag of your HTML:</p><pre><code class=language-html></code></pre><p>Example:</p><pre><code class=language-html>');function F(){const l=`<script src="https://cdn.jsdelivr.net/npm/${e.name}@${e.version}/dist/${e.name}.min.js"><\/script>`,r=`npm install ${e.name}`,d=`import ${e.libName} from '${e.name}'`,c=`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Example</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@${e.devDependencies.bootstrap}/dist/css/bootstrap.min.css">
    <script src="node_modules/${e.name}/dist/${e.name}.min.js"><\/script>
  </head>
  <body>
    <button id="example" class="btn btn-primary" type="button">example</button>
    <script>
      document.getElementById('example').addEventListener('click', () => {
        ${e.libName}('Hello, world! This is a toast message.')
      })
    <\/script>
  </body>
</html>`,p=`${l}`,m=`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Example</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@${e.devDependencies.bootstrap}/dist/css/bootstrap.min.css">
    ${l}
  </head>
  <body>
    <button id="example" class="btn btn-primary" type="button">example</button>
    <script>
      document.getElementById('example').addEventListener('click', () => {
        ${e.libName}('Hello, world! This is a toast message.')
      })
    <\/script>
  </body>
</html>`;return A(()=>{N.highlightAll()}),(()=>{var i=B(),h=i.firstChild,b=h.nextSibling,n=b.nextSibling,s=n.firstChild,$=s.firstChild,g=$.nextSibling,f=g.firstChild,a=s.nextSibling,u=a.firstChild,_=u.nextSibling,x=_.firstChild,y=a.nextSibling,v=y.firstChild,C=v.nextSibling,w=C.firstChild,S=n.nextSibling,I=S.nextSibling,E=I.firstChild,j=E.firstChild,o=j.nextSibling,k=o.firstChild,H=o.nextSibling,L=H.nextSibling,T=L.firstChild;return t(f,r),t(x,d),t(w,c),t(k,p),t(T,m),i})()}export{F as default};
