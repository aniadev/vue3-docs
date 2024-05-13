import{_ as n,c as s,o as a,a as p}from"./app.8cbbbbb4.js";const o='{"title":"Tạo ứng dụng Vue","description":"","frontmatter":{},"headers":[{"level":2,"title":"Application instance","slug":"application-instance"},{"level":2,"title":"Component gốc","slug":"component-goc"},{"level":2,"title":"Mount một app","slug":"mount-mot-app"},{"level":3,"title":"Template cho component gốc trong DOM","slug":"template-cho-component-goc-trong-dom"},{"level":2,"title":"Cấu hình cho app","slug":"cau-hinh-cho-app"},{"level":2,"title":"Nhiều app instance cùng lúc","slug":"nhieu-app-instance-cung-luc"}],"relativePath":"guide/essentials/application.md"}',l={},t=[p('<h1 id="tao-ung-dung-vue" tabindex="-1">Tạo ứng dụng Vue <a class="header-anchor" href="#tao-ung-dung-vue" aria-hidden="true">#</a></h1><h2 id="application-instance" tabindex="-1">Application instance <a class="header-anchor" href="#application-instance" aria-hidden="true">#</a></h2><p>Mội ứng dụng Vue được khởi động bằng cách tạo một <strong>application instance</strong> (thực thể của ứng dụng, từ đây ta cũng gọi tắt là &quot;app instance&quot;) với hàm <a href="/api/application.html#createapp"><code>createApp</code></a>:</p><div class="language-js"><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">createApp</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> app </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createApp</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/* tùy chọn cho component gốc */</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"></span></code></pre></div><h2 id="component-goc" tabindex="-1">Component gốc <a class="header-anchor" href="#component-goc" aria-hidden="true">#</a></h2><p>Object mà ta đưa vào hàm <code>createApp</code> trên đây thực ra là một <em>component</em>. Mỗi app Vue yêu cầu một &quot;component gốc,&quot; component này có thể chứa các component con khác.</p><p>Nếu sử dụng Single-File Component, thường thì ta import component gốc từ một file khác:</p><div class="language-js"><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">createApp</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// import component gốc &quot;App&quot; từ một single-file component</span></span>\n<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> App </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./App.vue</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> app </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createApp</span><span style="color:#A6ACCD;">(App)</span></span>\n<span class="line"></span></code></pre></div><p>Tuy đa số các ví dụ trong hướng dẫn này chỉ cần một component, các app trong thực tế thường được sắp xếp thành một cây component lồng nhau và có thể tái sử dụng. Đơn cử, cây component của một app Todo có thể có dạng như sau:</p><div class="language-"><pre><code>App (component gốc)\n├─ TodoList\n│  └─ TodoItem\n│     ├─ TodoDeleteButton\n│     └─ TodoEditButton\n└─ TodoFooter\n   ├─ TodoClearButton\n   └─ TodoStatistics\n</code></pre></div><p>Trong các phần sau của hướng dẫn, chúng ta sẽ bàn về cách định nghĩa và soạn thảo nhiều component cùng lúc. Nhưng trước tiên, chúng ta sẽ tập trung vào những gì xảy ra bên trong một component đơn lẻ.</p><h2 id="mount-mot-app" tabindex="-1">Mount một app <a class="header-anchor" href="#mount-mot-app" aria-hidden="true">#</a></h2><p>Một app instance sẽ không render ra gì hết cho đến khi phương thức <code>.mount()</code> của nó được gọi. Phương thức này nhận vào một tham số &quot;container,&quot; là một phần tử DOM hoặc một selector:</p><div class="language-html"><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">app</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><div class="language-js"><pre><code><span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">mount</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#app</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"></span></code></pre></div><p>Nội dung của component gốc của một ứng dụng sẽ được render bên trong phần tử container. Phần tử container không được xem là một phần của app.</p><p>Bạn nên gọi phương thức <code>.mount()</code> sau khi cài đặt toàn bộ cấu hình và đăng kí các asset. Đồng thời, lưu ý rằng giá trị trả về của nó, không giống như các phương thức đăng kí asset, là một instance của component gốc thay vì của app.</p><h3 id="template-cho-component-goc-trong-dom" tabindex="-1">Template cho component gốc trong DOM <a class="header-anchor" href="#template-cho-component-goc-trong-dom" aria-hidden="true">#</a></h3><p>Khi sử dụng Vue mà không thông qua bước build, chúng ta có thể viết trực tiếp template (bản mẫu) cho component gốc bên trong container được mount:</p><div class="language-html"><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">app</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">count++</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">{{ count }}</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><div class="language-js"><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">createApp</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> app </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createApp</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">      count</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">mount</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#app</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"></span></code></pre></div><p>Vue sẽ tự động dùng <code>innerHTML</code> của container làm template nếu component gốc không có tùy chọn <code>template</code> sẵn.</p><h2 id="cau-hinh-cho-app" tabindex="-1">Cấu hình cho app <a class="header-anchor" href="#cau-hinh-cho-app" aria-hidden="true">#</a></h2><p>App instance có một object <code>.config</code>, cho phép chúng ta cấu hình một số các tùy chọn ở tầng app, ví dụ như định nghĩa một trình xử lí lỗi (error handler) để thu thập các lỗi được ném ra từ các component bên dưới:</p><div class="language-js"><pre><code><span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">config</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">errorHandler</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">err</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">/* xử lí lỗi */</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><p>App instance cũng cung cấp một số phương thức để đăng kí asset ở phạm vi app (app-scoped), ví dụ như đăng kí một component:</p><div class="language-js"><pre><code><span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">component</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">TodoDeleteButton</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> TodoDeleteButton)</span></span>\n<span class="line"></span></code></pre></div><p>Đoạn code trên đây đăng kí component <code>TodoDeleteButton</code> để sử dụng ở bất kì nơi nào trong app. Chúng ta sẽ bàn thêm về việc đăng kí component và các loại asset khác trong các phần sau của hướng dẫn này. Bạn cũng có thể xem danh sách đầy đủ của các instance API trong mục <a href="/api/application.html">tham chiếu API</a>.</p><p>Nhớ áp dụng toàn bộ các cấu hình cho app trước khi gọi <code>.mount()</code>!</p><h2 id="nhieu-app-instance-cung-luc" tabindex="-1">Nhiều app instance cùng lúc <a class="header-anchor" href="#nhieu-app-instance-cung-luc" aria-hidden="true">#</a></h2><p>API <code>createApp</code> cho phép nhiều app Vue tồn tại trên cùng một trang, mỗi app có phạm vi riêng dành cho cấu hình và asset toàn cục của app đó:</p><div class="language-js"><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> app1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createApp</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/* ... */</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"><span style="color:#A6ACCD;">app1</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">mount</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#container-1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> app2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createApp</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/* ... */</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"><span style="color:#A6ACCD;">app2</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">mount</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#container-2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"></span></code></pre></div><p>Nếu bạn đang sử dụng Vue để hỗ trợ thêm cho HTML render từ phía server (server-rendered HTML) và chỉ cần Vue điều khiển một số phạm vi cụ thể trên một trang web lớn, nên tránh việc sử dụng chỉ một app Vue cho toàn bộ trang. Thay vào đó, tạo nhiều app Vue riêng lẻ và mount các app này trên các phần tử DOM cần thiết.</p>',33)];var c=n(l,[["render",function(n,p,o,l,c,e){return a(),s("div",null,t)}]]);export{o as __pageData,c as default};
