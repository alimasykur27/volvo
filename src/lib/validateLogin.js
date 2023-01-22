import Session from "./session";

export default function ValidateLogin(req) {
  const token = req.cookies['token']
  return (Session.prototype.token == token)
}