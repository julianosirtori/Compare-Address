export default function getCurrentPosition(callback) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      callback(latitude, longitude);
    },
    (err) => {
      console.log(err);
    },
    {
      timeout: 30000,
    },
  );
}
