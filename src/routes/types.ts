export type RootStackParamList = {
  LANDING_SCREEN: undefined
  AUTHENTICATION_SCREEN: { phoneNumber: string }
  TERMS_SCREEN: { phoneNumber: string }
  SIGN_UP_SCREEN: { phoneNumber: string }
  TAB_NAVIGATOR: undefined
  STACK_NAVIGATOR: undefined
  NOTIFICATIONS_SCREEN: undefined
  HOME_SCREEN: undefined
  HELP_SCREEN: undefined
  NEW_SCHEDULE_SCREEN: undefined
  MY_PROFILE_SCREEN: undefined
  PROFILE_SCREEN: { id: string, name: string, phoneNumber: string, birthDate: string, avatar?: string }
  EDIT_PROFILE_SCREEN: undefined
  LOGGED_NAVIGATOR: undefined
  SEARCH_SCREEN: undefined
  SCHEDULE_SCREEN: { id?: string, category: string, date: string, users?: string[] }
};
