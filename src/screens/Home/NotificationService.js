const sendSingleDeviceNotification = data => {
  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append(
    'Authorization',
    'key=AAAAhLg5uC8:APA91bHJJFEBin1SIrj4bo6rZ0Nm-wwR20gk5xZt1C16IS566RwcU8W0EwcRIcKf4SOXMm6oIeDB96HAlz3SoRYLZqzHBFwVg8QLsuzX4LHgyeSj-oMfX3vjbBa56-DoEivIg8GGhKRD',
  );

  var raw = JSON.stringify({
    data: {},
    notification: {
      body: data.body,
      title: data.title,
    },
    to: data.token,
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  fetch('https://fcm.googleapis.com/fcm/send', requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
};

const sendMultiDeviceNotification = data => {
  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append(
    'Authorization',
    'key=AAAAhLg5uC8:APA91bHJJFEBin1SIrj4bo6rZ0Nm-wwR20gk5xZt1C16IS566RwcU8W0EwcRIcKf4SOXMm6oIeDB96HAlz3SoRYLZqzHBFwVg8QLsuzX4LHgyeSj-oMfX3vjbBa56-DoEivIg8GGhKRD',
  );

  var raw = JSON.stringify({
    data: {},
    notification: {
      body: data.body,
      title: data.title,
    },
    registration_ids: data.token,
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  fetch('https://fcm.googleapis.com/fcm/send', requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
};

export default {
  sendSingleDeviceNotification,
  sendMultiDeviceNotification,
};
