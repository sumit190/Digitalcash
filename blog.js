document.addEventListener('DOMContentLoaded', () => {
  fetch('posts.json')
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById('blog-posts');
      container.innerHTML = '';
      data.posts.forEach(post => {
        const div = document.createElement('div');
        div.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p>`;
        container.appendChild(div);
      });
    });
});
