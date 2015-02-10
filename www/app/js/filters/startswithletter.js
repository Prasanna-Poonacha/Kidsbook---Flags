kids.filter('startsWithLetter', function () {
    return function (items, letter,entity,index) {
        var filtered = [];
        var letterMatch = new RegExp(letter, 'i');
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (letterMatch.test(item[entity].substring(0, parseInt(index)))) {
                filtered.push(item);
            }
        }
        return filtered;
    };
});
