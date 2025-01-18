const API_TOKEN_URL = process.env.REACT_APP_API_TOKEN_URL;

const API_CATEGORY_URL = process.env.REACT_APP_API_CATEGORY_URL;

const API_COUNT_URL = process.env.REACT_APP_API_COUNT_URL;

const API_URL = process.env.REACT_APP_API_URL;

class QuizApi {
    async generateSessionToken() {
        const res = await fetch(API_TOKEN_URL);
        return (await res.json()).token;
    }
    async getQuizCategories() {
        const res = await fetch(API_CATEGORY_URL);
        return (await res.json())["trivia_categories"];
    }

    async fetchQuestions(categoryId, amount) {
        const type = "&type=multiple";
        const url = `${API_URL}?amount=${amount}&category=${categoryId}${type}`;
        const res = await fetch(url);
        return (await res.json()).results;
    }
}

const QUIZ_API = new QuizApi();

export default QUIZ_API;
