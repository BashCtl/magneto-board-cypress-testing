class RandomData {
    getEmail(): string {
        const min = Math.ceil(1)
        const max = Math.floor(10000)
        const random = Math.floor(Math.random() * (max - min + 1)) + min
        return `test.test${random}@mail.com`
    }
}

export default new RandomData()