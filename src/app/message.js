export class Messsage {
  static create(message) {
    return fetch('https://easychatmk1.firebaseio.com/messages.json',{
        method:'POST',
        body: JSON.stringify(message),
          headers: {
            'Content-Type': 'application/json',
          }
    })
      .then(response => response.json())
      .then(response => {
        return message
      })
  }
}
