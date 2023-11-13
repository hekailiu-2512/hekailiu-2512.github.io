var posts=["2023/11/13/heli/","2023/11/13/hello-world - 副本/","2023/11/13/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };