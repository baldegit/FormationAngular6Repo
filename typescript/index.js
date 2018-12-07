class XMessageManager extends Array {
    create(value) {
        throw new Error("Method not implemented.");
    }
    clear() {
        throw new Error("Method not implemented.");
    }
    update(id) {
        throw new Error("Method not implemented.");
    }
    static getVersion() {
        return '1.0.0';
    }
    constructor() {
        super();
    }
    createMessage() {
        return { id: 1, text: '' };
    }
}
