export class GoogleService {
  public static loadUser = async (token: string) => {
    return await fetch(
      'https://www.googleapis.com/userinfo/v2/me',
      { headers: { Authorization: `Bearer ${token}`}}
    )
  }
}
