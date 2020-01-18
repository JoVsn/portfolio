export const RECEIVE_APTITUDES = 'RECEIVE_APTITUDES';

export const receiveAptitudes = aptitudes => {
    return {
        type: RECEIVE_APTITUDES,
        aptitudes
    }
}

