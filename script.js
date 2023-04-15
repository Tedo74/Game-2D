window.addEventListener('load', () => {
    const scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
      );
    const canvas1 = document.getElementById('canvas1');
    const ctx = canvas1.getContext('2d');
    canvas1.width = document.body.clientWidth;
    canvas1.height = scrollHeight;
    const ufo = document.getElementById('ufo')
});