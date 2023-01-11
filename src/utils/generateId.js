// generate an id with a random alphabetic string and the date now
export default function generateId() {
    return Math.random().toString(36).substring(2, 15) + Date.now()
    }
    