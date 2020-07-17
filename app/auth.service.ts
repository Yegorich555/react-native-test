export class AuthService {
  signIn(name: string, password: string): Promise<string> {
    return new Promise((resolve, reject) =>
      setTimeout(() => {
        if (name.toLowerCase() === 'itechart' && password === 'admin') {
          resolve(
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
            //token in HS256
          );
        } else {
          reject(new Error('credintials are invalid'));
        }
      }, 1000),
    );
  }
}

const authService = new AuthService();
export default authService;
