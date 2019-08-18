const exObject = {
    first: 'erik',
    last: 'gardea',
    fullName() {
        return `${this.first} ${this.last}`
    }
}

console.log(exObject.fullName());