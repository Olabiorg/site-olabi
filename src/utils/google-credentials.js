export const googleServiceAccount = {
  client_email: process.env.REACT_APP_GOOGLE_CLIENT_EMAIL,
  private_key: (process.env.REACT_APP_GOOGLE_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
  spreadsheet_id: process.env.REACT_APP_GOOGLE_SPREADSHEET_ID,
}
