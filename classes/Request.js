
export default class Request {
    static getCategories() {
        return fetch('https://opentdb.com/api_category.php')
    }
    // solo para ver si sirve =)
    static getQuestions() {
        // const result = this.getFilters();
        const [amount, category, difficulty, type] = this.getFilters();
        return fetch(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`);
    }
    static getFilters() {
        const totalQuestions = document.getElementById('total-questions').value;
        const category = document.getElementById('categories').value;
        const difficulty = document.getElementById('difficulty').value;
        const type = document.getElementById('type').value;
        return [totalQuestions, category, difficulty, type];
    }
    
}