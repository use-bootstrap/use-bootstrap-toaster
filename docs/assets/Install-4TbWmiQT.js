import{o as T,i as t,t as A,p as e,b as M}from"./index-Bvu7e9Jc.js";var N=A('<div><h2 class="fw-bold mb-4">Install</h2><h5>Install from npm:</h5><ol><li><p>Run the following command in the terminal:</p><pre><code class=language-bash></code></pre></li><li><p>After installation, you can import the library into your project as follows:</p><pre><code class=language-javascript></code></pre></li><li><p>Or, since it also comes with an IIFE bundle, you can insert it directly into your HTML:</p><pre><code class=language-html></code></pre></li></ol><h5>Install from cdn:</h5><ol><li><p>Add the following script in the <code>&lt;head&gt;</code> tag of your HTML:</p><pre><code class=language-html></code></pre><p>Example:</p><pre><code class=language-html>');function F(){const l=`<script src="https://cdn.jsdelivr.net/npm/${e.name}@${e.version}/dist/${e.name}.min.js"><\/script>`,r=`npm install ${e.name}`,d=`import ${e.libName} from '${e.name}'`,p=`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Example</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@${e.devDependencies.bootstrap}/dist/css/bootstrap.min.css">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@${e.devDependencies.bootstrap}/dist/js/bootstrap.bundle.min.js"><\/script>
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
</html>`,c=`${l}`,m=`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Example</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@${e.devDependencies.bootstrap}/dist/css/bootstrap.min.css">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@${e.devDependencies.bootstrap}/dist/js/bootstrap.bundle.min.js"><\/script>
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
</html>`;return T(()=>{M.highlightAll()}),(()=>{var i=N(),h=i.firstChild,b=h.nextSibling,s=b.nextSibling,n=s.firstChild,$=n.firstChild,g=$.nextSibling,u=g.firstChild,o=n.nextSibling,f=o.firstChild,_=f.nextSibling,x=_.firstChild,y=o.nextSibling,v=y.firstChild,C=v.nextSibling,j=C.firstChild,w=s.nextSibling,S=w.nextSibling,I=S.firstChild,E=I.firstChild,a=E.nextSibling,k=a.firstChild,D=a.nextSibling,H=D.nextSibling,L=H.firstChild;return t(u,r),t(x,d),t(j,p),t(k,c),t(L,m),i})()}export{F as default};
