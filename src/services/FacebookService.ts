export class FacebookService {
  public static loadUser = async (token: string) => {
    return await fetch(
      `https://graph.facebook.com/me?access_token=${token}&fields=id,first_name,picture.type(large)`,
    )
  }
}
