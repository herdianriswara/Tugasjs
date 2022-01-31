function comp(Huruf1, Huruf2) {
    if (Huruf1.lenght == Huruf2.lenght) {
        return true;
    }

    else {
        return false;
    }
}
console.log(comp("AB", "CD"));
console.log(comp("ABC", "DE"));
console.log(comp("hello", "edabit"));