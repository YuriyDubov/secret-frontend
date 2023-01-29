import axios from 'axios';

function getBaseURL() {
    return `http://localhost:3000`
}

export async function getMessage(secretUrl: string): Promise<any> {
    const uri = `${getBaseURL()}/message/${secretUrl}`;
    const data = await axios.get(uri);
    return data.data || data;
}

export async function postMessage(message: string): Promise<any> {
    const uri = `${getBaseURL()}/message`;
    const body = {
        text: message
    }
    const data = await axios.post(uri, body, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
    return data.data || data;
}