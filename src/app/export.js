export class Chat {
  static download(message) {
    return fetch('https://easychatmk1.firebaseio.com/messages.json')
      .then(response => response.json())
      }
  }


