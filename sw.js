self.addEventListener('push', (event) => {
  const options = {
      body: 'This is a push notification!',
      icon: '/icon.png', // Optional: Path to an icon
      vibrate: [200, 100, 200], // Optional: Vibration pattern
  };

  event.waitUntil(
      self.registration.showNotification('Did you get this?', options)
  );
});
