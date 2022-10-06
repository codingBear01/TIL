const button = document.querySelector('button');

button.addEventListener('click', () => {
  Notification.requestPermission().then((perm) => {
    if (perm === 'granted') {
      const allowNoti = new Notification('example notification', {
        body: 'This is more text',
        data: { hello: 'world' },
        icon: 'pikachu.jpg',
      });

      allowNoti.addEventListener('click', (e) => {
        console.log(e);
      });
    } else {
      const deniedNoti = new Notification('example notification', {
        body: 'This is more text',
        data: { hello: 'world' },
        icon: 'pikachu.jpg',
      });

      deniedNoti.addEventListener('error', (e) => {
        alert('error');
      });
    }
  });
});
