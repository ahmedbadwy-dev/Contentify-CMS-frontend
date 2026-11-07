import { getUser } from './GetUser'

export function verifyToken() {
  const connectedUser = getUser()

  if (connectedUser?.token) {
    return {
      Accept: 'application/json',

      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + connectedUser?.token,
    }
  } else {
    return {
      Accept: 'application/json',
    }
  }
}
