import { createUseI18n } from 'keycloakify/login';

export const { useI18n } = createUseI18n({
  // NOTE: Here you can override the default i18n messages
  // or define new ones that, for example, you would have
  // defined in the Keycloak admin UI for UserProfile
  // https://user-images.githubusercontent.com/6702424/182050652-522b6fe6-8ee5-49df-aca3-dba2d33f24a5.png
  en: {
    alphanumericalCharsOnly: 'Only alphanumerical characters',
    gender: 'Gender',
    // Here we overwrite the default english value for the message "doForgotPassword"
    // that is "Forgot Password?" see: https://github.com/InseeFrLab/keycloakify/blob/f0ae5ea908e0aa42391af323b6d5e2fd371af851/src/lib/i18n/generated_messages/18.0.1/login/en.ts#L17
    doForgotPassword: 'I forgot my password',
    invalidUserMessage: 'Invalid username or password. (this message was overwrite in the theme)',
    doLogInTitle: 'Welcome back, Compania de Apă SA',
    doLoginSubtitle: 'Connect to Aqviser',
    userNamePlaceholder: 'Username',
    passwordPlaceholder: 'Password',
    keepMeLoggedIn: 'Keep me logged in',
    doLogIn: 'Log in',
    copyrigth: '© 2023 AQviser. All rights reserved.',
    politics: 'Privacy Policy',
  },
  ro: {
    /* spell-checker: disable */
    alphanumericalCharsOnly: 'Doar caractere alfanumerice',
    gender: 'Gen',
    doForgotPassword: 'Am uitat parola',
    invalidUserMessage: 'Nume de utilizator sau parolă invalidă. (acest mesaj a fost suprascris în temă)',
    /* spell-checker: enable */
    doLogInTitle: 'Bine ai revenit,<br> Compania de Apă SA',
    doLoginSubtitle: 'Conectează-te la Aqviser',
    userNamePlaceholder: 'Nume utilizator',
    passwordPlaceholder: 'Parolă',
    keepMeLoggedIn: 'Păstrează-mă logat',
    doLogIn: 'Log in',
    copyrigth: '© 2023 AQviser. Toate drepturile rezervate.',
    politics: 'Politica de confidențialitate',
  },
});

export type I18n = NonNullable<ReturnType<typeof useI18n>>;