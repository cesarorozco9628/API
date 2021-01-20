export default class Request {
    static getCategories() {
        return fetch('https://opentdb.com/api_category.php')
    }

}