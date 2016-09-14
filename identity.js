//Identity function implementation using Y-combinator

function identity(max) {
    return (function(F) {
        return F(F, max)(0);
    })(function(F, max) {
        return (function (F, max) {
            return function(n) {
                if (n >= max) return n;
                return F(F, max)(n + 1);
            };
        })(F, max);
    });
}


console.log(identity(10));
