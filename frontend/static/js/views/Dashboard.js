import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
        <h1>Welcome back, </h1>
        <p>
            Here you will find a a daily briefing of all your news.
        </p>
        <p>
            <a href="/posts" data-link>View recent posts</a>.
        </p>
        `;
    }
}