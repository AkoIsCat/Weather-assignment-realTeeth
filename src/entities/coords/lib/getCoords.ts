export const getCoords = () => {
  return new Promise<[number, number]>((res, rej) => {
    if (!navigator.geolocation) {
      rej(new Error('NOT Supported'));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        res([position.coords.latitude, position.coords.longitude]);
      },
      (error) => rej(error)
    );
  });
};
