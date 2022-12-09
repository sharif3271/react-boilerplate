
export class JwtHelper {
    static isExpired (token: string) {
        const [_, body, __] = token.replace('Bearer ', '').split('.');
        if (!body) {
            return true;
        }
        let decodedData: {exp: number};
        try {
            decodedData = JSON.parse(atob(body));
        } catch (e) {
            return true;
        }
        return decodedData.exp * 1000 <= new Date().getTime();
    }
}