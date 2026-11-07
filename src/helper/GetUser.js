export function getUser() {
  const dataUser = localStorage.getItem('userData')
  if (typeof dataUser !== 'object') {
    const connectedUser = JSON.parse(dataUser)
    return connectedUser
  }
}
